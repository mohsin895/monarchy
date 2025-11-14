"use client";

export default function WhyNeedUs() {
  return (
    <section className="relative bg-black text-white py-10 px-4 sm:px-6 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* ---- Left Side Text ---- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:pl-30">
          <p className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Why do you need us?
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              life
            </span>{" "}
            you want.
          </h2>

          <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm max-w-md leading-relaxed">
            We’re dedicated to helping you live the life you want. We foster
            our relationship by asking candid and sometimes difficult questions.
          </p>
        </div>

        {/* ---- Right Side Image ---- */}
        <div className="flex justify-center lg:justify-end lg:pr-20">
          <img
            src="/total.png"
            alt="Portfolio Performance Preview"
            className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[400px] xl:w-[460px] h-auto shadow-lg transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
}
