// src/components/sections/ShopByCategorySection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../utils/constants";

const ShopByCategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-serif">
            Shop By Category
          </h2>
          <div className="w-20 h-[3px] bg-red-600 rounded-full"></div>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/category/${cat.name}`)}
              className="group cursor-pointer relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE BOX */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              </div>

              {/* CATEGORY NAME */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white text-sm md:text-lg font-bold tracking-wide drop-shadow-lg">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
