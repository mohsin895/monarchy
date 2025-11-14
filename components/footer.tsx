"use client"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b0b2a] to-[#1b0939] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section: Logo and contact */}
       

        {/* Bottom text area */}
        <div className="text-gray-400 text-xs leading-relaxed space-y-4 mt-8">
          <p>
            Disclaimer: Investments in the securities market are subject to market risks, read all related documents carefully before investing.
          </p>
          <p>
            Mutual Fund investments are subject to market risks, read all scheme-related documents carefully. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your needs.
          </p>
          <p>
            The data, information, and services provided are for informational purposes only and do not constitute financial advice, investment recommendation, or solicitation to buy or sell any financial product.
          </p>
          <p>
            © 2025 Royal Monarchs. All rights reserved. | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  )
}
