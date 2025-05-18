import React from 'react';

const BookingSection: React.FC = () => {
  return (
    <section id="booking-section" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Ready to Grow Your Social Media Presence?
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Book a free strategy call now and discover how we can boost your brand's online visibility.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            src="https://calendly.com/growthstermedia/30min"
            width="100%"
            height="700px"
            frameBorder="0"
            title="Schedule a call"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;