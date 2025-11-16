"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { fetchApi } from "@/lib/api";
import Link from "next/link";
import instgram from "../public/icons/Instagram Logo.svg";
import facebook from "../public/icons/facebook.svg";
import twitter from "../public/icons/twitter.svg";
import whatsapp from "../public/icons/WhatsApp Logo.svg";
import linkedin from "../public/icons/linkedin.svg";
import google from "../public/icons/Google Logo.svg";
import Image from "next/image";

export default function FooterTop() {
  const [setting, setSetting] = useState<any>(null);

  useEffect(() => {
    async function getSettings() {
      const res = await fetchApi("monarch/setting");
      if (res?.data) setSetting(res.data);
    }
    getSettings();
  }, []);

  return (
    <footer className="bg-black text-gray-300 text-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* --- Column 1: Logo + Contact Info --- */}
          <div>
            {setting?.logo && (
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${setting.logo}`}
                alt={setting?.site_name || "Company Logo"}
                className="w-[160px] h-auto mb-4"
              />
            )}
            {/* <h2 className="text-lg font-semibold mb-3">
              {setting?.site_name || "OJUS"}
            </h2> */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {setting?.address ||
                "404 - 14/15th Floor, One Horizon Center, Sector 43, Gurugram, Haryana - 122002"}
              <br />
              {setting?.email || "contact@royalmonarchs.in"} |{" "}
              {setting?.phone || "+91 98765 43210"}
            </p>

            {/* --- Social Icons --- */}
            <div className="flex space-x-3 mt-5">
             

              
          <div className="flex space-x-6 mt-3 md:mt-0">
          {/* <a href="#" className="hover:text-white transition"> */}
          {/* <img
                src='instagram.png'
              
                className=" h-auto mb-4"
              />
            </a> */}
            <a href={setting?.instgram} className="hover:text-white transition">
              <Image src={instgram || ""} alt="instgram" className="h-auto mb-4" width={30} height={30} />
            </a>
            <a href={setting?.linkdi} className="hover:text-white transition">
                <Image src={linkedin || ""} alt="instgram" className="h-auto mb-4" width={30} height={30} />
            </a>
            <a href={setting?.wp} className="hover:text-white transition">
                <Image src={whatsapp || ""} alt="instgram" className="h-auto mb-4" width={30} height={30} />
            </a>
            <a href={setting?.twitter} className="hover:text-white transition">
                <Image src={twitter  || ""} alt="instgram" className="h-auto mb-4" width={30} height={30} />
            </a>
            <a href={setting?.fb} className="hover:text-white transition">
                <Image src={facebook || ""} alt="instgram" className="h-auto mb-4" width={30} height={30} />
            </a>
            <a href={setting?.youtube} className="hover:text-white transition">
                <Image src={google || ""} alt="instgram" className="h-auto mb-4" width={30} height={30} />
            </a>
          </div>
            </div>
          </div>

          {/* --- Column 2: Company --- */}
          <div>
            <h3 className="text-white font-semibold mb-4">Royal Monarchs</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Leaders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* --- Column 3: Products --- */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Mutual Funds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Equities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Derivatives
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Portfolio Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* --- Column 4: Policies --- */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Policies & Security
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/terms-of-use" className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Investor Awareness
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  AML Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Divider Line --- */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs">
        

        </div>
      </div>
    </footer>
  );
}
