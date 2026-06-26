import React from 'react';
import './Service.css';
import { Shield, ArrowRight, Check, Stethoscope, Smile, Activity, MapPin, Users, Heart, Calendar } from 'lucide-react';

// Import images
import dentalImg from '../../assets/dental.jpg';
import orthoImg from '../../assets/orthodentics.jpg';
import implantImg from '../../assets/implement.jpg';
import whiteningImg from '../../assets/teeth wehting.jpg';
import heroImg from '../../assets/hero.png';

const mainServices = [
  {
    id: 1,
    title: 'General Dentistry',
    desc: 'Routine checkups, professional cleanings, fillings, and preventive care to keep your smile healthy.',
    icon: <Stethoscope size={20} />,
    color: '#f0fdf4',
    image: dentalImg
  },
  {
    id: 2,
    title: 'Orthodontics',
    desc: 'Braces and clear aligners to straighten teeth and improve your confidence at any age.',
    icon: <Activity size={20} />,
    color: '#f0f9ff',
    image: orthoImg
  },
  {
    id: 3,
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements that restore function and confidence.',
    icon: <MapPin size={20} />,
    color: '#fdfcea',
    image: implantImg
  },
  {
    id: 4,
    title: 'Teeth Whitening',
    desc: 'Safe and effective whitening treatments for a brighter, more radiant smile.',
    icon: <Smile size={20} />,
    color: '#f5f3ff',
    image: whiteningImg
  }
];

const features = [
  {
    icon: <Shield size={20} />,
    title: 'Advanced Technology',
    desc: 'State-of-the-art equipment for precise care'
  },
  {
    icon: <Users size={20} />,
    title: 'Experienced Dentists',
    desc: 'Highly skilled professionals you can trust'
  },
  {
    icon: <Heart size={20} />,
    title: 'Patient Comfort',
    desc: 'Gentle care in a relaxing, friendly environment'
  },
  {
    icon: <Calendar size={20} />,
    title: 'Flexible Appointments',
    desc: 'Convenient scheduling that fits your busy life'
  }
];

const Service = ({ onBookClick }) => {
  return (
    <section className="service-section-v2" id="services">
      <div className="container">
        {/* Header Section */}
        <div className="service-v2-header">
          <div className="header-v2-content">
            <div className="about-badge">
              <Shield size={16} />
              Our Services
            </div>
            <h2 className="v2-heading">
              Comprehensive Dental Services Designed for <span className="text-teal">Every</span> Smile and Lifestyle
            </h2>
            <p className="v2-subtext">
              From general dentistry and cosmetic treatments to orthodontics, implants, and whitening – we provide modern solutions for healthy, confident smiles at every stage.
            </p>
          </div>
          <div className="header-v2-visual">
             <div className="tooth-shield-combo">
                <img src={heroImg} alt="Dental Health Icon - Healthy Tooth" className="header-tooth" loading="lazy" />
                <div className="shield-icon-overlay">
                   <Check size={24} color="white" strokeWidth={3} aria-hidden="true" />
                </div>
             </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-v2-grid">
          {mainServices.map((service) => (
            <div key={service.id} className="service-v2-card">
              <div className="service-v2-img-side">
                 <img 
                    src={service.image} 
                    alt={`${service.title} procedure visualization`} 
                    className="service-main-img" 
                    decoding="async"
                    loading="lazy"
                 />
              </div>
              <div className="service-v2-info-side">
                <div className="service-v2-icon" style={{backgroundColor: service.color}}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-availability">
                  <span className="dot"></span> Available Today
                </div>
                 <div className="service-actions-v2">
                  <button className="btn-service-book" onClick={onBookClick} aria-label={`Book an appointment for ${service.title}`}>
                    Book Now
                  </button>
                  <a href="#" className="learn-more-v2" aria-label={`Learn more about ${service.title}`}>
                    Learn more <div className="arrow-circle" aria-hidden="true"><ArrowRight size={14} /></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Bottom Row */}
        <div className="features-v2-row">
          {features.map((feat, index) => (
            <div key={index} className="feature-v2-item">
              <div className="feature-v2-icon">
                {feat.icon}
              </div>
              <div className="feature-v2-text">
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

