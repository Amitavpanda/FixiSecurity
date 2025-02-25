// app/footer/page.tsx
"use client"; // Indicates this is a client-rendered component

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"; // Importing social media icons
import { NavbarOptions } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-between items-center space-x-8 mb-4"
        >
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Quick Links Section from NavbarOptions */}
          <div className="flex flex-col items-center">
            <h5 className="text-white font-semibold mb-2">Quick Links</h5>
            <div className="flex space-x-4">
              {NavbarOptions.map(option => (
                <a 
                  key={option.id} 
                  href={`#${option.id}`} 
                  className="text-gray-400 hover:text-primary"
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-4"
        >
          <p className="text-gray-400">
            We are dedicated to providing top-notch cybersecurity solutions to safeguard your digital presence.
          </p>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-400">Email: <a href="mailto:info@yourdomain.com" className="text-primary">info@yourdomain.com</a></p>
        </motion.div>

        {/* Privacy Policy and Terms of Service Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400">
            <a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a> | 
            <a href="/terms-of-service" className="hover:text-primary"> Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;