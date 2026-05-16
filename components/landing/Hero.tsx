"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gold-primary/5 blur-[160px] rounded-full pointer-events-none"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-gold-accent/5 blur-[160px] rounded-full pointer-events-none"
      ></motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center pb-24"
      >
        <motion.div
           variants={itemVariants}
           className="mb-8 p-1.5 px-5 bg-gold-primary/10 border border-gold-primary/20 rounded-full flex items-center gap-3 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse shadow-[0_0_12px_rgba(198,169,114,0.6)]"></span>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-light font-bold">Encrypted Intel Protocol Online</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-9xl font-bold uppercase tracking-tight text-white mb-10 leading-[0.85] filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          Institutional <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-primary to-gold-dark">
            Intelligence.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-text-muted max-w-2xl text-base md:text-xl leading-relaxed tracking-[0.4em] mb-14 uppercase"
        >
          Decrypt the market's internal mechanics with zero-latency precision. High-frequency signals for elite operatives.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-8 w-full max-w-lg mb-24"
        >
          <Button asChild variant="luxury" size="xl" className="rounded-full flex-1">
            <Link href="/login">Establish Clearance</Link>
          </Button>
          <Button asChild variant="darkGlass" size="xl" className="rounded-full flex-1">
            <Link href="#pricing">View Memberships</Link>
          </Button>
        </motion.div>

        {/* Dashboard Preview Overlay */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0,
              scale: 1,
              transition: { duration: 1.4, delay: 1 }
            }
          }}
          className="relative w-full max-w-5xl mx-auto glass-panel rounded-t-[3rem] border-b-0 p-6 pb-0 shadow-[0_-40px_80px_rgba(212,175,55,0.15)]"
        >
          <div className="bg-background-tertiary rounded-t-2xl border border-border-secondary/50 overflow-hidden relative">
            <div className="h-10 bg-black/50 border-b border-border-secondary/30 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              <div className="ml-4 text-[10px] text-text-muted uppercase tracking-widest">t-guru_intel_terminal.exe</div>
            </div>
            <div className="aspect-video bg-[url('https://picsum.photos/seed/trading/1200/800')] bg-cover bg-center mix-blend-luminosity opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
              <div className="text-center space-y-4">
                 <p className="text-gold-accent text-3xl font-mono tracking-widest">+92% PRECISION</p>
                 <p className="text-xs text-text-muted uppercase tracking-[0.4em]">Monitoring Institutional Liquidity...</p>
                 <div className="flex gap-4 justify-center">
                    <div className="w-32 h-1 bg-border-secondary rounded-full overflow-hidden">
                       <div className="h-full bg-gold-primary w-2/3 animate-pulse"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
