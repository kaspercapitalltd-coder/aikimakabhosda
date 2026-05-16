import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-8">
      <Image 
        src="https://i.ibb.co/bgpv5f8G/122151.png" 
        alt="The Capital Guru" 
        width={64} 
        height={64} 
        className="opacity-20 grayscale"
        referrerPolicy="no-referrer"
      />
      
      <div className="space-y-4">
        <h2 className="text-5xl font-bold uppercase tracking-[0.4em] text-gold-accent opacity-50">404</h2>
        <p className="text-text-muted text-xs uppercase tracking-[0.2em] max-w-md mx-auto">
          The requested operational sector does not exist in the current domain.
        </p>
      </div>

      <Button asChild variant="luxury" size="lg">
        <Link href="/">Return to Control Center</Link>
      </Button>
    </div>
  )
}
