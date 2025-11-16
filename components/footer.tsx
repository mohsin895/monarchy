"use client"
import { useEffect, useState } from "react";

import { fetchApi } from "@/lib/api";

export default function Footer() {
  const [setting, setSetting] = useState<any>(null);

  useEffect(() => {
    async function getSettings() {
      const res = await fetchApi("monarch/setting");
      if (res?.data) setSetting(res.data);
    }
    getSettings();
  }, []);
  return (
    <footer className="bg-gradient-to-b from-[#0b0b2a] to-[#1b0939] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section: Logo and contact */}
     


        {/* Bottom text area */}
        <div className="text-gray-400 text-xs leading-relaxed space-y-4 mt-8">
         <div className="overflow-hidden whitespace-nowrap  text-white py-2">
<div className="relative overflow-hidden  text-white  flex items-center">
      {/* Static part */}
      <span className="font-semibold text-sm mr-2 whitespace-nowrap z-10 ml-4">
        Beware of fake groups impersonating Royal Monarch OR OJUS ONE:
      </span>

      {/* Animated part */}
      <div className="relative flex-1 overflow-hidden">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
       
          <span className="text-sm whitespace-nowrap">
            Please be vigilant against fake apps, messages, or any communication claiming to be from us. Always verify through our official channels. If you encounter anything suspicious, please report it immediately via email to care@royalmonarch.in. Stay safe and protect your information.
          </span>
          <span className="text-sm whitespace-nowrap ml-8">
            Please be vigilant against fake apps, messages, or any communication claiming to be from us. Always verify through our official channels. If you encounter anything suspicious, please report it immediately via email to care@royalmonarch.in. Stay safe and protect your information.
          </span>
        </div>
      </div>
    </div>
</div>


<div
  className="relative flex-1 overflow-hidden"
  dangerouslySetInnerHTML={{ __html: setting?.footer_content || "" }}
/>

 
          
          <p>

            © 2025 Royal Monarchs. All rights reserved. | Privacy Policy | Terms of Use
          </p>

        </div>
        
      </div>
    </footer>
  )
}
