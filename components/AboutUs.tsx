// app/about/page.tsx
"use client"; // Indicate this is a client component

import React from "react";
import { motion } from "framer-motion";
import {  Target, LineChart } from "lucide-react";
import { aboutUsContent } from "@/constants"; // Ensure this path is correct for your project structure
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-black/95">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            {aboutUsContent.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-primary font-semibold mb-6"
          >
            {aboutUsContent.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-3xl mx-auto"
          >
            {aboutUsContent.description}
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {aboutUsContent.mission.title}
                </h3>
                <p className="text-gray-400">
                  {aboutUsContent.mission.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <LineChart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {aboutUsContent.vision.title}
                </h3>
                <p className="text-gray-400">
                  {aboutUsContent.vision.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {aboutUsContent.stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Our Leadership Team
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutUsContent.team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {member.name}
                    </h4>
                    <div className="text-primary mb-3">{member.role}</div>
                    <p className="text-gray-400">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Development Team */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Business Development Team
          </motion.h3>
          <div className="text-center text-gray-400">
            <p>Satyam Raj - Driving business growth and client relationships.</p>
          </div>
        </div>

        {/* Developer */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Developer
          </motion.h3>
          <div className="text-center text-gray-400">
            <p>Amitav Panda - Expert in software development and system design.</p>
          </div>
        </div>

        {/* Technical Team */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Technical Team
          </motion.h3>
          <div className="text-center text-gray-400">
            <p>Harsh Kumar, Samprit Das, Vivek Gupta, Akash More, Jay Kumar Pandey - Specialized in cybersecurity, threat analysis, and technical solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;