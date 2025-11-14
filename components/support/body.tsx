"use client";

export default function SupportBody() {
  return (
    <section className="relative w-full  bg-black text-white py-20 px-6 overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {/* ---------------- First Row ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="flex flex-col space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Not sure where to start with{" "}
              <span className="text-purple-400">Royal Monarch?</span>
            </h2>
            <p className="text-blue-400 font-medium text-lg">
              We’re here to help!
            </p>

            <img
              src="/support1.png"
              alt="Consultation"
              className="w-[300px] sm:w-[350px] md:w-[380px] rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(138,43,226,0.3)]"
            />

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              We have a team of experts available to answer your questions.
              We’ll assign a financial wizard to learn about your goals and
              aspirations. Royal Monarch can manage your domains entirely —
              think of it as your own personal finance consultation.
            </p>
          </div>

          {/* Right Section — Form */}
          <div className="bg-neutral-900/70 rounded-xl shadow-xl p-8 w-full max-w-md mx-auto lg:ml-auto">
            <h3 className="text-gray-200 mb-6 text-lg font-semibold">
              Get in touch to get the ball rolling.
            </h3>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* ---------------- Second Row ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-100">
              Don’t worry, though!
            </h3>
            <h4 className="text-2xl sm:text-3xl font-bold text-purple-400">
              This won’t be a sales call.
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We won’t pressure you to sign up for our services. We’ll always be
              upfront with you if Royal Monarch isn’t the best fit for your
              goals.
              <br />
              <br />
              And the best part about the call? It’s 100% free.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[300px] sm:w-[350px] md:w-[400px] h-[260px] border border-purple-500/40 rounded-xl shadow-[0_0_25px_rgba(138,43,226,0.3)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
