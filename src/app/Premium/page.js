"use client"
import React, { useState } from "react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeSection() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const Cards = [{title: "Explore Research", link: "/research"},{title: "Lets's Connect", link: "/connect"},{title: "Apply now", link: "/apply"}]
  

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
            {["Home", "Research", "Profile"].map((item, index) => (
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
          {["Premium", "Login", "Sign Up"].map((label, index) => (
            <button key={index} className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700 cursor-pointer">{label}</button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 px-6 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto rounded-2xl shadow-xl overflow-hidden text-center mt-32">
        {/* Floating Gradient Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-40 blur-3xl rounded-full w-2/3 h-2/3 m-auto"></div>
        
        <div className="max-w-lg md:max-w-2xl relative z-10 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6">Explore the Premium Features </h2>
          <p className="text-lg mb-6 text-gray-300">
            Grow and Gain knowladge more with our premium features</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105">
            Let's Connect →
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-6 md:mt-0 relative z-10">
          <img src="https://images.ctfassets.net/3g7s03pwyjhz/4kjPPgkDn2CY0UOEuSO8OQ/53270ccd29a25fee652298bc97c77d72/hero-unlock-premium-features.png?fm=webp&w=3840&q=75" alt="Recruitment Dashboard" className="rounded-lg w-full max-w-xl shadow-lg" />
        </div>
      </section>
      
      {/* Cards */}
      <div className="mt-10 flex justify-between max-w-6xl mx-auto relative z-10">
        <Link href="/research">
          <motion.div 
            className="p-4 w-[550px] h-[140px] rounded-lg shadow-lg flex items-center justify-center text-center cursor-pointer bg-white text-black relative overflow-hidden"
            onMouseEnter={() => setExpandedCard(0)}
            onMouseLeave={() => setExpandedCard(null)}
            animate={expandedCard === 0 ? { backgroundColor: "#3b82f6", color: "white" } : {}}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold">Explore Research</h4>
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
            <h4 className="text-xl font-semibold">Let's Connect</h4>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

