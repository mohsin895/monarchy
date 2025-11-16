"use client";

import { useEffect, useState } from "react";
export default function CareerBody() {
  const [perks, setPerks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerks = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/monarch/perk`);
        const json = await res.json();

        if (Array.isArray(json.data)) {
          const formatted = json.data.map((item: any) => ({
            ...item,
            image: item.image
              ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item.image}`
              : null,
          }));
          setPerks(formatted);
        } else {
          console.warn("Unexpected API response:", json);
        }
      } catch (err) {
        console.error("Error fetching perks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPerks();
  }, []);

  if (loading) {
    return (
      <section className="flex justify-center items-center py-10 text-gray-400">
        Loading benefits...
      </section>
    );
  }

  if (perks.length === 0) {
    return (
      <section className="flex justify-center items-center py-10 text-gray-400">
        No benefits available.
      </section>
    );
  }
  return (
    <section className="relative w-full bg-black text-white font-sans py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* ------------------ THE PERKS ------------------ */}
        <div>
          <h2 className="text-5xl font-bold mb-12 ">The <span className="text-[#917EE0]">Perks</span></h2>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {perks.map((perk, index) => (
    <div
      key={index}
      className="bg-dark border border-[#191919] rounded-xl p-6  transition-all"
    >
      <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-3">
        {perk.image ? (
          <img
            src={perk.image}
            alt={perk.title}
            className="h-12 w-12 object-contain"
          />
        ) : (
          <div className="h-12 w-12 bg-gray-700 rounded flex items-center justify-center text-xs text-gray-300">
            no img
          </div>
        )}
        <span>{perk.title}</span>
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {perk.description}
      </p>
    </div>
  ))}
</div>

        </div>

        {/* ------------------ OPEN POSITIONS ------------------ */}
        <div className="space-y-8">
          <div className="border-b border-purple-500/40 w-12 mb-2"></div>
          <h2 className="text-3xl font-bold text-white">Open Positions</h2>
          <p className="text-gray-400 text-sm">
            Focus on doing your best work, we’ll take care of the rest.
          </p>

          {/* Job Select Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
            <div className="text-gray-300 text-base font-medium w-32">Marketing</div>
            <div className="flex items-center w-full sm:w-[400px] bg-[#141432] border border-purple-500/20 rounded-md overflow-hidden">
              <input
                type="text"
                value="Marketing Executive"
                readOnly
                className="flex-1 bg-transparent text-gray-200 text-sm px-4 py-3 outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
                More
              </button>
            </div>
          </div>

          {/* Placeholder for another position */}
          <div className="pt-10 text-gray-500 text-sm">Dealing</div>
        </div>

        {/* ------------------ FOOTER TEXT ------------------ */}
        <footer className="text-[11px] text-gray-500 leading-relaxed pt-12 border-t border-purple-500/10">
          Royal Monarch is proud to be an equal opportunity workplace. We actively support an inclusive culture and strive to eliminate
          barriers that prevent full participation of our employees. We encourage people of all backgrounds to apply and be part of our
          mission-driven team.
        </footer>
      </div>

   
    </section>
  );
}
