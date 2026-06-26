import React from 'react';
import './Hero.css';
import { ArrowUpRight, MapPin, Play } from 'lucide-react';
import heroTooth from '../../assets/hero.png'; // Assuming this is the tooth image

const Hero = ({ onBookClick }) => {
  return (
    <section className="hero-v5">
      <div className="container hero-v5-container">
        
        {/* Top Left Part */}
        <div className="hero-v5-top-left">
          <h2 className="v5-modern-text">Modern dentistry</h2>
          <button 
            className="v5-cta-btn" 
            onClick={onBookClick}
            aria-label="Book a dental consultation"
          >
            Book a Consultation <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Central Tooth Image */}
        <div className="hero-v5-center-visual">
          <img 
            src={heroTooth} 
            alt="3D Tooth Visualization" 
            className="v5-tooth-img" 
            fetchPriority="high"
            decoding="async"
          />
          
          {/* Floating Location Tags */}
          <div className="v5-location-tag tag-la">
            <MapPin size={12} /> Los Angeles, CA
          </div>
          <div className="v5-location-tag tag-ny">
            <MapPin size={12} /> New York, NY
          </div>
          <div className="v5-location-tag tag-miami">
            <MapPin size={12} /> Miami, FL
          </div>
        </div>

        {/* Right Side Content */}
        <div className="hero-v5-right-content">
          <h1 className="v5-main-title">
            for a confident, <br />
            <span className="text-teal">healthy</span> smile
          </h1>
          <p className="v5-desc">
            Innovative technologies, pain-free treatments, and personalized care for adults and children
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
