"use client"

import { motion } from "framer-motion"

export default function Metrics() {
  const stats = [
    { label: "Precision Rate", value: "92", suffix: "%", desc: "Audited System Accuracy" },
    { label: "Execution Speed", value: "850", suffix: "ms", desc: "Bridge-to-Terminal Delivery" },
    { label: "Average RR", value: "1:4", suffix: "+", desc: "Asymmetrical Yield Model" },
    { label: "Elite Members", value: "1200", suffix: "+", desc: "Private Network Capacity" },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h4 className="text-xs text-gold-primary uppercase tracking-[0.4em] font-bold">{stat.label}</h4>
              <p className="text-5xl md:text-6xl font-bold text-white font-mono flex items-center justify-center">
                 {stat.value}
                 <span className="text-gold-accent text-3xl ml-1">{stat.suffix}</span>
              </p>
              <p className="text-text-muted text-[10px] uppercase tracking-widest">{stat.desc}</p>
              <div className="w-12 h-1 bg-gold-primary/20 mx-auto rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
