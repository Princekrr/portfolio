import React from 'react';
import { FaLinkedin, FaPinterest, FaArrowRight } from 'react-icons/fa';

export default function ProjectPortfolioPage() {
  const landscapeImage = `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FFA500;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FFD700;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00BCD4;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" rx="15" ry="15" fill="url(#skyGradient)"/>
      <!-- Mountains -->
      <path d="M0 120L80 90L160 110L240 80L320 100L400 85V200H0Z" fill="#334155" opacity="0.7"/>
      <path d="M0 140L80 110L160 130L240 100L320 120L400 105V200H0Z" fill="#475569" opacity="0.5"/>
      <!-- Water -->
      <ellipse cx="200" cy="160" rx="150" ry="25" fill="#3337F8" opacity="0.3"/>
      <!-- Trees -->
      <circle cx="60" cy="140" r="12" fill="#059669"/>
      <circle cx="90" cy="135" r="10" fill="#059669"/>
      <circle cx="320" cy="135" r="11" fill="#059669"/>
      <circle cx="350" cy="130" r="8" fill="#059669"/>
      <!-- Buildings -->
      <rect x="270" y="100" width="12" height="30" fill="#374151"/>
      <rect x="285" y="95" width="15" height="35" fill="#374151"/>
      <rect x="305" y="98" width="10" height="32" fill="#374151"/>
      <!-- Main House -->
      <rect x="150" y="160" width="40" height="30" fill="#FF6600"/>
      <path d="M145 160L195 160L170 145Z" fill="#992535"/>
      <rect x="156" y="168" width="6" height="12" fill="#374151"/>
      <rect x="165" y="168" width="8" height="8" fill="#6099FF"/>
      <rect x="176" y="168" width="8" height="8" fill="#6099FF"/>
      <!-- Chimney -->
      <rect x="178" y="145" width="3" height="15" fill="#992535"/>
      <!-- Small House -->
      <rect x="120" y="170" width="25" height="20" fill="#875A72"/>
      <path d="M117 170L147 170L132 158Z" fill="#992535"/>
      <rect x="125" y="175" width="5" height="10" fill="#374151"/>
      <rect x="132" y="175" width="6" height="6" fill="#6099FF"/>
      <!-- Grass -->
      <rect x="0" y="185" width="400" height="15" fill="#059669"/>
    </svg>
  `)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-bold text-orange-400">Prince Kumar</h1>
        <nav className="flex space-x-8">
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            About
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16">
        {/* Project Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Project 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Project 1</h3>
            <div className="relative">
              <img 
                src={landscapeImage}
                alt="Pastoral landscape with houses and mountains"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur lacinia. Donec .
            </p>
          </div>

          {/* Project 2 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Project 2</h3>
            <div className="relative">
              <img 
                src={landscapeImage}
                alt="Pastoral landscape with houses and mountains"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur lacinia. Donec .
            </p>
          </div>

          {/* Project 3 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Project 3</h3>
            <div className="relative">
              <img 
                src={landscapeImage}
                alt="Pastoral landscape with houses and mountains"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur lacinia. Donec .
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl font-black mb-4 leading-tight">
                PROJECT PORTFOLIO
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Lets see My work so far!
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaLinkedin className="w-6 h-6 text-black" />
              </a>
              <a href="#" className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
              <FaPinterest className="text-black text-xl" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              Lorem ipsum dolor sit amet consectetur lacinia. Donec tristique arcu massa, at pharetra tortor feugiat non prince Blah.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}