import React from 'react';
import { FaLinkedin, FaPinterest, FaArrowRight } from 'react-icons/fa';

const Welcome = () => {
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
      <div className="flex items-center justify-between px-8 py-16 min-h-[80vh]">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            WELCOME TO<br />
            MY PORTFOLIO
          </h1>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
            Passionate developer and creative designer crafting digital experiences 
            that make a difference. I specialize in modern web technologies and 
            user-centered design solutions that bring ideas to life.
          </p>

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold 
                           hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2
                           hover:scale-105 transform">
            Know more <FaArrowRight />
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-16">
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

        {/* Right Side - Images */}
        <div className="flex-1 flex justify-end items-center space-x-6">
          {/* Main Portrait */}
          <div className="relative">
            <div className="w-80 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl 
                           overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 
                             flex items-end justify-center relative">
                {/* Temple/Architecture background */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/20 to-transparent"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-40 
                               bg-gradient-to-b from-amber-900 to-amber-700 rounded-t-full opacity-40"></div>
                
                {/* Person silhouette */}
                <div className="w-24 h-32 bg-gradient-to-t from-amber-900 to-amber-700 
                               rounded-t-full mb-8 relative z-10"></div>
                
                {/* Small crowd effect */}
                <div className="absolute bottom-4 left-4 w-2 h-3 bg-red-400 rounded opacity-60"></div>
                <div className="absolute bottom-6 right-6 w-2 h-3 bg-blue-400 rounded opacity-60"></div>
                <div className="absolute bottom-3 left-16 w-2 h-3 bg-green-400 rounded opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Abstract Art Panel */}
          <div className="w-64 h-80 bg-gradient-to-br from-teal-400 via-green-500 to-emerald-600 
                         rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 
                         transition-transform duration-300 relative">
            {/* Abstract flowing design */}
            <div className="absolute inset-0">
              <div className="absolute top-8 left-4 w-32 h-32 bg-gradient-to-br from-teal-300 to-transparent 
                             rounded-full opacity-70 transform rotate-12"></div>
              <div className="absolute bottom-12 right-2 w-24 h-48 bg-gradient-to-t from-green-600 to-transparent 
                             rounded-full opacity-80 transform -rotate-12"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             w-40 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
                             rounded-full opacity-90 rotate-45"></div>
              <div className="absolute top-1/3 right-4 w-16 h-20 bg-gradient-to-br from-blue-400 to-transparent 
                             rounded-full opacity-60 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;