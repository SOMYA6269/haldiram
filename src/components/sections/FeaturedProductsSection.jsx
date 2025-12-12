import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { PRODUCTS, BRAND_CREAM } from '../../utils/constants';
import { useCart } from '../../context/CartContext';

const FeaturedProductsSection = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <section className={`${BRAND_CREAM} py-20 border-t-2 border-b-2 border-orange-200`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12 px-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 font-serif">India's Favourites</h2>
            <p className="text-gray-600 text-lg italic">Serving India its favorites in every way possible.</p>
          </div>
          <div className="flex space-x-3">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-red-500 hover:text-red-500 text-gray-500 shadow-lg transition-all hover:shadow-xl">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-red-500 hover:text-red-500 text-gray-500 shadow-lg transition-all hover:shadow-xl">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-3 md:space-x-6 overflow-x-auto pb-6 md:pb-8 px-2 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.slice(0, 8).map((product) => (
            <div key={product.id} className="snap-center min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] flex-shrink-0">
              <ProductCard product={product} onProductClick={handleProductClick} onAddToCart={addToCart} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            className="border-2 border-gray-800 text-gray-800 px-12 py-4 rounded-full font-bold hover:bg-gray-800 hover:text-white transition-all uppercase text-sm tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => navigate('/category/Mithai')}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
