// src/components/ProductCard.jsx
import React from "react";
import { Heart, Plus, Star } from "lucide-react";
import { BRAND_RED } from "../utils/constants";
import { useCart } from "../context/CartContext";
import HaldiramFrame from "./HaldiramFrame";

const ProductCard = ({ product, onProductClick, onAddToCart }) => {
  const { addToWishlist, isInWishlist, removeFromWishlist } = useCart();
  const inWishlist = isInWishlist(product.id);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    if (inWishlist) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  return (
    <HaldiramFrame className="mx-auto">
      <div
        onClick={() => onProductClick(product)}
        className="cursor-pointer w-full flex flex-col bg-transparent"
      >
        {/* tag badge */}
        {product.tag && (
          <div className="absolute translate-y-[-1rem] left-6 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {product.tag}
          </div>
        )}

        {/* image box: keep fixed height for consistent frames */}
        <div className="flex items-center justify-center bg-gray-50 rounded-md overflow-hidden mx-2 mt-2"
             style={{ height: 170 }}>
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[150px] object-contain transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* details */}
        <div className="px-3 pb-3 pt-4 flex flex-col flex-1">
          <span className="text-xs text-[#B0302A] font-semibold uppercase">{product.category}</span>

          <h3 className="text-gray-800 font-semibold text-sm mt-1 mb-2 line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center text-sm text-gray-500 mb-3">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-xs">{product.rating} ({product.reviews})</span>
          </div>

          <div className="mt-auto pt-2 border-t border-gray-100">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-lg font-bold text-gray-900">₹{product.price}</div>
                <div className="text-xs text-gray-500">{product.weight}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                  className={`${BRAND_RED} text-white text-xs px-3 py-2 rounded-md font-semibold flex items-center`}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </button>

                <button
                  onClick={toggleWishlist}
                  className={`p-2 border rounded-md ${inWishlist ? "border-red-600 text-red-600 bg-red-50" : "border-gray-300 text-gray-600"}`}
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HaldiramFrame>
  );
};

export default ProductCard;
