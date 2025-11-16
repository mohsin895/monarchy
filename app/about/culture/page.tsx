

import AboutBody from "@/components/about/body"

import Showcase from "@/components/showcase"


import WorkHero from "@/components/work/hero"
import WorkBody from "@/components/work1/body"
import CultureHero from "@/components/work1/hero"
import WorkIntegrity from "@/components/work1/integrity"





export default function Team() {
  return (
    <main className="min-h-screen bg-black">
     
      <CultureHero />
      <AboutBody/>
  
      <WorkIntegrity/>
      
      <Showcase />
    
    </main>
  )
}
