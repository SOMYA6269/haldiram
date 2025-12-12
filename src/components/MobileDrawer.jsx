import React, { useState } from "react";
import {
  X,
  ChevronRight,
  Home,
  Package,
  User,
  Heart,
  ShoppingBag,
  Phone,
  Mail,
  Search,
} from "lucide-react";
import { NAV_LINKS, HEADER_NAV_LINKS, CATEGORY_SUBMENU } from "../utils/constants";
import { useCart } from "../context/CartContext";

const MobileDrawer = ({ isOpen, onClose, onNavigate }) => {
  const { wishlistCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      onClose();
      setSearchQuery("");
    }
  };

  const handleNavClick = (path) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-40" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-[#faf7f2] shadow-xl 
        transition-transform duration-300 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        
        {/* Drawer Header */}
        <div className="bg-[#B41F2A] px-5 py-6 flex justify-between items-center shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
              <img
                src="/images/products/Haldiram's_Logo_SVG.svg.png"
                alt="Logo"
                className="h-full object-contain"
              />
            </div>
            <div className="text-white">
              <h2 className="font-semibold text-lg tracking-wide">Haldiram's</h2>
              <p className="text-xs opacity-80">Since 1937</p>
            </div>
          </div>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 transition">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="h-[calc(100%-140px)] overflow-y-auto p-5">

          {/* Search Box */}
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-xl shadow-md px-4 py-3 mb-6 border border-[#e3d6c7]"
          >
            <div className="flex items-center space-x-3">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 outline-none bg-transparent text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="px-3 py-1.5 bg-[#B41F2A] text-white rounded-lg">
                Go
              </button>
            </div>
          </form>

          {/* Navigation Section */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Navigation</p>

            <DrawerLink icon={<Home />} label="Home" onClick={() => handleNavClick("/")} />

            {HEADER_NAV_LINKS.filter(i => i.name !== "Home").map(link => (
              <DrawerLink
                key={link.name}
                icon={<Package />}
                label={link.name}
                onClick={() => handleNavClick(link.href)}  // <— FIXED VALID PATHS
              />
            ))}
          </div>

          {/* Categories */}
          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              Shop by Category
            </p>

            {/* All Products */}
            <DrawerLink
              label="All Products"
              rightIcon={<ChevronRight />}
              onClick={() => handleNavClick("/products")}
            />

            {/* Individual Categories */}
            {NAV_LINKS.map((category) => (
              <div key={category} className="mt-2">
                <DrawerLink
                  label={category}
                  rightIcon={<ChevronRight />}
                  onClick={() => handleNavClick(`/category/${category}`)}
                />

                <div className="ml-6 space-y-1">
                  {CATEGORY_SUBMENU[category]?.slice(0, 2).map((sub) => (
                    <DrawerSubLink
                      key={sub.name}
                      label={sub.name}
                      onClick={() => handleNavClick(sub.href)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Account Section */}
          <div className="mt-8">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              My Account
            </p>

            <DrawerLink icon={<User />} label="Sign In" onClick={() => handleNavClick("/login")} />

            <DrawerLink
              icon={<Heart />}
              label="My Wishlist"
              count={wishlistCount}
              onClick={() => handleNavClick("/wishlist")}
            />
          </div>

          {/* Help Box */}
          <div className="mt-8 bg-[#fff7f3] border border-[#e8d4c7] rounded-xl p-4">
            <h3 className="text-[#B41F2A] font-semibold mb-2">Need Help?</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5 text-[#B41F2A]" />
                1800-123-4567
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5 text-[#B41F2A]" />
                support@haldirams.com
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-4 text-center text-xs text-gray-500 border-t">
          © 2025 Haldiram's | App Version 2.1.0
        </div>
      </div>
    </div>
  );
};

/* Drawer Buttons */
const DrawerLink = ({ icon, label, rightIcon, count, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[#e8dcd0]
    rounded-xl shadow-sm hover:shadow-md hover:border-[#B41F2A] hover:text-[#B41F2A] transition"
  >
    <div className="flex items-center gap-3">
      {icon && <span className="text-gray-600">{icon}</span>}
      <span className="font-medium text-gray-700">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {count > 0 && (
        <span className="bg-[#B41F2A] text-white text-xs px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
      {rightIcon}
    </div>
  </button>
);

const DrawerSubLink = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex justify-between px-3 py-2 text-sm text-gray-600 hover:text-[#B41F2A]"
  >
    {label}
    <ChevronRight className="w-3 h-3 text-gray-400" />
  </button>
);

export default MobileDrawer;
