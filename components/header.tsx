"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GradientButton } from "@/components/gradient-button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Detect if a path (or its nested path) is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const navLink = (path: string) =>
    `text-[12px] transition-all duration-300 ${
      isActive(path)
        ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold"
        : "text-foreground/60 hover:text-foreground"
    }`;

  return (
    <header className="bg-black relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center w-full">
        
        {/* --- Logo (15%) --- */}
        <div className="basis-[15%] flex items-center justify-start">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-[80px] h-[60px] cursor-pointer"
            />
          </Link>
        </div>

        {/* --- Nav Links (70%) --- */}
        <nav className="hidden md:flex basis-[70%] justify-center items-center gap-6">
          <Link href="/" className={navLink("/")}>Home</Link>
          <Link href="/about" className={navLink("/about")}>About Us</Link>
          <Link href="/how-it-works" className={navLink("/how-it-works")}>How it works</Link>
          <Link href="/career" className={navLink("/career")}>Career</Link>
          <Link href="/knowledge" className={navLink("/knowledge")}>Knowledge</Link>
          <Link href="/support" className={navLink("/support")}>Support</Link>
        </nav>

        {/* --- Get Started + Mobile Menu (15%) --- */}
        <div className="basis-[15%] flex justify-end items-center">
          <Link href="/get-started" className="hidden md:block">
            <GradientButton>Get Started</GradientButton>
          </Link>

          {/* --- Mobile Menu Button --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white ml-2 focus:outline-none"
          >
            {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 py-4 flex flex-col gap-4">
          <Link href="/" className={navLink("/")}>Home</Link>
          <Link href="/about" className={navLink("/about")}>About Us</Link>
          <Link href="/how-it-works" className={navLink("/how-it-works")}>How it works</Link>
          <Link href="/career" className={navLink("/career")}>Career</Link>
          <Link href="/knowledge" className={navLink("/knowledge")}>Knowledge</Link>
          <Link href="/support" className={navLink("/support")}>Support</Link>
          <Link href="/get-started" className="w-full">
            <GradientButton className="w-full">Get Started</GradientButton>
          </Link>
        </div>
      )}
    </header>
  );
}
