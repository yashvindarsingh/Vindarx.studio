import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import HeroSection from './Components/Hero';
import Stats from './Components/Stats';
import Service from './Components/Service';
import Process from './Components/Process';
import Work from './Components/Work';
import Team from './Components/Team';
import WhyVindar from './Components/WhyVindar';
import Testimonial from './Components/Testimonial';
import CtaBanner from './Components/CtaBanner';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

// Single Page Main Layout
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <Service />
      <Process />
      <Work />
      <Team />
      <WhyVindar />
      <Testimonial />
      <CtaBanner />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app-main">
      <Routes>
        {/* Main Website Route */}
        <Route path="/" element={<Home />} />

        {/* 404 Error Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;