import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MessageSquare, Send, ShieldCheck, Zap } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-border-secondary pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image 
                src="https://i.ibb.co/bgpv5f8G/122151.png" 
                alt="Logo" 
                width={48} 
                height={48} 
                className="drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold uppercase tracking-[0.5em] text-white leading-none">THE CAPITAL</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.7em] text-gold-primary mt-1.5 leading-none">GURU</span>
              </div>
            </div>
          </div>
          <p className="text-text-muted text-sm leading-relaxed tracking-widest uppercase text-[10px]">
            Institutional-grade execution architecture. High-frequency market intelligence terminal for elite operatives.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full border border-border-secondary flex items-center justify-center text-text-muted hover:text-gold-primary hover:border-gold-primary transition-all cursor-pointer">
                <Zap className="w-3.5 h-3.5" />
             </div>
             <div className="w-8 h-8 rounded-full border border-border-secondary flex items-center justify-center text-text-muted hover:text-gold-primary hover:border-gold-primary transition-all cursor-pointer">
                <ShieldCheck className="w-3.5 h-3.5" />
             </div>
          </div>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Navigation Registry</h4>
          <ul className="space-y-4 text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold">
            <li><Link href="#edge" className="hover:text-gold-primary transition-colors">Operational Alpha</Link></li>
            <li><Link href="#signal" className="hover:text-gold-primary transition-colors">Intel Terminal</Link></li>
            <li><Link href="#pricing" className="hover:text-gold-primary transition-colors">Capital Allocation</Link></li>
            <li><Link href="/login" className="hover:text-gold-primary transition-colors">Secure Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Secure Communication</h4>
          <ul className="space-y-4 text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">
            <li className="flex items-center gap-3">
              <Send className="w-3.5 h-3.5 text-gold-primary" />
              <a href="https://t.me/TheCapitalGuruSupport" className="hover:text-white transition-colors">@TheCapitalGuruSupport</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare className="w-3.5 h-3.5 text-gold-primary" />
              <a href="https://wa.me/919106713107" className="hover:text-white transition-colors">+91 9106713107</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-3.5 h-3.5 text-gold-primary" />
              <a href="mailto:mahir@thecapitalguru.net" className="hover:text-white transition-colors">mahir@thecapitalguru.net</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Intel Feed Sub</h4>
          <p className="text-text-muted text-[9px] mb-6 uppercase tracking-[0.3em]">Receive encrypted weekly reports</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="INTEL_NODE@DOMAIN.GURU"
              className="bg-background-secondary border border-border-secondary p-4 text-[10px] w-full focus:border-gold-primary/50 outline-none transition-colors text-white tracking-widest font-mono rounded-sm"
            />
            <button className="bg-gold-primary py-4 text-black hover:bg-gold-accent transition-all uppercase text-[10px] font-bold tracking-[0.3em] rounded-sm shadow-[0_0_20px_rgba(198,169,114,0.15)] flex items-center justify-center gap-3 border border-gold-light/20">
              Register Node <Send className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-border-secondary/30 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] text-text-muted uppercase tracking-[0.4em] font-bold">
          © {currentYear} THE CAPITAL GURU // INSTITUTIONAL ALPHA UNIT.
        </p>
        <div className="flex gap-10 text-[9px] text-text-muted uppercase tracking-[0.3em] font-bold">
          <Link href="#" className="hover:text-white transition-colors">Risk Disclaimer</Link>
          <Link href="#" className="hover:text-white transition-colors">Clearance Terms</Link>
          <Link href="#" className="hover:text-white transition-colors">Data Privacy</Link>
        </div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto p-10 glass-panel border-red-900/10 rounded-2xl text-[9px] text-text-muted/40 leading-relaxed text-center uppercase tracking-widest bg-black/80">
        <span className="text-red-500/50 font-bold block mb-4 tracking-[0.8em]">CRITICAL WARNING</span>
        TRADING FINANCIAL INSTRUMENTS INVOLVES HIGH RISK. LOSSES CAN EXCEED INITIAL DEPOSITS. THE CAPITAL GURU OPERATES AS A RESEARCH AND INTELLIGENCE FACILITY. ALL DATA IS FOR INFORMATIONAL PURPOSES ONLY. PAST PRECISION DOES NOT GUARANTEE FUTURE ALPHA.
      </div>
    </footer>
  )
}
