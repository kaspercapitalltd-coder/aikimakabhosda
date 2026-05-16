import { motion } from "framer-motion"
import { TrendingUp, CheckCircle2, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignalShowcase() {
  const signals = [
    {
      pair: "BANKNIFTY OPT",
      type: "BUY",
      entry: "450-460",
      sl: "420",
      targets: "520 / 600 / 750+",
      result: "720 Hit",
      pnl: "+₹26,000/Lot",
      status: "COMPLETED",
      date: "JUN 14"
    },
    {
      pair: "CRUDE OIL",
      type: "SELL",
      entry: "6850",
      sl: "6910",
      targets: "6780 / 6700 / 6620",
      result: "6610 Hit",
      pnl: "+₹24,000/Lot",
      status: "COMPLETED",
      date: "JUN 12"
    },
    {
      pair: "NIFTY 50",
      type: "BUY",
      entry: "23840",
      sl: "23780",
      targets: "23950 / 24100",
      result: "24125 Hit",
      pnl: "+₹14,250/Lot",
      status: "COMPLETED",
      date: "JUN 11"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="signal" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-gold-primary uppercase tracking-[0.4em] mb-4">Elite Output</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">Intelligence Terminal.</h3>
          <p className="text-text-muted mt-4 uppercase tracking-widest text-xs">Recently Decrypted Market Executions</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {signals.map((signal, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              className="glass-panel p-8 rounded-2xl border-white/5 relative overflow-hidden group hover:border-gold-primary/40 transition-all font-mono"
            >
              <div className="absolute top-0 right-0 p-4">
                 <div className="text-[10px] text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                   {signal.status}
                 </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-pulse"></div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest">{signal.date} {'//'} T-GURU</span>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">{signal.pair}</h4>
              <p className="text-xs text-gold-primary mb-8 font-bold tracking-widest">SIGNAL TYPE: {signal.type}</p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs border-b border-border-secondary/30 pb-2">
                   <span className="text-text-muted uppercase">Execution Range</span>
                   <span className="text-white">{signal.entry}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-border-secondary/30 pb-2">
                   <span className="text-text-muted uppercase">Terminal Stop</span>
                   <span className="text-red-500">{signal.sl}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-border-secondary/30 pb-2">
                   <span className="text-text-muted uppercase">Primary Targets</span>
                   <span className="text-white">{signal.targets}</span>
                </div>
              </div>

              <div className="p-4 bg-gold-primary/5 border border-gold-primary/20 rounded-lg">
                <div className="flex justify-between items-center">
                   <div className="space-y-1">
                      <p className="text-[10px] text-gold-primary uppercase tracking-widest font-bold">Actual Result</p>
                      <p className="text-xl text-white font-bold">{signal.result}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] text-green-500 uppercase tracking-widest font-bold">Yield</p>
                      <p className="text-lg text-green-500 font-bold">{signal.pnl}</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
           <p className="text-text-muted text-[10px] uppercase tracking-[0.4em] mb-6">Audited Execution Data // Encrypted History</p>
           <Button variant="glow" className="px-12 rounded-full">
             Decrypt Full History
           </Button>
        </div>
      </div>
    </section>
  )
}
