import React from 'react';

const CertifiedBy: React.FC = () => {
  const certifications = [
    {
      name: "Google Partner",
      logo: "https://www.growthstermedia.com/lovable-uploads/d43d5fdc-2d84-4a54-bda3-0e48db3a7594.png"
    },
    {
      name: "Meta Business Partner",
      logo: "https://www.growthstermedia.com/lovable-uploads/62fc26b6-9ee5-423e-b210-ad0b05a2f459.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Certified By
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((cert) => (
            <div 
              key={cert.name}
              className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{
                animation: 'fadeIn 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <img 
                src={cert.logo} 
                alt={`${cert.name} logo`}
                className="h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedBy;