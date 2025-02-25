import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import { Toaster as Sonner, Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Training from "@/components/Training";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

export default function Home() {
    return (
        <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* Your content for the homepage */}
            <div className="min-h-screen bg-black">
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
