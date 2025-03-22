"use client";
import React, { useState, useEffect } from "react";

const LinkedInLayout = () => {
  const [feedHeight, setFeedHeight] = useState(600);

  useEffect(() => {
    const handleScroll = () => {
      setFeedHeight((prevHeight) =>
        Math.min(2000, 600 + window.scrollY / 2)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Green gradient on the right */}
      <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-bl from-green-500/30 to-green-900/5 rounded-l-full blur-xl"></div>

      {/* LinkedIn Navbar */}
      <header className="bg-gray-900/90 backdrop-blur-lg p-3 flex items-center justify-between fixed top-0 w-full z-50">
        {/* Left: LinkedIn Name */}
        <div className="text-white text-xl font-bold ml-4">ScholarX</div>

        {/* Middle: Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
          />
        </div>

        {/* Right: Community, Messaging, Notifications, Learning with Gradient Hover */}
        <div className="flex gap-6 text-white mr-4">
          {["Community", "Messaging", "Notifications", "Learning"].map(
            (item, index) => (
              <span
                key={index}
                className="cursor-pointer px-4 py-1 rounded-full transition duration-300 ease-in-out
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white"
              >
                {item}
              </span>
            )
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex gap-4 px-4 pt-20">
        {/* Left Sidebar - Small Rectangle Card & Fixed */}
        <aside className="w-[22%] bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg h-[250px] sticky top-16">
          Profile Section
        </aside>

        {/* Feed Section - Expands on Scroll */}
        <main
          className="w-[50%] bg-gray-700/50 backdrop-blur-lg p-4 rounded-lg transition-all duration-300 ease-in-out"
          style={{ minHeight: `${feedHeight}px` }}
        >
          {/* LinkedIn Post */}
          <div className="bg-white text-black p-4 rounded-lg shadow-lg">
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-VJxaFIy3CEl9egxp5FJ1Qgk5jrPM03s4A&s"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">Dr.Prashant Sharma</h3>
                <p className="text-sm text-gray-600" >Researcher | Professor</p>
              </div>
            </div>

            {/* Post Caption */}
            <p className="mt-3 text-gray-800">
              Just launched a new project! 🚀 Excited to share this with the community.  
              #Tech #React #Innovation
            </p>

            {/* Post Image */}
            <img
              src="https://www.lawctopus.com/wp-content/uploads/2021/12/NGO-R-1-1.png"
              alt="Post Image"
              className="w-full mt-3 rounded-lg"
            />
          </div>
        </main>

        {/* Right Sidebar - Small Rectangle Card & Fixed */}
        <aside className="w-[25%] bg-gray-800/50 backdrop-blur-lg p-4 rounded-lg h-[250px] sticky top-16">
          Trending Now
        </aside>
      </div>
    </div>
  );
};

export default LinkedInLayout;
