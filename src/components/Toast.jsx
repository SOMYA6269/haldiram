import React from 'react';
import { Check } from 'lucide-react';

const Toast = ({ message, visible }) => (
  <div className={`fixed top-24 right-5 bg-white text-gray-800 px-6 py-4 rounded shadow-2xl z-[80] transition-all duration-300 border-l-4 border-green-500 transform ${visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
    <div className="flex items-center">
        <div className="bg-green-100 p-1.5 rounded-full mr-3">
            <Check className="w-4 h-4 text-green-600" />
        </div>
        <div>
            <h4 className="font-bold text-sm text-gray-900">Added to Cart</h4>
            <span className="text-xs text-gray-600">{message}</span>
        </div>
    </div>
  </div>
);

export default Toast;
