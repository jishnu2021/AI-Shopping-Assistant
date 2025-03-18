import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import Hero from './Component/hero/Hero';

import Features from './Component/feature/Features';
import PricingPage from './Component/pricing/PricingPage'; 
import Property from './Component/feature/Property';
import HowItWorks from './Component/howitworks/HowItWorks';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features/>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/property' element={<Property/>} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
