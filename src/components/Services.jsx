import React, { useState } from 'react';
import {
  Search,
  Share2,
  Target,
  FileText,
  Code2,
  Palette,
  Mail,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { agencyData } from '../data/agencyData';

// Icon mapping helper
const iconMap = {
  Search,
  Share2,
  Target,
  FileText,
  Code2,
  Palette,
  Mail,
  TrendingUp,
};

export default function Services({ onSelectService, onBookService }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories extracted dynamically
  const categories = ['All', 'Organic Growth', 'Paid Acquisition', 'Brand & Engagement', 'Technology & Conversion', 'Retention & CRM'];

  const filteredServices =
    selectedCategory === 'All'
      ? agencyData.services
      : agencyData.services.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>FULL-SPECTRUM DIGITAL MARKETING</span>
          </div>
          <h2 className="section-title">
            Enterprise Services Engineered For{' '}
            <span className="text-gradient">Measurable Growth</span>
          </h2>
          <p className="section-subtitle">
            From technical SEO dominance to high-converting PPC funnels, we provide specialized services designed to scale your pipeline predictably.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="services-filter-bar">
          <div className="filter-pill-list" role="tablist" aria-label="Service Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Search;
            return (
              <div key={service.id} className="service-card group">
                <div className="service-card-top">
                  <div className="service-icon-wrapper">
                    <IconComponent size={24} className="service-icon" />
                  </div>
                  <span className="service-category-tag">{service.category}</span>
                </div>

                <h3 className="service-card-title">{service.name}</h3>

                <p className="service-card-desc">{service.shortDesc}</p>

                {/* Key Deliverables Pills */}
                <div className="service-deliverables">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="deliverable-bullet">
                      <CheckCircle size={13} className="deliverable-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Highlight Metric */}
                <div className="service-metric-badge">
                  <span className="metric-tag">{service.metric}</span>
                </div>

                {/* Card Footer / Action */}
                <div className="service-card-footer">
                  <button
                    type="button"
                    className="service-learn-btn"
                    onClick={() => onSelectService(service)}
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <span>Learn More & Scope</span>
                    <ArrowRight size={15} className="arrow-icon" />
                  </button>

                  <button
                    type="button"
                    className="service-quick-book-btn"
                    onClick={() => onBookService(service.name)}
                    aria-label={`Get quote for ${service.name}`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="services-banner">
          <div className="banner-content">
            <h4 className="banner-title">Need a Custom Omnichannel Strategy?</h4>
            <p className="banner-text">
              We frequently bundle multiple channels into integrated full-funnel growth sprints to maximize synergy and minimize CAC.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary banner-btn"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Request Custom Strategy</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
