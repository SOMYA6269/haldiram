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
    <div className="sticky top-0 z-50 bg-white shadow-md">

      {/* ------------------- MOBILE HEADER ------------------- */}
      <header className="lg:hidden h-[75px] px-4 flex items-center justify-between border-b border-gray-200 relative">

        <div className="w-20"></div>

        {/* Logo */}
        <button
          onClick={() => onNavigate("/")}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img src="/public/images/lgo.png" alt="Logo" className="h-14 object-contain" />
        </button>

        <div className="w-20 flex items-center justify-end gap-5">
          <button onClick={() => onNavigate("/wishlist")} className="relative">
            <Heart className="w-6 h-6 text-gray-700" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white h-4 w-4 text-[10px] flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </button>

          <button onClick={onOpenCart} className="relative">
            <ShoppingBag className="w-6 h-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white h-4 w-4 text-[10px] flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
        </div>
      </header>

      {/* ------------------- DESKTOP HEADER ------------------- */}
      <header className="hidden lg:flex items-center justify-between h-[110px] border-b border-gray-200 px-10 max-w-[1700px] mx-auto">

        <button onClick={() => onNavigate("/")}>
          <img src="/images/products/logo.png" alt="Logo" className="h-[85px] object-contain" />
        </button>

        {/* NAV LINKS */}
        <nav ref={dropdownRef} className="flex items-center gap-10">
          {NAV_LINKS.map((cat) => (
            <div key={cat} className="relative">

              <button
                onClick={() => onNavigate(`/category/${cat}`)}
                onMouseEnter={() => CATEGORY_SUBMENU[cat] && setActiveDropdown(cat)}
                className="uppercase text-[17px] font-semibold tracking-wide text-gray-700 pb-2 border-b-2 border-transparent hover:border-red-600 hover:text-red-600 transition-all flex items-center gap-1"
              >
                {cat}
                {CATEGORY_SUBMENU[cat] && (
                  <ChevronDown className="w-[18px] h-[18px] text-gray-500" />
                )}
              </button>

              {activeDropdown === cat && CATEGORY_SUBMENU[cat] && (
                <div
                  className="absolute top-full left-0 w-64 bg-white border shadow-lg rounded-b-md z-50"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {CATEGORY_SUBMENU[cat].map((item) => (
                    <button
                      key={item.name}
                      onClick={() => onNavigate(item.href)}
                      className="w-full px-6 py-3 text-left text-sm hover:bg-red-50 hover:text-red-600"
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

          <button className="bg-[#6E4FA0] text-white px-5 py-2.5 rounded text-sm font-bold tracking-wide hover:bg-[#5b4187] transition">
            CORPORATE
          </button>

          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search 200+ products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px] bg-gray-100 rounded-full pl-5 pr-12 py-3 text-[15px]"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </form>

          <button onClick={() => onNavigate("/wishlist")} className="relative">
            <Heart className="w-[30px] h-[30px] text-gray-700 hover:text-red-600" />
          </button>

          <button onClick={onOpenCart} className="relative">
            <ShoppingBag className="w-[30px] h-[30px] text-gray-700 hover:text-red-600" />
          </button>
        </div>
      </header>

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-[#970505] text-white h-14 flex items-center overflow-hidden border-t shadow-inner">
        <div className="animate-marquee whitespace-nowrap text-[15px] font-semibold flex">
          <span className="mx-10">☁ Great Taste since 1937</span>
          <span className="mx-10">★ Evolving with India's tastes</span>
          <span className="mx-10 text-yellow-200">📢 GST Rate Cut: Prices Slashed</span>

          <span className="mx-10">☁ Great Taste since 1937</span>
          <span className="mx-10">★ Evolving with India's tastes</span>
          <span className="mx-10 text-yellow-200">📢 GST Rate Cut: Prices Slashed</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

