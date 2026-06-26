import React, { useState } from 'react';
import './testi.css';
import { MessageSquare, Star, Edit3, ArrowRight, Play, Plus, Minus, Send, Mail, Users } from 'lucide-react';
import heroImg from '../../assets/hero.png';
import smileImg from '../../assets/smile.jpg';

// Import patient images
import person1 from '../../assets/person_1.jpg';
import person2 from '../../assets/person_2.jpg';
import person3 from '../../assets/staff-1.jpg';
import person4 from '../../assets/user-2.png';
import person5 from '../../assets/user-3.png';
import person6 from '../../assets/user-4.png';

const reviews = [
  { id: 1, name: 'Olivia Carter', rating: 4.9, text: 'The clinic feels modern and welcoming. The doctor explained everything clearly, and the treatment was completely painless and professional.', date: '1 day ago', image: person1 },
  { id: 2, name: 'James Wilson', rating: 5.0, text: 'I finally found a dental clinic that values aesthetics, comfort, and technology. My smile has never looked this good.', date: '3 days ago', image: person2 },
  { id: 3, name: 'Sophia Lee', rating: 4.0, text: 'From consultation to final result, everything felt smooth and well-organized. You really feel the experience and attention to detail.', date: '1 week ago', image: person3 },
  { id: 4, name: 'Daniel Roberts', rating: 5.0, text: 'The doctors are calm, confident, and very modern in their approach. I felt safe and informed during every step.', date: '2 weeks ago', image: person4 },
  { id: 5, name: 'Emma Thompson', rating: 4.0, text: 'Amazing service and beautiful results. The clinic atmosphere is stylish, and the team genuinely cares about patient comfort.', date: '2 weeks ago', image: person5 },
  { id: 6, name: 'Liam Anderson', rating: 5.0, text: 'I appreciated the transparency, digital diagnostics, and personalized treatment plan. Definitely a premium dental experience.', date: '3 weeks ago', image: person6 }
];

const faqs = [
  { q: 'Is dental treatment painful?', a: 'Most modern dental treatments are virtually painless thanks to advanced anesthesia and techniques.' },
  { q: 'How long does a typical appointment take?', a: 'Most appointments take between 30 to 60 minutes, depending on the treatment.' },
  { q: 'Do you accept dental insurance?', a: 'Yes, we work with most major insurance providers to ensure you get the best coverage.' },
  { q: 'Can I get braces or aligners as an adult?', a: 'Absolutely! We offer various orthodontic solutions specifically designed for adults.' },
  { q: 'What should I do in a dental emergency?', a: 'Contact our clinic immediately; we prioritize emergency cases for same-day treatment.' }
];

const Testimonal = () => {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <section className="testi-section" id="reviews">
      <div className="container">
        {/* Header */}
        <div className="testi-header">
          <div className="testi-header-left">
            <div className="about-badge">
              <MessageSquare size={16} />
              Testimonials
            </div>
            <h2 className="section-title">
              Patient <span className="text-teal">Experiences</span> That Reflect <br />
              Trust, Quality, and Results
            </h2>
            <p className="section-subtitle">
              Hear directly from our patients about their journeys, results, and why they trust our clinic for modern, comfortable, and high-quality dental care.
            </p>
          </div>
          <div className="testi-rating-summary">
            <div className="rating-stars">
              <Star fill="#f59e0b" color="#f59e0b" size={20} />
              <span className="rating-val">4.9</span>
            </div>
            <p>Average Rating</p>
            <span>( 1200+ Reviews )</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="testi-main-grid">
          {/* Left: Reviews Grid */}
          <div className="reviews-column">
            <div className="reviews-grid">
              {reviews.map((rev) => (
                <div key={rev.id} className="review-card glass-card">
                  <div className="review-top">
                    <div className="stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(rev.rating) ? "#10b981" : "none"} color="#10b981" />
                      ))}
                    </div>
                    <span className="rev-rating">{rev.rating.toFixed(1)}</span>
                  </div>
                  <p className="rev-text">"{rev.text}"</p>
                  <div className="rev-author">
                    <img 
                      src={rev.image} 
                      alt={`Reviewer ${rev.name}`} 
                      className="avatar sm" 
                      loading="lazy" 
                      decoding="async"
                    />
                    <div className="author-info">
                      <h5>{rev.name}</h5>
                      <span>{rev.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testi-actions">
              <button className="btn-ghost" aria-label="Write a new review">
                <Edit3 size={18} aria-hidden="true" />
                Write a Review
              </button>
              <button className="btn-primary" aria-label="View all patient reviews">
                View All Reviews
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right: Results Sidebar */}
          <div className="results-sidebar">
            <div className="results-card glass-card">
              <h3>Real Smiles. <span className="text-teal">Real Results.</span></h3>
              <p>See the life-changing transformations our patients love to smile about.</p>
              <div className="before-after-container">
                 <div className="comparison-img">
                    <img src={smileImg} alt="Before and After Treatment Transformation" className="transformation-img" decoding="async" loading="lazy" />
                    <div className="label-before">Before</div>
                    <div className="label-after">After</div>
                    <div className="slider-handle">
                      <ArrowRight size={12} className="left-arrow" />
                      <ArrowRight size={12} className="right-arrow" />
                    </div>
                 </div>
              </div>
            </div>

            <div className="mini-stats-grid">
               <div className="m-stat">
                  <Users size={18} color="#10b981" />
                  <h4>10K+</h4>
                  <span>Happy Patients</span>
               </div>
               <div className="m-stat">
                  <Star size={18} color="#10b981" />
                  <h4>20+</h4>
                  <span>Years of Trust</span>
               </div>
               <div className="m-stat">
                  <Plus size={18} color="#10b981" />
                  <h4>15K+</h4>
                  <span>Successful Treatments</span>
               </div>
               <div className="m-stat">
                  <Star size={18} color="#10b981" />
                  <h4>4.9</h4>
                  <span>Average Rating</span>
               </div>
            </div>

            <div className="video-testi-card glass-card">
               <div className="video-thumb">
                  <div className="play-btn-lg">
                    <Play fill="currentColor" />
                  </div>
               </div>
               <div className="video-info">
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#10b981" color="#10b981" />)}
                  </div>
                  <h5>Video Testimonial</h5>
                  <p>"I was always afraid of dental treatments, but the team here made me feel so comfortable. Highly recommended!"</p>
                  <span className="author">- Sarah M.</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Question & FAQ */}
        <div className="testi-bottom-row">
          <div className="question-form-card glass-card">
            <div className="form-header">
              <div className="icon-circle-teal">
                <Mail size={20} />
              </div>
              <div className="header-text">
                <h3>Still have a question?</h3>
                <p>We're here to help! Send us your question and our team will get back to you shortly.</p>
              </div>
            </div>
            <form className="q-form">
              <input type="email" placeholder="Your email" className="q-input" aria-label="Your email address" required />
              <textarea placeholder="Write your question..." className="q-textarea" aria-label="Your question" required></textarea>
              <button type="submit" className="btn-primary full" aria-label="Send your question">
                Send Question <Send size={18} aria-hidden="true" />
              </button>
            </form>
            <img src={heroImg} alt="Decorative Tooth" className="form-tooth-bg" loading="lazy" />
          </div>

          <div className="faq-container">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-list" role="list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`} role="listitem">
                  <button 
                    className="faq-q" 
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.q}</span>
                    {openFaq === index ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className="faq-a" 
                    role="region" 
                    aria-labelledby={`faq-question-${index}`}
                    hidden={openFaq !== index}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
