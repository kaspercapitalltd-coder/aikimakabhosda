"use client"

import { useActionState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

const initialState = {
  message: "",
  error: false
}

// Dummy action just to prevent errors
const login = async () => { return initialState }

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState)

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-sm glass-panel p-8 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
        
        <div className="flex flex-col items-center mb-8">
           <Image 
              src="https://i.ibb.co/bgpv5f8G/122151.png" 
              alt="The Capital Guru" 
              width={48} 
              height={48} 
              className="mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
              referrerPolicy="no-referrer"
           />
           <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">Registry Access</h2>
           <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Authorized Operatives Only</p>
        </div>
        
        <form action={formAction} className="space-y-4">
          <div className="space-y-2 text-left">
            <label className="text-xs uppercase tracking-widest text-text-muted" htmlFor="email">Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full mx-auto bg-black border border-border-secondary rounded text-white px-3 py-2 text-sm focus:outline-none focus:border-gold-primary transition-colors"
            />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-xs uppercase tracking-widest text-text-muted" htmlFor="password">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="w-full mx-auto bg-black border border-border-secondary rounded text-white px-3 py-2 text-sm focus:outline-none focus:border-gold-primary transition-colors"
            />
          </div>
          
          {state?.message && (
            <p className="text-xs text-red-500 font-mono mt-2" aria-live="polite">
              {state.message}
            </p>
          )}

          <div className="pt-4 flex flex-col gap-3">
            <Button disabled={pending} type="submit" variant="luxury" className="w-full justify-center">
              {pending ? 'Authenticating...' : 'Submit Clearance'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
