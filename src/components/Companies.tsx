import React from 'react';

const Companies: React.FC = () => {
  const companies = [
    {
      name: "Beastgrip",
      logo: "https://i.ibb.co/VqGfYw4/beastgrip.png",
    },
    {
      name: "Elite",
      logo: "https://i.ibb.co/Jk8Gw3S/elite.png",
    },
    {
      name: "Durable",
      logo: "https://www.growthstermedia.com/lovable-uploads/05d7abf0-f722-4ef1-a9ff-5e0271a6358c.png",
    },
    {
      name: "Upstack",
      logo: "https://i.ibb.co/YRwBkHb/upstack.png",
    },
    {
      name: "Liftoff",
      logo: "https://finalporject-rehanisg222s-projects.vercel.app/lovable-uploads/666fa10a-6b51-47dc-a20c-614dc012966e.png",
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Companies That <span className="text-pink-500">Trust Us</span>
        </h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={company.name}
                className={`
                  ${index >= 3 ? 'md:col-start-2' : ''}
                  w-full flex items-center justify-center
                  transform hover:scale-110 transition-transform duration-300 ease-in-out
                  opacity-0 animate-fade-in
                `}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="h-28 w-auto max-w-[280px] filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
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