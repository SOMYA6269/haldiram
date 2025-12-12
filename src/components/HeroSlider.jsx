import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../utils/constants';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[250px] md:h-[500px] overflow-hidden bg-gray-100">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-black/20 flex flex-col items-center justify-center text-center text-white p-4">
            <h2 className="text-2xl md:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg font-serif animate-fade-in-up tracking-wide">{slide.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-white mb-3 md:mb-4 rounded-full opacity-80"></div>
            <p className="text-xs md:text-xl mb-5 md:mb-8 font-medium drop-shadow-md max-w-2xl px-4">{slide.subtitle}</p>
            <button className="bg-white text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold uppercase tracking-wider text-[10px] md:text-sm transition-all transform hover:scale-105 shadow-xl hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full border border-white ${idx === currentSlide ? 'bg-white w-2 h-2 md:w-3 md:h-3' : 'bg-transparent w-2 h-2 opacity-70'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
