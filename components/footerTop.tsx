"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function FooterTop() {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t pt-4 border-gray-700 pb-8">
          {/* Logo and address */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Royal Monarchs</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              404 - 14/15th Floor, One Horizon Center, Sector 43, Golf Course Road, 
              Gurugram, Haryana - 122002<br />
              contact@royalmonarchs.in | +91 98765 43210
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="hover:text-white"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="hover:text-white"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="hover:text-white"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="hover:text-white"><i className="fa-brands fa-google"></i></a>
            </div>
          </div>

          {/* Royal Monarchs */}
          <div>
            <h3 className="text-white font-semibold mb-3">Royal Monarchs</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Leaders</a></li>
              <li><a href="#" className="hover:text-white">Our Approach</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Mutual Funds</a></li>
              <li><a href="#" className="hover:text-white">Equities</a></li>
              <li><a href="#" className="hover:text-white">Derivatives</a></li>
              <li><a href="#" className="hover:text-white">Portfolio Mgmt</a></li>
              <li><a href="#" className="hover:text-white">Insurance</a></li>
            </ul>
          </div>

          {/* Policies & Security */}
          <div>
            <h3 className="text-white font-semibold mb-3">Policies & Security</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Investor Awareness</a></li>
              <li><a href="#" className="hover:text-white">AML Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className=" border-gray-700 my-8"></div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-8 text-xl">
          <a href="#" className="hover:text-white transition">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </footer>
  );
}
