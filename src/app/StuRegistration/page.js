"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function ProfessorRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center relative">
      {/* Navbar */}
      <nav className="flex items-center p-4 bg-gray-100 text-black border-b border-gray-300 relative z-50 w-full">
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
                whileHover={{ scale: 1.2 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button className="bg-white p-2 rounded-full shadow-md cursor-pointer">
            <Globe className="w-5 h-5 text-gray-700" />
          </button>
          {["Language", "Login", "Sign Up"].map((label, index) => (
            <button key={index} className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700 cursor-pointer">{label}</button>
          ))}
        </div>
      </nav>
      
      {/* Registration Section */}
      <section className="relative w-full flex flex-col items-center justify-center text-left pt-32 pb-16 px-6 bg-gray-900 text-white">
        <div className="max-w-lg bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6">Professor Registration</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
            <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
            <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium mt-4">Register</button>
          </form>
        </div>
      </section>
    </div>
  );
}