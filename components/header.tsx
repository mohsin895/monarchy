"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GradientButton } from "@/components/gradient-button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { fetchApi } from "@/lib/api";
import { MultiStepFormModal } from "./multiStepForm/multi-step-form";

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState("/logo.png");
  const pathname = usePathname();

  useEffect(() => {
    async function loadSetting() {
      const res = await fetchApi("monarch/setting");
      if (res?.data?.logo) {
        setLogo(`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${res.data.logo}`);
      }
    }
    loadSetting();
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpenNav(false);
  }, [pathname]);

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

  // Handler to close mobile menu
  const handleNavClick = () => {
    setIsOpenNav(false);
  };

  return (
    <header className="bg-black relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center w-full">
        
        {/* --- Logo (15%) --- */}
        <div className="basis-[15%] flex items-center justify-start">
          <Link href="/" onClick={handleNavClick}>
            <img
              src={logo}
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
          {/* <Link href="/knowledge" className={navLink("/knowledge")}>Knowledge</Link> */}
          <Link href="/support"  className={navLink("/support")}>Support</Link>
        </nav>

        {/* --- Get Started + Mobile Menu (15%) --- */}
        <div className="basis-[70%] md:basis-[15%] flex justify-end items-center gap-2">
          <div className="hidden md:block">
            <GradientButton onClick={() => setIsOpen(true)}>Get Started</GradientButton>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            onClick={() => setIsOpenNav(!isOpenNav)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpenNav ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpenNav && (
        <div className="md:hidden bg-black px-4 py-4 flex flex-col gap-4">
          <Link href="/" className={navLink("/")} onClick={handleNavClick}>Home</Link>
          <Link href="/about" className={navLink("/about")} onClick={handleNavClick}>About Us</Link>
          <Link href="/how-it-works" className={navLink("/how-it-works")} onClick={handleNavClick}>How it works</Link>
          <Link href="/career" className={navLink("/career")} onClick={handleNavClick}>Career</Link>
          {/* <Link href="/knowledge" className={navLink("/knowledge")} onClick={handleNavClick}>Knowledge</Link> */}
          <Link href="/support" className={navLink("/support")} onClick={() => { handleNavClick(); setIsOpen(true); }}>Support</Link>
          <GradientButton onClick={() => { handleNavClick(); setIsOpen(true); }} className="w-full">Get Started</GradientButton>
        </div>
      )}

      <MultiStepFormModal open={isOpen} onOpenChange={setIsOpen} />
    </header>
  );
}