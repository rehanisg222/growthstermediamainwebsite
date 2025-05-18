import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Companies from './components/Companies';
import WhatWeOffer from './components/WhatWeOffer';
import CertifiedBy from './components/CertifiedBy';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Growthstermedia";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Companies />
        <WhatWeOffer />
        <CertifiedBy />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;