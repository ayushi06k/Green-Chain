"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LinkedInLayout = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Green gradient on the right - positioned to match the image exactly */}
      <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-bl from-green-500/30 to-green-900/5 rounded-l-full blur-xl"></div>

      {/* Sidebar */}
      <aside className="fixed left-4 top-16 w-1/5 p-4 bg-gray-900 rounded-lg min-h-[80vh]">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full border-2 border-green-500"
          />
          <h3 className="mt-2 text-lg font-semibold">Mouriyan Gandhi</h3>
          <div className="flex space-x-2 mt-2">
            <button className="px-2 py-1 bg-gray-700 rounded">English</button>
            <button className="px-2 py-1 bg-gray-700 rounded">Hindi</button>
          </div>
        </div>
        <nav className="mt-6 space-y-2 text-sm">
          <p className="cursor-pointer">— Introduction</p>
          <p className="cursor-pointer">— Work Experience</p>
          <p className="cursor-pointer">— Studies</p>
          <p className="cursor-pointer">— Research Skills</p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-[22%] p-8">
        {/* Top Navbar */}
        <header className="flex justify-between items-center py-4">
          <nav className="flex space-x-4 text-sm">
            <button className="px-4 py-2 bg-gray-800 rounded-lg">About</button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg">Work</button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg">Experience</button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg">Skills</button>
          </nav>
          <span className="text-gray-400">14:57:47</span>
        </header>

        {/* Profile Section */}
        <section className="mt-6">
          <button className="px-4 py-2 bg-green-600 rounded-lg">Schedule a Call</button>
          <h1 className="text-5xl font-bold mt-4">"Mouriyan Gandhi"</h1>
          <h2 className="text-2xl text-gray-400">Professor & Researcher</h2>
          <div className="flex space-x-4 mt-2">
            <button className="px-4 py-2 bg-gray-800 rounded-lg">Portfolio</button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg">Github</button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg">LinkedIn</button>
            <button className="px-4 py-2 bg-gray-800 rounded-lg">Email</button>
          </div>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Hi, I am Mouriyan Gandhi, Student at  SRM University Chennai </p>
        </section>

        {/* Work Experience */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">SRM UNIVERSITY IST</h3>
            <p className="text-green-400">Avaroon, Noida Delhi | 2023 - 2024</p>
            <ul className="mt-2 list-disc pl-6 text-gray-300">
              <li>Specialisation in Machcine and Deep Learning.</li>
              <li></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LinkedInLayout;