import React from 'react';
import { FaLinkedin, FaPinterest, FaArrowRight } from 'react-icons/fa';

export default function LatestProjectPage() {
  const landscapeImage = `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="500" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4DD0E1;stop-opacity:1" />
          <stop offset="30%" style="stop-color:#81C784;stop-opacity:1" />
          <stop offset="70%" style="stop-color:#FFB74D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF8A65;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="grassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8BC34A;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#CDDC39;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFC107;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" rx="20" ry="20" fill="url(#skyGradient)"/>
      <!-- Mountains -->
      <path d="M0 200L80 150L160 180L240 140L320 170L400 145V500H0Z" fill="#37474F" opacity="0.8"/>
      <path d="M0 240L80 190L160 220L240 180L320 210L400 185V500H0Z" fill="#455A64" opacity="0.6"/>
      <path d="M0 280L80 230L160 260L240 220L320 250L400 225V500H0Z" fill="#546E7A" opacity="0.4"/>
      <!-- Water/Mist -->
      <ellipse cx="200" cy="320" rx="180" ry="40" fill="#81C784" opacity="0.3"/>
      <!-- Trees -->
      <circle cx="60" cy="280" r="15" fill="#2E7D32"/>
      <circle cx="90" cy="270" r="12" fill="#388E3C"/>
      <circle cx="120" cy="275" r="18" fill="#2E7D32"/>
      <circle cx="300" cy="275" r="14" fill="#388E3C"/>
      <circle cx="330" cy="270" r="16" fill="#2E7D32"/>
      <circle cx="360" cy="280" r="12" fill="#388E3C"/>
      <!-- Industrial structures -->
      <rect x="280" y="200" width="8" height="60" fill="#263238"/>
      <rect x="290" y="190" width="12" height="70" fill="#37474F"/>
      <rect x="305" y="195" width="10" height="65" fill="#455A64"/>
      <rect x="320" y="185" width="15" height="75" fill="#37474F"/>
      <!-- Power lines -->
      <line x1="280" y1="200" x2="340" y2="185" stroke="#263238" stroke-width="2"/>
      <line x1="290" y1="190" x2="350" y2="175" stroke="#263238" stroke-width="2"/>
      <!-- Main House -->
      <rect x="180" y="350" width="50" height="40" fill="#FF6600"/>
      <path d="M175 350L235 350L205 325Z" fill="#D84315"/>
      <rect x="188" y="365" width="8" height="15" fill="#3E2723"/>
      <rect x="200" y="365" width="10" height="10" fill="#1976D2"/>
      <rect x="215" y="365" width="10" height="10" fill="#1976D2"/>
      <!-- Chimney -->
      <rect x="218" y="325" width="4" height="25" fill="#8D6E63"/>
      <!-- Small House -->
      <rect x="140" y="370" width="30" height="25" fill="#8D6E63"/>
      <path d="M135 370L175 370L155 350Z" fill="#D84315"/>
      <rect x="147" y="380" width="6" height="12" fill="#3E2723"/>
      <rect x="157" y="380" width="8" height="8" fill="#1976D2"/>
      <!-- Grass Field -->
      <rect x="0" y="400" width="400" height="100" fill="url(#grassGradient)"/>
      <!-- Grass details -->
      <path d="M0 400 Q50 390 100 400 T200 400 T300 400 T400 400" stroke="#8BC34A" stroke-width="2" fill="none"/>
      <path d="M0 420 Q60 410 120 420 T240 420 T360 420 T400 420" stroke="#CDDC39" stroke-width="2" fill="none"/>
    </svg>
  `)}`;

  const smallLandscapeImage = `data:image/svg+xml;base64,${btoa(`
    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4DD0E1;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FFB74D;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF8A65;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="300" height="200" rx="15" ry="15" fill="url(#skyGradient2)"/>
      <!-- Mountains -->
      <path d="M0 120L60 90L120 110L180 85L240 105L300 90V200H0Z" fill="#37474F" opacity="0.7"/>
      <path d="M0 140L60 115L120 135L180 110L240 130L300 115V200H0Z" fill="#455A64" opacity="0.5"/>
      <!-- Water -->
      <ellipse cx="150" cy="160" rx="120" ry="25" fill="#81C784" opacity="0.3"/>
      <!-- Trees -->
      <circle cx="45" cy="140" r="10" fill="#2E7D32"/>
      <circle cx="70" cy="135" r="8" fill="#388E3C"/>
      <circle cx="230" cy="135" r="9" fill="#2E7D32"/>
      <circle cx="250" cy="130" r="7" fill="#388E3C"/>
      <!-- Buildings -->
      <rect x="200" y="100" width="8" height="25" fill="#263238"/>
      <rect x="210" y="95" width="10" height="30" fill="#37474F"/>
      <rect x="225" y="98" width="8" height="27" fill="#455A64"/>
      <!-- House -->
      <rect x="120" y="150" width="35" height="25" fill="#FF6600"/>
      <path d="M115 150L160 150L137 135Z" fill="#D84315"/>
      <rect x="126" y="158" width="5" height="10" fill="#3E2723"/>
      <rect x="134" y="158" width="7" height="7" fill="#1976D2"/>
      <rect x="144" y="158" width="7" height="7" fill="#1976D2"/>
      <!-- Chimney -->
      <rect x="146" y="135" width="3" height="15" fill="#8D6E63"/>
      <!-- Small House -->
      <rect x="90" y="160" width="20" height="15" fill="#8D6E63"/>
      <path d="M87 160L113 160L100 150Z" fill="#D84315"/>
      <rect x="94" y="166" width="4" height="8" fill="#3E2723"/>
      <rect x="100" y="166" width="5" height="5" fill="#1976D2"/>
      <!-- Grass -->
      <rect x="0" y="180" width="300" height="20" fill="#8BC34A"/>
    </svg>
  `)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
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
      <main className="px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Large Image */}
          <div className="lg:col-span-1">
            <img 
              src={landscapeImage}
              alt="Large pastoral landscape"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
              <FaLinkedin className="w-6 h-6 text-black" />
              </a>
              <a href="#" className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
              <FaPinterest className="text-black text-xl" />
              </a>
            </div>
          </div>

          {/* Middle Column - Title and Small Images */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-5xl font-black leading-tight">
              MY LATEST<br />
              PROJECT
            </h2>
            
            {/* Two smaller images stacked */}
            <div className="space-y-6">
              <img 
                src={smallLandscapeImage}
                alt="Small pastoral landscape 1"
                className="w-full rounded-2xl shadow-lg"
              />
              <img 
                src={smallLandscapeImage}
                alt="Small pastoral landscape 2"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">PROJECT 1</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed at 
                  ipsum vitae lacus lobortis lacinia. Donec tristique arcu massa, at
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">PROJECT 2</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed at 
                  ipsum vitae lacus lobortis lacinia. Donec tristique arcu massa, at
                </p>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-lg text-gray-300">
                Lets see My work so far!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
