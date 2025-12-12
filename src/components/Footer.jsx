import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Clock, Truck, Shield } from 'lucide-react';
import { BRAND_RED, FOOTER_LINKS } from '../utils/constants';

const Footer = ({ onNavigate }) => (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8 mt-auto border-t-4 border-red-600">
        {/* Features Bar */}
        <div className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                        <Truck className="w-6 h-6 text-red-500" />
                        <div>
                            <div className="text-white font-semibold text-sm">Free Shipping</div>
                            <div className="text-gray-400 text-xs">On orders above ₹500</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                        <Clock className="w-6 h-6 text-red-500" />
                        <div>
                            <div className="text-white font-semibold text-sm">Fresh & Authentic</div>
                            <div className="text-gray-400 text-xs">Premium quality guaranteed</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end space-x-3">
                        <Shield className="w-6 h-6 text-red-500" />
                        <div>
                            <div className="text-white font-semibold text-sm">Secure Payment</div>
                            <div className="text-gray-400 text-xs">100% secure transactions</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {/* Company Info */}
                <div className="lg:col-span-2">
                    <div className="mb-4">
                        <img 
                            src="/images/products/Haldiram's_Logo_SVG.svg.png" 
                            alt="Haldiram's Logo" 
                            className="h-12 md:h-16 w-auto object-contain bg-white p-2 rounded-lg"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                const fallback = e.target.nextSibling;
                                if (fallback) fallback.style.display = 'block';
                            }}
                        />
                        <h3 className="text-white text-xl font-bold mt-2 logo-fallback hidden">Haldiram's</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Since 1937, Haldiram's has been India's favorite destination for authentic sweets,
                        namkeens, and traditional delicacies. Committed to quality, tradition, and taste.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white text-base font-bold mb-6 uppercase tracking-wider">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {FOOTER_LINKS.quickLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.href} className="hover:text-white transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h4 className="text-white text-base font-bold mb-6 uppercase tracking-wider">
                        Products
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {FOOTER_LINKS.products.map(link => (
                            <li key={link.name}>
                                <button
                                    onClick={() => onNavigate(link.href)}
                                    className="hover:text-white transition-colors text-left"
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h4 className="text-white text-base font-bold mb-6 uppercase tracking-wider">
                        Support
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {FOOTER_LINKS.support.map(link => (
                            <li key={link.name}>
                                <a href={link.href} className="hover:text-white transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 p-6 bg-gray-800 rounded-lg">
                <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                        <div className="text-white font-semibold text-sm mb-1">Our Address</div>
                        <div className="text-gray-400 text-sm">
                            Haldiram Foods International Pvt Ltd,<br/>
                            145/146, Old Pardi Naka,<br/>
                            Bhandara Road, Nagpur - 440032
                        </div>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                        <div className="text-white font-semibold text-sm mb-1">Call Us</div>
                        <div className="text-gray-400 text-sm">
                            Toll Free: 1800-123-4567<br/>
                            Customer Care: +91-712-1234567
                        </div>
                    </div>
                </div>

                <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                        <div className="text-white font-semibold text-sm mb-1">Email Us</div>
                        <div className="text-gray-400 text-sm">
                            support@haldirams.com<br/>
                            sales@haldirams.com
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-lg mb-8">
                <div className="text-center">
                    <h4 className="text-white text-lg md:text-xl font-bold mb-2">Stay Updated</h4>
                    <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base px-4">Subscribe to get special offers, free giveaways, and exclusive deals.</p>
                    <div className="flex w-full max-w-md mx-auto px-4 md:px-0">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-gray-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm md:text-base"
                        />
                        <button className={`${BRAND_RED} text-white px-4 md:px-6 py-2 md:py-3 rounded-r-lg hover:bg-red-700 transition-colors font-semibold text-sm md:text-base whitespace-nowrap`}>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
                <p>&copy; 2024 Haldiram's. All Rights Reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <span className="text-gray-700">|</span>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <span className="text-gray-700">|</span>
                    <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
