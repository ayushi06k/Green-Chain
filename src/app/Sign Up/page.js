"use client"
import React, { useState } from "react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeSection() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const cards = [{title: "Explore Research", link: "/research"},{title: "Lets's Connect", link: "/connect"},{title: "Apply now", link: "/apply"}]
  

  return (
    <div className="min-h-screen bg-gray-100 text-black font-sans relative">
      {/* Navbar */}
      <nav className="flex items-center p-4 bg-gray-100 text-black border-b border-gray-300 relative z-50">
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-black text-white px-3 py-1 rounded-full shadow-lg text-md font-semibold">
            <span className="bg-white text-black px-2 py-1 rounded-full font-bold text-md flex items-center">R</span>
            <span className="ml-2">Reholar</span>
          </div>
          <div className="flex space-x-4 ml-4">
            {["Home", "Research", "Register", "Profile"].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-sm font-medium text-gray-700 cursor-pointer hover:text-black relative p-2"
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
                animate={hoveredNav === index ? { scale: 1.2 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item}
                {hoveredNav === index && (
                  <motion.div 
                    className="absolute left-0 top-full mt-2 bg-white shadow-lg p-6 rounded-lg w-96 z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <p className="text-gray-700 text-sm">More about {item}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button className="bg-white p-2 rounded-full shadow-md cursor-pointer"><Globe className="w-5 h-5 text-gray-700" /></button>
          {["Language", "Login", "Sign Up"].map((label, index) => (
            <button key={index} className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700 cursor-pointer">{label}</button>
          ))}
        </div>
      </nav>

      {/* Home Section with Circuit Animation */}
      <section className="relative bg-black text-white py-32 px-12 mt-10 rounded-xl max-w-6xl mx-auto shadow-lg text-center overflow-hidden z-10">
      <h2 className="text-4xl font-bold relative z-10">Register Yourself and Explore!</h2>
      <h1 className="text-5xl font-extrabold mt-2 relative z-10">Choose the Sign Up below!</h1> 
        
        {/* High-Tech Animated Node Circuit Elements */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="relative w-full h-full">
            {[...Array(10)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-3 h-3 bg-blue-500 rounded-full"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
            ))}
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={`line-${index}`}
                className="absolute w-1 h-32 bg-blue-400"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 + index, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <div className="mt-10 flex justify-between max-w-6xl mx-auto relative z-10">
        <Link href="/research">
          <motion.div 
            className="p-4 w-[550px] h-[140px] rounded-lg shadow-lg flex items-center justify-center text-center cursor-pointer bg-white text-black relative overflow-hidden"
            onMouseEnter={() => setExpandedCard(0)}
            onMouseLeave={() => setExpandedCard(null)}
            animate={expandedCard === 0 ? { backgroundColor: "#3b82f6", color: "white" } : {}}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold">Student Registration</h4>
          </motion.div>
        </Link>

        <Link href="/connect">
          <motion.div 
            className="p-4 w-[550px] h-[140px] rounded-lg shadow-lg flex items-center justify-center text-center cursor-pointer bg-white text-black relative overflow-hidden"
            onMouseEnter={() => setExpandedCard(1)}
            onMouseLeave={() => setExpandedCard(null)}
            animate={expandedCard === 1 ? { backgroundColor: "#3b82f6", color: "white" } : {}}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold">Professor Registration</h4>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
