'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("System Error Caught:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center space-y-6">
       <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 mb-4">
          <span className="text-red-500 text-4xl font-bold">!</span>
       </div>
      <h2 className="text-2xl font-bold uppercase tracking-[0.3em] text-red-500">System Malfunction</h2>
      <p className="text-text-secondary max-w-md text-xs uppercase tracking-widest leading-loose">
        An unexpected algorithmic error occurred within the operational intelligence layer. Root cause has been logged for review.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
          Re-initialize Operational Data
        </Button>
        <Button asChild variant="ghost">
           <Link href="/" className="uppercase tracking-widest text-[10px]">Return to Base</Link>
        </Button>
      </div>
    </div>
  )
}
