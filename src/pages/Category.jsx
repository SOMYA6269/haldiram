import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/constants';
import { useCart } from '../context/CartContext';

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const filteredProducts = PRODUCTS.filter(
    p => p.category === categoryId || !categoryId || categoryId === 'All Categories'
  );

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : PRODUCTS;
  const displayTitle = categoryId || "All Products";

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen pb-12">
      
      {/* HEADER + BREADCRUMB */}
      <div className="bg-white shadow-sm mb-8">
        <div className="max-w-[1400px] mx-auto px-4 py-8">
          <div className="flex items-center text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
            <span className="cursor-pointer hover:text-red-600" onClick={() => navigate('/')}>Home</span>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-gray-800 font-bold">{displayTitle}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 md:mb-0">
              {displayTitle}
            </h1>

            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-sm text-xs font-bold uppercase">
                <Filter className="w-3 h-3 mr-2" /> Filter
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-sm text-xs font-bold uppercase">
                Sort <ChevronDown className="w-3 h-3 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID FIXED */}
      <div className="w-full max-w-[1400px] mx-auto px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {displayProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Category;
