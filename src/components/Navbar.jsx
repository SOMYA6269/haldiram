// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Search, ShoppingBag, User, Menu, Heart, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, CATEGORY_SUBMENU, BRAND_RED } from "../utils/constants";
import { useCart } from "../context/CartContext";

const Navbar = ({ setMobileMenuOpen, cartCount, onOpenCart, onNavigate }) => {
  const { wishlistCount, showLoginModal, setShowLoginModal, isLoggedIn, login } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const openLogin = () => setShowLoginModal(true);

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) setShowOtpInput(true);
  };
  const handleVerifyOtp = () => {
    if (otp === "1234") {
      login({ mobile: mobileNumber });
      setMobileNumber(""); setOtp(""); setShowOtpInput(false);
      setShowLoginModal(false);
    } else {
      alert("Invalid OTP (use 1234)");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* left - mobile menu */}
            <div className="flex items-center gap-3">
              <button className="lg:hidden p-2 rounded-md border" onClick={() => setMobileMenuOpen(s => !s)}>
                <Menu className="w-5 h-5" />
              </button>

              {/* logo */}
              <button onClick={() => onNavigate("/")} className="flex-shrink-0">
                <img src="/images/products/lgo.png" alt="Haldiram" className="h-12 object-contain" />
              </button>
            </div>

            {/* search center */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 justify-center px-6">
              <div className="flex w-full max-w-[520px] border rounded-full overflow-hidden">
                <div className="px-3 flex items-center bg-gray-50"><Search className="w-5 h-5 text-gray-400" /></div>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 200+ products"
                  className="flex-1 px-3 py-2 text-sm focus:outline-none"
                />
                <button className={`${BRAND_RED} px-5 text-white`}>Search</button>
              </div>
            </form>

            {/* icons */}
            <div className="flex items-center gap-3">
              <button onClick={() => setShowLoginModal(true)} className="hidden md:flex items-center text-gray-700 hover:text-red-600">
                <User className="w-5 h-5" />
              </button>

              <button onClick={() => onNavigate("/wishlist")} className="hidden md:flex relative text-gray-700 hover:text-red-600">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">{wishlistCount}</span>}
              </button>

              <button onClick={onOpenCart} className="relative text-gray-700 hover:text-red-600">
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>

        {/* nav row */}
        <div className="bg-white">
          <div ref={dropdownRef} className="max-w-7xl mx-auto px-4 py-2 hidden lg:flex items-center justify-center gap-10">
            {NAV_LINKS.map(cat => (
              <div key={cat} className="relative">
                <button
                  onClick={() => onNavigate(`/category/${cat}`)}
                  onMouseEnter={() => CATEGORY_SUBMENU[cat] && setActiveDropdown(cat)}
                  className="uppercase text-sm tracking-wide text-gray-700 hover:text-red-600 flex items-center gap-2"
                >
                  {cat}
                  {CATEGORY_SUBMENU[cat] && <ChevronDown className="w-4 h-4" />}
                </button>

                {activeDropdown === cat && CATEGORY_SUBMENU[cat] && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border shadow-xl rounded-md z-50">
                    {CATEGORY_SUBMENU[cat].map(si => (
                      <button key={si.name} onClick={() => onNavigate(si.href)} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50">{si.name}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* announcement bar */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex animate-scroll whitespace-nowrap gap-12 text-sm">
            <span>Great Taste since 1937</span>
            <span>Evolving with India's tastes to deliver the finest Flavours</span>
            <span>Great News! From 22nd Sept 2025, many of your Haldiram’s favourites just got more pocket-friendly with revised GST rate. We are passing the savings straight to you.</span>
          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[60] bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="p-5 border-b flex justify-between items-center">
              <img src="/images/products/Haldiram's_Logo_SVG.svg.png" alt="logo" className="h-10" />
              <button onClick={() => setShowLoginModal(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="p-6">
              {!showOtpInput ? (
                <>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={e => setMobileNumber(e.target.value.replace(/\D/g,'').slice(0,10))}
                    placeholder="+91 Enter your mobile number"
                    className="w-full border px-4 py-3 rounded-lg mb-3"
                  />
                  <button onClick={handleSendOtp} disabled={mobileNumber.length !== 10} className={`${BRAND_RED} w-full text-white py-3 rounded-lg`}>Request OTP</button>
                </>
              ) : (
                <>
                  <input type="tel" value={otp} onChange={e => setOtp(e.target.value.replace(/\D/g,'').slice(0,4))} placeholder="Enter OTP (1234)" className="w-full border px-4 py-3 rounded-lg mb-3 text-center" />
                  <button onClick={handleVerifyOtp} disabled={otp.length !== 4} className={`${BRAND_RED} w-full text-white py-3 rounded-lg`}>Verify</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
