// src/pages/Category.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Filter, ChevronDown } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, CATEGORY_BANNERS } from "../utils/constants";
import { useCart } from "../context/CartContext";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // FIX: match category names case-insensitively
  const filtered = PRODUCTS.filter(
    (p) => p.category.toLowerCase() === categoryId.toLowerCase()
  );

  const displayProducts = filtered.length ? filtered : PRODUCTS;

  const title = categoryId || "All Products";
  const banner = CATEGORY_BANNERS[categoryId];

  return (
    <div className="pb-24 bg-[#fafafa] min-h-screen w-full overflow-x-hidden">

      {/* CATEGORY BANNER */}
      {banner && (
        <div className="w-full">
          <div className="w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
            <img
              src={banner}
              alt={categoryId}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full bg-[#d6af72] text-center py-5 shadow-inner">
            <h2 className="text-white text-xl sm:text-3xl font-serif font-bold uppercase tracking-wide">
              {categoryId}
            </h2>
            <p className="text-white text-xs sm:text-sm mt-1">
              Explore the finest selection curated just for you.
            </p>
          </div>
        </div>
      )}

      {/* BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-4 py-3 text-xs text-gray-600 flex gap-1">
        <span className="cursor-pointer hover:text-red-600" onClick={() => navigate("/")}>
          Home
        </span>
        <span>/</span>
        <span className="font-bold text-gray-800">{title}</span>
      </div>

      {/* Title + Filter Row */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <h1 className="text-xl sm:text-3xl font-serif font-bold text-gray-800">
          {title}
        </h1>

        <div className="flex gap-3 mt-3 sm:mt-0">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded text-xs font-semibold uppercase bg-white hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>

          <button className="flex items-center px-4 py-2 border border-gray-300 rounded text-xs font-semibold uppercase bg-white hover:bg-gray-50">
            Sort <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">

          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={(p) => navigate(`/product/${p.id}`)}
              onAddToCart={(p) => addToCart(p)}   // FIXED
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Category;
