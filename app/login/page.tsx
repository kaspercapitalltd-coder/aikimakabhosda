"use client"
export const dynamic = 'force-dynamic'

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { login, signup } from "@/app/auth/actions"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setPending(true)
    setError(null)
    
    const action = isLogin ? login : signup
    const result = await action(formData)
    
    if (result?.error) {
      setError(result.message)
      toast.error(result.message)
    } else if (result?.message) {
      toast.success(result.message)
    }
    
    setPending(false)
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md glass-panel p-10 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
        
        <div className="flex flex-col items-center mb-10">
           <Image 
              src="https://i.ibb.co/bgpv5f8G/122151.png" 
              alt="The Capital Guru" 
              width={64} 
              height={64} 
              className="mb-6 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              referrerPolicy="no-referrer"
           />
           <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-white">
             {isLogin ? "Registry Access" : "Protocol Enrollment"}
           </h2>
           <p className="text-[10px] text-text-muted uppercase tracking-[0.4em] mt-3">
             {isLogin ? "Authorized Operatives Only" : "Establish New Clearance Node"}
           </p>
        </div>
        
        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-3 text-left">
            <label className="text-[10px] uppercase tracking-[0.3em] text-text-muted ml-1" htmlFor="email">Node Identity (Email)</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full bg-background-secondary border border-border-secondary/50 rounded-lg text-white px-4 py-3 text-sm focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/20 transition-all font-mono"
              placeholder="operator@intel.node"
            />
          </div>
          <div className="space-y-3 text-left">
            <label className="text-[10px] uppercase tracking-[0.3em] text-text-muted ml-1" htmlFor="password">Security Cipher (Password)</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="w-full bg-background-secondary border border-border-secondary/50 rounded-lg text-white px-4 py-3 text-sm focus:outline-none focus:border-gold-primary/50 focus:ring-1 focus:ring-gold-primary/20 transition-all font-mono"
              placeholder="••••••••"
            />
          </div>
          
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-2 bg-red-500/5 p-2 border border-red-500/20 rounded"
            >
              {error}
            </motion.p>
          )}

          <div className="pt-4 flex flex-col gap-4">
            <Button disabled={pending} type="submit" variant="luxury" size="lg" className="w-full justify-center py-6 text-sm">
              {pending ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                  Processing...
                </span>
              ) : (
                isLogin ? 'Establish Connection' : 'Enroll in Protocol'
              )}
            </Button>
            
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] uppercase tracking-[0.3em] text-text-muted hover:text-gold-primary transition-colors py-2"
            >
              {isLogin ? "No Clearance? Request Enrollment" : "Already Registered? Authentication Gate"}
            </button>
          </div>
        </form>
      </div>
      
      <p className="mt-12 text-[10px] text-text-muted/30 uppercase tracking-[0.5em] font-mono">
        Encrypted Endpoint: {typeof window !== 'undefined' ? window.location.hostname : 'THE_CAPITAL_GURU'}
      </p>
    </div>
  )
}
