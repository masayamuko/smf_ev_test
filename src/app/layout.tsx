import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navigation from './[lang]/components/Navigation'
import Footer from './[lang]/components/Footer'
import GoogleAnalytics from './[lang]/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'masaya official site',
  description: 'AI活用サポーター・クリエイター',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <GoogleAnalytics />
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}