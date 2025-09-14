'use client';

import { useEffect, useState } from 'react';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Delay the actual close to allow exit animation
    setTimeout(onClose, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className={`contact-modal-backdrop ${isVisible ? 'visible' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`contact-modal ${isVisible ? 'visible' : ''}`}>
        <div className="contact-modal-header">
          <h2>Let's Connect</h2>
          <button
            onClick={handleClose}
            className="contact-modal-close"
            aria-label="Close modal"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        
        <div className="contact-modal-content">
          <p className="contact-modal-subtitle">
            Ready to discuss your next project or just want to say hello?
          </p>
          
          <div className="contact-links">
            <a
              href="mailto:maxpaulus43@gmail.com"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-link-content">
                <span className="contact-link-title">Email</span>
                <span className="contact-link-subtitle">maxpaulus43@gmail.com</span>
              </div>
              <i className="fa fa-arrow-right contact-link-arrow"></i>
            </a>
            
            <a
              href="https://linkedin.com/in/max-paulus-1b456aa8"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-link-content">
                <span className="contact-link-title">LinkedIn</span>
                <span className="contact-link-subtitle">Professional Profile</span>
              </div>
              <i className="fa fa-external-link-alt contact-link-arrow"></i>
            </a>
            
            <a
              href="https://github.com/maxpaulus43"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-link-content">
                <span className="contact-link-title">GitHub</span>
                <span className="contact-link-subtitle">Code & Projects</span>
              </div>
              <i className="fa fa-external-link-alt contact-link-arrow"></i>
            </a>
          </div>
        </div>
        
        <div className="contact-modal-footer">
          <button
            onClick={handleClose}
            className="btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
