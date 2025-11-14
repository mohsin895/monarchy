import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';
import FooterTop from "@/components/footerTop"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'App',
  description: 'Created with React',
  generator: 'React.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-black text-white`}>
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Global Footer */}
        <FooterTop/>
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
