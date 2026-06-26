import React, { useState } from 'react';
import './BookingModal.css';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const services = [
    'General Dentistry',
    'Orthodontics',
    'Dental Implants',
    'Teeth Whitening',
    'Cosmetic Dentistry'
  ];

  const timeSlots = [
    '09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal-container glass-card">
        <button className="close-modal-btn" onClick={onClose}>
          <X size={24} />
        </button>

        {step < 4 && (
          <div className="booking-steps-indicator">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className="step-line"></div>
            <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
        )}

        <div className="booking-modal-content">
          {step === 1 && (
            <div className="booking-step-view animate-in">
              <h2>Select a <span className="text-teal">Service</span></h2>
              <p>Choose the treatment you are interested in.</p>
              <div className="service-selection-grid">
                {services.map((s) => (
                  <button 
                    key={s} 
                    className={`service-option-btn ${formData.service === s ? 'selected' : ''}`}
                    onClick={() => setFormData({...formData, service: s})}
                  >
                    {s}
                    {formData.service === s && <CheckCircle2 size={16} className="selected-icon" />}
                  </button>
                ))}
              </div>
              <button 
                className="btn-primary full mt-4" 
                disabled={!formData.service}
                onClick={handleNext}
              >
                Continue <ChevronRight size={18} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="booking-step-view animate-in">
              <h2>Pick <span className="text-teal">Date & Time</span></h2>
              <p>Select your preferred appointment window.</p>
              <div className="datetime-selection">
                 <div className="date-input-wrapper">
                    <Calendar size={18} />
                    <input 
                      type="date" 
                      className="booking-date-picker"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                 </div>
                 <div className="time-grid">
                    {timeSlots.map((t) => (
                      <button 
                        key={t}
                        className={`time-slot-btn ${formData.time === t ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, time: t})}
                      >
                        <Clock size={14} /> {t}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="booking-actions-row">
                <button className="btn-ghost" onClick={handleBack}>Back</button>
                <button 
                  className="btn-primary" 
                  disabled={!formData.date || !formData.time}
                  onClick={handleNext}
                >
                  Next Step <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="booking-step-view animate-in">
              <h2>Patient <span className="text-teal">Details</span></h2>
              <p>Almost there! We just need some basic information.</p>
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="input-group-v2">
                  <User size={18} />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="input-group-v2">
                  <Mail size={18} />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="input-group-v2">
                  <Phone size={18} />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="booking-actions-row">
                  <button type="button" className="btn-ghost" onClick={handleBack}>Back</button>
                  <button type="submit" className="btn-primary">
                    Confirm Booking <ShieldCheck size={18} />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="booking-success-view animate-in">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={64} color="#10b981" />
              </div>
              <h2>Appointment <span className="text-teal">Confirmed!</span></h2>
              <p>Thank you, {formData.name.split(' ')[0]}. Your request for {formData.service} on {formData.date} at {formData.time} has been received.</p>
              <div className="confirmation-card">
                 <div className="conf-item">
                    <span>Service:</span> <strong>{formData.service}</strong>
                 </div>
                 <div className="conf-item">
                    <span>Date:</span> <strong>{formData.date}</strong>
                 </div>
                 <div className="conf-item">
                    <span>Time:</span> <strong>{formData.time}</strong>
                 </div>
              </div>
              <button className="btn-primary full" onClick={onClose}>Done</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
