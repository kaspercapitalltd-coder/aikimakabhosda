export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'user' | 'admin' | 'operative'
export type UserTier = 'intel' | 'alpha' | 'terminal'
export type UserStatus = 'active' | 'suspended' | 'pending'
export type SignalType = 'BUY' | 'SELL'
export type SignalStatus = 'ACTIVE' | 'COMPLETED' | 'CANCELLED'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: UserRole
          tier: UserTier
          status: UserStatus
          metadata: Json
        }
        Insert: {
          id: string
          updated_at?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: UserRole
          tier?: UserTier
          status?: UserStatus
          metadata?: Json
        }
        Update: {
          id?: string
          updated_at?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: UserRole
          tier?: UserTier
          status?: UserStatus
          metadata?: Json
        }
      }
      signals: {
        Row: {
          id: string
          created_at: string
          pair: string
          type: SignalType
          entry: string
          sl: string
          targets: string
          result: string | null
          pnl: string | null
          status: SignalStatus
          required_tier: UserTier
          published_by: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          pair: string
          type: SignalType
          entry: string
          sl: string
          targets: string
          result?: string | null
          pnl?: string | null
          status?: SignalStatus
          required_tier?: UserTier
          published_by?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          pair?: string
          type?: SignalType
          entry?: string
          sl?: string
          targets?: string
          result?: string | null
          pnl?: string | null
          status?: SignalStatus
          required_tier?: UserTier
          published_by?: string | null
        }
      }
      subscriptions: {
        Row: {
          id: string
          user_id: string | null
          tier: UserTier
          status: string | null
          created_at: string
          expires_at: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          tier: UserTier
          status?: string | null
          created_at?: string
          expires_at: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          tier?: UserTier
          status?: string | null
          created_at?: string
          expires_at?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: UserRole
      user_tier: UserTier
      user_status: UserStatus
      signal_type: SignalType
      signal_status: SignalStatus
    }
  }
}
