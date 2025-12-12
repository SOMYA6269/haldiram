// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  Heart,
  User,
  ChevronDown,
} from "lucide-react";

import { NAV_LINKS, CATEGORY_SUBMENU } from "../utils/constants";
import { useCart } from "../context/CartContext";

const Navbar = ({ setMobileMenuOpen, cartCount, onOpenCart, onNavigate }) => {
  const { wishlistCount, setShowLoginModal } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
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

  const handleLogin = () => {
    if (setShowLoginModal) setShowLoginModal(true);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      
      {/* =========================================================
          MOBILE HEADER (Accurate to Live Site)
          Left: Menu | Center: Logo | Right: Icons
      ========================================================= */}
      <header className="lg:hidden h-[65px] px-4 flex items-center justify-between border-b border-gray-200 bg-white relative z-50">
        
        {/* 1. LEFT: Hamburger Menu */}
        <button 
          onClick={() => setMobileMenuOpen(true)} 
          className="p-2 -ml-2 text-gray-700 hover:text-red-600 active:scale-95 transition-transform"
        >
          <Menu className="w-7 h-7 stroke-[1.5]" />
        </button>

        {/* 2. CENTER: Logo (Absolute Center for perfect alignment) */}
        <button 
          onClick={() => onNavigate("/")} 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src="/logo.png" 
            alt="Haldiram's"
            className="h-10 w-auto object-contain" 
          />
        </button>

        {/* 3. RIGHT: Icons (User, Cart) */}
        <div className="flex items-center gap-3">
          
          {/* User Icon */}
          <button onClick={handleLogin} className="text-gray-700 p-1">
            <User className="w-6 h-6 stroke-[1.5]" />
          </button>

          {/* Cart Icon */}
          <button onClick={onOpenCart} className="relative text-gray-700 p-1">
            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-bold rounded-full h-3.5 w-3.5 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>


      {/* =========================================================
          DESKTOP HEADER (Premium Layout)
      ========================================================= */}
      <header className="hidden lg:flex items-center justify-between h-[100px] px-8 xl:px-12 border-b border-gray-200 bg-white">
        
        {/* LEFT: Logo */}
        <button onClick={() => onNavigate("/")} className="shrink-0 hover:opacity-90 transition-opacity">
          <img
            src="/logo.png"
            alt="Haldiram's"
            className="h-20 w-auto object-contain"
          />
        </button>

        {/* CENTER: Navigation Links */}
        <nav ref={dropdownRef} className="flex items-center gap-6 xl:gap-9">
          {NAV_LINKS.map((cat) => (
            <div key={cat} className="relative group h-[100px] flex items-center">
              <button
                onClick={() => onNavigate(`/category/${cat}`)}
                onMouseEnter={() => CATEGORY_SUBMENU[cat] && setActiveDropdown(cat)}
                className="uppercase text-[14px] xl:text-[15px] font-bold text-gray-600 tracking-wide hover:text-red-600 flex items-center gap-1 transition-colors h-full border-b-4 border-transparent hover:border-red-600"
              >
                {cat}
                {CATEGORY_SUBMENU[cat] && (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-600" />
                )}
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === cat && CATEGORY_SUBMENU[cat] && (
                <div
                  className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md z-50 animate-in fade-in zoom-in-95 duration-100"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-2">
                    {CATEGORY_SUBMENU[cat].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => onNavigate(item.href)}
                        className="w-full px-5 py-3 text-left text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT: Corporate Btn, Search, Icons */}
        <div className="flex items-center gap-5">
          
          {/* Corporate Button */}
          <button className="hidden xl:block bg-[#6F6E86] hover:bg-[#5a596b] text-white px-4 py-1.5 rounded-[4px] text-[11px] font-bold tracking-wider uppercase transition-colors shadow-sm">
            Corporate
          </button>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              placeholder="Search 200+ products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[240px] xl:w-[280px] bg-gray-100 group-hover:bg-gray-50 rounded-full pl-5 pr-10 py-2.5 text-sm text-gray-700 outline-none focus:ring-1 focus:ring-red-200 transition-all border border-transparent focus:border-red-100"
            />
            <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-full shadow-sm hover:text-red-600 transition-transform hover:scale-105">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
          </form>

          {/* Icons Group */}
          <div className="flex items-center gap-4 pl-2 border-l border-gray-100 ml-2">
            <button onClick={handleLogin} className="text-gray-600 hover:text-red-600 transition-transform hover:scale-110">
              <User className="w-6 h-6 stroke-[1.5]" />
            </button>

            <button onClick={() => onNavigate("/wishlist")} className="relative text-gray-600 hover:text-red-600 transition-transform hover:scale-110">
              <Heart className="w-6 h-6 stroke-[1.5]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button onClick={onOpenCart} className="relative text-gray-600 hover:text-red-600 transition-transform hover:scale-110">
              <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          ANNOUNCEMENT BAR (Red Strip)
      ========================================================= */}
      <div className="bg-[#D14D3D] text-white h-12 flex items-center overflow-hidden border-t-2 border-[#b83b2c] shadow-inner">
        <div className="whitespace-nowrap animate-marquee flex items-center text-[13px] font-medium tracking-wide">
          {/* Repeated items for smooth infinite scroll */}
          {[1, 2, 3, 4].map((i) => (
             <React.Fragment key={i}>
                <span className="mx-8 opacity-90 flex items-center gap-2">
                    <span>☁</span> Great Taste since 1937
                </span>
                <span className="mx-8 opacity-90 flex items-center gap-2">
                    <span>★</span> Evolving with India's tastes
                </span>
                <span className="mx-8 text-yellow-100 font-bold flex items-center gap-2">
                    <span>📢</span> Great News! From 22nd Sept 2025 onwards, GST Rate Cut.
                </span>
             </React.Fragment>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
