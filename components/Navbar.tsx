"use client";


import { NavbarOptions } from "@/constants";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // Add icons for hamburger and close



export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false); // Close menu on navigation (mobile)
      }
    };
    return (
        <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-3xl font-bold text-primary">FixiSecurity</div>
          {/* Desktop Nav */}
          <div className="hidden space-x-1 md:flex">
            {NavbarOptions.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-gray-300 hover:text-primary text-xl"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open Menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="text-gray-300 hover:text-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md absolute top-16 left-0 w-full flex flex-col items-center space-y-2 py-4 z-50">
            {NavbarOptions.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="text-gray-300 hover:text-primary text-xl w-full"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </nav>
    )

}