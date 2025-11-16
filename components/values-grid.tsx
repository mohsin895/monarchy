"use client";

import Link from "next/link";

export default function ReviewSection() {
  return (
    <section className="w-full bg-black text-white py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* --- Text Content --- */}
        <div className="flex flex-col lg:pl-30 items-center lg:items-start text-center lg:text-left space-y-6 px-4 lg:px-0">
          <p className="text-sm sm:text-base font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Already have Mutual Funds?
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">

          Making it ₹ 100 Crores<br /> is
                    not a myth
         
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm md:text-sm max-w-md">
            Be the wealthiest 0.1% on the world.
          </p>

          <Link href="/how-it-works" className="inline-flex items-center gap-2 bg-white text-black text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg rounded-br-3xl hover:bg-gray-200 transition">
            See how it work
          </Link>
        </div>

        {/* --- Image --- */}
        <div className="flex lg:pr-24 justify-center lg:justify-end">
          <img
            src="/chart.png"
            alt="Portfolio Performance Preview"
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto rounded-2xl shadow-lg transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
}
