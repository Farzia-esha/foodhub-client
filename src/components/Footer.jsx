"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">

          {/* About FoodHub */}
          <div>
           <h3 className="text-2xl font-bold text-white mb-4">FoodHub</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Delivering fresh and delicious meals right to your doorstep. Enjoy the best food experience with FoodHub.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="https://www.facebook.com" className="w-9 h-9 bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-600 transition">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="w-9 h-9 bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-400 transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" className="w-9 h-9 bg-gray-800 flex items-center justify-center rounded-full hover:bg-pink-600 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" className="w-9 h-9 bg-gray-800 flex items-center justify-center rounded-full hover:bg-sky-600 transition">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400 transition flex items-center group">
                  <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-yellow-400 transition flex items-center group">
                  <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition flex items-center group">
                  <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition flex items-center group">
                  <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <span className="mt-0.5">📍</span>
                <span>House 12, Road 5, Dhanmondi, Dhaka</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📞</span>
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>✉️</span>
                <span>support@foodhub.com</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition flex items-center group">
                  <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all mr-2"></span>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition flex items-center group">
                  <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all mr-2"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition flex items-center group">
                  <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all mr-2"></span>
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-3 mt-2">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} FoodHub. All rights reserved. Made with 💛 in Bangladesh.
          </p>
        </div>

      </div>
    </footer>
  );
};

