import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  },
}

import { PageTransition } from '@/components/page-transition'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="text-gray-950 antialiased">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}