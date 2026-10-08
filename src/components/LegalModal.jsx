import React, { useEffect } from 'react';
import { FiX, FiShield } from 'react-icons/fi';
import { agencyData } from '../data/agencyData';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Updated September 2026',
      body: (
        <>
          <p>
            At {agencyData.brand.name} {agencyData.brand.suffix}, we respect your personal data and privacy. This Privacy Policy details how we collect, process, and safeguard information submitted via our business website and client consultation forms.
          </p>
          <h4>1. Information We Collect</h4>
          <p>
            When you complete our project consultation form or subscribe to our growth newsletter, we collect your name, business email address, phone number, company name, and marketing requirements. We never sell, rent, or trade your personal or business data to third parties.
          </p>
          <h4>2. How We Use Information</h4>
          <p>
            We use submitted information solely to deliver customized marketing proposals, schedule audit calls, communicate project updates, and share opt-in industry research.
          </p>
          <h4>3. Data Security &amp; Retention</h4>
          <p>
            We utilize enterprise-grade TLS encryption and secure cloud environments to safeguard your communication. You may request full deletion of your contact records at any time by emailing {agencyData.contact.email}.
          </p>
        </>
      ),
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Updated September 2026',
      body: (
        <>
          <p>
            By accessing or using the website of {agencyData.brand.name} {agencyData.brand.suffix}, you agree to abide by these Terms of Service and all applicable federal and state laws.
          </p>
          <h4>1. Agency Deliverables &amp; Client Ownership</h4>
          <p>
            All advertising accounts, digital creative files, and data pipelines engineered by {agencyData.brand.name} become the exclusive intellectual property of the client upon receipt of agreed service fees.
          </p>
          <h4>2. Performance Guarantees &amp; Scope</h4>
          <p>
            While our methodologies are rigorously tested across over 100+ enterprise campaigns, digital marketing performance involves external third-party platform algorithms (e.g. Google, Meta). We provide transparent attribution and sprint-based execution.
          </p>
          <h4>3. Confidentiality</h4>
          <p>
            We adhere to strict non-disclosure obligations regarding your proprietary company data, unit economics, and trade secrets.
          </p>
        </>
      ),
    },
    cookies: {
      title: 'Cookie Policy',
      lastUpdated: 'Updated September 2026',
      body: (
        <>
          <p>
            This website utilizes minimal essential cookies and privacy-respecting analytics to optimize user navigation and measure conversion speed.
          </p>
          <h4>1. Essential Cookies</h4>
          <p>
            These cookies maintain core functionality, form session persistence, and security tokens.
          </p>
          <h4>2. Managing Preferences</h4>
          <p>
            You can configure your browser to block or alert you about cookies; however, some sections of the website may not function properly without them.
          </p>
        </>
      ),
    },
  };

  const activeContent = contentMap[type] || contentMap.privacy;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-legal-title">
      <div className="modal-card legal-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-tag">
            <FiShield size={14} />
            <span>Compliance &amp; Legal</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close legal modal"
          >
            <FiX size={20} />
          </button>
        </div>

        <h3 id="modal-legal-title" className="modal-title">{activeContent.title}</h3>
        <span className="legal-date-tag">{activeContent.lastUpdated}</span>

        <div className="legal-body-content">{activeContent.body}</div>

        <div className="modal-footer-actions">
          <button type="button" className="btn btn-secondary modal-cancel-btn" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
