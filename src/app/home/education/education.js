import React from 'react';
import { FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function EducationPage() {
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
      <div className="px-8 py-8 min-h-[85vh] relative">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-16">
          <div className="flex-1">
            <p className="text-gray-300 text-lg mb-4">
              Things Getting personal !
            </p>
            
            <h1 className="text-7xl font-bold mb-8 leading-tight tracking-tight">
              EDUCATION
            </h1>
          </div>

          {/* Scenic Background Element */}
          <div className="w-96 h-48 rounded-full overflow-hidden shadow-2xl">
            <div className="w-full h-full relative bg-gradient-to-r from-orange-300 via-yellow-200 to-green-200">
              {/* Sky gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-yellow-100 to-green-100"></div>
              
              {/* Mountains/hills in background */}
              <div className="absolute bottom-1/3 left-0 right-0 h-16">
                <div className="absolute bottom-0 left-8 w-24 h-12 bg-gradient-to-t from-gray-500 to-gray-300 
                               transform skew-x-12 opacity-70"></div>
                <div className="absolute bottom-0 left-16 w-32 h-16 bg-gradient-to-t from-gray-600 to-gray-400 
                               transform -skew-x-6 opacity-80"></div>
                <div className="absolute bottom-0 right-12 w-20 h-10 bg-gradient-to-t from-gray-500 to-gray-300 
                               transform skew-x-6 opacity-70"></div>
              </div>

              {/* Industrial/architectural elements */}
              <div className="absolute bottom-1/4 right-8">
                <div className="w-8 h-12 bg-gradient-to-t from-gray-700 to-gray-500 opacity-60"></div>
                <div className="w-6 h-10 bg-gradient-to-t from-gray-600 to-gray-400 ml-1 -mt-2 opacity-60"></div>
              </div>

              {/* Foreground elements */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-green-400 to-green-600">
                {/* Small structures */}
                <div className="absolute bottom-0 left-1/3 w-6 h-4 bg-orange-800 opacity-70"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-3 bg-red-800 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-3 gap-12 mb-16">
          {/* 2021 - Army Public School */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-white">2021</div>
            <h3 className="text-2xl font-bold text-yellow-500">Army Public School</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ipsum vitae lacus 
              lobortis lacinia. Donec tristique arcu massa, at pharetra tortor feugiat non.
            </p>
          </div>

          {/* 2024 - BIT LALPUR */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-white">2024</div>
            <h3 className="text-2xl font-bold text-yellow-500">BIT LALPUR</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed at ipsum vitae lacus 
              lobortis lacinia. Donec tristique arcu massa, at pharetra tortor feugiat non.
            </p>
          </div>

          {/* 2026 - BIT MESRA */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-white">2026</div>
            <h3 className="text-2xl font-bold text-yellow-500">BIT MESRA</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed at ipsum vitae lacus 
              lobortis lacinia. Donec tristique arcu massa, at pharetra tortor feugiat non.
            </p>
          </div>
        </div>

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
    </div>
  );
}