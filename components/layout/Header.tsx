// components/layout/Header.tsx
import React from "react";
import { Search } from "lucide-react"; // for search icon (if using lucide-react)

const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo + Search + Auth */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 cursor-pointer">
            StayEase
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-1/2 max-w-lg border rounded-full px-3 py-2 bg-gray-50">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search destinations, properties..."
              className="flex-1 outline-none bg-transparent text-sm"
            />
          </div>

          {/* Auth buttons */}
          <div className="space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <nav className="flex space-x-6 border-t pt-3 text-sm font-medium text-gray-600 overflow-x-auto">
          <button className="hover:text-blue-600">Rooms</button>
          <button className="hover:text-blue-600">Mansion</button>
          <button className="hover:text-blue-600">Countryside</button>
          <button className="hover:text-blue-600">Beachfront</button>
          <button className="hover:text-blue-600">City</button>
          <button className="hover:text-blue-600">Cabins</button>
          <button className="hover:text-blue-600">Luxury</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
