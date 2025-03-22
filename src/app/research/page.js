"use client"
import React, { useState, useEffect } from "react"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe } from "lucide-react";

const cards = [
  {
    title: "Find top talent faster",
    description: "Surface the most qualified candidates, reduce irrelevant applications, and fill critical roles with ease.",
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Confidently scale across borders",
    description: "Use insights into talent markets, salary averages, and compliance to make every global hire a success.",
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Expand your reach globally",
    description: "Leverage our platform to hire and manage employees across multiple countries seamlessly.",
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Streamline your hiring process",
    description: "Optimize every step of your hiring journey with data-driven insights and automation tools.",
    image: "https://via.placeholder.com/400x250"
  }
];

const Card = ({ title, description, image }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default function research() {
  const [hoveredNav, setHoveredNav] = useState(null);
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between w-full px-8  p-4 bg-gray-100 text-black border-b border-gray-300 relative z-50">
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
      
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 px-6 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto rounded-2xl shadow-xl overflow-hidden text-center mt-32">
        {/* Floating Gradient Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-40 blur-3xl rounded-full w-2/3 h-2/3 m-auto"></div>
        
        <div className="max-w-lg md:max-w-2xl relative z-10 text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-6">Find the right candidates faster</h2>
          <p className="text-lg mb-6 text-gray-300">
            Don’t just find more candidates—find the right ones. With AI Powered Research Insights, Decode complex research papers with Al-driven summaries and insights.p/</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105">
            Get Started →
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-6 md:mt-0 relative z-10">
          <img src="https://research.adobe.com/wp-content/uploads/2021/07/Collab_featured.jpg" alt="Iamge" className="rounded-lg w-full max-w-xl shadow-lg" />
        </div>
      </section>
      
      {/* Cards Section */}
      <section className="bg-gray-100 py-24 px-6 w-full">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-6">AI Powered Research Insights</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you’re here to gain knowladge , make yourself better, or Research Intership, then this platform is for you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
