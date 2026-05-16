"use client"

import Navbar from "@/components/layout/navbar"
import Hero from "@/components/landing/Hero"
import MarketIntelligence from "@/components/landing/MarketIntelligence"
import WhyTradersFail from "@/components/landing/WhyTradersFail"
import Features from "@/components/landing/Features"
import SignalShowcase from "@/components/landing/SignalShowcase"
import Metrics from "@/components/landing/Metrics"
import Pricing from "@/components/landing/Pricing"
import Testimonials from "@/components/landing/Testimonials"
import Footer from "@/components/layout/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <MarketIntelligence />
        
        <div id="intelligence">
          <WhyTradersFail />
          <Metrics />
        </div>

        <Features />
        
        <SignalShowcase />

        <div id="pricing">
          <Pricing />
        </div>

        <Testimonials />

        {/* Final CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight"
            >
              Enter The Elite <br/> Trading Network.
            </motion.h2>
            <p className="text-text-secondary max-w-xl mx-auto uppercase tracking-widest text-xs leading-loose">
              Operational superiority is just one execution away. Do not let another market cycle pass without institutional intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <Button asChild variant="luxury" size="lg" className="rounded-full px-12">
                <Link href="/login">Initialize Access</Link>
              </Button>
              <Button asChild variant="darkGlass" size="lg" className="rounded-full px-12">
                <a href="https://t.me/TheCapitalGuruSupport">Contact Ops</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
