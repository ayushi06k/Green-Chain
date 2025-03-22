"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('12:23:48');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
    {/* Green gradient on the right */}
    <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-bl from-green-500/30 to-green-900/5 rounded-l-full blur-xl"></div>
      <Head>
        <title>Selene - Design and Engineer</title>
        <meta name="description" content="Portfolio of Selene, Design Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Location and Time */}
      <div className="absolute top-8 left-6 text-sm text-gray-300">ScholarX</div>
      <div className="absolute top-8 right-6 text-sm text-gray-300">{currentTime}</div>

      {/* Navigation */}
      <nav className="flex justify-center pt-8">
        <div className="flex items-center space-x-2 bg-gray-900/70 rounded-full px-2 py-2">
          <Link href="/" className="flex items-center justify-center p-2 bg-gray-800 rounded-full">
            <span>Home</span>
          </Link>

          <Link href="/about" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-800">
            <span>Opportunity</span>
          </Link>

          <Link href="/work" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-800">
            <span>Research</span>
          </Link>

          <Link href="/blog" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-800">
            <span>Sign Up</span>
          </Link>

          <Link href="/gallery" className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-800">
            <span>Profile</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 mt-16">
        <div className="my-12">
          <h1 className="text-7xl font-bold leading-tight mb-8">
            LEARN &<br />
            FIND RESEARCH
          </h1>

          <p className="text-2xl text-gray-200 max-w-xl leading-relaxed">
            Our platform is an end-to-end solution for research aspirants. It provides internship opportunities, AI-driven research guidance,
            mentorship, and a community to learn and collaborate.
          </p>

          <div className="mt-8">
            <Link href="/about" className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700">
              <span>Let's Go</span>
            </Link>
          </div>
        </div>

        {/* Community Section */}
        <div className="my-16 w-full">
  <div className="flex items-center justify-center mb-6">
    <h2 className="text-4xl font-bold">Community</h2>

    {/* Small Circle Button with "C" */}
    <button className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white font-bold hover:bg-gray-600 transition">
      C
    </button>
  </div>
          <div className="bg-gradient-to-br from-green-400/70 via-teal-500/70 to-blue-500/70 rounded-xl p-6 flex items-center justify-center">
            <div className="bg-gray-900 rounded-lg w-5/6 p-6 flex justify-center">
              {/* Image Upload Inside Gradient Card */}
              <img
                src="your-image-url.jpg" // Replace this with your actual image URL
                alt="Community"
                className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Background grid overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid -z-10 pointer-events-none"></div>

      {/* Global Styles */}
      <style jsx global>{`
        html, body {
          background-color: #000;
          color: white;
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .bg-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
}
