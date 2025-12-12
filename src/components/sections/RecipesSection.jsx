import React from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { RECIPES } from '../../utils/constants';

const RecipesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b-2 border-gray-200 pb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">Recipes With A Twist</h2>
            <p className="text-gray-600 text-lg">Delicious innovations using your favorite Haldiram's snacks</p>
          </div>
          <button className="text-red-600 font-bold text-lg uppercase tracking-wide hover:underline flex items-center border-2 border-red-600 px-6 py-3 rounded-full hover:bg-red-600 hover:text-white transition-all">
            View All Recipes <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {RECIPES.map((recipe) => (
            <div key={recipe.id} className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden aspect-video">
                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                  <div className="bg-white/30 backdrop-blur-sm p-6 rounded-full border-2 border-white/50 group-hover:scale-110 transition-transform shadow-xl">
                     <PlayCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg text-sm font-bold text-gray-800 uppercase tracking-wide shadow-lg">
                  {recipe.difficulty}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors mb-3">{recipe.title}</h3>
                <p className="text-gray-600 flex items-center text-base">
                  <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-sm">⏱</span>
                  {recipe.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
