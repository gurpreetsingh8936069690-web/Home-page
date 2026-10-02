import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export default function ProductDemoModal({ product, onClose, onBookProduct }) {
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

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-prod-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-tag product-tag">
            <Zap size={14} />
            <span>{product.tier}</span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close product demo details"
          >
            <X size={20} />
          </button>
        </div>

        <h3 id="modal-prod-title" className="modal-title">{product.name}</h3>
        <p className="modal-tagline-text">{product.tagline}</p>
        <p className="modal-desc">{product.shortDesc}</p>

        {/* Highlight Banner */}
        <div className="modal-prod-highlight">
          <span className="prod-hl-label">{product.statLabel}:</span>
          <span className="prod-hl-val text-gradient-cyan">{product.statValue}</span>
        </div>

        {/* Feature List */}
        <div className="modal-deliverables-sec">
          <h4 className="modal-subheading">Included Platform Capabilities:</h4>
          <div className="modal-deliverables-list">
            {product.features.map((feat, idx) => (
              <div key={idx} className="modal-deliverable-item">
                <CheckCircle2 size={16} className="text-cyan" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="modal-footer-actions">
          <button
            type="button"
            className="btn btn-primary btn-lg modal-action-btn"
            onClick={() => {
              onClose();
              onBookProduct(product.name);
            }}
          >
            <span>Request Sandbox Demo &amp; Pricing</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            className="btn btn-secondary modal-cancel-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
