"use client";

import { Check } from "lucide-react";

export default function Possibility() {
  return (
    <section className="relative bg-black text-white py-10 px-4 sm:px-6 overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        
 {/* TEXT CONTENT */}
 <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg lg:pr-12">
         

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-6">
          A passion for
            <span className="text-transparent bg-clip-text ">
            providing solutions .
            </span>
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed text-[10px] sm:text-xs md:text-sm">
          We comprehend your needs and design tailored solutions to help meet your goals.
          </p>

        </div>

        {/* IMAGE */}
        <div className="relative w-full flex justify-center lg:justify-start lg:pl-30">
          <img
            src="/solution.png"
            alt="Portfolio Performance Preview"
            className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[480px] h-auto shadow-lg transition-all duration-300"
          />
        </div>

       
      </div>
    </section>
  );
}
