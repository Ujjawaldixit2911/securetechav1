import React, { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'Corporate',
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
    // Simulate API request
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      sector: 'Corporate',
      details: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleReset}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Request a Consultation</h3>
          <p>Provide details on your project to speak with our AV engineers.</p>
          <button className="modal-close" onClick={handleReset} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          {!formSubmitted ? (
            <form className="enquiry-form" onSubmit={handleSubmit}>
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

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder="e.g. vineet@company.com"
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
                <label htmlFor="sector">Project Sector *</label>
                <select 
                  id="sector" 
                  name="sector" 
                  value={formData.sector}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Corporate">Corporate / Boardroom</option>
                  <option value="Education">Education (Smart Classrooms)</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Government">Government / Judiciary</option>
                  <option value="Hospitality">Hospitality / Hotel</option>
                  <option value="Auditoriums">Auditoriums & Stadiums</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="details">Project Details *</label>
                <textarea 
                  id="details" 
                  name="details" 
                  rows="4" 
                  value={formData.details}
                  onChange={handleInputChange}
                  required 
                  placeholder="Tell us about your room dimensions, acoustic requirements, or deadline..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Submit Enquiry <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i>
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3>Thank You!</h3>
              <p>Your enquiry has been received successfully. Our technical design team will review your requirements and reach out to you within 24 hours.</p>
              <button className="btn btn-primary" onClick={handleReset}>
                Back to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
