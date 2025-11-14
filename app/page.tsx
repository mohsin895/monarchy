import Header from "@/components/header"
import Hero from "@/components/hero"
import ValuesGrid from "@/components/values-grid"

import Showcase from "@/components/showcase"
import Footer from "@/components/footer"
import Secure from "@/components/secure"
import FinancialFreedom from "@/components/financialFreedom"
import WhyNeedUs from "@/components/whyNeedUs"
import HelpingYouRealise from "@/components/HelpingYouRealise"
import FloatingCards from "@/components/FloatingCards"



export default function Home() {
  return (
    <main className="min-h-screen bg-black">
     
      <Hero />
      <ValuesGrid />
      <HelpingYouRealise />
      <WhyNeedUs/>
      <FinancialFreedom />
      {/* <FloatingCards /> */}
      <Secure/>
      <Showcase />
     
    
    </main>
  )
}
