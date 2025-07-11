import React from 'react';
import { FaLinkedin, FaPinterest, FaArrowRight } from 'react-icons/fa';

export default function PortfolioPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg mb-4">Things Getting personal !</p>
              <h2 className="text-6xl font-black mb-8 leading-tight">
                WORK EXPERIENCE
              </h2>
            </div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {/* Card 1 */}
              <div className="space-y-3">
                <p className="text-white font-bold text-xl">2026</p>
                <h3 className="text-orange-400 text-2xl font-bold">Digital Nexus AI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                  Sed at ipsum vitae lacus lobortis lacinia. Donec 
                  tristique arcu massa, at pharetra tortor feugiat non.
                </p>
              </div>

              {/* Card 2 */}
              <div className="space-y-3">
                <p className="text-white font-bold text-xl">2026</p>
                <h3 className="text-orange-400 text-2xl font-bold">Digital Nexus AI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                  Sed at ipsum vitae lacus lobortis lacinia. Donec 
                  tristique arcu massa, at pharetra tortor feugiat non.
                </p>
              </div>

              {/* Card 3 */}
              <div className="space-y-3">
                <p className="text-white font-bold text-xl">2026</p>
                <h3 className="text-orange-400 text-2xl font-bold">Digital Nexus AI</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                  Sed at ipsum vitae lacus lobortis lacinia. Donec 
                  tristique arcu massa, at pharetra tortor feugiat non.
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-8">
              <a href="#" className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <FaLinkedin className="w-6 h-6 text-black" />
              </a>
              <a href="#" className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
              <FaPinterest className="text-black text-xl" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InNreUdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQTUwMDtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkQ3MDA7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwQkNENCtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgcng9IjUwIiByeT0iNTAiIGZpbGw9InVybCgjc2t5R3JhZGllbnQpIi8+CjwhLS0gTW91bnRhaW5zIC0tPgo8cGF0aCBkPSJNMCAxODBMMTAwIDE0MEwyMDAgMTYwTDMwMCAxMjBMNDAwIDE0MEw1MDAgMTIwVjMwMEgwWiIgZmlsbD0iIzMzNzM4MyIgb3BhY2l0eT0iMC43Ii8+CjxwYXRoIGQ9Ik0wIDIwMEwxMDAgMTYwTDIwMCAxODBMMzAwIDE0MEw0MDAgMTYwTDUwMCAxNDBWMzAwSDBaIiBmaWxsPSIjNDc1NTY5IiBvcGFjaXR5PSIwLjUiLz4KPCEtLSBXYXRlciAtLT4KPGVsbGlwc2UgY3g9IjI1MCIgY3k9IjIyMCIgcng9IjE4MCIgcnk9IjQwIiBmaWxsPSIjMzMzN0Y4IiBvcGFjaXR5PSIwLjMiLz4KPCEtLSBUcmVlcyAtLT4KPGNpcmNsZSBjeD0iODAiIGN5PSIyMDAiIHI9IjE1IiBmaWxsPSIjMDU5NjY5Ii8+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjE5MCIgcj0iMTIiIGZpbGw9IiMwNTk2NjkiLz4KPGNpcmNsZSBjeD0iNDIwIiBjeT0iMTkwIiByPSIxNCIgZmlsbD0iIzA1OTY2OSIvPgo8Y2lyY2xlIGN4PSI0NjAiIGN5PSIxODAiIHI9IjEwIiBmaWxsPSIjMDU5NjY5Ii8+CjwhLS0gQnVpbGRpbmdzIC0tPgo8cmVjdCB4PSIzNTAiIHk9IjE0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzc0MTUxIi8+CjxyZWN0IHg9IjM3MCIgeT0iMTMwIiB3aWR0aD0iMjAiIGhlaWdodD0iNTAiIGZpbGw9IiMzNzQxNTEiLz4KPHJlY3QgeD0iMzk1IiB5PSIxMzUiIHdpZHRoPSIxMiIgaGVpZ2h0PSI0NSIgZmlsbD0iIzM3NDE1MSIvPgo8IS0tIEhvdXNlIC0tPgo8cmVjdCB4PSIyMDAiIHk9IjIzMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkY2NjAwIi8+CjxwYXRoIGQ9Ik0xOTUgMjMwTDI1NSAyMzBMMjI1IDIxMFoiIGZpbGw9IiM5OTI1MzUiLz4KPHJlY3QgeD0iMjA4IiB5PSIyNDAiIHdpZHRoPSI4IiBoZWlnaHQ9IjE1IiBmaWxsPSIjMzc0MTUxIi8+CjxyZWN0IHg9IjIyMCIgeT0iMjQwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiM2MDk5RkYiLz4KPHJlY3QgeD0iMjM1IiB5PSIyNDAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzYwOTlGRiIvPgo8IS0tIENoaW1uZXkgLS0+CjxyZWN0IHg9IjIzOCIgeT0iMjEwIiB3aWR0aD0iNCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzk5MjUzNSIvPgo8IS0tIEFub3RoZXIgc21hbGwgaG91c2UgLS0+CjxyZWN0IHg9IjE2MCIgeT0iMjQwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiM4NzVBNzIiLz4KPHBhdGggZD0iTTE1NSAyNDBMMTk1IDI0MEwxNzUgMjI1WiIgZmlsbD0iIzk5MjUzNSIvPgo8cmVjdCB4PSIxNjciIHk9IjI1MCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiMzNzQxNTEiLz4KPHJlY3QgeD0iMTc2IiB5PSIyNTAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiM2MDk5RkYiLz4KPCEtLSBHcmFzcyAtLT4KPHJlY3QgeD0iMCIgeT0iMjYwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDU5NjY5Ii8+CjwvZGVnPgo8L3N2Zz4K"
                alt="Pastoral landscape with houses and mountains"
                className="w-full max-w-md rounded-3xl shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FFA500 0%, #FFD700 50%, #00BCD4 100%)',
                  minHeight: '300px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}