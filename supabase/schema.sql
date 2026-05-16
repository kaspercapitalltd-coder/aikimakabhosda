-- SUPABASE SCHEMA - THE CAPITAL GURU
-- EXECUTE THIS IN THE SUPABASE SQL EDITOR

-- 1. Custom Types (Enums)
CREATE TYPE user_role AS ENUM ('user', 'admin', 'operative');
CREATE TYPE user_tier AS ENUM ('intel', 'alpha', 'terminal');
CREATE TYPE user_status AS ENUM ('active', 'suspended', 'pending');
CREATE TYPE signal_type AS ENUM ('BUY', 'SELL');
CREATE TYPE signal_status AS ENUM ('ACTIVE', 'COMPLETED', 'CANCELLED');

-- 2. Profiles Table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'user'::user_role,
  tier user_tier DEFAULT 'intel'::user_tier,
  status user_status DEFAULT 'active'::user_status,
  metadata JSONB DEFAULT '{}'::jsonb
);

-- 3. Signals Table
CREATE TABLE public.signals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  pair TEXT NOT NULL, -- e.g., 'BANKNIFTY OPT'
  type signal_type NOT NULL,
  entry TEXT NOT NULL,
  sl TEXT NOT NULL,
  targets TEXT NOT NULL,
  result TEXT,
  pnl TEXT,
  status signal_status DEFAULT 'ACTIVE'::signal_status,
  required_tier user_tier DEFAULT 'intel'::user_tier,
  published_by UUID REFERENCES public.profiles(id)
);

-- 4. Subscriptions Table
CREATE TABLE public.subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  tier user_tier NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT
);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.signals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- 6. RLS Policies

-- PROFILES
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- SIGNALS
CREATE POLICY "Users can view signals if they have required tier"
  ON public.signals FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() 
      AND (
        role = 'admin' 
        OR tier >= required_tier 
        OR status = 'COMPLETED' -- Allow viewing past signals
      )
    )
  );

CREATE POLICY "Operatives and Admins can manage signals"
  ON public.signals FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND (role = 'admin' OR role = 'operative')
    )
  );

-- SUBSCRIPTIONS
CREATE POLICY "Users can view their own subscriptions"
  ON public.subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- 7. Triggers for Automatic Profile Creation
-- This function creates a profile record when a new user signs up in auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
