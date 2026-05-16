import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: {
    template: '%s | The Capital Guru',
    default: 'The Capital Guru — Institutional Grade Intelligence',
  },
  description: 'Institutional-grade indices and commodity trading intelligence with elite precision and premium execution systems.',
  metadataBase: new URL('https://thecapitalguru.com'),
  openGraph: {
    title: 'The Capital Guru — Institutional Grade Intelligence',
    description: 'Institutional-grade indices and commodity trading intelligence with elite precision and premium execution systems.',
    url: 'https://thecapitalguru.com',
    siteName: 'The Capital Guru',
    images: [
      {
        url: 'https://i.ibb.co/kgNqFHXb/OG-IMAGE.png',
        width: 1200,
        height: 630,
        alt: 'The Capital Guru Operative Network',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Capital Guru — Institutional Grade Intelligence',
    description: 'Institutional-grade indices and commodity trading intelligence with elite precision and premium execution systems.',
    images: ['https://i.ibb.co/kgNqFHXb/OG-IMAGE.png'],
  },
  icons: {
    icon: [
      { url: 'https://i.ibb.co/1GWcBQjB/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://i.ibb.co/G4SMVgt2/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://i.ibb.co/Vp9Xk4gH/favicon.jpg', type: 'image/jpeg' },
    ],
    apple: [
      { url: 'https://i.ibb.co/gbT6L4mR/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: 'https://i.ibb.co/7dm8YPbP/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: 'https://i.ibb.co/39z0Dmy8/android-chrome-512x512.png' },
    ]
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
       <head>
          <meta name="theme-color" content="#000000" />
       </head>
       <body className="antialiased font-sans bg-background text-text-primary min-h-screen selection:bg-gold-primary/30 selection:text-gold-light">
          {children}
          <Toaster theme="dark" position="bottom-right" className="font-sans" />
       </body>
    </html>
  )
}
