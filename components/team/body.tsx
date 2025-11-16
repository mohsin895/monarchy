"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
  id: string | number;
  title: string;
  designation: string;
  image: string | null;
}

export default function TeamBody() {
  const [team, setTeams] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/monarch/team`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const json = await res.json();

        if (Array.isArray(json.data)) {
          const formatted = json.data.map((item: any) => ({
            id: item.id || item._id || Math.random(),
            title: item.title || "Unknown",
            designation: item.designation || "",
            image: item.image
              ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.image}`
              : null,
          }));
          setTeams(formatted);
        } else {
          console.warn("Unexpected API response:", json);
          setError("Unexpected data format received");
        }
      } catch (err) {
        console.error("Error fetching team:", err);
        setError(err instanceof Error ? err.message : "Failed to load team");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center items-center py-10 text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
          Loading team...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex justify-center items-center py-10 text-red-400">
        Error: {error}
      </section>
    );
  }

  if (team.length === 0) {
    return (
      <section className="flex justify-center items-center py-10 text-gray-400">
        No team members available.
      </section>
    );
  }

  return (
    <section className="relative w-full bg-black text-white py-2 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* --- Heading --- */}
        <div className="max-w-6xl">
          <p className="text-gray-400 text-sm sm:text-base mb-3">
            We've been in the business for years and have built an excellent
            professional network.
          </p>
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Our team is composed of experts from various fields — marketing,
            technology, operations, and finance. Together, we're reinventing how
            people think about financial planning.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug">
            Faces of people truly passionate <br />
            <span className="text-blue-400">
              about reinventing financial planning.
            </span>
          </h2>
        </div>

        {/* --- Team Grid --- */}
       {/* --- Team Grid Wrapper (7xl width) --- */}
<div className="w-full">
  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
    {team.map((member) => (
      <div
        key={member.id}
        className="flex flex-col items-center justify-end bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 
        rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.4)] 
        h-[220px] sm:h-[250px] md:h-[280px] 
        w-full max-w-[200px] mx-auto text-center p-4 
        transition-transform hover:scale-105 relative overflow-hidden"
      >
        {member.image && (
          <div className="absolute inset-0">
            <Image
              src={member.image}
              alt={member.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
        )}
        <div className="mt-auto relative z-10">
          <h3 className="font-semibold text-white text-sm sm:text-base">
            {member.title}
          </h3>
          <p className="text-xs text-gray-200">{member.designation}</p>
        </div>
      </div>
    ))}

    {/* --- Last Card (Join Us) --- */}
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 
      rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.4)] 
      h-[220px] sm:h-[250px] md:h-[280px] 
      w-full max-w-[200px] mx-auto text-center p-4">
      <h3 className="font-semibold text-white text-sm sm:text-base mb-3">
        Be part of <br /> something new.
      </h3>
      <button className="bg-[#00E676] text-black font-semibold text-xs px-4 py-2 rounded-md hover:bg-[#00c968] transition">
        View Roles
      </button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}