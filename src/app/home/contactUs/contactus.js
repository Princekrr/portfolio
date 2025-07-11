import React from 'react';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaPinterest, FaWhatsapp } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12">
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
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg mb-4">Contact me and lets work together!</p>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                GET IN TOUCH
              </h1>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec 
              tristique arcu massa, et pharetra tortor feugiat non 
              prince Blah.
            </p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/* Email */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <HiMail className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-semibold">Email me</span>
                </div>
                <p className="text-gray-300 ml-11">Prince2k3kumar@gmail.com</p>
              </div>

              {/* Pinterest */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <FaPinterest className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-semibold">Pinterest</span>
                </div>
                <p className="text-gray-300 ml-11">pinterest.com/devwithprince/</p>
              </div>

              {/* LinkedIn */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <FaLinkedin className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-semibold">Linked in</span>
                </div>
                <p className="text-gray-300 ml-11">linkedin.com/in/prince-kumar-2k3</p>
              </div>

              {/* WhatsApp */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <FaWhatsapp className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-semibold">WhatsApp</span>
                </div>
                <p className="text-gray-300 ml-11">+91 8709170097</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful landscape with mountains and field"
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}