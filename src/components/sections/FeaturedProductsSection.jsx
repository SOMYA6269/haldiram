import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../utils/constants";
import HaldiramFrame from "../HaldiramFrame";
import { useCart } from "../../context/CartContext";
import { Plus } from "lucide-react";

const FeaturedProductsSection = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <section className="py-20" style={{ backgroundColor: "#FAF3E6" }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE SECTION */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            India’s Favourites
          </h2>
          <p className="text-gray-700 text-base md:text-lg mt-2">
            Serving India It's Favourites In Every Way Possible.
          </p>
        </div>

        {/* PRODUCT GRID – EXACT HALDIRAM LOOK */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">

          {PRODUCTS.slice(0, 8).map((product) => (
            <div key={product.id} className="w-full">

              <HaldiramFrame className="bg-white">
                <div
                  className="cursor-pointer px-5 pt-8 pb-6 flex flex-col h-full"
                  onClick={() => navigate(`/product/${product.id}`)}
                >

                  {/* IMAGE */}
                  <div className="flex items-center justify-center h-44 mb-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-36 object-contain"
                    />
                  </div>

                  {/* PRODUCT NAME */}
                  <h3 className="text-[15px] md:text-base text-gray-900 font-semibold mb-4 line-clamp-2 leading-snug">
                    {product.name}
                  </h3>

                  {/* PRICE + ADD BUTTON */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-lg font-bold text-gray-900">
                        ₹{product.price}.00
                      </p>
                      <p className="text-xs text-gray-500 -mt-1">Inc. GST</p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="w-10 h-10 flex items-center justify-center 
                                 border border-gray-400 rounded-md
                                 hover:border-red-600 hover:text-red-600 transition-all"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </HaldiramFrame>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
