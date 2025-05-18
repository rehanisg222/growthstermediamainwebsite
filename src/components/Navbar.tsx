import React from 'react';
import { AlchemyLogo } from './Icons';

const Navbar: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black/90 to-purple-950/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.postimg.cc/q7g50B6S/image-2025-05-18-205229371.png"
            alt="Growthstermedia Logo"
            className="h-12 w-auto mr-3"
          />
        </div>
        
        <button 
          onClick={scrollToBooking}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-md font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 button-sparkle"
        >
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar