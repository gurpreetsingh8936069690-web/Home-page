import React, { useEffect } from 'react';
import { FiX, FiCheckCircle, FiArrowRight, FiClock, FiLayers } from 'react-icons/fi';

export default function ServiceModal({ service, onClose, onBookService }) {
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

  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-service-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-tag">
            <FiLayers size={14} />
            <span>{service.category}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close service details"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Title & Metric */}
        <h3 id="modal-service-title" className="modal-title">{service.name}</h3>
        <p className="modal-desc">{service.shortDesc}</p>

        <div className="modal-stats-strip">
          <div className="modal-stat-box">
            <span className="modal-stat-label">Expected Impact</span>
            <strong className="modal-stat-val text-gradient">{service.metric}</strong>
          </div>
          <div className="modal-stat-box">
            <span className="modal-stat-label">Timeline Cadence</span>
            <strong className="modal-stat-val text-main">
              <FiClock size={14} className="inline-icon" /> {service.timeline}
            </strong>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="modal-deliverables-sec">
          <h4 className="modal-subheading">Core Deliverables &amp; Scope:</h4>
          <div className="modal-deliverables-list">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="modal-deliverable-item">
                <FiCheckCircle size={16} className="text-emerald" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="modal-footer-actions">
          <button
            type="button"
            className="btn btn-primary btn-lg modal-action-btn"
            onClick={() => {
              onClose();
              onBookService(service.name);
            }}
          >
            <span>Request Proposal For {service.name}</span>
            <FiArrowRight size={16} />
          </button>

          <button
            type="button"
            className="btn btn-secondary modal-cancel-btn"
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
