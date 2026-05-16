import { motion } from "framer-motion"
import { Target, Zap, ShieldCheck, Database, Cpu, Globe, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Precision Entries",
      desc: "Sniper-grade entry protocols targeting high-liquidity institutional zones.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Asymmetrical RR",
      desc: "Systems designed for 1:3, 1:5, and 1:10+ Reward-to-Risk ratios.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Ultra-Fast Delivery",
      desc: "Encrypted intelligence delivered in milliseconds via our proprietary bridge.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Risk Hardening",
      desc: "Automated risk filters to prevent overtrading and capitalize on discipline.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Global Commodity Ops",
      desc: "Elite coverage of Crude Oil, Natural Gas, Gold, and Global Indices.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Private Network",
      desc: "Access to a collective of high-intel traders and institutional analysts.",
      icon: <Users className="w-6 h-6" />
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="edge" className="py-24 px-6 bg-background-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-gold-primary uppercase tracking-[0.4em] mb-4">Operational Alpha</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">The Institutional <br/> Execution Edge.</h3>
          </div>
          <p className="text-text-muted text-sm max-w-sm">We provide the technical and psychological infrastructure required to survive the asymmetry of modern markets.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.4)" }}
              className="glass-panel p-10 rounded-2xl border-white/5 transition-all transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center text-gold-primary mb-8 group-hover:bg-gold-primary group-hover:text-black transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{feature.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
