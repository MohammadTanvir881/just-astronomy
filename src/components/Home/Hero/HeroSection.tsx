"use client";
import { FaArrowRight, FaStar, FaGlobeAmericas } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <Head>
        <link rel="preload" href="/galaxy-bg.jpg" as="image" />
      </Head>
      
      <section className="relative h-screen w-full overflow-hidden">
        {/* Galaxy Background with Gradient Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('/galaxy-bg.jpg')] bg-cover bg-center"
            style={{
              backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(15,23,42,0.8) 100%)"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/70 to-slate-900"></div>
        </div>

        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Animated Logo/Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-6 inline-flex items-center justify-center p-4 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
            >
              <FaGlobeAmericas className="text-blue-400 text-4xl" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              <span className="block">Discover the</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Universe Together
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8"
            >
              Join JUST Astronomy Club for stargazing sessions, cosmic workshops, and 
              interstellar exploration under the guidance of expert astronomers.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="#join"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-lg shadow-lg hover:shadow-purple-500/30 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
              >
                <span className="mr-3">Become a Member</span>
                <motion.span
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <FaArrowRight className="group-hover:rotate-45 transition-transform duration-300" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Planet Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <FaGlobeAmericas className="text-blue-300 text-5xl" />
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-slate-400 mb-2">Explore More</span>
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <div className="w-4 h-4 border-r-2 border-b-2 border-slate-400 transform rotate-45"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}