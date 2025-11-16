"use client";

import { useState } from "react";
import { MultiStepFormModal } from "./multiStepForm/multi-step-form";
export default function Showcase() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="relative bg-black text-white py-12 px-6 flex flex-col items-center justify-center ">
      
      {/* Floating image container */}
      <div className="relative w-[300px] md:w-[245px] mb-6 flex flex-col items-center">
      
        <h2 className="text-2xl md:text-4xl lg:text-[35px] font-extrabold text-white text-center mt-4">
          It’s not Luck!!
        </h2>
      </div>

      {/* Text content */}
      <div className="relative w-full md:w-3/4 lg:w-2/3 flex flex-col items-center text-center mb-6">
        <p className="text-md md:text-lg font-semibold text-gray-100 mb-2">
          But, the right decision at the right time.
        </p>

        <p className="text-sm md:text-base text-gray-300 mb-4 max-w-md">
          Get ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-400 font-semibold">
            make a guilt free decision
          </span>
        </p>

        {/* Button */}
        <button onClick={() => setIsOpen(true)} className="inline-flex items-center gap-2 bg-white text-black text-xs md:text-sm font-semibold px-4 py-3 rounded-lg rounded-br-3xl hover:bg-gray-200 transition">
         Join us now
        </button>

        <MultiStepFormModal open={isOpen} onOpenChange={setIsOpen} />
      </div>
      
    </section>
  );
}
