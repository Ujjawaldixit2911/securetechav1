import React, { useState } from 'react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    details: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      details: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleReset}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Request a Free Consultation</h3>
          <p>Submit your spatial or audio-visual requirements to schedule an engineer review.</p>
          <button className="modal-close" onClick={handleReset} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          {!submitted ? (
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  placeholder="e.g. Vineet Sharma"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="e.g. sharma@company.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Organization *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                  required 
                  placeholder="e.g. SecureTech AV Client Org"
                />
              </div>

              <div className="form-group">
                <label htmlFor="details">Project Requirements *</label>
                <textarea 
                  id="details" 
                  name="details" 
                  rows="4" 
                  value={formData.details}
                  onChange={handleInputChange}
                  required 
                  placeholder="Tell us about room dimensions, count, speaker configuration or timeline..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Submit Request <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i>
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3>Consultation Requested!</h3>
              <p>Your details have been successfully submitted. Our technical design office will prepare custom suggestions and contact you shortly.</p>
              <button className="btn btn-primary" onClick={handleReset}>
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
