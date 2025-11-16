

import AboutBody from "@/components/about/body"
import AboutFooter from "@/components/about/footer"
import ApproachBody from "@/components/approach/body"
import ApproachHero from "@/components/approach/hero"
import Showcase from "@/components/showcase"


import WorkHero from "@/components/work/hero"





export default function Team() {
  return (
    <main className=" bg-black">
     
      <ApproachHero />
      <AboutBody/>
      <ApproachBody/>
      
      <Showcase />
    
    </main>
  )
}
