import React, { useState } from 'react';
import { MapPin, Phone, Clock, Search, Navigation } from 'lucide-react';

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  const stores = [
    {
      id: 1,
      name: "Haldiram's Nagpur Main Store",
      address: "145/146, Old Pardi Naka, Bhandara Road, Nagpur - 440032, Maharashtra",
      phone: "0712-1234567",
      hours: "9:00 AM - 10:00 PM",
      state: "Maharashtra",
      type: "Flagship Store",
      coordinates: { lat: 21.1458, lng: 79.0882 }
    },
    {
      id: 2,
      name: "Haldiram's Mumbai Central",
      address: "Shop No. 123, Crawford Market, Mumbai - 400001, Maharashtra",
      phone: "022-12345678",
      hours: "8:00 AM - 11:00 PM",
      state: "Maharashtra",
      type: "Premium Store",
      coordinates: { lat: 18.9388, lng: 72.8354 }
    },
    {
      id: 3,
      name: "Haldiram's Delhi Connaught Place",
      address: "P-45, Connaught Place, New Delhi - 110001, Delhi",
      phone: "011-12345678",
      hours: "10:00 AM - 10:00 PM",
      state: "Delhi",
      type: "Premium Store",
      coordinates: { lat: 28.6304, lng: 77.2177 }
    },
    {
      id: 4,
      name: "Haldiram's Kolkata Park Street",
      address: "18, Park Street, Kolkata - 700016, West Bengal",
      phone: "033-12345678",
      hours: "9:00 AM - 11:00 PM",
      state: "West Bengal",
      type: "Premium Store",
      coordinates: { lat: 22.5558, lng: 88.3496 }
    },
    {
      id: 5,
      name: "Haldiram's Bengaluru MG Road",
      address: "45, MG Road, Bengaluru - 560001, Karnataka",
      phone: "080-12345678",
      hours: "9:00 AM - 10:30 PM",
      state: "Karnataka",
      type: "Premium Store",
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    {
      id: 6,
      name: "Haldiram's Chennai T. Nagar",
      address: "123, Usman Road, T. Nagar, Chennai - 600017, Tamil Nadu",
      phone: "044-12345678",
      hours: "9:30 AM - 10:00 PM",
      state: "Tamil Nadu",
      type: "Premium Store",
      coordinates: { lat: 13.0827, lng: 80.2707 }
    },
    {
      id: 7,
      name: "Haldiram's Pune FC Road",
      address: "567, FC Road, Pune - 411004, Maharashtra",
      phone: "020-12345678",
      hours: "9:00 AM - 10:00 PM",
      state: "Maharashtra",
      type: "Standard Store",
      coordinates: { lat: 18.5204, lng: 73.8567 }
    },
    {
      id: 8,
      name: "Haldiram's Ahmedabad CG Road",
      address: "89, CG Road, Ahmedabad - 380009, Gujarat",
      phone: "079-12345678",
      hours: "9:00 AM - 10:30 PM",
      state: "Gujarat",
      type: "Standard Store",
      coordinates: { lat: 23.0225, lng: 72.5714 }
    }
  ];

  const states = ['All', ...Array.from(new Set(stores.map(store => store.state)))];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = selectedState === 'All' || store.state === selectedState;
    return matchesSearch && matchesState;
  });

  const getStoreTypeColor = (type) => {
    switch (type) {
      case 'Flagship Store': return 'bg-red-600';
      case 'Premium Store': return 'bg-orange-600';
      default: return 'bg-green-600';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Find Our Stores</h1>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Locate Haldiram's stores near you and experience authentic Indian sweets and snacks
          </p>
          <div className="flex items-center justify-center space-x-2 text-red-200">
            <MapPin className="w-6 h-6" />
            <span className="text-lg">Over 200+ Stores Across India</span>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stores by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* State Filter */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium">Filter by State:</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Store Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredStores.length} Store{filteredStores.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-600">
              Visit us to experience the finest traditional Indian sweets and snacks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map(store => (
              <div key={store.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Store Type Badge */}
                <div className={`${getStoreTypeColor(store.type)} text-white px-4 py-2 text-sm font-medium`}>
                  {store.type}
                </div>

                {/* Store Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{store.name}</h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{store.address}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{store.phone}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{store.hours}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">Call</span>
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2">
                      <Navigation className="w-4 h-4" />
                      <span className="font-medium">Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No stores found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or state filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Can't Find a Store Near You?</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Join our franchise network and bring authentic Haldiram's products to your city
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors shadow-lg">
            Apply for Franchise
          </button>
        </div>
      </section>
    </div>
  );
};

export default StoreLocator;
