// components/contact-page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
    // Prevent background scrolling when mobile keyboard appears
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/80 to-slate-900 z-0" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto px-4 mt-8 md:mt-10"
        >
          <div className="max-w-3xl  mx-auto text-center px-2">
            <h1 className="text-3xl  mt-20 lg:mt-16 md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
              Contact Us
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto"
            >
              Reach out to us with your questions, ideas, or to join our cosmic journey. 
              Our team of star enthusiasts is ready to connect with you.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <Card className="bg-slate-800 border-slate-700 hover:border-blue-400/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-blue-300">
                    Our Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="p-2 md:p-3 rounded-full bg-blue-900/30 text-blue-300 hover:bg-blue-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-200">Phone</h3>
                      <p className="text-sm md:text-base text-slate-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="p-2 md:p-3 rounded-full bg-purple-900/30 text-purple-300 hover:bg-purple-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-200">Email</h3>
                      <p className="text-sm md:text-base text-slate-400">contact@astronomyclub.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:gap-4 hover:translate-x-1 transition-transform duration-200">
                    <div className="p-2 md:p-3 rounded-full bg-indigo-900/30 text-indigo-300 hover:bg-indigo-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-200">Location</h3>
                      <p className="text-sm md:text-base text-slate-400">123 Cosmos Avenue, Stellar City, SC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-slate-800/50 p-4 md:p-6 rounded-xl border border-slate-700 hover:border-purple-400/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-200">Club Hours</h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    { day: "Monday - Thursday", hours: "9:00 AM - 8:00 PM" },
                    { day: "Friday", hours: "9:00 AM - 10:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 11:00 PM" },
                    { day: "Sunday", hours: "Closed" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                      className="flex justify-between text-sm md:text-base text-slate-300 hover:text-slate-100 transition-colors duration-200"
                    >
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full"
            >
              <Card className="bg-slate-800 border-slate-700 hover:border-indigo-400/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-purple-300">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={mounted ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-sm md:text-base text-slate-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 hover:border-slate-500 transition-colors duration-200 text-sm md:text-base"
                        required
                      />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={mounted ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-sm md:text-base text-slate-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 hover:border-slate-500 transition-colors duration-200 text-sm md:text-base"
                        required
                      />
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={mounted ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-sm md:text-base text-slate-300">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={4}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 hover:border-slate-500 transition-colors duration-200 text-sm md:text-base min-h-[120px]"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={mounted ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 md:py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm md:text-base"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;