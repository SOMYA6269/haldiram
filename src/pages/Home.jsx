import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ShopByCategorySection from '../components/sections/ShopByCategorySection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import MobileAppPromoSection from '../components/sections/MobileAppPromoSection';
import RecipesSection from '../components/sections/RecipesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Shop-by-Category Grid */}
      <ShopByCategorySection />

      {/* Featured Products Grid */}
      <FeaturedProductsSection />

      {/* Mobile App Promo */}
      <MobileAppPromoSection />

      {/* Testimonials Section - Hidden on mobile to save space */}
      <div className="hidden md:block">
        <TestimonialsSection />
      </div>

      {/* Recipes Section */}
      <RecipesSection />
    </div>
  );
};

export default Home;
