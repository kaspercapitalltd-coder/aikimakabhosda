"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-panel border-x-0 border-t-0"
    >
      <Link href="/" className="flex items-center gap-4 group">
        <div className="relative">
          <div className="absolute inset-0 bg-gold-primary/20 blur-md rounded-full group-hover:bg-gold-primary/40 transition-colors"></div>
          <Image 
            src="https://i.ibb.co/bgpv5f8G/122151.png" 
            alt="The Capital Guru" 
            width={36} 
            height={36} 
            className="relative z-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold uppercase tracking-[0.5em] text-white leading-none">
            THE CAPITAL
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.8em] text-gold-primary mt-1.5 leading-none">
            GURU
          </span>
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {['Intelligence', 'Edge', 'Signal', 'Pricing', 'FAQ'].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-xs uppercase tracking-widest text-text-muted hover:text-gold-primary transition-colors font-medium"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className="text-xs uppercase tracking-widest text-text-muted hover:text-white transition-colors font-medium">
          Login
        </Link>
        <Button asChild variant="luxury" size="sm">
          <Link href="/login">Apply Now</Link>
        </Button>
      </div>
    </motion.nav>
  )
}
