import React from 'react';
import { ArrowRight } from './Icons';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-black/95 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              MODERN DAY ALCHEMY
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-pink-400 text-transparent bg-clip-text">
              We help businesses & brands produce spine-chilling ROI Via Paid Advertising
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              It's time to scale your business the smart way—with data-driven strategies that work.
            </p>
            
            <button 
              onClick={scrollToBooking}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-md font-medium flex items-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 button-sparkle"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              <img 
                src="https://images.clickfunnels.com/8e/b13d8a33794820aa0b95a879c4aceb/Wizard-Illustration.png" 
                alt="Digital Marketing Wizard" 
                className="h-auto max-w-full md:max-w-md xl:max-w-lg relative z-10"
              />
              
              <div className="absolute top-0 right-0 animate-float delay-100 opacity-80">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <div className="w-4 h-4 border-l-2 border-t-2 border-white rotate-45 translate-x-0.5"></div>
                </div>
              </div>
              
              <div className="absolute bottom-20 right-0 animate-float delay-300 opacity-80">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">f</span>
                </div>
              </div>
              
              <div className="absolute top-20 left-0 animate-float delay-500 opacity-80">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-black font-bold">$</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-0 animate-float delay-700 opacity-80">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;