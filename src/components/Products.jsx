import React from 'react';
import {
  FiCpu,
  FiTrendingUp,
  FiLayers,
  FiBarChart2,
  FiArrowRight,
  FiCheckCircle,
  FiPlayCircle,
  FiBox,
} from 'react-icons/fi';
import { agencyData } from '../data/agencyData';

const productIcons = {
  Cpu: FiCpu,
  Gauge: FiTrendingUp,
  Layers: FiLayers,
  BarChart3: FiBarChart2,
};

export default function Products({ onOpenDemoModal, onBookProduct }) {
  return (
    <section id="products" className="section products-section">
      {/* Background visual accents */}
      <div className="products-mesh-bg" aria-hidden="true" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge products-badge">
            <FiBox size={14} />
            <span>PROPRIETARY SOLUTIONS &amp; SOFTWARE</span>
          </div>
          <h2 className="section-title">
            Intelligent Marketing Software &{' '}
            <span className="text-gradient-cyan">Automation Platforms</span>
          </h2>
          <p className="section-subtitle">
            Beyond agency services, we provide enterprise clients with proprietary software tools, automation hubs, and real-time intelligence portals to streamline marketing workflows.
          </p>
        </div>

        {/* Products Grid (4 Cards - Visually distinct from Services) */}
        <div className="products-grid">
          {agencyData.products.map((product) => {
            const IconComp = productIcons[product.iconName] || Cpu;

            return (
              <div key={product.id} className="product-card">
                {/* Top Badge & Tier */}
                <div className="product-top-bar">
                  <span className="product-tier-tag">{product.tier}</span>
                  <span className="product-badge-accent">{product.badge}</span>
                </div>

                {/* Simulated Visual Mini UI Mockup */}
                <div className="product-ui-preview" aria-hidden="true">
                  {product.id === 'marketing-automation' && (
                    <div className="preview-workflow-nodes">
                      <div className="node trigger">
                        <span className="node-dot" />
                        <span className="node-text">Inbound Form Lead</span>
                      </div>
                      <div className="node-connector" />
                      <div className="node condition">
                        <span className="node-dot" />
                        <span className="node-text">Intent Score &gt; 80</span>
                      </div>
                      <div className="node-connector" />
                      <div className="node action">
                        <span className="node-dot" />
                        <span className="node-text">Instant Slack &amp; SMS Alert</span>
                      </div>
                    </div>
                  )}

                  {product.id === 'seo-tools' && (
                    <div className="preview-serp-table">
                      <div className="serp-row header">
                        <span>Target Keyword</span>
                        <span>Rank</span>
                        <span>Change</span>
                      </div>
                      <div className="serp-row">
                        <span className="kw-name">digital marketing agency</span>
                        <span className="kw-rank">#1</span>
                        <span className="kw-diff up">+4</span>
                      </div>
                      <div className="serp-row">
                        <span className="kw-name">enterprise seo services</span>
                        <span className="kw-rank">#2</span>
                        <span className="kw-diff up">+3</span>
                      </div>
                      <div className="serp-row">
                        <span className="kw-name">b2b ppc optimization</span>
                        <span className="kw-rank">#1</span>
                        <span className="kw-diff stable">0</span>
                      </div>
                    </div>
                  )}

                  {product.id === 'social-management' && (
                    <div className="preview-calendar-feed">
                      <div className="calendar-header">
                        <span>Editorial Publishing Hub</span>
                        <span className="cal-status">7 Accounts Active</span>
                      </div>
                      <div className="cal-posts-row">
                        <div className="cal-post scheduled">
                          <span className="post-time">10:00 AM</span>
                          <span className="post-channel">LinkedIn &bull; Carousel</span>
                          <span className="post-tag">Approved</span>
                        </div>
                        <div className="cal-post scheduled">
                          <span className="post-time">02:30 PM</span>
                          <span className="post-channel">Instagram &bull; Reel</span>
                          <span className="post-tag">Ready</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {product.id === 'analytics-reporting' && (
                    <div className="preview-bi-chart">
                      <div className="bi-header">
                        <span>Unified ROAS Attribution</span>
                        <span className="bi-metric">4.84x Blended</span>
                      </div>
                      <div className="bi-progress-bars">
                        <div className="bi-bar-item">
                          <div className="bi-bar-label">
                            <span>Google Ads</span>
                            <span>5.2x</span>
                          </div>
                          <div className="bi-track"><div className="bi-fill" style={{ width: '85%' }} /></div>
                        </div>
                        <div className="bi-bar-item">
                          <div className="bi-bar-label">
                            <span>Meta Performance</span>
                            <span>4.4x</span>
                          </div>
                          <div className="bi-track"><div className="bi-fill" style={{ width: '72%' }} /></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="product-content">
                  <div className="product-title-row">
                    <div className="product-icon-box">
                      <IconComp size={22} className="product-icon" />
                    </div>
                    <div>
                      <h3 className="product-title">{product.name}</h3>
                      <p className="product-tagline">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="product-desc">{product.shortDesc}</p>

                  {/* Feature Checklist */}
                  <div className="product-features">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="product-feature-item">
                        <FiCheckCircle size={15} className="feature-tick" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stat highlight */}
                  <div className="product-highlight-box">
                    <span className="highlight-label">{product.statLabel}:</span>
                    <span className="highlight-value">{product.statValue}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="product-actions">
                    <button
                      type="button"
                      className="btn btn-outline-brand product-btn-cta"
                      onClick={() => onOpenDemoModal(product)}
                      aria-label={`Request interactive demo of ${product.name}`}
                    >
                      <FiPlayCircle size={16} />
                      <span>{product.cta}</span>
                    </button>

                    <button
                      type="button"
                      className="btn btn-secondary product-btn-book"
                      onClick={() => onBookProduct(product.name)}
                      aria-label={`Get pricing for ${product.name}`}
                    >
                      <span>Inquire Pricing</span>
                      <FiArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
