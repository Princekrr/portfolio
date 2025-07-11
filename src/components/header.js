import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-yellow-400 text-2xl font-bold">
            Prince Kumar
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;