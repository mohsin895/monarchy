"use client";

import { useState } from "react";
import supportImg from "../../public/Support-Video.gif"
import Image from "next/image";
import './video.css'

export default function SupportBody() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/support-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg(data.message || "Request submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-black text-white py-8 lg:py-20 px-6 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* ---------------- First Row ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Left Section */}
          <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Not sure where to start with{" "}
              <span >OJUS?</span>
            </h2>
            <p className="text-blue-400 font-medium text-lg">We’re here to help!</p>

            <div className="border-effect !w-[80%] !h-[85%] frame-container">
              <Image className="p-2 mt-1" src={supportImg} alt="" width={400} height={500}/>
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              We have a team of experts available to answer your questions. We’ll
              assign a financial wizard to learn about your goals and aspirations.
              OJUS can manage your domains entirely — think of it as your
              own personal finance consultation.
            </p>
          </div>

          {/* Right Section — Form */}
          <div className="bg-neutral-900/70 rounded-xl shadow-xl p-8 w-full max-w-md mx-auto lg:ml-auto">
            <h3 className="text-gray-200 mb-6 text-lg font-semibold">
              Get in touch to get the ball rolling.
            </h3>

            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={3}
                className="bg-black border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400"
                required
              ></textarea>

              {successMsg && <p className="text-green-400">{successMsg}</p>}
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
