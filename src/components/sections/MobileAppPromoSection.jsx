import React from 'react';
import { Check } from 'lucide-react';

const MobileAppPromoSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="mb-8 lg:mb-0 text-center lg:text-left lg:w-1/2">
                  <span className="text-red-400 font-bold uppercase tracking-widest text-sm mb-4 lg:mb-6 block">Download Now</span>
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 font-serif leading-tight">
                    Haldiram's Mobile App <br/>
                    <span className="text-gray-400 text-xl lg:text-2xl xl:text-3xl">Coming Soon!</span>
                  </h3>
                  <div className="flex flex-col space-y-3 lg:space-y-4 opacity-90 text-sm lg:text-base mt-6 lg:mt-10">
                      <div className="flex items-center justify-center lg:justify-start">
                          <div className="bg-red-600 rounded-full p-1.5 lg:p-2 mr-3 lg:mr-4 flex-shrink-0">
                            <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                          </div>
                          <span>Easy delivery, dine-in & takeaway</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start">
                          <div className="bg-red-600 rounded-full p-1.5 lg:p-2 mr-3 lg:mr-4 flex-shrink-0">
                            <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                          </div>
                          <span>Access to the complete range of Haldiram's</span>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col space-y-4 lg:space-y-6 lg:w-1/2 lg:pl-12">
                  <button className="bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl flex items-center hover:bg-gray-100 transition-all shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-1 w-full sm:w-80 lg:w-64 mx-auto lg:mx-0 focus:outline-none focus:ring-2 focus:ring-red-300">
                      <div className="mr-4 lg:mr-6 text-2xl lg:text-4xl">🤖</div>
                      <div className="text-left flex-1">
                          <div className="text-[9px] lg:text-[10px] uppercase font-bold text-gray-500">Coming soon on</div>
                          <div className="text-sm lg:text-lg font-bold leading-none">Google Play</div>
                      </div>
                  </button>
                  <button className="bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl flex items-center hover:bg-gray-100 transition-all shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl transform hover:-translate-y-1 w-full sm:w-80 lg:w-64 mx-auto lg:mx-0 focus:outline-none focus:ring-2 focus:ring-red-300">
                      <div className="mr-6 text-4xl">🍎</div>
                      <div className="text-left flex-1">
                          <div className="text-[9px] lg:text-[10px] uppercase font-bold text-gray-500">Coming soon on</div>
                          <div className="text-sm lg:text-lg font-bold leading-none">App Store</div>
                      </div>
                  </button>
              </div>
          </div>
      </div>
    </section>
  );
};

export default MobileAppPromoSection;
