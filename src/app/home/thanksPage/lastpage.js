import React from 'react';
import { FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function Lastpage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12 relative z-20">
        <div className="text-2xl font-bold text-yellow-400">
          Prince Kumar
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">About</a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-screen -mt-20">
        {/* Background Person Image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 z-10">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Prince Kumar"
            className="w-full h-full object-cover object-center opacity-80"
            style={{
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
            }}
          />
        </div>

        {/* Text Content */}
        <div className="relative z-20 px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            {/* Large THANK YOU Text */}
            <div className="relative mb-8">
              <h1 className="text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none text-white tracking-tight">
                THANK YOU
              </h1>
              
              {/* Overlapping cursive text */}
              <div className="absolute top-1/2 left-8 lg:left-16 transform -translate-y-1/2">
                <p className="text-yellow-400 text-4xl lg:text-6xl font-bold italic transform -rotate-12">
                  For your Precious time
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl mt-16 lg:mt-20">
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec tristique arcu 
                massa, at pharetra tortor feugiat non prince Blah.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-12">
              <a 
                href="#" 
                className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition-colors group"
              >
                <FaLinkedin className="w-6 h-6 text-black" />
              </a>
              <a 
                href="#" 
                className="bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition-colors group"
              >
                <FaPinterest className="w-6 h-6 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-15"></div>
      </div>
    </div>
  );
}