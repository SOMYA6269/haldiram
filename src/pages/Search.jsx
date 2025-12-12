import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../utils/constants';
import { useCart } from '../context/CartContext';

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchParams.get('q') || '';

  const searchResults = useMemo(() => {
    if (query.trim()) {
      return PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    return [];
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex border-2 border-gray-200 rounded-lg overflow-hidden focus-within:border-red-400 transition-colors">
              <div className="flex items-center bg-gray-50 px-4">
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for sweets, namkeens, products..."
                className="flex-1 px-4 py-3 text-lg focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors font-semibold"
              >
                Search
              </button>
            </div>
          </form>

          {/* Search Results Info */}
          {searchQuery && (
            <div className="text-center mt-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Search Results for "{searchQuery}"
              </h1>
              <p className="text-gray-600">
                Found {searchResults.length} product{searchResults.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Search Results */}
      <div className="container mx-auto px-4 py-8">
        {searchQuery ? (
          searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No products found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any products matching "{searchQuery}"
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Browse All Products
              </button>
            </div>
          )
        ) : (
          <div className="text-center py-16">
            <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Search</h2>
            <p className="text-gray-600">
              Enter a product name, category, or keyword to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
