import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null;

/**
 * Standard Supabase client for client-side and authenticated server-side operations.
 * Uses the anonymous key and respects Row Level Security (RLS).
 */
export const getSupabase = () => {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a dummy client or handle gracefully if called during build
    // This allows components to import this without crashing the whole app
    console.warn('Supabase credentials missing. Client initialization deferred.');
    return {} as ReturnType<typeof createClient<Database>>;
  }

  supabaseInstance = createClient<Database>(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

// Deprecated direct export to maintain compatibility with existing components
// but initialized lazily via a getter if possible, or just export the getter
export const supabase = typeof window !== 'undefined' ? getSupabase() : {} as ReturnType<typeof createClient<Database>>;

/**
 * Superuser Supabase client for administrative tasks.
 * bypasses RLS - USE WITH EXTREME CAUTION.
 * Only available on the server side.
 */
export const getSupabaseAdmin = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Supabase URL or Service Role Key missing')
  }
  
  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}
