import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { ArrowRight, Mail, Phone, MapPin, Calendar, Check } from 'lucide-react';
import logoImg from '../../assets/Logo.jpg';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = ({ onBookClick }) => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top CTA Banner */}
        <div className="footer-cta-banner">
          <div className="cta-overlay">
            <h2>Book Your Dental Consultation Today</h2>
            <p>Quick, comfortable, and personalized care from experienced professionals using modern dental technologies.</p>
            <button className="btn-dark" onClick={onBookClick}>
              Book a Consultation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer Top Info */}
        <div className="footer-top-info">
          <div className="footer-brand-area">
            <div className="logo footer-logo">
              <img src={logoImg} alt="PureSmile Logo" className="footer-logo-img" />
              <span className="brand-name">RealSmile</span>
            </div>
            <div className="footer-socials">
              <a href="#" className="social-pill" aria-label="Follow us on Facebook"><FacebookIcon /></a>
              <a href="#" className="social-pill" aria-label="Follow us on Instagram"><InstagramIcon /></a>
              <a href="#" className="social-pill" aria-label="Follow us on TikTok"><TiktokIcon /></a>
              <a href="#" className="social-pill" aria-label="Follow us on LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <div className="newsletter-box">
              <input type="email" placeholder="Enter Your email" aria-label="Email address for newsletter" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="footer-nav-grid">
          <div className="nav-col">
            <h5>Navigation</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
            </ul>
          </div>
          <div className="nav-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onBookClick && onBookClick(); }}>Book a Consultation</a></li>
              <li><a href="#">Insurance Information</a></li>
              <li><a href="#">Emergency Dental Care</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="nav-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#">General Dentistry</a></li>
              <li><a href="#">Cosmetic Dentistry</a></li>
              <li><a href="#">Dental Implants</a></li>
              <li><a href="#">Orthodontics</a></li>
              <li><a href="#">Teeth Whitening</a></li>
            </ul>
          </div>
          <div className="nav-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
          <div className="nav-col">
            <h5>Get in touch</h5>
            <div className="contact-list">
              <div className="contact-item">
                <div className="icon-c"><Phone size={14} /></div>
                <span>+111 22 234 5566</span>
              </div>
              <div className="contact-item">
                <div className="icon-c"><Mail size={14} /></div>
                <span>Example@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="icon-c"><MapPin size={14} /></div>
                <span>1 Kensington Lane, London, W8 5EP (concept)</span>
              </div>
              <div className="contact-item">
                <div className="icon-c"><Calendar size={14} /></div>
                <span>Open Daily: 11:00 - 25:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Massive Brand */}
        <div className="footer-bottom-brand">
          <h1 className="massive-text">REAL<span>SMILE</span></h1>
          <p className="copyright">© 2026 RealSmile Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
