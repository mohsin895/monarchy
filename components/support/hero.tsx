"use client";

export default function SupportHero() {
  return (
    <section className="max-w-8xl mx-auto px-4 py-2 w-full">
      <div className="flex flex-col items-center text-center space-y-6">
        
        {/* Full-width heading container */}
        <div className="max-w-7xl">
          <h1
            className="
              max-w-7xl
              mt-6
              lg:mt-6
              font-bold 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-400 
              to-blue-400 
              text-balance 
              leading-tight
              text-[15px] 
              sm:text-3xl 
              md:text-5xl 
              lg:text-6xl 
              xl:text-7xl
            "
          >
            Collaboration.
            <span className=" text-[#727272]">
              Innovation.
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
  Diversity<span className="text-green-400 ">.</span>
</span>
          </h1>
        </div>

     
      </div>
    </section>
  );
}
