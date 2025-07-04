import React, { useState } from 'react';

const BookingsSection = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '', email: '', phone: '', service: '',
    pickup: '', destination: '', date: '', time: '',
    passengers: 1, message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Request Submitted:", bookingDetails);
    alert("Your booking request has been submitted! We’ll contact you shortly.");
    setBookingDetails({
      name: '', email: '', phone: '', service: '',
      pickup: '', destination: '', date: '', time: '',
      passengers: 1, message: ''
    });
  };

  return (
    <section id="bookings" className="bg-white p-8 rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-10">Book Your Journey with DumiSTT</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <input type="text" name="name" placeholder="Full Name" required value={bookingDetails.name} onChange={handleChange} className="form-input" />
        <input type="email" name="email" placeholder="Email" required value={bookingDetails.email} onChange={handleChange} className="form-input" />
        <input type="tel" name="phone" placeholder="Phone" required value={bookingDetails.phone} onChange={handleChange} className="form-input" />
        <select name="service" required value={bookingDetails.service} onChange={handleChange} className="form-input">
          <option value="">Select Service</option>
          <option>Airport Transfer</option>
          <option>Corporate Transport</option>
          <option>School Transport</option>
          <option>Vehicle Rental</option>
          <option>Local Tour</option>
          <option>Intercity Transfer</option>
          <option>Cross-Border Tour</option>
          <option>Other</option>
        </select>
        <input type="text" name="pickup" placeholder="Pickup Location" required value={bookingDetails.pickup} onChange={handleChange} className="form-input" />
        <input type="text" name="destination" placeholder="Destination" value={bookingDetails.destination} onChange={handleChange} className="form-input" />
        <input type="date" name="date" required value={bookingDetails.date} onChange={handleChange} className="form-input" />
        <input type="time" name="time" value={bookingDetails.time} onChange={handleChange} className="form-input" />
        <input type="number" name="passengers" min="1" value={bookingDetails.passengers} onChange={handleChange} className="form-input md:col-span-2" placeholder="Number of Passengers" />
        <textarea name="message" rows="3" value={bookingDetails.message} onChange={handleChange} className="form-input md:col-span-2" placeholder="Additional Details" />
        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 md:col-span-2">
          Submit Booking Request
        </button>
      </form>
    </section>
  );
};

export default BookingsSection;
