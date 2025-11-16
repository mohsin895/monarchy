"use client";

import { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function CareerMarketing() {
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/monarch/open-position`
        );
        const json = await res.json();

        if (json.data) {
          setJob(json.data);
        } else {
          console.warn("Unexpected API response:", json);
        }
      } catch (err) {
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('job_post_id', job.id);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/monarch/apply-position`,
        {
          method: 'POST',
          body: formDataToSend,
        }
      );

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          coverLetter: "",
          resume: null
        });
        setFileName("");
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error("Error submitting application:", json);
        alert(json.message || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="flex justify-center items-center py-10 text-gray-400">
        Loading job details...
      </section>
    );
  }

  if (!job) {
    return (
      <section className="flex justify-center items-center py-10 text-gray-400">
        No job found.
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen bg-black text-gray-200 font-sans py-16 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-purple-600/5 rounded-full blur-3xl top-1/2 right-0"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-3xl sm:text-4xl font-bold mb-10 text-white">
        {job.title}
      </div>

      <div className="relative max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-[20%_80%] gap-8">
        {/* ---------------- LEFT SIDEBAR ---------------- */}
        <aside className="flex flex-col items-start space-y-6">
          <ul className="space-y-3 text-sm text-gray-400 border-b border-gray-700 pb-3">
            <li className="cursor-pointer hover:text-purple-400 transition">
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPinIcon className="w-4 h-4 text-purple-400" />
                {job.address}
              </p>
            </li>
            <li className="cursor-pointer hover:text-purple-400 transition">
              {job.jobType}
            </li>
          </ul>

          <button 
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center sm:mt-0 md:mt-20 gap-2 bg-[#8043CA] text-white text-xs sm:text-xs font-semibold px-4 py-2 rounded-lg rounded-br-3xl hover:bg-purple-600 transition"
          >
            Apply this position
          </button>
        </aside>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <div className="relative w-full space-y-10">
          <div>
            <h2 className="text-lg font-semibold text-purple-400 mb-3">
              Job Description
            </h2>
            <div
              className="text-sm text-gray-300 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />

            <h2 className="text-lg font-semibold text-purple-400 mb-3">
              Required Qualification / Experience
            </h2>
            <div
              className="text-sm text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: job.quolification }}
            />
          </div>

          {/* ---------------- ENHANCED FORM SECTION ---------------- */}
          <div 
            id="application-form"
            className="relative bg-gradient-to-br from-gray-900/80 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl shadow-2xl p-6 sm:p-8 mt-20 max-w-lg overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>

            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Apply for this position
              </h3>
              <p className="text-xs text-gray-400 mb-6">Fill in your details below to submit your application</p>

              {submitted && (
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Application submitted successfully!
                </div>
              )}

              <div className="space-y-4">
                {/* Full Name */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+880 1XXX-XXXXXX"
                    required
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Cover Letter */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're a great fit for this role..."
                    rows={4}
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  />
                </div>

                {/* Resume Upload */}
                <div className="group">
                  <label className="block text-xs font-medium text-gray-400 mb-2">
                    Resume/CV <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex items-center justify-center gap-2 w-full bg-black/40 border border-dashed border-gray-700 rounded-lg px-4 py-4 text-sm text-gray-400 hover:border-purple-500 hover:text-purple-400 cursor-pointer transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {fileName || "Click to upload or drag and drop"}
                    </label>
                  </div>
                  {fileName && (
                    <p className="text-xs text-purple-400 mt-2 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {fileName}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading || !formData.fullName || !formData.email || !formData.phone || !formData.resume}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-purple-400 hover:underline">Terms</a> and{" "}
                  <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}