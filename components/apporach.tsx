"use client";

export default function Approach() {
  return (
    <section className="relative bg-black text-white py-12 sm:py-16 md:py-2 lg:py-4 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* --- Left Side Image --- */}
        <div className="relative flex justify-center lg:justify-start pl-0 lg:pl-30">
          <img
            src="/approch.png"
            alt="Financial Growth Illustration"
            className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px] h-auto rounded-2xl shadow-lg transition-all duration-300"
          />
        </div>

        {/* --- Right Side Text --- */}
        <div className="text-center lg:text-left space-y-4 px-2 lg:pr-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug">
          A specialist <br />
            <span className="">
            approach.
            </span>
          </h2>

          <p className="text-gray-400 max-w-md mx-auto lg:mx-0 text-xs sm:text-sm md:text-base leading-relaxed">
          Our focused teams are led by industry veterans with decades of experience who will have an honest conversation about money and what matters most to you and your family across the generations.
          </p>
        </div>

      </div>
    </section>
  );
}
