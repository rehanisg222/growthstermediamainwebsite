import React from 'react';
import { X } from 'lucide-react';

const WhatWeOffer: React.FC = () => {
  const services = [
    'WEBDESIGN',
    'CONTENT CREATION',
    'EMAIL MARKETING',
    'SOCIAL MEDIA MANAGEMENT',
    'INSTAGRAM GROWTH',
    'PR SERVICE'
  ];

  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg text-white mb-4">What we offer</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6">
              PAID ADVERTISING
            </h2>
            <p className="text-xl text-white mb-6">Ads. Just Ads.</p>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                We do one thing - we just do it with a monastic focus and better than
                anyone else. If you want an agency that offers a full service solution of
                everything that won't move the needle forward, we're not for you.
              </p>
              
              <p className="text-lg">
                If you want an agency where with two clicks, you can get a clear
                breakdown of how much was spent, how much was made & what your
                net profit was - we're for you.
              </p>
            </div>
            
            <button 
              onClick={scrollToBooking}
              className="mt-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-4 rounded-full font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 button-sparkle"
            >
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">Speak To Our Team Today</span>
                <span className="text-sm">Schedule Your FREE Audit Call Now</span>
              </div>
            </button>
          </div>
          
          <div className="lg:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              MASTERY DEMANDS FOCUS SO....
            </h2>
            <p className="text-lg text-gray-300 italic mb-8">
              We don't offer any other services except for <span className="text-pink-500">paid advertising</span>...
            </p>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={service}
                  className="flex items-center space-x-3 text-gray-400"
                  style={{
                    animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-pink-500" />
                    </div>
                  </div>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;