import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Plus, Minus, Check, ShoppingBag } from 'lucide-react';
import { PRODUCTS, BRAND_RED, BRAND_RED_HOVER } from '../utils/constants';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const product = PRODUCTS.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="bg-white min-h-screen pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className={`${BRAND_RED} text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider`}
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="container mx-auto px-4 py-8">
        
        <button
          onClick={() => navigate(`/category/${product.category}`)}
          className="flex items-center text-gray-500 text-sm font-medium hover:text-red-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* FIXED IMAGE SECTION (sticky removed) */}
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover" 
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col pt-2">

            <div className="mb-3 text-red-600 font-bold uppercase tracking-widest text-xs border-b border-red-100 pb-2 inline-block w-fit">
              {product.category}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              {product.name}
            </h1>

            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                12 Reviews
              </span>
            </div>

            <div className="flex items-end mb-8 border-b border-gray-100 pb-8">
              <span className="text-4xl font-bold text-gray-900 mr-3">₹{product.price}</span>
              <span className="text-gray-500 text-sm mb-1">(Inclusive of all taxes)</span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
              {product.description}
            </p>

            {/* WEIGHT SELECTOR */}
            <div className="mb-8">
              <span className="mr-6 font-bold text-gray-900 uppercase text-sm tracking-wide block mb-3">
                Select Weight:
              </span>

              <div className="flex flex-wrap gap-3">
                {(() => {
                  const baseWeight = product.weight;
                  const basePrice = product.price;
                  const weights = [];
                  const weightMatch = baseWeight.match(/(\d+)/);

                  if (weightMatch) {
                    const baseWeightValue = parseInt(weightMatch[1]);

                    if (baseWeightValue === 500) {
                      weights.push({ label: "200g", price: Math.round(basePrice * 0.4) });
                      weights.push({ label: "500g", price: basePrice });
                      weights.push({ label: "1kg", price: basePrice * 2 });
                    } else if (baseWeightValue === 400) {
                      weights.push({ label: "200g", price: Math.round(basePrice * 0.5) });
                      weights.push({ label: "400g", price: basePrice });
                      weights.push({ label: "1kg", price: Math.round(basePrice * 2.5) });
                    }
                  }

                  return weights;
                })().map((weight, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const updatedProduct = { ...product, weight: weight.label, price: weight.price };
                      for (let i = 0; i < qty; i++) addToCart(updatedProduct);
                      setQty(1);
                    }}
                    className="px-4 py-2 border-2 border-red-600 text-red-600 font-bold rounded-lg bg-red-50 hover:bg-red-600 hover:text-white transition-all"
                  >
                    {weight.label} - ₹{weight.price}
                  </button>
                ))}
              </div>
            </div>

            {/* QTY + ADD TO CART */}
            <div className="flex space-x-4 mb-8">

              <div className="flex items-center border border-gray-300 rounded-sm w-32">
                <button
                  className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-r border-gray-300"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="flex-1 text-center font-bold text-lg">{qty}</span>

                <button
                  className="w-10 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-l border-gray-300"
                  onClick={() => setQty(qty + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                className={`flex-1 ${BRAND_RED} ${BRAND_RED_HOVER} text-white font-bold rounded-sm shadow-lg uppercase tracking-widest text-sm flex items-center justify-center`}
                onClick={() => {
                  for (let i = 0; i < qty; i++) addToCart(product);
                  setQty(1);
                }}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>

            {/* BADGES */}
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <Check className="w-5 h-5 mr-3 text-green-500" />
                <span>In Stock & Ready to Ship</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Check className="w-5 h-5 mr-3 text-green-500" />
                <span>Authentic Taste Guaranteed</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Check className="w-5 h-5 mr-3 text-green-500" />
                <span>Secure Checkout</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
