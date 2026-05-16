import { motion } from "framer-motion"
import { AlertCircle, Zap, ShieldAlert, TrendingDown, Clock, Brain, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhyTradersFail() {
  const points = [
    {
      title: "Emotional Impulsiveness",
      desc: "Trading based on fear, greed, or revenge instead of data-driven systems.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Poor Risk Management",
      desc: "Oversized positions and missing stop losses lead to catastrophic capital decay.",
      icon: <ShieldAlert className="w-5 h-5" />
    },
    {
      title: "Overtrading Junk Setups",
      desc: "Scanning the markets with desperation instead of waiting for high-probability edge.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Delayed Execution",
      desc: "Missing the institutional entry bridge due to slow systems or hesitation.",
      icon: <Clock className="w-5 h-5" />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gold-primary uppercase tracking-[0.4em] mb-4">The Brutal Reality</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Why 95% of Retail <br/> Traders Fail.</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {points.map((point, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass-panel p-8 rounded-xl border-red-900/20 hover:border-red-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{point.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 glass-panel border-gold-primary/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-background-secondary to-black"
        >
           <div className="space-y-3">
              <h4 className="text-2xl font-bold text-white uppercase tracking-widest">Protocol Shift: Institutional Intel.</h4>
              <p className="text-text-muted text-sm max-w-xl">Retail failure is a design feature of the market. We provide the technical bridge to trade alongside institutional liquidity, not against it.</p>
           </div>
           <Button asChild variant="luxury" size="lg" className="rounded-full px-12 group">
              <Link href="/checkout" className="flex items-center gap-3">
                Bridge the Alpha Gap 
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
           </Button>
        </motion.div>
      </div>
    </section>
  )
}
