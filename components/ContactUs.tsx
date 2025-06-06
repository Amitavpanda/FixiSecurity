"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha"; // Add reCAPTCHA v2

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ipLimitReached, setIpLimitReached] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null); // State for CAPTCHA

  // Check IP submission limit on component mount
  useEffect(() => {
    checkIpSubmissionLimit();
  }, []);

  const checkIpSubmissionLimit = () => {
    // Get submission history from localStorage
    const submissionHistory = JSON.parse(localStorage.getItem('submissionHistory') || '[]');
    const currentTime = new Date().getTime();
    
    // Filter submissions in the last hour
    const recentSubmissions = submissionHistory.filter(
      (submission: { timestamp: number }) => 
        currentTime - submission.timestamp < 3600000 // 1 hour in milliseconds
    );
    
    if (recentSubmissions.length >= 2) {
      setIpLimitReached(true);
      toast.error("You have reached the submission limit. Please try again later.");
    }

    // Clean up old submissions (older than 1 hour)
    if (submissionHistory.length !== recentSubmissions.length) {
      localStorage.setItem('submissionHistory', JSON.stringify(recentSubmissions));
    }
  };

  const recordSubmission = () => {
    const submissionHistory = JSON.parse(localStorage.getItem('submissionHistory') || '[]');
    submissionHistory.push({ timestamp: new Date().getTime() });
    localStorage.setItem('submissionHistory', JSON.stringify(submissionHistory));
    
    // Check if limit reached after this submission
    if (submissionHistory.length >= 2) {
      setIpLimitReached(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (ipLimitReached) {
      toast.error("You have reached the submission limit. Please try again later.");
      return;
    }

    // Validate CAPTCHA
    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Verify the CAPTCHA token on the backend
      const captchaResponse = await fetch('/api/verifyCaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ captchaValue }),
      });

      const captchaResult = await captchaResponse.json();

      if (!captchaResult.success) {
        throw new Error("Invalid CAPTCHA.");
      }

      // Using EmailJS to send the form data to your company email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Using environment variables
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        {
          from_name: formData.name,
          from_email: formData.email,
          contact_number: formData.contact,
          message: formData.message,
          to_email: 'contactus@fixisecurity.com', // Your company email
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Using environment variables
      );

      // Record this submission for IP rate limiting
      recordSubmission();

      toast.success("Message sent successfully!");

      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });

      // Clear CAPTCHA
      setCaptchaValue(null);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/95 to-black">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                      <User className="h-4 w-极4" />
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black极/40 border border-primary/20 rounded-md focus:outline-none focus:border-primary/40 text-white"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/40 border border-primary/20 rounded-md focus:outline-none focus:border-primary/40 text-white"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/40 border border-primary/20 rounded-md focus:outline-none focus:border-primary/40 text-white"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-black/40 border border-primary/20 rounded-md focus:outline-none focus:border-primary/40 text-white resize-none"
                      placeholder="Enter your message"
                      required
                    />
                  </div>

                  {/* Add reCAPTCHA v2 */}
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(value) => setCaptchaValue(value)}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting || ipLimitReached}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : ipLimitReached ? (
                      "Submission Limit Reached"
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                <div className="space极-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="text-gray-400">services@fixisecurity.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-400">+91 8062179332</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;