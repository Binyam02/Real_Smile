import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Componat/Navbar/Navbar';
import Hero from './Componat/Hero/Hero';
import About from './Componat/About/About';
import Docter from './Componat/Docter/Docter';
import Service from './Componat/Service/Service';
import Testimonal from './Componat/Testimonal/testi';
import Footer from './Componat/Footer/Footer';
import BookingModal from './Componat/Booking/BookingModal';
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar onBookClick={openBooking} />
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={
            <>
              <Hero onBookClick={openBooking} />
              <About />
              <Service onBookClick={openBooking} />
              <Docter onBookClick={openBooking} />
              <Testimonal />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/doctors" element={<Docter />} />
          <Route path="/reviews" element={<Testimonal />} />
        </Routes>
      </main>
      <Footer onBookClick={openBooking} />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;
