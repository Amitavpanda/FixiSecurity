"use client";


import { NavbarOptions } from "@/constants";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";



export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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
      }
    };
    return (
        <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-3xl font-bold text-primary">CyberShield</div>
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
        </div>
      </nav>
    )

}