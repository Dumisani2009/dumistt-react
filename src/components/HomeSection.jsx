import React from 'react';

const HomeSection = () => (
  <section id="home" className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
    <div className="text-center">
      <h2 className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
        Your Trusted Partner in Seamless Travel.
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        At Dumi Staff Transfer and Tour (DumiSTT), we redefine your travel experience with unparalleled reliability, comfort, and personalized service across Southern Africa.
      </p>
      <img src="https://placehold.co/1200x600/3182ce/ffffff?text=Experience+Seamless+Travel" alt="Scenic travel" className="rounded-xl shadow-lg mx-auto mb-8 w-full max-w-4xl" />
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        <button className="main-button-primary">Explore Our Services</button>
        <button className="main-button-secondary">Get a Custom Quote</button>
      </div>
    </div>
  </section>
);

export default HomeSection;