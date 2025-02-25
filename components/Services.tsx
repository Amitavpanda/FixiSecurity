"use client";  


import React from "react";
import { useRouter } from "next/navigation";  
import { motion } from "framer-motion";
import { ChevronRight, Shield, ClipboardCheck, FileCheck, Settings, GraduationCap } from "lucide-react";
import { services } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const iconMap = {
  shield: Shield,
  "clipboard-check": ClipboardCheck,
  "file-check": FileCheck,
  settings: Settings,
  graduation: GraduationCap,
};

const Services = () => {
  const router = useRouter();

  const handleSubCategoryClick = (categoryId: string, subCategoryId: string) => {
    router.push(`/services/${categoryId}/${subCategoryId}`);
  };

  return (
    <section id="services" className="py-20 bg-black/95">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Comprehensive cybersecurity solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    {iconMap[category.icon as keyof typeof iconMap] && 
                      React.createElement(iconMap[category.icon as keyof typeof iconMap], {
                        className: "h-6 w-6 text-primary"
                      })
                    }
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="subcategories" className="border-primary/20">
                      <AccordionTrigger className="text-primary hover:text-primary/80">
                        View Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {category.subCategories.map((subCategory) => (
                            <li key={subCategory.id}>
                              <button
                                onClick={() => handleSubCategoryClick(category.id, subCategory.id)}
                                className="w-full text-left px-4 py-2 text-gray-300 hover:text-primary hover:bg-primary/5 rounded-md flex items-center justify-between group transition-all duration-200"
                              >
                                <span>{subCategory.title}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;