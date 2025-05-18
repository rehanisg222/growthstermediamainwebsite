import React from 'react';

const Companies: React.FC = () => {
  const companies = [
    {
      name: "Beastgrip",
      logo: "https://images.pexels.com/photos/18711355/pexels-photo-18711355.png",
    },
    {
      name: "Educate",
      logo: "https://images.pexels.com/photos/18711357/pexels-photo-18711357.png",
    },
    {
      name: "Acquisition",
      logo: "https://images.pexels.com/photos/18711359/pexels-photo-18711359.png",
    },
    {
      name: "Durable",
      logo: "https://images.pexels.com/photos/18711361/pexels-photo-18711361.png",
    },
    {
      name: "Kickofy",
      logo: "https://images.pexels.com/photos/18711363/pexels-photo-18711363.png",
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20">
          Companies That <span className="text-pink-500">Trust Us</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 items-center">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className="w-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ease-in-out opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="h-16 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;