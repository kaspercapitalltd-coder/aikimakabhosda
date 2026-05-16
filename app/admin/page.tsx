"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LayoutDashboard, Users, CreditCard, Shield, Settings, LogOut, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const data = [
  { name: '00:00', yield: 4000, operatives: 2400 },
  { name: '04:00', yield: 3000, operatives: 1398 },
  { name: '08:00', yield: 2000, operatives: 9800 },
  { name: '12:00', yield: 2780, operatives: 3908 },
  { name: '16:00', yield: 1890, operatives: 4800 },
  { name: '20:00', yield: 2390, operatives: 3800 },
  { name: '23:59', yield: 3490, operatives: 4300 },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-text-primary flex">
      <aside className="w-64 border-r border-border-secondary hidden lg:flex flex-col p-6 space-y-8 bg-background-secondary">
        <div className="flex items-center gap-3 mb-4">
           <Image src="https://i.ibb.co/bgpv5f8G/122151.png" alt="Logo" width={32} height={32} referrerPolicy="no-referrer" />
           <span className="font-bold uppercase tracking-widest text-sm text-white">Central Registry</span>
        </div>

        <nav className="space-y-1">
           {[
             { label: 'Intelligence', icon: <LayoutDashboard size={18} />, active: true },
             { label: 'Operatives', icon: <Users size={18} /> },
             { label: 'Clearances', icon: <CreditCard size={18} /> },
             { label: 'Security', icon: <Shield size={18} /> },
             { label: 'Framework', icon: <Settings size={18} /> },
           ].map((item) => (
             <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs uppercase tracking-widest transition-all ${item.active ? 'bg-gold-primary text-black font-bold' : 'text-text-muted hover:text-white hover:bg-white/5'}`}>
                {item.icon}
                {item.label}
             </button>
           ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-border-secondary">
           <button className="flex items-center gap-3 w-full px-4 py-3 text-xs uppercase tracking-widest text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
              <LogOut size={18} />
              Terminate Session
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border-secondary/30">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-[0.2em] text-white">T-GURU COMMAND</h1>
              <p className="text-[10px] text-gold-primary tracking-[0.4em] uppercase mt-2 font-bold">Operational Intelligence Active // Level 4 Clearance</p>
            </div>
            <div className="flex gap-4">
               <div className="px-4 py-2 glass-panel rounded-full flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-[10px] uppercase tracking-widest text-text-muted">Network Nominal</span>
               </div>
            </div>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Pending Clearances', value: '14', change: '+2', color: 'text-yellow-500' },
              { label: 'Institutional Yield', value: '₹1.2M', change: '+₹42k', color: 'text-gold-primary' },
              { label: 'Active Operatives', value: '1,242', change: '+12', color: 'text-white' },
              { label: 'System Volatility', value: 'Low', change: 'Normal', color: 'text-green-500' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-gold-primary/30 transition-all shadow-2xl"
              >
                <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold mb-4">{stat.label}</p>
                <div className="flex items-end justify-between">
                   <p className={`text-3xl font-mono ${stat.color}`}>{stat.value}</p>
                   <span className="text-[10px] text-text-muted font-mono">{stat.change}</span>
                </div>
              </motion.div>
            ))}
          </section>

          <section className="glass-panel p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
               <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-white">Yield Intelligence Matrix</h2>
                  <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] mt-1">Real-time capital propagation flow</p>
               </div>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-gold-primary"></div>
                     <span className="text-[10px] text-text-muted uppercase tracking-widest">Yield Alpha</span>
                  </div>
               </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C6A972" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#C6A972" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#4B5563" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                    tick={{ fill: '#8A8A8A' }}
                  />
                  <YAxis 
                    stroke="#4B5563" 
                    fontSize={10} 
                    tickLine={false} 
                    axisLine={false}
                    tick={{ fill: '#8A8A8A' }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '8px', fontSize: '10px' }}
                    itemStyle={{ color: '#C6A972' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="yield" 
                    stroke="#C6A972" 
                    fillOpacity={1} 
                    fill="url(#colorYield)" 
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
             <div className="lg:col-span-2 space-y-6">
                <div className="glass-panel p-8 rounded-2xl">
                   <div className="flex items-center justify-between mb-8">
                      <h2 className="text-sm font-bold uppercase tracking-widest text-white">Recent Authorization Requests</h2>
                      <Link href="#" className="text-[10px] text-gold-primary uppercase tracking-widest hover:text-white transition-colors">View All Archive</Link>
                   </div>
                   <div className="space-y-2">
                      {[1,2,3,4].map((n) => (
                        <div key={n} className="flex items-center justify-between p-4 bg-black/40 border border-border-secondary rounded-xl hover:border-gold-primary/30 transition-all group">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary text-xs font-mono">
                                 OP_{n}
                              </div>
                              <div>
                                 <p className="text-xs font-bold text-white uppercase tracking-widest">Mahesh Kumar</p>
                                 <p className="text-[10px] text-text-muted font-mono">TXN_ID: {Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
                              </div>
                           </div>
                           <Button variant="outline" size="sm" className="h-8 text-[10px] uppercase tracking-widest border-gold-primary/20 text-gold-primary">Verify</Button>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="space-y-6">
                 <div className="glass-panel p-8 rounded-2xl bg-gradient-to-b from-background-secondary to-black">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gold-accent mb-6">Security Overwatch</h2>
                    <div className="space-y-6">
                       <div className="space-y-2">
                          <div className="flex justify-between text-[10px] uppercase tracking-widest text-text-muted">
                             <span>Compute Load</span>
                             <span className="text-white">42%</span>
                          </div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-gold-primary w-[42%]"></div>
                          </div>
                       </div>
                       <div className="space-y-2">
                          <div className="flex justify-between text-[10px] uppercase tracking-widest text-text-muted">
                             <span>Memory Integrity</span>
                             <span className="text-white">Nominal</span>
                          </div>
                          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-green-500 w-[98%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                          </div>
                       </div>
                    </div>
                    <div className="mt-8 p-4 bg-black rounded-xl border border-red-900/30">
                       <p className="text-[10px] text-red-400 uppercase tracking-[0.2em] font-bold mb-2">Notice</p>
                       <p className="text-[9px] text-text-muted leading-relaxed uppercase">3 unauthorized bridge attempts blocked in last 60 minutes from external domains.</p>
                    </div>
                 </div>
             </div>
          </section>
        </div>
      </main>
    </div>
  )
}
