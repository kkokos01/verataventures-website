import type { Metadata } from 'next'
import { Geist_Mono, Instrument_Sans, Newsreader } from 'next/font/google'
import './globals.css'
import { AgentationWrapper } from '@/components/AgentationWrapper'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://verataventures.com'),
  title: 'Verata Ventures | Executive judgment. Startup velocity.',
  description:
    'Verata Ventures is a founder-led venture studio combining executive judgment with AI-native execution to build, validate, and operate new businesses.',
  openGraph: {
    title: 'Verata Ventures | Executive judgment. Startup velocity.',
    description:
      'Founder-led venture building for enterprises, capital partners, and individual operators.',
    type: 'website',
    url: '/',
    siteName: 'Verata Ventures',
  },
  twitter: {
    card: 'summary',
    title: 'Verata Ventures | Executive judgment. Startup velocity.',
    description:
      'Founder-led venture building for enterprises, capital partners, and individual operators.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${instrumentSans.variable} ${geistMono.variable}`}>
        {children}
        <AgentationWrapper />
      </body>
    </html>
  )
}
