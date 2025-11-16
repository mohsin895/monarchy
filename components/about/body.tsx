"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutBody() {
  const pathname = usePathname();

  const tabs = [
    { name: "Our Firm", href: "/about/firm" },
    { name: "Our Culture", href: "/about/culture" },
    { name: "Our Approach", href: "/about/approach" },
    { name: "Our Team", href: "/about/team" },
  ];

  return (
    <section className="relative bg-black text-white py-2 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {tabs.map((tab) => {
            const isActive =
              pathname === tab.href ||
              (pathname === "/about" && tab.href === "/about/firm") || // ✅ make "Our Firm" active when on /about
              pathname.startsWith(tab.href);

            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`text-sm sm:text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-8 text-gray-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          {(pathname === "/about" || pathname === "/about/firm") && (
            <div>
                <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        The current situation inspired our entrepreneurial vision of developing innovative
        solutions to address the demand and supply imbalance of quality financial planning.
      </p>

      <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        The current situation inspired our entrepreneurial vision of developing innovative
        solutions to address the demand and supply imbalance of quality financial planning.
      </p>

     {/* Venn Diagram */}
     <div className="relative mx-auto mt-16 w-[360px] h-[360px] sm:w-[440px] sm:h-[440px]">

     <img src="/firm.png" className="w-full h-full mb-2" />



</div>


            </div>
            
          )}
        </div>
      </div>
    </section>
  );
}
