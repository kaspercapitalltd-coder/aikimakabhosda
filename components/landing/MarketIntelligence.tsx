export default function MarketIntelligence() {
  const items = [
    { label: "BANKNIFTY", value: "52,431.20", change: "+1.24%", up: true },
    { label: "NIFTY 50", value: "24,321.45", change: "+0.85%", up: true },
    { label: "GOLD / MCX", value: "72,140.00", change: "-0.15%", up: false },
    { label: "CRUDE / NYMEX", value: "81.42", change: "+2.14%", up: true },
    { label: "BTC / USD", value: "64,231.50", change: "-0.45%", up: false },
    { label: "INDIA VIX", value: "13.42", change: "-4.20%", up: false },
    { label: "US30", value: "39,124.50", change: "+0.32%", up: true },
    { label: "AVG RR", value: "1:4.2", change: "STABLE", up: true },
    { label: "WIN RATE", value: "92.4%", change: "ELITE", up: true },
  ]

  // Double items for seamless loop with -50% translateX
  const tickerItems = [...items, ...items]

  return (
    <div className="bg-background-secondary border-y border-border-secondary py-3 flex items-center relative overflow-hidden group">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex items-center gap-4 px-6 border-r border-border-secondary relative z-20 bg-background-secondary">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] whitespace-nowrap">Live Intel Feed</span>
      </div>

      <div className="ticker flex items-center gap-16 px-12">
        {tickerItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0 transition-opacity hover:opacity-100 opacity-80 cursor-default">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">{item.label}</span>
            <span className="text-sm font-mono text-white font-medium">{item.value}</span>
            <span className={`text-[10px] font-bold tracking-tight px-1.5 py-0.5 rounded ${item.up ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
