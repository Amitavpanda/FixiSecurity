
"use client"
import { Shield, ArrowRight, Lock } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToWhyChooseUs = () => {
    const servicesSection = document.getElementById('why-choose-us');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80')] bg-cover bg-center bg-no-repeat opacity-10"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative z-10 flex min-h-screen items-center justify-between px-4">
        <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          <div className="animate-fade-up text-center lg:text-left lg:w-1/2">
            <div className="mb-6 inline-flex">
              <Shield className="h-16 w-16 text-primary animate-pulse" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Securing Your Digital Future
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Protect your business with enterprise-grade cybersecurity solutions. We defend against threats before they become breaches.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <Button size="lg" className="group " onClick={scrollToWhyChooseUs} >
                Get Started
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>

            </div>
          </div>
          
          {/* Animated 3D object */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 animate-float">
              <Lock className="w-full h-full text-primary/80 animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
