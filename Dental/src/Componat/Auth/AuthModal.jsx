import React, { useState, useEffect } from 'react';
import './AuthModal.css';
import { X } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2 className="auth-title">{mode === 'login' ? 'Welcome Back' : 'Create an Account'}</h2>
        <p className="auth-subtitle">
          {mode === 'login' ? 'Log in to continue to PureSmile.' : 'Sign up to get started with PureSmile.'}
        </p>

        <div className="auth-social-buttons">
          <button className="social-btn google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
            Continue with Google
          </button>
          <button className="social-btn facebook-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" />
            Continue with Facebook
          </button>
          <button className="social-btn apple-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
            Continue with Apple
          </button>
        </div>

        <div className="auth-divider">
          <span>or continue with email</span>
        </div>

        <form className="auth-form" onSubmit={e => e.preventDefault()}>
          {mode === 'signup' && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
          )}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder={mode === 'login' ? "Enter your password" : "Create a password"} required />
          </div>
          {mode === 'signup' && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>
          )}
          
          <button type="submit" className="auth-submit-btn">
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-switch">
          {mode === 'login' ? (
            <p>Don't have an account? <span onClick={() => setMode('signup')}>Sign up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setMode('login')}>Log in</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
