import React from 'react';

const ServicesSection = () => (
  <section id="services" className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
    <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-10">Our Comprehensive Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Airport & Private Transfers',
          image: 'https://placehold.co/600x400/2f80ed/ffffff?text=Airport+Transfers',
          desc: 'Seamless pick-ups and drop-offs across Southern Africa. Punctual, comfortable, and stress-free.',
        },
        {
          title: 'Corporate & Staff Transport',
          image: 'https://placehold.co/600x400/2d3748/ffffff?text=Corporate+Transport',
          desc: 'Reliable, efficient solutions for businesses. Your team arrives safely and on time.',
        },
        {
          title: 'School Transport',
          image: 'https://placehold.co/600x400/4c51bf/ffffff?text=School+Transport',
          desc: 'Safe and secure transport for learners. Vetted drivers. Peace of mind for parents.',
        },
        {
          title: 'Ride-hailing Vehicle Rental',
          image: 'https://placehold.co/600x400/38a169/ffffff?text=Ride-hailing+Vehicle+Rental',
          desc: 'Flexible vehicle leasing for Uber/Bolt drivers. Weekly rentals with insurance included.',
        },
        {
          title: 'Local Tours',
          image: 'https://placehold.co/600x400/805ad5/ffffff?text=Local+Tours',
          desc: 'Explore SA’s best — from Kruger safaris to cultural gems. Private tours, your way.',
        },
        {
          title: 'International Tours',
          image: 'https://placehold.co/600x400/dd6b20/ffffff?text=International+Tours',
          desc: 'Multi-day, cross-border adventures to Botswana, Mozambique, Namibia, and beyond.',
        },
      ].map((service, i) => (
        <div key={i} className="bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group">
          <img src={service.image} alt={service.title} className="rounded-xl mb-4 w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;