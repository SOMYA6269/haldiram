import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import StoreLocator from './pages/StoreLocator';
import Franchise from './pages/Franchise';
import ContactUs from './pages/ContactUs';
import Wishlist from './pages/Wishlist';
import { CartProvider, useCart } from './context/CartContext';
import './App.css';

const AppContent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, cartCount, toast, updateCartQuantity, removeFromCart, addToCart } = useCart();

  useEffect(() => {
    if (mobileMenuOpen || cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, cartOpen]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Get active view for navbar highlighting
  const getActiveView = () => {
    const path = location.pathname;
    if (path.startsWith('/category/')) {
      return path.split('/category/')[1];
    }
    return null;
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col antialiased">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onNavigate={navigate}
        activeView={getActiveView()}
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


      <main className="flex-grow animate-fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
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
