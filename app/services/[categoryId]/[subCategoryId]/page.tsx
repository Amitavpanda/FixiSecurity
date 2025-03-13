// app/services/[categoryId]/[subCategoryId]/page.tsx
"use client";  // Indicate this is a client component

import { useRouter, useParams } from "next/navigation";
import { services } from "@/constants"; // Make sure this path is correct
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceDetail = () => {
  const router = useRouter();
  const { categoryId, subCategoryId } = useParams();

  const category = services.find((c) => c.id === categoryId);
  const subCategory = category?.subCategories.find((sc) => sc.id === subCategoryId);

  if (!category || !subCategory) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-black/95 pt-20">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <Button
          variant="ghost"
          className="mb-8 text-primary hover:text-primary/80"
          onClick={() => router.back()} // Handle going back
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:space-x-8"
        >
          {/* Left Side: Content */}
          <div className="w-full md:w-3/5">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {subCategory.title}
            </h1>
            <p className="text-gray-400 text-lg mb-8">{subCategory.description}</p>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Benefits</h2>
                <ul className="space-y-3">
                  {subCategory.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
                <ul className="space-y-3">
                  {subCategory.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 bg-black/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Details</h2>
              <p className="text-gray-300 mb-4">{subCategory.details.description}</p>
              {subCategory.details.methodology && subCategory.details.methodology.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-white mb-2">Methodology</h3>
                  <ul className="space-y-3 pl-5">
                    {subCategory.details.methodology.map((method, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start text-gray-300"
                      >
                        <div className="bullet-point" />
                        {method}
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </div>

          {/* Image Section on the Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full md:w-2/5 flex justify-center mt-6 md:mt-0"
          >
            <img
              src={subCategory.image.src} // Use the 'image' property from the subcategory
              alt={`${subCategory.title} Illustration`}
              className="rounded-lg shadow-lg w-full h-auto object-cover" // Style the image for a professional look
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;