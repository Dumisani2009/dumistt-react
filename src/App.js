import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import BookingsSection from './components/BookingsSection';

function App() {
  return (
    <div className="App">
      <main className="p-6 space-y-12">
        <HomeSection />
        <ServicesSection />
        <PricingSection />
        <BookingsSection />
      </main>
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
}


export default App;