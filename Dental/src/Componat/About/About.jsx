import React, { useState } from 'react';
import './About.css';
import { ShieldCheck, ArrowRight, Calendar, Users, Star, Quote } from 'lucide-react';

// Import images
import about1 from '../../assets/about.1.jpg';
import about2 from '../../assets/about2.jpg';
import about3 from '../../assets/about3.jpg';
import about4 from '../../assets/about4.jpg';

// Import team images for avatars
import team1 from '../../assets/doc-6.jpg';
import team2 from '../../assets/doc-7.jpg';
import team3 from '../../assets/doc-8.jpg';
import team4 from '../../assets/person_4.jpg';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [about1, about2, about3, about4];

  // Auto-slide functionality
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="about-v4" id="about">
      <div className="container">
        {/* Top Header Section */}
        <div className="about-v4-header">
          <div className="about-v4-title-area">
            <div className="about-badge">
              <ShieldCheck size={16} />
              Trusted Dental Care
            </div>
            <h2 className="v4-heading">
              Modern dentistry <span className="script-font-v4">backed by</span> <br />
              years of experience, <br />
              clinical precision, and <br />
              deep patient trust <a href="#" className="about-link-v4">About Us <ArrowRight size={16} /></a>
            </h2>
          </div>

          <div className="about-v4-stats-area">
            <p className="v4-intro">
              Explore the experience, certifications, and proven outcomes behind our modern approach to dentistry, trusted by thousands of patients over the years.
            </p>
            <div className="v4-stats-grid">
              <div className="v4-stat-item">
                <Calendar size={18} />
                <div className="v4-stat-val">7+</div>
                <span>Years of Experience</span>
              </div>
              <div className="v4-stat-item">
                <Users size={18} />
                <div className="v4-stat-val">10K+</div>
                <span>Happy Patients</span>
              </div>
              <div className="v4-stat-item">
                <ShieldCheck size={18} />
                <div className="v4-stat-val">20+</div>
                <span>Advanced Treatments</span>
              </div>
              <div className="v4-stat-item">
                <Star size={18} />
                <div className="v4-stat-val">4.9</div>
                <span>Average Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Section - Horizontal Slider */}
        <div className="about-v4-visual-container">
          <div 
            className="v4-slider-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="v4-slide">
                <img 
                  src={img} 
                  alt={`Modern Dental Clinic Interior - View ${index + 1}`} 
                  className="v4-single-full-img" 
                  decoding="async"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Left Testimonial Card */}
          <div className="v4-testimonial-overlay glass-card">
            <div className="v4-quote-icon">
              <Quote size={20} fill="currentColor" />
            </div>
            <p className="v4-testimonial-text">
              "Our team helps you and your teeth shine with health, confidence, and modern aesthetics."
            </p>
            <div className="v4-team-info">
              <div className="v4-avatar-group">
                <img src={team1} alt="Team 1" className="v4-avatar" loading="lazy" />
                <img src={team2} alt="Team 2" className="v4-avatar" loading="lazy" />
                <img src={team3} alt="Team 3" className="v4-avatar" loading="lazy" />
                <img src={team4} alt="Team 4" className="v4-avatar" loading="lazy" />
              </div>
              <span className="v4-team-label">Our Expert Team</span>
            </div>
          </div>

          {/* Center/Right Experience Card */}
          <div className="v4-experience-overlay glass-card">
            <div className="v4-exp-icon-box">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="v4-tooth-svg">
                  <path d="M4.5 10C4.5 7 6 4 9.5 4C11.5 4 12 5.5 12 5.5C12 5.5 12.5 4 14.5 4C18 4 19.5 7 19.5 10C19.5 15 17 20 12 20C7 20 4.5 15 4.5 10Z" />
               </svg>
            </div>
            <div className="v4-exp-content">
               <h3 className="v4-exp-val">7+</h3>
               <span className="v4-exp-label">Years of <br /> Experience</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="about-v4-footer">
          <div className="v4-pagination" role="tablist" aria-label="Project images">
            {images.map((_, index) => (
              <button 
                key={index} 
                className={`v4-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <button className="btn-v4-explore" aria-label="Explore more about our dental services">
            Explore More <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

