"use client";

export default function Secure() {
  return (
    <section className="relative max-w-3xl mx-auto bg-black text-white py-0 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-90" />

      {/* Image container */}
      <div className="relative flex justify-center items-center">
        {/* Image */}
        <img
          src="/Heimdall.png"
          alt="Secure Knight"
          className="w-full max-w-md h-auto object-contain mx-auto"
        />

        {/* Text Overlay on the right */}
        <div className="absolute inset-0 flex flex-col items-end justify-center text-right px-6 md:px-10">
          <h2 className="text-5xl md:text-4xl font-extrabold mb-4 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            <span className="text-white">Safe.</span>{" "}
            <span className="text-gray-300">Secured.</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Private.
            </span>
          </h2>

          {/* Paragraph with 1/4 width */}
          <p className="text-gray-300 text-base md:text-[10px] leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] w-1/3 text-left">
            We ensure all your personal data and transactions are encrypted and secure, 
            so that your information stays only with you. 
            We never share your personal data with anyone, under any circumstance.
          </p>
        </div>
      </div>

    
    </section>
  );
}
