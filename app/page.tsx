import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner, Toaster } from "@/components/ui/sonner";
import { QueryClient,  } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Training from "@/components/Training";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* Your content for the homepage */}
            <div className="min-h-screen bg-black px-0">
                <Navbar />
                <Hero />
                <WhyChooseUs />
                <Services />
                <Training />
                <AboutUs />
                <ContactUs />
                <Footer />
            </div>

        </TooltipProvider>
    );
}
