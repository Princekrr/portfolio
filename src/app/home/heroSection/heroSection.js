import React from 'react';
import { FaLinkedin, FaPinterest } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                <span className="text-yellow-400 italic text-5xl md:text-7xl lg:text-8xl">A</span>
                <br />
                <span className="text-white">DEVELOPER</span>
              </h1>
              <div className="relative">
                <span className="text-yellow-400 italic text-4xl md:text-6xl lg:text-7xl font-bold absolute -top-8 right-0 lg:right-20">
                  Software
                </span>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12 space-y-4 md:space-y-0">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Living on Dads Money
              </p>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Sometimes he earns too!
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
              <a 
                href="#" 
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
              >
                <FaLinkedin className="text-black text-xl" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300"
              >
                <FaPinterest className="text-black text-xl" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Developer Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Placeholder for developer image */}
              <div className="w-80 h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px] bg-gradient-to-b from-red-600 to-red-800 rounded-t-full relative overflow-hidden">
                {/* Person silhouette/placeholder */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] bg-gradient-to-t from-red-700 to-red-500 rounded-t-full">
                  {/* Glasses */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-8 border-4 border-blue-400 rounded-full bg-blue-200 opacity-80"></div>
                  {/* Hat/Hair */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gray-800 rounded-t-full"></div>
                </div>
              </div>
              
              {/* Background circle accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-yellow-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;