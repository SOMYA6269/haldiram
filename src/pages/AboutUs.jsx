import React from 'react';
import { Users, Award, Heart, Globe, Clock, Star } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Users, value: "10M+", label: "Happy Customers" },
    { icon: Award, value: "87", label: "Years of Excellence" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Star, value: "4.8", label: "Customer Rating" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on the quality of our ingredients and traditional recipes passed down through generations."
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Every product is crafted with love to bring joy and satisfaction to millions of families across India and beyond."
    },
    {
      icon: Clock,
      title: "Timeless Tradition",
      description: "Since 1937, we've maintained the authenticity of traditional Indian sweets while embracing modern standards."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From street corners in India to international markets, Haldiram's is loved worldwide for its authentic taste."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">About Haldiram's</h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
            Since 1937, serving India's favorite sweets and snacks with unwavering commitment to quality and tradition.
          </p>
          <div className="flex items-center justify-center space-x-2 text-red-200">
            <Clock className="w-5 h-5" />
            <span className="text-lg">87 Years of Culinary Excellence</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-600">From Humble Beginnings</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 1937 by Shri Ganga Bhishen Agarwal in Bikaner, Rajasthan, Haldiram's started as a small
                  sweet shop with a simple mission: to create the finest traditional Indian sweets using authentic recipes
                  and premium ingredients.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What began as a small family business has now grown into India's most trusted and beloved brand for
                  sweets, namkeens, and ready-to-eat meals, serving millions of satisfied customers worldwide.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4 text-red-600">Milestones</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span>1937: Founded in Bikaner, Rajasthan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span>1970s: Expanded to Nagpur, Maharashtra</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span>1990s: Modernized production facilities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span>2000s: International expansion began</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span>Today: Serving 50+ countries worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do, ensuring we deliver the best to our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <value.icon className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Our Mission</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-red-100">
            "To preserve and promote India's rich culinary heritage by creating authentic, high-quality traditional
            sweets and snacks that bring joy to millions of families worldwide, while maintaining the highest standards
            of quality, hygiene, and customer satisfaction."
          </p>
          <div className="flex items-center justify-center space-x-2 text-red-200">
            <Heart className="w-6 h-6" />
            <span className="text-lg font-medium">Made with Love, Served with Pride</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
