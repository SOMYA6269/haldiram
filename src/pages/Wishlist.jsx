import React from 'react';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_RED } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-md mx-auto text-center">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 mx-auto">
            <Heart className="w-12 h-12 text-red-300" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">Start adding products you love to your wishlist!</p>
          <button
            onClick={() => navigate('/products')}
            className={`${BRAND_RED} text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors`}
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Wishlist</h1>
        <p className="text-gray-600">{wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard
              product={product}
              onProductClick={(p) => navigate(`/product/${p.id}`)}
              onAddToCart={addToCart}
            />
            <button
              onClick={() => removeFromWishlist(product.id)}
              className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors"
              title="Remove from Wishlist"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

