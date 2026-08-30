import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'IDEA Institut — Language Study & Travel',
    template: '%s | IDEA Institut',
  },
  description:
    'IDEA Institut adalah lembaga konsultasi bahasa asing dan studi/kerja ke luar negeri. Kursus Bahasa Inggris, Jerman, Spanyol, Prancis, Mandarin, Jepang. Studi di Australia, Jerman, dan negara OECD pilihan.',
  keywords: [
    'kursus bahasa asing', 'studi ke luar negeri', 'kuliah di Australia', 'kuliah di Jerman',
    'IDEA Institut', 'language course Jakarta', 'konsultasi studi', 'work abroad Indonesia',
  ],
  metadataBase: new URL('https://www.idea-institut.net'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'IDEA Institut',
  },
}

import { LanguageProvider } from '@/context/LanguageContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
