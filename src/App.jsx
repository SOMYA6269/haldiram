import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import MobileDrawer from "./components/MobileDrawer";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import StoreLocator from "./pages/StoreLocator";
import Franchise from "./pages/Franchise";
import ContactUs from "./pages/ContactUs";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";

import { CartProvider, useCart } from "./context/CartContext";

import "./App.css";

const AppContent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { cart, cartCount, toast, updateCartQuantity, removeFromCart } =
    useCart();

  // Disable background scroll when drawer open
  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || cartOpen ? "hidden" : "unset";
  }, [mobileMenuOpen, cartOpen]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar
        setMobileMenuOpen={setMobileMenuOpen}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onNavigate={navigate}
      />

      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={(path) => {
          navigate(path);
          setMobileMenuOpen(false);
        }}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQuantity={updateCartQuantity}
        removeItem={removeFromCart}
        onNavigate={navigate}
      />

      <Toast message={toast.message} visible={toast.visible} />

      <main className="flex-grow">
        <Routes>
          {/* MAIN ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<Search />} />

          {/* CATEGORY PAGE */}
          <Route path="/category/:categoryId" element={<Category />} />

          {/* PRODUCT DETAILS */}
          <Route path="/product/:productId" element={<ProductDetail />} />

          {/* OPTIONAL FIX: CART PAGE */}
          <Route path="/cart" element={<Home />} />
        </Routes>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
