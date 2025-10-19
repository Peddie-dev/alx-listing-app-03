// components/layout/Footer.tsx
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo / About */}
          <div>
            <h2 className="text-xl font-bold text-white">StayEase</h2>
            <p className="mt-2 text-sm">
              Find your perfect stay, from city apartments to luxury villas
              worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} StayEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
