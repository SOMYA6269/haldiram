import React, { useState } from 'react';
import { CheckCircle, Users, TrendingUp, Shield, Star, Award, MapPin, DollarSign } from 'lucide-react';

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    investment: '',
    experience: ''
  });

  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Business Model",
      description: "87 years of expertise in the food industry with established brand recognition and customer loyalty."
    },
    {
      icon: TrendingUp,
      title: "High Profit Margins",
      description: "Enjoy attractive profit margins with our competitive pricing and bulk procurement advantages."
    },
    {
      icon: Shield,
      title: "Complete Support",
      description: "Get comprehensive training, marketing support, and ongoing operational guidance from our experts."
    },
    {
      icon: Users,
      title: "Growing Market",
      description: "Tap into the booming Indian sweets and snacks market with increasing demand for authentic products."
    }
  ];

  const requirements = [
    "Minimum investment starting from ₹15 Lakhs",
    "Store space of 500-1000 sq ft in prime locations",
    "Experience in retail/F&B industry preferred",
    "Commitment to quality and customer service",
    "Willingness to follow Haldiram's standards and processes"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! Our franchise team will contact you within 48 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      investment: '',
      experience: ''
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Join Haldiram's Family</h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Become a franchise partner and bring India's favorite sweets and snacks to your city
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span>87 Years Legacy</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span>200+ Stores</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6" />
                <span>High ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Why Choose Haldiram's Franchise?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join India's most trusted food brand and be part of a successful business venture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <benefit.icon className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Investment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-serif">Franchise Requirements</h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-red-600">Investment Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Franchise Fee</span>
                    <span className="font-semibold">₹5 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Store Setup</span>
                    <span className="font-semibold">₹8-10 Lakhs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Initial Inventory</span>
                    <span className="font-semibold">₹2-3 Lakhs</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-bold text-gray-800">Total Investment</span>
                    <span className="font-bold text-red-600">₹15-18 Lakhs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-serif">Apply for Franchise</h2>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select State</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Available Investment</label>
                    <select
                      name="investment"
                      value={formData.investment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Select Range</option>
                      <option value="10-15">₹10-15 Lakhs</option>
                      <option value="15-25">₹15-25 Lakhs</option>
                      <option value="25-50">₹25-50 Lakhs</option>
                      <option value="50+">₹50 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Business Experience</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your business experience and why you want to join Haldiram's..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Success Stories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our successful franchise partners who turned their dreams into reality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-6 italic">
                "Starting as a small investment, my Haldiram's franchise has grown into a profitable business serving over 1000 customers daily. The brand recognition and support system is unmatched."
              </p>
              <div className="font-bold text-gray-900">- Rajesh Kumar</div>
              <div className="text-gray-600 text-sm">Pune Franchise Owner</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-6 italic">
                "The training and marketing support from Haldiram's team helped me establish a successful store within 6 months. My ROI exceeded all expectations!"
              </p>
              <div className="font-bold text-gray-900">- Priya Sharma</div>
              <div className="text-gray-600 text-sm">Delhi Franchise Owner</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-6 italic">
                "Being part of Haldiram's family gives me pride. The quality products and customer service standards have made my store a local favorite."
              </p>
              <div className="font-bold text-gray-900">- Amit Patel</div>
              <div className="text-gray-600 text-sm">Ahmedabad Franchise Owner</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
