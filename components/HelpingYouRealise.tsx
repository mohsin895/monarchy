"use client";

import { Check } from "lucide-react";

export default function HelpingYouRealise() {
  return (
    <section className="relative bg-black text-white py-10 px-4 sm:px-6 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        
        {/* IMAGE */}
        <div className="relative w-full flex justify-center lg:justify-start lg:pl-30">
          <img
            src="/share_all.png"
            alt="Portfolio Performance Preview"
            className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[480px] h-auto shadow-lg transition-all duration-300"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg lg:pr-12">
          <p className="text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 tracking-wide">
            Start investing with us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            Make your money{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              work for you.
            </span>
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed text-[10px] sm:text-xs md:text-sm">
            Answer a few questions, and our experts will create a personalised mutual fund
            portfolio tailored to your goals.
          </p>

          <ul className="space-y-2 text-gray-300 text-[10px] sm:text-xs md:text-sm">
            {[
              "Everything at one place",
              "Goal-based investment",
              "3500+ schemes available to choose from",
              "Multiple asset classes: Equity, Debt, Gold ETFs, ELSS and more",
              "Go global: Invest in funds that invest in foreign companies",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center mt-4 gap-2 bg-white text-black text-xs sm:text-sm md:text-base font-semibold px-4 py-2 md:px-5 md:py-3 rounded-lg rounded-br-3xl hover:bg-gray-200 transition">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
