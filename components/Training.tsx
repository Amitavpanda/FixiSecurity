"use client"; // Make this a client component so we can use client-side features.

import React from "react";
import { motion } from "framer-motion"; // Animation handling
import { GraduationCap, ChevronRight } from "lucide-react";
import { services } from "@/constants";
import { useRouter } from "next/navigation"; // Use Next.js routing

const trainingCategory = services.find((category) => category.id === "security-training");

const Training = () => {
  const router = useRouter(); // Utilize Next.js router

  const handleTrainingClick = (trainingId: string) => {
    // Handle click to navigate to the respective training page
    router.push(`/services/security-training/${trainingId}`);
  };

  return (
    <section id="training" className="py-20 bg-gradient-to-b from-black/95 to-black">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-white">Training Programs</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Enhance your cybersecurity skills with our specialized training programs
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainingCategory?.subCategories.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => handleTrainingClick(training.id)}
            >
              <div className="h-full bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                    {training.title}
                  </h3>
                  <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-gray-400 mb-4">{training.description}</p>
                <div className="space-y-2">
                  {training.features.slice(0, 2).map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center text-sm text-primary">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;