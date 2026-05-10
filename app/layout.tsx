import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice Late Fee Automator — Stop Chasing Overdue Payments',
  description: 'Automatically add late fees to overdue invoices based on your contract terms. Integrates with your invoicing tools and notifies clients instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d1e8a3f8-1f58-472e-b7de-faf7de46c14c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
