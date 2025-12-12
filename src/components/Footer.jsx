import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Grid,
  Search,
  ShoppingBag
} from "lucide-react";
import { FOOTER_LINKS } from "../utils/constants";

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-white text-[#333] border-t border-gray-300 font-[Inter]">

      {/* NEWSLETTER */}
      <div className="bg-[#d3872e] text-white px-6 py-10 md:py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
            With Love, From Haldiram’s
          </h2>
          <p className="text-sm md:text-base mb-5">
            Subscribe to our newsletter for Haldiram’s offers.
          </p>

          <div className="flex w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter Email Id"
              className="flex-1 bg-white text-gray-700 px-4 py-3 rounded-l-md focus:outline-none text-sm"
            />
            <button className="bg-[#e2373f] px-6 rounded-r-md flex items-center justify-center">
              <span className="text-white text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">

        {/* MENU COLUMN */}
        <div>
          <h3 className="uppercase tracking-wide text-gray-900 font-semibold mb-4">
            Menu
          </h3>
          <ul className="space-y-3 text-sm">
            {FOOTER_LINKS.menu.map(item => (
              <li key={item.name}>
                <button
                  onClick={() => onNavigate(item.href)}
                  className="hover:text-red-600 transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT COLUMN */}
        <div>
          <h3 className="uppercase tracking-wide text-gray-900 font-semibold mb-4">
            Support
          </h3>
          <ul className="space-y-3 text-sm">
            {FOOTER_LINKS.support.map(item => (
              <li key={item.name}>
                <button
                  onClick={() => onNavigate(item.href)}
                  className="hover:text-red-600 transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CORPORATE COLUMN */}
        <div>
          <h3 className="uppercase tracking-wide text-gray-900 font-semibold mb-4">
            Corporate
          </h3>
          <ul className="space-y-3 text-sm">
            {FOOTER_LINKS.corporate.map(item => (
              <li key={item.name}>
                <button
                  onClick={() => onNavigate(item.href)}
                  className="hover:text-red-600 transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* POLICIES COLUMN */}
        <div>
          <h3 className="uppercase tracking-wide text-gray-900 font-semibold mb-4">
            Policies
          </h3>
          <ul className="space-y-3 text-sm">
            {FOOTER_LINKS.policies.map(item => (
              <li key={item.name}>
                <button
                  onClick={() => onNavigate(item.href)}
                  className="hover:text-red-600 transition"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* SOCIAL FOLLOW */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        <p className="font-semibold mb-3 tracking-wide">Follow @Haldirams</p>
        <div className="flex space-x-4 text-gray-600">
          {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
            <Icon key={i} className="w-5 h-5 hover:text-red-600 cursor-pointer" />
          ))}
        </div>
      </div>

      {/* LEGAL TEXT */}
      <div className="max-w-6xl mx-auto px-6 pb-12 text-xs leading-relaxed text-gray-700">
        <p>Haldiram Ethnic Foods Private Limited</p>
        <p>Haldiram Manufacturing Co. Private Limited</p>
        <p>Haldiram Products Private Limited</p>
        <p>Haldiram Marketing Private Limited</p>
      </div>

      {/* MOBILE NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 py-2 px-8 flex justify-between md:hidden z-50">
        <button onClick={() => onNavigate('/search')} className="flex flex-col items-center text-xs text-gray-700">
          <Search className="w-5 h-5" />
          Search
        </button>

        <button onClick={() => onNavigate('/categories')} className="flex flex-col items-center text-xs text-gray-700">
          <Grid className="w-5 h-5" />
          Categories
        </button>

        <button onClick={() => onNavigate('/cart')} className="flex flex-col items-center text-xs text-gray-700">
          <ShoppingBag className="w-5 h-5" />
          Cart
        </button>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-600 py-4 border-t">
        © {new Date().getFullYear()} Haldiram's. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
