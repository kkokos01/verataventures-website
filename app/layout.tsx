import type { Metadata } from 'next'
import './globals.css'
import { AgentationWrapper } from '@/components/AgentationWrapper'

export const metadata: Metadata = {
  title: 'Verata Ventures - Coming Soon',
  description: 'Verata Ventures - Building the future of software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <AgentationWrapper />
      </body>
    </html>
  )
}
