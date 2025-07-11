import React from 'react';
import { FaLinkedin, FaPinterest, FaArrowRight } from 'react-icons/fa';

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
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
      <div className="flex items-center justify-between px-8 py-8 min-h-[85vh] relative">
        {/* Left Side - Abstract Art Elements */}
        <div className="flex-1 flex flex-col items-start space-y-8 relative">
          {/* Large Abstract Shape 1 */}
          <div className="w-80 h-96 relative transform -rotate-12 hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full rounded-[60px] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100 relative shadow-2xl">
              {/* Flowing abstract design */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-64 bg-gradient-to-br from-teal-500 via-emerald-600 to-green-700 
                               rounded-full transform rotate-45 opacity-90"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-48 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-600 
                               rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute bottom-1/4 left-1/3 w-40 h-20 bg-gradient-to-r from-teal-400 to-green-500 
                               rounded-full transform rotate-12 opacity-70"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                               w-48 h-8 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-500 
                               rounded-full opacity-85 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Large Abstract Shape 2 - Overlapping */}
          <div className="w-72 h-80 relative transform rotate-12 -mt-20 ml-20 hover:-rotate-6 transition-transform duration-500">
            <div className="w-full h-full rounded-[50px] overflow-hidden bg-gradient-to-br from-gray-100 to-white relative shadow-2xl">
              {/* Similar flowing design but different arrangement */}
              <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-28 h-56 bg-gradient-to-br from-green-600 via-teal-500 to-emerald-600 
                               rounded-full transform -rotate-45 opacity-90"></div>
                <div className="absolute top-1/4 left-1/3 w-20 h-40 bg-gradient-to-br from-yellow-600 via-amber-500 to-orange-600 
                               rounded-full transform rotate-12 opacity-80"></div>
                <div className="absolute bottom-1/3 right-1/3 w-36 h-16 bg-gradient-to-r from-teal-500 to-emerald-600 
                               rounded-full transform -rotate-12 opacity-75"></div>
                <div className="absolute top-2/3 left-1/4 transform 
                               w-44 h-6 bg-gradient-to-r from-cyan-500 via-teal-600 to-green-500 
                               rounded-full opacity-85 -rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8 ml-4">
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

        {/* Right Side - Text Content */}
        <div className="flex-1 max-w-2xl pl-16">
          <h1 className="text-7xl font-bold mb-8 leading-tight tracking-tight">
            INTRODUCTION
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
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-8 right-8">
          <p className="text-white text-xl font-medium">
            Something about me !
          </p>
        </div>
      </div>
    </div>
  );
}