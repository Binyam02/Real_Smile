import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/Logo.jpg';
import AuthModal from '../Auth/AuthModal';

const Navbar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar-v2">
      <div className="container nav-v2-container">
        <Link to="/" className="logo-v2" aria-label="RealSmile Home">
            <img src={logoImg} alt="RealSmile - Professional Dentistry Logo" className="logo-img-v2" fetchPriority="high" />
            <span className="logo-text-v2">RealSmile</span>
        </Link>

        <nav className="nav-pill-v2" aria-label="Main Navigation">
          <ul className="nav-links-v2">
            <li><Link to="/" className={location.pathname === '/' ? "active" : ""} aria-current={location.pathname === '/' ? "page" : undefined}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? "active" : ""} aria-current={location.pathname === '/about' ? "page" : undefined}>About</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? "active" : ""} aria-current={location.pathname === '/services' ? "page" : undefined}>Services</Link></li>
            <li><Link to="/doctors" className={location.pathname === '/doctors' ? "active" : ""} aria-current={location.pathname === '/doctors' ? "page" : undefined}>Our Doctors</Link></li>
            <li><Link to="/reviews" className={location.pathname === '/reviews' ? "active" : ""} aria-current={location.pathname === '/reviews' ? "page" : undefined}>Reviews</Link></li>
          </ul>
        </nav>

        <div className="nav-auth-v2">
          <button className="login-link-v2" onClick={() => openAuth('login')} aria-label="Log in to your account">Log in</button>
          <button className="btn-signin-v2" onClick={() => openAuth('signup')} aria-label="Sign up for an account">Sign in</button>
          <button 
            className="mobile-toggle-v2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? "active" : ""}>Home</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? "active" : ""}>About</Link></li>
            <li><Link to="/services" onClick={closeMobileMenu} className={location.pathname === '/services' ? "active" : ""}>Services</Link></li>
            <li><Link to="/doctors" onClick={closeMobileMenu} className={location.pathname === '/doctors' ? "active" : ""}>Our Doctors</Link></li>
            <li><Link to="/reviews" onClick={closeMobileMenu} className={location.pathname === '/reviews' ? "active" : ""}>Reviews</Link></li>
          </ul>
          <div className="mobile-nav-auth">
            <button className="mobile-btn-login" onClick={() => openAuth('login')}>Log in</button>
            <button className="mobile-btn-signup" onClick={() => openAuth('signup')}>Sign in</button>
          </div>
        </div>
      </div>
      </nav>
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;
