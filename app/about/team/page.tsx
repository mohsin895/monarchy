

import AboutBody from "@/components/about/body"
import AboutFooter from "@/components/about/footer"
import Showcase from "@/components/showcase"
import TeamBody from "@/components/team/body"
import TeamHero from "@/components/team/hero"






export default function Team() {
  return (
    <main className="min-h-screen bg-black">
     
      <TeamHero />
      <AboutBody/>
      <TeamBody/>
      
     <Showcase />
    
    </main>
  )
}
