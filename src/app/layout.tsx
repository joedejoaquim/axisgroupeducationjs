import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Axis Education Group',
  description: 'A plataforma completa que une aulas online interativas com professores particulares.',
  icons: {
    icon: '/assets/logoaxis.png',
    apple: '/assets/logoaxis.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
