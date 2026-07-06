import React, { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState('');
  const [requirement, setRequirement] = useState('');
  const [date, setDate] = useState('');

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!name.trim()) tempErrors.name = true;
    if (!company.trim()) tempErrors.company = true;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) tempErrors.email = true;
    
    const phoneRegex = /^[+]?[0-9\s\-]{7,15}$/;
    if (!phoneRegex.test(phone.trim())) tempErrors.phone = true;
    
    if (!sector) tempErrors.sector = true;
    if (!requirement.trim()) tempErrors.requirement = true;

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  const handleClose = () => {
    setFormSubmitted(false);
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setSector('');
    setRequirement('');
    setDate('');
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => e.target.classList.contains('modal-overlay') && handleClose()}>
      <div className="modal-container">
        <div className="modal-header">
          <h3>Request an AV Consultation</h3>
          <button className="modal-close" onClick={handleClose} aria-label="Close Modal">&times;</button>
        </div>
        <div className="modal-body">
          {!formSubmitted ? (
            <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className={`form-input ${errors.name ? 'error' : ''}`} 
                  placeholder="e.g., Amit Sharma" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
                {errors.name && <span className="error-text" style={{ display: 'block' }}>Please enter your name.</span>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Company Name *</label>
                <input 
                  type="text" 
                  className={`form-input ${errors.company ? 'error' : ''}`} 
                  placeholder="e.g., SecureTech AV" 
                  value={company} 
                  onChange={(e) => setCompany(e.target.value)} 
                  required 
                />
                {errors.company && <span className="error-text" style={{ display: 'block' }}>Please enter company name.</span>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Work Email *</label>
                <input 
                  type="email" 
                  className={`form-input ${errors.email ? 'error' : ''}`} 
                  placeholder="e.g., amit@company.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
                {errors.email && <span className="error-text" style={{ display: 'block' }}>Please enter a valid work email.</span>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  className={`form-input ${errors.phone ? 'error' : ''}`} 
                  placeholder="e.g., +91 98765 43210" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />
                {errors.phone && <span className="error-text" style={{ display: 'block' }}>Please enter a valid phone number.</span>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Industry / Sector *</label>
                <select 
                  className={`form-input ${errors.sector ? 'error' : ''}`} 
                  value={sector} 
                  onChange={(e) => setSector(e.target.value)} 
                  required
                >
                  <option value="" disabled>Select Sector</option>
                  <option value="corporate">Corporate</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="government">Government</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="auditorium">Auditorium / Cinema</option>
                  <option value="stadium">Stadium & Arena</option>
                  <option value="residential">Residential</option>
                </select>
                {errors.sector && <span className="error-text" style={{ display: 'block' }}>Please select a sector.</span>}
              </div>
              
              <div className="form-group">
                <label className="form-label">Preferred Demo Date</label>
                <input 
                  type="date" 
                  className="form-input" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                />
              </div>
              
              <div className="form-group form-group-full">
                <label className="form-label">Project Requirement *</label>
                <textarea 
                  className={`form-input ${errors.requirement ? 'error' : ''}`} 
                  rows="3" 
                  placeholder="Briefly describe your audio-visual layout needs..." 
                  value={requirement} 
                  onChange={(e) => setRequirement(e.target.value)} 
                  required
                ></textarea>
                {errors.requirement && <span className="error-text" style={{ display: 'block' }}>Please enter your project requirements.</span>}
              </div>
              
              <div className="form-submit-container">
                <button type="submit" className="btn btn-primary">Submit Enquiry</button>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '72px', height: '72px', background: 'rgba(0, 163, 224, 0.1)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '2rem' }}>
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Enquiry Submitted Successfully</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5, maxWidth: '400px', margin: '0 auto 30px auto' }}>
                Thank you for contacting SecureTech AV Designs. One of our senior AV consultants will review your project requirements and connect with you shortly.
              </p>
              <button className="btn btn-primary" onClick={handleClose} style={{ width: '200px' }}>Close Window</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
