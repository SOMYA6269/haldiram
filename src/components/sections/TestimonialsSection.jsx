import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Haldiram's has been my go-to for authentic Indian sweets for over 20 years. The quality and taste are unmatched. Their Gulab Jamun is simply divine!"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "The best namkeens in India! Their Bhujia Sev is perfectly spiced and stays fresh for weeks. Excellent packaging and fast delivery."
  },
  {
    name: "Anjali Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "For festivals and celebrations, Haldiram's is our first choice. Their Kaju Katli and Motichoor Ladoo are always fresh and delicious."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Millions of happy customers trust Haldiram's for their authentic taste and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 relative">

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-red-200 absolute top-4 right-4" />

              {/* Name + Location (Image Removed) */}
              <div className="mb-6">
                <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>

            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">50M+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">500+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">87</div>
              <div className="text-sm text-gray-600">Years of Trust</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
