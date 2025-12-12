import React from 'react';
import { ShoppingBag, X, Check, Plus, Minus, Trash2 } from 'lucide-react';
import { BRAND_RED, BRAND_RED_HOVER } from '../utils/constants';
import { useCart } from '../context/CartContext';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeItem, onNavigate }) => {
  const { isLoggedIn, setShowLoginModal } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      onClose();
      setShowLoginModal(true);
    } else {
      // Proceed to checkout
      alert('Proceeding to checkout...');
    }
  };
  return (
    <div className={`fixed inset-0 z-[70] overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div className={`absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b flex justify-between items-center bg-gray-50 shadow-sm z-10">
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2 text-red-600" /> Shopping Cart
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 transition-colors p-1 hover:bg-gray-200 rounded-full"><X className="w-6 h-6" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 bg-white">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 animate-fade-in">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-red-300" />
              </div>
              <p className="text-lg font-medium text-gray-600 mb-1">Your cart is empty</p>
              <p className="text-sm text-gray-400 mb-8">Add some delicious sweets to get started.</p>
              <button
                onClick={onClose}
                className={`mt-2 ${BRAND_RED} text-white px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex border border-gray-100 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-gray-800 text-base hover:text-red-600 transition-colors cursor-pointer line-clamp-1">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-600 p-1"><Trash2 className="w-4 h-4" /></button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Weight: {item.weight || 'N/A'}</p>
                    </div>

                    <div className="flex justify-between items-end mt-2">
                        <div className="flex items-center border border-gray-200 rounded-md h-8 bg-gray-50">
                            <button
                            className="px-2 h-full text-gray-500 hover:bg-gray-200 border-r border-gray-200 rounded-l-md"
                            onClick={() => updateQuantity(item.id, -1)}
                            >
                            <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-bold text-gray-800">{item.qty}</span>
                            <button
                            className="px-2 h-full text-gray-500 hover:bg-gray-200 border-l border-gray-200 rounded-r-md"
                            onClick={() => updateQuantity(item.id, 1)}
                            >
                            <Plus className="w-3 h-3" />
                            </button>
                        </div>
                        <span className="text-red-600 font-bold text-lg">₹{((item.price || 0) * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-20">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 font-bold uppercase text-xs tracking-wider">Subtotal</span>
              <span className="text-2xl font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 flex items-center justify-center bg-green-50 text-green-700 py-1 rounded">
                <Check className="w-3 h-3 mr-1" /> Free Shipping Applied
            </p>
            <button 
              onClick={handleCheckout}
              className={`w-full ${BRAND_RED} ${BRAND_RED_HOVER} text-white py-4 rounded-lg font-bold uppercase tracking-widest shadow-lg transition-all hover:shadow-xl flex justify-center items-center active:scale-[0.99]`}
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
