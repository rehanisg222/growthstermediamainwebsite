import React from 'react';

const Companies: React.FC = () => {
  const companies = [
    {
      name: "Beastgrip",
      logo: "https://i.postimg.cc/ZY3ZSh97/image-2025-05-18-171440955.png",
    },
    {
      name: "Educate",
      logo: "https://i.postimg.cc/W3c7Qrq1/image-2025-05-18-171539621.png",
    },
    {
      name: "Acquisition",
      logo: "https://i.postimg.cc/4xfL4jPR/image-2025-05-18-171733978.png",
    },
    {
      name: "Durable",
      logo: "https://i.postimg.cc/1RL4QQ94/image-2025-05-18-171812294.png",
    },
    {
      name: "Kickofy",
      logo: "https://i.postimg.cc/50LTQLFh/image-2025-05-18-171858482.png",
    },
     {
      name: "Flozy",
      logo: "https://i.postimg.cc/0jZQpC5z/image-2025-05-18-203227283.png",
    },
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
                  className="h-100 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
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