import React from 'react';

const PricingSection = () => (
  <section id="pricing" className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
    <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-10">Our Pricing & Packages</h2>
    <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
      Transparent pricing for every journey. Whether you need an airport transfer, school transport, corporate shuttle, or an intercity tour, we’ve got flexible options that fit your needs and your budget.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Airport Transfers</h3>
        <ul className="text-gray-600 space-y-2">
          <li>Toyota Quantum: R850–R1,200</li>
          <li>Hyundai H1 Elite: R750–R1,100</li>
          <li>Mercedes-Benz E-Class: R950–R1,500</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Corporate & Staff</h3>
        <ul className="text-gray-600 space-y-2">
          <li>Weekly Contracts: R22k–R45k/month</li>
          <li>Vetted drivers with GPS tracking</li>
          <li>Custom route planning available</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Local & Cross-Border Tours</h3>
        <ul className="text-gray-600 space-y-2">
          <li>Private Kruger Day Safari: from R3,500/day</li>
          <li>Cross-Border (e.g. Lesotho): from R10k pp</li>
          <li>Rates vary by group size & itinerary</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PricingSection;
