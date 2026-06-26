import React, { useState, useEffect } from 'react';
import './Docter.css';
import { MapPin, Phone, ArrowRight, User, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import doc1 from '../../assets/doc1.jpg';
import doc2 from '../../assets/doc2.jpg';
import doc3 from '../../assets/doc3.jpg';
import doc4 from '../../assets/doc4.jpg';
import doc5 from '../../assets/doc5.jpg';
import doc6 from '../../assets/doc6.jpg';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const doctors = [
  {
    id: 1,
    name: 'Dr. James Wilson',
    specialty: 'Senior Dentist',
    location: 'New York, NY',
    color: '#e0f2fe',
    image: doc1
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    specialty: 'Orthodontist',
    location: 'Los Angeles, CA',
    color: '#f0fdf4',
    image: doc2
  },
  {
    id: 3,
    name: 'Dr. Michael Chen',
    specialty: 'Cosmetic Dentist',
    location: 'Chicago, IL',
    color: '#fefce8',
    image: doc3
  },
  {
    id: 4,
    name: 'Dr. Emily Davis',
    specialty: 'Pediatric Dentist',
    location: 'Houston, TX',
    color: '#fee2e2',
    image: doc4
  },
  {
    id: 5,
    name: 'Dr. Robert Brown',
    specialty: 'Periodontist',
    location: 'Phoenix, AZ',
    color: '#f3e8ff',
    image: doc5
  },
  {
    id: 6,
    name: 'Dr. Linda White',
    specialty: 'Endodontist',
    location: 'Philadelphia, PA',
    color: '#ecfdf5',
    image: doc6
  }
];

const Docter = ({ onBookClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < doctors.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Math.max(0, doctors.length - cardsPerView));
    }
  };

  return (
    <section className="docter-section" id="doctors">
      <div className="container">
        <div className="docter-header">
          <div className="header-left">
            <div className="about-badge">
              <User size={16} />
              Meet Our Experts
            </div>
            <h2 className="section-title">Our Expert Doctors</h2>
            <p className="section-subtitle">
              We have a team of highly skilled and experienced dental professionals dedicated to providing the best care for your smile.
            </p>
          </div>
          <div className="slider-controls">
            {!viewAll && (
              <div className="slider-nav" role="group" aria-label="Slider navigation">
                <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous doctor">
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <button className="slider-arrow next" onClick={nextSlide} aria-label="Next doctor">
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
              </div>
            )}
            <button 
              className="btn-primary desktop-only"
              onClick={() => setViewAll(!viewAll)}
              aria-label={viewAll ? "Show fewer doctors" : "Show all our dental experts"}
            >
              {viewAll ? 'View Less' : 'View All Doctors'} <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`docter-slider-container ${viewAll ? 'view-all' : ''}`}>
          <div 
            className="docter-slider-track"
            style={{ 
              transform: viewAll ? 'none' : `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              flexWrap: viewAll ? 'wrap' : 'nowrap'
            }}
          >
            {doctors.map((doctor) => (
              <div key={doctor.id} className="docter-card-wrapper">
                <div className="docter-card glass-card">
                  <div className="docter-image-area" style={{backgroundColor: doctor.color}}>
                    <div className="specialty-badge">{doctor.specialty}</div>
                    <img 
                      src={doctor.image} 
                      alt={`Portrait of ${doctor.name}, ${doctor.specialty}`} 
                      className="doctor-img" 
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="docter-info">
                    <h3 className="docter-name">{doctor.name}</h3>
                    <p className="docter-title">{doctor.specialty}</p>
                    <div className="docter-location">
                      <MapPin size={16} />
                      <span>{doctor.location}</span>
                    </div>
                    
                    <div className="docter-actions">
                      <button className="btn-primary sm" onClick={onBookClick} aria-label={`Book an appointment with ${doctor.name}`}>Book Now</button>
                      <div className="social-links">
                        <a href="#" className="social-icon" aria-label={`${doctor.name} on LinkedIn`}><LinkedinIcon /></a>
                        <a href="#" className="social-icon" aria-label={`${doctor.name} on Twitter`}><TwitterIcon /></a>
                        <a href="#" className="social-icon" aria-label={`${doctor.name} on Instagram`}><InstagramIcon /></a>
                      </div>
                      <button className="phone-btn" aria-label={`Call ${doctor.name}`}>
                        <Phone size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docter;

