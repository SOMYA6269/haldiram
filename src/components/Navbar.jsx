// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  Heart,
  ChevronDown,
} from "lucide-react";

import { NAV_LINKS, CATEGORY_SUBMENU } from "../utils/constants";
import { useCart } from "../context/CartContext";

const Navbar = ({ setMobileMenuOpen, cartCount, onOpenCart, onNavigate }) => {
  const { wishlistCount } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    onNavigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md font-sans">

      {/* ================= MOBILE HEADER ================= */}
      <header className="lg:hidden h-[74px] px-4 flex items-center justify-between border-b border-gray-200 relative">

        {/* Left gap */}
        <div className="w-20"></div>

        {/* Logo */}
        <button
          onClick={() => onNavigate("/")}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="/images/products/lgo.png"
            alt="Haldiram"
            className="h-14 object-contain"
          />
        </button>

        {/* Wishlist | Cart | Menu */}
        <div className="w-20 flex items-center justify-end gap-5">

          {/* Wishlist */}
          <button onClick={() => onNavigate("/wishlist")} className="relative">
            <Heart className="w-6 h-6 text-gray-700" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white h-4 w-4 rounded-full text-[10px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* CART */}
          <button onClick={onOpenCart} className="relative">
            <ShoppingBag className="w-6 h-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white h-4 w-4 rounded-full text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Menu */}
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
        </div>
      </header>

      {/* ================= DESKTOP HEADER ================= */}
      <header className="hidden lg:flex items-center justify-between h-[108px] border-b border-gray-200 px-10 max-w-[1700px] mx-auto bg-white">

        {/* Logo */}
        <button onClick={() => onNavigate("/")}>
          <img
            src="/images/products/lgo.png"
            className="h-[82px] object-contain"
            alt="Logo"
          />
        </button>

        {/* NAVIGATION */}
        <nav ref={dropdownRef} className="flex items-center gap-10">
          {NAV_LINKS.map((cat) => (
            <div key={cat} className="relative group">

              <button
                onClick={() => onNavigate(`/category/${cat}`)}
                onMouseEnter={() => CATEGORY_SUBMENU[cat] && setActiveDropdown(cat)}
                className="uppercase tracking-wide text-[17px] font-semibold text-gray-700 hover:text-red-600 pb-2 border-b-2 border-transparent hover:border-red-600 transition-all flex items-center gap-1"
              >
                {cat}
                {CATEGORY_SUBMENU[cat] && (
                  <ChevronDown className="w-4.5 h-4.5 text-gray-500" />
                )}
              </button>

              {/* Dropdown */}
              {activeDropdown === cat && CATEGORY_SUBMENU[cat] && (
                <div
                  className="absolute top-full left-0 w-64 bg-white border shadow-lg rounded-b-md z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {CATEGORY_SUBMENU[cat].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => onNavigate(item.href)}
                      className="w-full text-left px-6 py-3 text-sm hover:bg-red-50 hover:text-red-600"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-8">

          {/* Corporate Button */}
          <button className="bg-[#6E4FA0] text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-[#5b4187] transition">
            CORPORATE
          </button>

          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search 200+ products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px] bg-gray-100 rounded-full pl-5 pr-12 py-3 text-[15px] focus:outline-none"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </form>

          {/* Wishlist */}
          <button onClick={() => onNavigate("/wishlist")} className="relative">
            <Heart className="w-[30px] h-[30px] text-gray-700 hover:text-red-600" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white h-4 w-4 rounded-full text-[10px] flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button onClick={onOpenCart} className="relative">
            <ShoppingBag className="w-[30px] h-[30px] text-gray-700 hover:text-red-600" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white h-4 w-4 rounded-full text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* ================= ANNOUNCEMENT BAR ================= */}
      <div className="bg-[#970505] text-white h-14 flex items-center overflow-hidden border-t shadow-inner">
        <div className="flex animate-marquee whitespace-nowrap text-[15px] font-semibold">
          <span className="mx-10">☁ Great Taste since 1937</span>
          <span className="mx-10">★ Evolving with India's tastes</span>
          <span className="mx-10 text-yellow-200 font-bold">
            📢 GST Rate Cut: Prices Slashed from 22nd Sept!
          </span>

          {/* Duplicate for looping scroll */}
          <span className="mx-10">☁ Great Taste since 1937</span>
          <span className="mx-10">★ Evolving with India's tastes</span>
          <span className="mx-10 text-yellow-200 font-bold">
            📢 GST Rate Cut: Prices Slashed from 22nd Sept!
          </span>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM BAR ================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2.5 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">

        {/* Search */}
        <button onClick={() => onNavigate("/search")} className="flex flex-col items-center text-gray-600">
          <Search className="w-5 h-5" />
          <span className="text-[10px]">Search</span>
        </button>

        {/* Categories */}
        <button onClick={() => setMobileMenuOpen(true)} className="flex flex-col items-center text-gray-600">
          <Menu className="w-5 h-5" />
          <span className="text-[10px]">Categories</span>
        </button>

        {/* Cart */}
        <button onClick={onOpenCart} className="flex flex-col items-center text-gray-600">
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-600 rounded-full border-2 border-white"></span>
            )}
          </div>
          <span className="text-[10px]">Cart</span>
        </button>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
