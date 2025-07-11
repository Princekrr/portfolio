import React from 'react';
import { FaLinkedin, FaPinterest, FaArrowRight } from 'react-icons/fa';

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold text-yellow-500">
          Prince Kumar
        </div>
        <div className="flex space-x-8">
          <a href="#home" className="text-white hover:text-yellow-500 transition-colors">
            Home
          </a>
          <a href="#about" className="text-white hover:text-yellow-500 transition-colors">
            About
          </a>
          <a href="#contact" className="text-white hover:text-yellow-500 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-between px-8 py-8 min-h-[85vh]">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl">
          <p className="text-gray-300 text-lg mb-4">
            A lot about me !
          </p>
          
          <h1 className="text-7xl font-bold mb-8 leading-tight tracking-tight">
            ABOUT ME
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ipsum vitae lacus lobortis 
            lacinia. Donec tristique arcu massa, at pharetra tortor feugiat non.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold 
                           hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2
                           hover:scale-105 transform mb-16">
            Know more <FaArrowRight />
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center
                                 hover:bg-yellow-400 transition-colors transform hover:scale-110">
              <FaLinkedin className="text-black text-xl" />
            </a>
            <a href="#" className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center
                                 hover:bg-yellow-400 transition-colors transform hover:scale-110">
              <FaPinterest className="text-black text-xl" />
            </a>
          </div>
        </div>

        {/* Right Side - Landscape Scene */}
        <div className="flex-1 flex justify-end">
          <div className="w-96 h-[600px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            {/* Scenic Landscape with CSS Art */}
            <div className="w-full h-full relative bg-gradient-to-b from-teal-400 via-teal-500 to-yellow-400">
              {/* Sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-teal-300 via-teal-400 to-orange-300"></div>
              
              {/* Mountains in background */}
              <div className="absolute bottom-1/2 left-0 right-0 h-32">
                <div className="absolute bottom-0 left-8 w-32 h-24 bg-gradient-to-t from-gray-600 to-gray-400 
                               transform skew-x-12 opacity-60"></div>
                <div className="absolute bottom-0 left-20 w-40 h-28 bg-gradient-to-t from-gray-700 to-gray-500 
                               transform -skew-x-6 opacity-70"></div>
                <div className="absolute bottom-0 right-16 w-28 h-20 bg-gradient-to-t from-gray-600 to-gray-400 
                               transform skew-x-6 opacity-60"></div>
              </div>

              {/* Mist/fog layer */}
              <div className="absolute bottom-1/3 left-0 right-0 h-16 bg-gradient-to-b from-white/20 to-transparent"></div>

              {/* Rolling hills */}
              <div className="absolute bottom-1/4 left-0 right-0 h-20">
                <div className="w-full h-full bg-gradient-to-b from-green-600 to-green-700 rounded-t-full"></div>
              </div>

              {/* House */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                {/* House base */}
                <div className="w-16 h-12 bg-gradient-to-b from-orange-600 to-orange-800 rounded-sm"></div>
                {/* Roof */}
                <div className="w-20 h-6 bg-gradient-to-b from-red-800 to-red-900 -mt-2 -ml-2 
                               clip-path-triangle relative">
                  <div className="absolute top-0 left-0 w-0 h-0 border-l-10 border-r-10 border-b-6 
                                 border-l-transparent border-r-transparent border-b-red-900"></div>
                </div>
                {/* Windows */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-400 rounded-sm"></div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-sm"></div>
                {/* Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-yellow-600 rounded-t-sm"></div>
              </div>

              {/* Foreground field */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-yellow-500 to-yellow-600">
                {/* Grass texture */}
                <div className="absolute bottom-0 left-4 w-1 h-4 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 left-8 w-1 h-3 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 left-12 w-1 h-5 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 left-20 w-1 h-3 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 left-24 w-1 h-4 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 right-4 w-1 h-4 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 right-8 w-1 h-3 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 right-12 w-1 h-5 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 right-16 w-1 h-3 bg-green-600 opacity-60"></div>
                <div className="absolute bottom-0 right-20 w-1 h-4 bg-green-600 opacity-60"></div>
              </div>

              {/* Trees */}
              <div className="absolute bottom-20 left-8">
                <div className="w-2 h-8 bg-green-800 rounded-full"></div>
                <div className="w-1 h-4 bg-amber-800 mx-auto"></div>
              </div>
              <div className="absolute bottom-24 right-12">
                <div className="w-3 h-10 bg-green-700 rounded-full"></div>
                <div className="w-1 h-5 bg-amber-800 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}