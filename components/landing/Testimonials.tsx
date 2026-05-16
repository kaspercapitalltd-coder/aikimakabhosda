"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote, Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Vikram Sethi",
      role: "High-Net-Worth Individual",
      image: "https://picsum.photos/seed/trader1/200/200",
      content: "The transformation wasn't just in my P&L, but in my psychological approach. The Guru's selective filtering saved me from overtrading and taught me institutional patience.",
      metric: "+140% Annual Yield"
    },
    {
      name: "Ananya Sharma",
      role: "Prop Firm Trader",
      image: "https://picsum.photos/seed/trader2/200/200",
      content: "I've tried every 'guru' out there. This is different. This is a system. The discipline notes and RR-focused execution changed how I look at market liquidity forever.",
      metric: "Consistency Rating: Elite"
    },
    {
      name: "Rohan Malhotra",
      role: "Institutional Analyst",
      image: "https://picsum.photos/seed/trader3/200/200",
      content: "As someone who understands the internal mechanics of banks, I can confirm the Guru's signals track real institutional flow. The precision entries are second to none.",
      metric: "Risk Management: Optimized"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gold-primary uppercase tracking-[0.4em] mb-4">Network Echoes</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Member Transformations.</h3>
          <p className="text-text-muted mt-4 uppercase tracking-widest text-[10px]">Voices from the Elite Operative Network</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-3xl relative group hover:border-gold-primary/40 transition-all"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold-primary/10 border border-gold-primary/20 rounded-full flex items-center justify-center text-gold-primary backdrop-blur-xl">
                 <Quote className="w-5 h-5" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gold-primary/30 p-1">
                   <Image 
                    src={t.image} 
                    alt={t.name} 
                    fill 
                    className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div>
                   <h4 className="text-white font-bold uppercase tracking-widest text-sm">{t.name}</h4>
                   <p className="text-gold-primary/70 text-[10px] uppercase tracking-wider">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-gold-primary text-gold-primary" />
                ))}
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-8 italic">
                &quot;{t.content}&quot;
              </p>

              <div className="pt-6 border-t border-border-secondary/30 flex items-center justify-between">
                 <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold">Verified Result:</span>
                 <span className="text-xs text-gold-accent font-mono font-bold tracking-tighter">{t.metric}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
