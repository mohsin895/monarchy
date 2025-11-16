"use client";
import Link from "next/link";

export default function CareerHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-2 w-full">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="max-w-7xl">
          <div
           
          >
            <span  className="
              max-w-7xl
              font-bold 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-400 
              to-blue-400 
              text-balance 
              leading-tight
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              xl:text-7xl
            "> Create</span>
         <span className="text-3xl ">.</span>  
            <span className="pl-0  max-w-7xl
              font-bold 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-400 
              to-blue-400 
              text-balance 
              leading-tight
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              xl:text-7xl md:pl-1 lg:pl-0 xl:pl-[50px] text-[#727272]">
              Amaze
            </span>
            <span className="text-3xl ">.</span>  
            <span
  className="pl-0 md:pl-1  max-w-7xl
  font-bold 

  text-balance 
  leading-tight
  text-3xl 
  sm:text-4xl 
  md:text-5xl 
  lg:text-6xl 
  xl:text-7xl lg:pl-0 xl:pl-[50px]
  bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent ">
  Repeat
</span>

<span className="text-[#76FF03] text-3xl">.</span>

          </div>
        </div>

        <span className="text-sm md:text-base text-foreground/70 max-w-xl block">
        Royal Monarch brings together seasoned financial experts and cutting-edge technology to help you take control of your finances and confidently plan for the future.
        </span>

        <span className="text-4xl">We believe in being fair <br></br> and square.</span>

        {/* Button wrapped in Link */}
        <Link href="/open-positions">
          <button className="inline-flex items-center gap-2 bg-[#917EE0] text-white text-xs md:text-sm font-semibold px-4 py-3 rounded-lg rounded-br-3xl hover:bg-gray-200 transition">
            See Open position
          </button>
        </Link>
      </div>
    </section>
  );
}
