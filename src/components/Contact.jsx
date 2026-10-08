import React, { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiShield,
  FiCopy,
  FiCheck,
  FiAlertCircle,
} from 'react-icons/fi';
import { agencyData } from '../data/agencyData';

export default function Contact({ preselectedService, onResetPreselected }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: agencyData.contact.serviceOptions[0],
    budget: agencyData.contact.budgetOptions[1],
    message: '',
  });

  const [prevPreselected, setPrevPreselected] = useState(preselectedService);

  // Synchronize state when preselectedService prop changes during render
  if (preselectedService !== prevPreselected) {
    setPrevPreselected(preselectedService);
    if (preselectedService) {
      const match = agencyData.contact.serviceOptions.find((opt) =>
        opt.toLowerCase().includes(preselectedService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // Validation logic
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Please enter your full name';
        return '';
      case 'email':
        if (!value.trim()) return 'Work email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid work email address';
        }
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[\d+\-\s()]{7,20}$/.test(value)) {
          return 'Please enter a valid telephone number';
        }
        return '';
      case 'company':
        if (!value.trim()) return 'Company or brand name is required';
        return '';
      case 'message':
        if (!value.trim()) return 'Please summarize your project requirements or goals';
        if (value.trim().length < 15) {
          return 'Please provide at least 15 characters describing your goals';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      company: true,
      message: true,
    });

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Simulate server submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onResetPreselected) onResetPreselected();
    }, 1200);
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: agencyData.contact.serviceOptions[0],
      budget: agencyData.contact.budgetOptions[1],
      message: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge contact-badge">
            <FiShield size={14} />
            <span>LET'S BUILD YOUR GROWTH ENGINE</span>
          </div>
          <h2 className="section-title">
            Ready to <span className="text-gradient">Grow Your Business?</span>
          </h2>
          <p className="section-subtitle">
            {agencyData.contact.subtitle}
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contact Info & Agency Credentials */}
          <div className="contact-info-col">
            <div className="contact-card-glass">
              <h3 className="contact-info-heading">Direct Agency Inquiries</h3>
              <p className="contact-info-subtext">
                Speak directly with an enterprise growth director. We answer every inquiry within 2 business hours.
              </p>

              {/* Contact Item: Email */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FiMail size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Official Work Email</span>
                  <a href={`mailto:${agencyData.contact.email}`} className="detail-value link-hover">
                    {agencyData.contact.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(agencyData.contact.email, 'email')}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? <FiCheck size={16} className="text-emerald" /> : <FiCopy size={16} />}
                </button>
              </div>

              {/* Contact Item: Phone */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FiPhone size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Client Concierge Line</span>
                  <a
                    href={`tel:${agencyData.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="detail-value link-hover"
                  >
                    {agencyData.contact.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => handleCopy(agencyData.contact.phone, 'phone')}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <FiCheck size={16} className="text-emerald" /> : <FiCopy size={16} />}
                </button>
              </div>

              {/* Contact Item: Address */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FiMapPin size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Headquarters Office</span>
                  <address className="detail-value not-italic">
                    {agencyData.contact.address}
                  </address>
                </div>
              </div>

              {/* Contact Item: Business Hours */}
              <div className="contact-detail-item">
                <div className="contact-icon-box">
                  <FiClock size={18} />
                </div>
                <div className="contact-detail-text">
                  <span className="detail-label">Operating Hours</span>
                  <span className="detail-value">{agencyData.contact.hours}</span>
                </div>
              </div>

              {/* Guarantee Box */}
              <div className="contact-guarantee-pill">
                <FiShield size={18} className="shield-icon" />
                <span>{agencyData.contact.guarantee}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Requirements Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {isSubmitted ? (
                /* Success State */
                <div className="form-success-container">
                  <div className="success-icon-wrap">
                    <FiCheckCircle size={48} className="success-icon" />
                  </div>
                  <h3 className="success-title">Strategy Proposal Requested!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. We've received your requirements for{' '}
                    <strong>{formData.company}</strong> regarding <em>{formData.service}</em>.
                  </p>
                  <div className="success-recap-box">
                    <div className="recap-row">
                      <span>Service:</span>
                      <strong>{formData.service}</strong>
                    </div>
                    <div className="recap-row">
                      <span>Budget:</span>
                      <strong>{formData.budget}</strong>
                    </div>
                    <div className="recap-row">
                      <span>Work Email:</span>
                      <strong>{formData.email}</strong>
                    </div>
                  </div>
                  <p className="success-next-steps">
                    One of our principal growth directors will review your website and reply with a custom audit within <strong>2 hours</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleResetForm}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} noValidate className="consultation-form">
                  <div className="form-intro-row">
                    <h3 className="form-card-title">Project Requirements &amp; Scope</h3>
                    <p className="form-card-subtitle">
                      Complete this quick form to receive an audit and tailored scope proposal.
                    </p>
                  </div>

                  <div className="form-grid-2">
                    {/* Full Name */}
                    <div className="form-field-group">
                      <label htmlFor="contact-name" className="field-label">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Sarah Jenkins"
                        className={`field-input ${errors.name && touched.name ? 'error' : ''}`}
                        aria-required="true"
                        aria-invalid={!!(errors.name && touched.name)}
                        aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      />
                      {errors.name && touched.name && (
                        <div id="name-error" className="field-error-msg">
                          <AlertCircle size={13} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Work Email */}
                    <div className="form-field-group">
                      <label htmlFor="contact-email" className="field-label">
                        Work Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="sarah@company.com"
                        className={`field-input ${errors.email && touched.email ? 'error' : ''}`}
                        aria-required="true"
                        aria-invalid={!!(errors.email && touched.email)}
                        aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      />
                      {errors.email && touched.email && (
                        <div id="email-error" className="field-error-msg">
                          <AlertCircle size={13} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-grid-2">
                    {/* Phone Number */}
                    <div className="form-field-group">
                      <label htmlFor="contact-phone" className="field-label">
                        Phone Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+1 (555) 000-0000"
                        className={`field-input ${errors.phone && touched.phone ? 'error' : ''}`}
                        aria-required="true"
                        aria-invalid={!!(errors.phone && touched.phone)}
                        aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && touched.phone && (
                        <div id="phone-error" className="field-error-msg">
                          <AlertCircle size={13} />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="form-field-group">
                      <label htmlFor="contact-company" className="field-label">
                        Company / Brand Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Acme Tech Corp"
                        className={`field-input ${errors.company && touched.company ? 'error' : ''}`}
                        aria-required="true"
                        aria-invalid={!!(errors.company && touched.company)}
                        aria-describedby={errors.company && touched.company ? 'company-error' : undefined}
                      />
                      {errors.company && touched.company && (
                        <div id="company-error" className="field-error-msg">
                          <AlertCircle size={13} />
                          <span>{errors.company}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-grid-2">
                    {/* Service Required Dropdown */}
                    <div className="form-field-group">
                      <label htmlFor="contact-service" className="field-label">
                        Service Required <span className="req">*</span>
                      </label>
                      <div className="select-wrap">
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="field-select"
                        >
                          {agencyData.contact.serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="form-field-group">
                      <label htmlFor="contact-budget" className="field-label">
                        Estimated Monthly Budget <span className="req">*</span>
                      </label>
                      <div className="select-wrap">
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="field-select"
                        >
                          {agencyData.contact.budgetOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message / Requirements Textarea */}
                  <div className="form-field-group">
                    <label htmlFor="contact-message" className="field-label">
                      Project Requirements &amp; Current Challenges <span className="req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Briefly describe your current traffic, advertising goals, target market, or timeline..."
                      className={`field-textarea ${errors.message && touched.message ? 'error' : ''}`}
                      aria-required="true"
                      aria-invalid={!!(errors.message && touched.message)}
                      aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                    />
                    {errors.message && touched.message && (
                      <div id="message-error" className="field-error-msg">
                        <FiAlertCircle size={13} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner" />
                          <span>Submitting Requirements...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Proposal Request</span>
                          <FiSend size={16} />
                        </>
                      )}
                    </button>
                    <span className="privacy-note">
                      We respect your privacy. Strictly zero spam.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
