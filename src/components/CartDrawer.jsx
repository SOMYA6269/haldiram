import React from "react";
import { X, Plus, Minus, Trash } from "lucide-react";

const CartDrawer = ({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeItem,
  onNavigate,
}) => {
  return (
    <div
      className={`fixed inset-0 z-[999999] transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Drawer Content */}
      <div
        className={`absolute right-0 top-0 h-full w-[90%] sm:w-[380px] bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="text-xl font-semibold">My Cart</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-12 text-lg">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.weight}</p>

                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-lg">₹{item.price}</span>

                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 border rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="px-3 font-bold">{item.qty}</span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 border rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 text-sm mt-2 flex gap-1 items-center"
                  >
                    <Trash className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        <div className="p-4 border-t">
          <button
            className="w-full py-3 bg-red-600 text-white font-semibold rounded-md"
            onClick={() => {
              onClose();
              onNavigate("/checkout");
            }}
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
