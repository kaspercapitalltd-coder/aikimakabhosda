import { motion } from "framer-motion"
import { Check, ShieldCheck, Zap, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Tactical Monthly",
      price: "₹2,499",
      duration: "PER MONTH",
      features: [
        "Full Index Intelligence",
        "Commodity Coverage",
        "Terminal Signal Bridge",
        "Risk Psychology Notes",
        "Standard Execution Speed"
      ],
      cta: "Initialize Access",
      popular: false
    },
    {
      name: "Strategic Blueprint",
      price: "₹11,999",
      duration: "SIX MONTHS",
      features: [
        "All Tactical Features",
        "Priority Support Bridge",
        "Advanced Risk Modeling",
        "Community Access",
        "Institutional Filter Access"
      ],
      cta: "Acquire Blueprint",
      popular: true
    },
    {
      name: "Institutional Alpha",
      price: "₹19,999",
      duration: "ANNUAL ACCESS",
      features: [
        "Full Network Clearance",
        "Direct Support Access",
        "Systemic Strategy Vault",
        "Maximized Yield Analytics",
        "Exclusive Yearly Roundtable"
      ],
      cta: "Full Clearance",
      popular: false
    }
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
    <section id="pricing" className="py-24 px-6 bg-background-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gold-primary uppercase tracking-[0.4em] mb-4">Capital Allocation</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Membership Clearance.</h3>
          <p className="text-text-muted mt-4 uppercase tracking-widest text-xs">Invest in the infrastructure of your success.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
           {plans.map((plan, i) => (
               <motion.div 
                 key={i} 
                 variants={itemVariants}
                 className={`glass-panel p-10 rounded-3xl relative overflow-hidden flex flex-col ${plan.popular ? 'border-gold-primary/50 shadow-[0_0_40px_rgba(212,175,55,0.1)] scale-105 z-10' : 'border-white/5'}`}
               >
                {plan.popular && (
                  <div className="absolute top-0 right-0 py-1 px-4 bg-gold-primary text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                    Highly Strategic
                  </div>
                )}

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-gold-primary font-bold mb-4">{plan.name}</h4>
                  <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-bold text-white font-mono">{plan.price}</span>
                     <span className="text-[10px] text-text-muted font-bold tracking-widest">{plan.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                   {plan.features.map((feature, j) => (
                     <div key={j} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-gold-primary" />
                        <span className="text-sm text-text-secondary tracking-wide">{feature}</span>
                     </div>
                   ))}
                </div>

                <Button asChild variant={plan.popular ? "luxury" : "glow"} className="w-full h-12 uppercase tracking-widest text-xs font-bold">
                   <Link href="/checkout">{plan.cta}</Link>
                </Button>

                <p className="mt-4 text-center text-[10px] text-text-muted uppercase tracking-widest flex items-center justify-center gap-2">
                   <ShieldCheck className="w-3 h-3" /> Encrypted Transaction Gate
                </p>
             </motion.div>
           ))}
        </motion.div>
        
        <div className="mt-16 text-center space-y-4">
           <p className="text-text-muted text-xs uppercase tracking-widest">Awaiting custom deployment? Connect with Operatives</p>
           <div className="flex justify-center gap-6">
              <a href="https://t.me/TheCapitalGuruSupport" className="text-gold-primary hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">Telegram</a>
              <a href="https://wa.me/919106713107" className="text-gold-primary hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">WhatsApp</a>
           </div>
        </div>
      </div>
    </section>
  )
}
