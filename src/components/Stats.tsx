import React from 'react';

type StatBoxProps = {
  title: string;
  value: string;
};

const StatBox: React.FC<StatBoxProps> = ({ title, value }) => {
  return (
    <div className="bg-purple-950 rounded-md p-6 transform transition-all duration-300 hover:scale-105">
      <h3 className="text-gray-300 font-medium mb-2 text-sm uppercase tracking-wide">{title}</h3>
      <p className="text-pink-500 text-4xl md:text-5xl font-bold">{value}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              TOTAL REVENUE<br />GENERATED
            </h2>
            <p className="text-5xl md:text-7xl font-bold text-pink-500 mb-12">$1,100,000</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatBox title="APPOINTMENTS BOOKED" value="500+" />
              <StatBox title="TOTAL AD SPEND" value="$11K" />
              <StatBox title="OFFICES" value="0" />
              <StatBox title="SERVICES OFFER" value="1" />
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-gradient-to-br from-black/40 to-purple-950/20 p-8 rounded-lg backdrop-blur-sm border border-purple-900/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white sparkle">Our Philosophy</h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Here at GrowthsterMedia, we've worked with the best in the industry to produce highest return on ad spend. We do away with the inefficiencies & formalities that plague most agencies.
              </p>
              
              <p className="text-lg">
                We focus on what truly matters—strategies that drive real impact and measurable growth for our clients.
              </p>
              
              <p className="text-lg">
                Let's see how we can do the same for you. Schedule your FREE discovery call below.
              </p>
              
              <button 
                onClick={scrollToBooking}
                className="w-full sm:w-auto mt-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-4 rounded-full font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 button-sparkle"
              >
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">Speak To Our Team Today</span>
                  <span className="text-sm">Schedule Your FREE Audit Call Now</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;