import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         <Link to="/"> <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span  className="ml-2 text-xl font-bold text-gray-900">ShopSage</span>
          </div></Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/property" className="text-gray-600 hover:text-indigo-600">Features</Link>
              <Link to="/howitworks" className="text-gray-600 hover:text-indigo-600">How it Works</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-indigo-600">Pricing</Link> {/* Use Link for internal navigation */}
              <Link to="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="#features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Features</Link>
            <Link to="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">How it Works</Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Pricing</Link> {/* Use Link for internal navigation */}
            <Link to="/login" className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
