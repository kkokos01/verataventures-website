import type { Metadata } from 'next'
import './globals.css'
import { AgentationWrapper } from '@/components/AgentationWrapper'

export const metadata: Metadata = {
  title: 'Verata Ventures',
  description:
    'Verata Ventures is a privately held software studio building vertical AI products for healthcare, education, and family life. Based in New Jersey.',
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
