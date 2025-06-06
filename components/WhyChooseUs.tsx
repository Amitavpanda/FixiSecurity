"use client"; // Indicates this is a client-rendered component

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Award, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Define the features array
const features = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "24/7 Security Operation Center",
        description: "Round-the-clock monitoring and response to security threats."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Industry-Leading Threat Intelligence",
        description: "Advanced threat detection and prevention systems."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "99.9% Threat Detection Rate",
        description: "Exceptional accuracy in identifying security threats."
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "Rapid Incident Response",
        description: "Swift action when security incidents occur."
    },
];

const WhyChooseUs = () => {

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="py-20 bg-gradient-to-b from-black to-black/95" id="why-choose-us">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        With over a decade of experience in cybersecurity, we provide comprehensive protection for businesses of all sizes.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Content on the left */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8">
                        <div className="grid gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full bg-black/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg">
                                        <CardContent className="p-6 flex flex-col items-center text-center">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 10 }} // Rotate effect on hover for icons
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="mb-4"
                                            >
                                                {feature.icon}
                                            </motion.div>
                                            <h3 className="text-xl font-semibold text-white mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {feature.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Animated Shield on the right */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 animate-float">
                            <motion.div
                                className="w-full h-full flex items-center justify-center animate-pulse"
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                            >
                                <ShieldCheck className="w-48 h-48 text-primary/80" />
                                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <Card className="bg-black/60 backdrop-blur-sm border-primary/20 max-w-3xl mx-auto shadow-lg">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ready to Secure Your Digital Assets?
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Join hundreds of satisfied clients who trust us with their cybersecurity needs.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                                onClick={scrollToServices} // Call the scroll function on button click

                            >
                                Get Started Today
                            </motion.button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;