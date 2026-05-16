"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Copy, ShieldCheck, AlertCircle } from "lucide-react"
import Navbar from "@/components/layout/navbar"

export default function CheckoutPage() {
  const upiId = "mahirkureshi78-1@okhdfcbank"
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center p-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-xl glass-panel p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent"></div>
          
          <div className="flex flex-col items-center text-center mb-10">
            <Image 
              src="https://i.ibb.co/bgpv5f8G/122151.png" 
              alt="The Capital Guru" 
              width={64} 
              height={64} 
              className="mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-3xl font-bold uppercase tracking-widest text-white mb-2">Institutional Clearance</h2>
            <p className="text-text-muted text-xs uppercase tracking-[0.2em]">Cryptographic Activation Required</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center">
               <div className="p-3 bg-white rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] mb-4">
                  <Image 
                    src="https://i.ibb.co/B2KZGrZR/UPI-QR.png" 
                    alt="UPI QR Code" 
                    width={200} 
                    height={200} 
                    className="rounded-xl"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Secure Scan Terminal</p>
            </div>

            <div className="flex flex-col justify-center space-y-8">
               <div className="space-y-3">
                  <p className="text-[10px] text-gold-primary uppercase tracking-[0.3em] font-bold">Official UPI Endpoint</p>
                  <div className="flex items-center justify-between bg-black border border-border-secondary p-4 rounded-xl group hover:border-gold-primary/50 transition-all transition-colors shadow-2xl">
                    <span className="text-sm font-mono text-text-primary px-2">{upiId}</span>
                    <Button size="icon" variant="ghost" onClick={handleCopy} className="h-10 w-10 text-gold-primary hover:bg-gold-primary/10">
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="flex items-start gap-3">
                     <AlertCircle className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                     <p className="text-[10px] text-text-secondary leading-loose">
                        ENSURE THE UPI ID MATCHES EXACTLY BEFORE EXECUTING THE TRANSFER. ACTIVATION IS SYNCHRONOUS UPON UTR VERIFICATION.
                     </p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="block text-center p-6 border border-dashed border-gold-primary/30 rounded-xl cursor-pointer hover:bg-gold-primary/5 transition-all group">
                       <input type="file" className="hidden" />
                       <span className="text-[10px] text-gold-primary uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors">
                          Click to Upload Transfer Screenshot
                       </span>
                    </label>
                    <Button variant="luxury" className="w-full h-14 uppercase tracking-widest text-xs font-bold">Initialize Verification</Button>
                  </div>
               </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border-secondary/30 flex items-center justify-between">
             <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gold-primary" />
                <span className="text-[10px] uppercase tracking-widest text-text-muted">Bank-Grade Security Encryption</span>
             </div>
             <div className="flex gap-4">
                <Image src="https://i.ibb.co/V0BSDrW3/TELEGRAM.png" alt="Telegram" width={20} height={20} className="opacity-50 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
             </div>
          </div>
        </motion.div>

        <p className="mt-8 text-text-muted text-[10px] uppercase tracking-[0.5em]">T-GURU :: SECURE PAYMENT BRIDGE v4.0</p>
      </main>
    </div>
  )
}
