import React, { useState } from 'react';
import {
  FiArrowRight,
  FiTrendingUp,
  FiCheckCircle,
  FiSearch,
  FiTarget,
  FiStar,
  FiAward,
  FiUsers,
  FiCalendar,
  FiBarChart2,
  FiActivity,
} from 'react-icons/fi';
import { agencyData } from '../data/agencyData';

export default function Hero({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('revenue');
  const [activeTimeframe, setActiveTimeframe] = useState('30D');

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentTimeframeData =
    agencyData.hero.timeframes[activeTimeframe] || agencyData.hero.timeframes['30D'];

  const statsIcons = [FiAward, FiUsers, FiTrendingUp, FiCheckCircle];

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting blobs */}
      <div className="hero-glow-blob hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-blob hero-glow-2" aria-hidden="true" />
      <div className="hero-glow-blob hero-glow-3" aria-hidden="true" />

      <div className="container hero-container">
        {/* Left Column: Hero Content & CTAs */}
        <div className="hero-content">
          {/* Badge Pill with Pulse Dot */}
          <div className="hero-badge-pill">
            <span className="hero-badge-dot" />
            <span>{agencyData.hero.badge}</span>
            <span className="badge-sep">•</span>
            <span className="badge-highlight">Category Leaders</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            {agencyData.hero.headlineStart}
            <span className="text-gradient">{agencyData.hero.headlineGradient}</span>
            {agencyData.hero.headlineEnd}
          </h1>

          {/* Supporting Subheadline */}
          <p className="hero-subtitle">
            {agencyData.hero.subheadline}
          </p>

          {/* Social Proof Founder Avatar Stack */}
          {agencyData.hero.socialProof && (
            <div className="hero-social-proof">
              <div className="avatar-stack" aria-label="Client Founders">
                {agencyData.hero.socialProof.avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className="avatar-circle"
                    style={{ backgroundColor: av.color }}
                    title={`${av.name} (${av.company})`}
                  >
                    <span>{av.initial}</span>
                  </div>
                ))}
              </div>

              <div className="social-proof-details">
                <div className="stars-row" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} size={14} className="star-icon-filled" />
                  ))}
                  <strong className="rating-score">{agencyData.hero.socialProof.rating}</strong>
                </div>
                <span className="social-proof-text">
                  {agencyData.hero.socialProof.ratingCount}{' '}
                  {agencyData.hero.socialProof.ratingText}
                </span>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn btn-primary btn-lg hero-primary-btn"
              onClick={(e) => {
                scrollToSection(e, 'contact');
                if (onOpenContact) onOpenContact();
              }}
            >
              <span>{agencyData.hero.primaryCta.label}</span>
              <FiArrowRight size={18} className="btn-arrow" />
            </a>

            <a
              href="#services"
              className="btn btn-secondary btn-lg hero-secondary-btn"
              onClick={(e) => scrollToSection(e, 'services')}
            >
              <span>{agencyData.hero.secondaryCta.label}</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="hero-guarantees">
            <div className="guarantee-item">
              <FiCheckCircle size={16} className="guarantee-icon" />
              <span>Direct Senior Partner Oversight</span>
            </div>
            <div className="guarantee-item">
              <FiCheckCircle size={16} className="guarantee-icon" />
              <span>Transparent Multi-Touch Attribution</span>
            </div>
            <div className="guarantee-item">
              <FiCheckCircle size={16} className="guarantee-icon" />
              <span>Sprint-Based Performance Terms</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Marketing Dashboard Visual */}
        <div className="hero-visual-wrapper">
          <div className="hero-card-glow-bg" aria-hidden="true" />

          <div className="hero-dashboard-card">
            {/* Dashboard Header Bar */}
            <div className="dashboard-card-header">
              <div className="dashboard-header-left">
                <div className="card-status-dot active" />
                <span className="dashboard-title">Live Marketing Command Center</span>
              </div>

              {/* View Mode Switcher */}
              <div className="dashboard-tabs" role="tablist" aria-label="Dashboard views">
                <button
                  type="button"
                  className={`dash-tab ${activeTab === 'revenue' ? 'active' : ''}`}
                  onClick={() => setActiveTab('revenue')}
                  role="tab"
                  aria-selected={activeTab === 'revenue'}
                >
                  Growth
                </button>
                <button
                  type="button"
                  className={`dash-tab ${activeTab === 'campaigns' ? 'active' : ''}`}
                  onClick={() => setActiveTab('campaigns')}
                  role="tab"
                  aria-selected={activeTab === 'campaigns'}
                >
                  Campaigns
                </button>
                <button
                  type="button"
                  className={`dash-tab ${activeTab === 'roi' ? 'active' : ''}`}
                  onClick={() => setActiveTab('roi')}
                  role="tab"
                  aria-selected={activeTab === 'roi'}
                >
                  Attribution
                </button>
              </div>
            </div>

            {/* Tab 1: Growth & Revenue Overview */}
            {activeTab === 'revenue' && (
              <div className="dashboard-body tab-anim">
                {/* Timeframe Filter Bar */}
                <div className="dashboard-timeframe-bar">
                  <span className="timeframe-label">
                    <FiCalendar size={13} />
                    <span>Timeframe:</span>
                  </span>
                  <div className="timeframe-buttons">
                    {['30D', '90D', '1Y'].map((tf) => (
                      <button
                        key={tf}
                        type="button"
                        className={`tf-btn ${activeTimeframe === tf ? 'active' : ''}`}
                        onClick={() => setActiveTimeframe(tf)}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="metric-primary-banner">
                  <div className="metric-val-group">
                    <span className="metric-caption">Attributed Pipeline Revenue</span>
                    <div className="metric-num-row">
                      <span className="metric-big-number">
                        {currentTimeframeData.revenue}
                      </span>
                      <span className="metric-pill positive">
                        <FiTrendingUp size={14} /> {currentTimeframeData.revenueGrowth}
                      </span>
                    </div>
                  </div>
                  <span className="metric-meta-period">
                    Multi-Touch Blended Channels • Verified ROI
                  </span>
                </div>

                {/* Simulated Chart Bars with Dynamic Heights */}
                <div className="simulated-chart">
                  <div className="chart-bars-row">
                    {currentTimeframeData.chartBars.map((bar, idx) => (
                      <div key={idx} className="chart-col">
                        <div
                          className={`chart-bar ${bar.active ? 'active-bar' : ''}`}
                          style={{ height: `${bar.height}%` }}
                        >
                          {bar.tooltip && (
                            <div className="chart-tooltip">{bar.tooltip}</div>
                          )}
                        </div>
                        <span className="bar-label">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Impact Summary */}
                <div className="live-event-banner">
                  <div className="live-event-indicator">
                    <FiActivity size={13} className="pulse-icon" />
                    <span>AUDITED METRIC</span>
                  </div>
                  <span className="live-event-text">
                    {currentTimeframeData.highlightMetric}
                  </span>
                </div>

                {/* Live Channel Quick Metrics */}
                <div className="live-channels-grid">
                  <div className="channel-box">
                    <div className="channel-icon-wrap seo">
                      <FiSearch size={15} />
                    </div>
                    <div className="channel-info">
                      <span className="channel-name">SEO Organic Search</span>
                      <span className="channel-stat">+185% Traffic / #1 Ranked</span>
                    </div>
                  </div>

                  <div className="channel-box">
                    <div className="channel-icon-wrap ppc">
                      <FiTarget size={15} />
                    </div>
                    <div className="channel-info">
                      <span className="channel-name">Google &amp; Meta Ads</span>
                      <span className="channel-stat">{currentTimeframeData.roas} ROAS Average</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Active Live Campaigns */}
            {activeTab === 'campaigns' && (
              <div className="dashboard-body tab-anim">
                <div className="campaign-list">
                  <div className="campaign-item">
                    <div className="campaign-badge ppc">PPC</div>
                    <div className="campaign-details">
                      <span className="campaign-title">High-Intent B2B Search Sprints</span>
                      <span className="campaign-metrics">Conv. Rate: 6.4% • CAC: $48.20</span>
                    </div>
                    <span className="status-tag status-live">Live</span>
                  </div>

                  <div className="campaign-item">
                    <div className="campaign-badge seo">SEO</div>
                    <div className="campaign-details">
                      <span className="campaign-title">Commercial Keyword Cluster #1</span>
                      <span className="campaign-metrics">Top 3 Rankings: 42 terms</span>
                    </div>
                    <span className="status-tag status-scaling">Scaling</span>
                  </div>

                  <div className="campaign-item">
                    <div className="campaign-badge social">CRO</div>
                    <div className="campaign-details">
                      <span className="campaign-title">Checkout Micro-Friction Test v4</span>
                      <span className="campaign-metrics">+31.8% Lift vs Control</span>
                    </div>
                    <span className="status-tag status-live">Winner</span>
                  </div>

                  <div className="campaign-item">
                    <div className="campaign-badge meta">Meta</div>
                    <div className="campaign-details">
                      <span className="campaign-title">Viral Short-Form UGC Funnel</span>
                      <span className="campaign-metrics">4.2M Reach • 4.1x Blended ROAS</span>
                    </div>
                    <span className="status-tag status-scaling">Active</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Channel Attribution & ROI */}
            {activeTab === 'roi' && (
              <div className="dashboard-body tab-anim">
                <div className="attribution-stats-grid">
                  <div className="attr-card">
                    <span className="attr-label">Average ROAS</span>
                    <span className="attr-value">4.8x</span>
                    <span className="attr-note">Target: 3.5x (+37% beat)</span>
                  </div>
                  <div className="attr-card">
                    <span className="attr-label">Blended CAC</span>
                    <span className="attr-value">-34.2%</span>
                    <span className="attr-note">Reduced over 90 days</span>
                  </div>
                  <div className="attr-card">
                    <span className="attr-label">Client Retention</span>
                    <span className="attr-value">98.7%</span>
                    <span className="attr-note">Long-term partnerships</span>
                  </div>
                  <div className="attr-card">
                    <span className="attr-label">Speed to 1st Lead</span>
                    <span className="attr-value">72 hrs</span>
                    <span className="attr-note">Post-launch baseline</span>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Integrated Dashboard Footer */}
            <div className="dashboard-footer-status">
              <div className="status-pill-item">
                <FiStar size={13} className="text-amber" />
                <span><strong>{agencyData.brand.rating}</strong> Client Rating</span>
              </div>
              <div className="status-sep">•</div>
              <div className="status-pill-item">
                <FiTrendingUp size={13} className="text-emerald" />
                <span><strong>4.8x</strong> Target ROAS</span>
              </div>
              <div className="status-sep">•</div>
              <div className="status-pill-item">
                <FiCheckCircle size={13} className="text-cyan" />
                <span>GA4 Attribution Audited</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Trust Metrics Bar */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="stats-grid">
            {agencyData.hero.stats.map((stat, idx) => {
              const IconComp = statsIcons[idx] || Sparkles;
              return (
                <div key={idx} className="stat-card">
                  <div className="stat-icon-row">
                    <div className="stat-icon-wrapper">
                      <IconComp size={18} />
                    </div>
                    <span className="stat-number text-gradient">{stat.value}</span>
                  </div>
                  <h2 className="stat-label">{stat.label}</h2>
                  <p className="stat-desc">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Client Logos / Trust Proof Bar */}
      <div className="hero-clients-bar">
        <div className="container">
          <p className="clients-bar-label">
            TRUSTED BY VISIONARY BRANDS &amp; HIGH-GROWTH ENTERPRISES
          </p>
          <div className="clients-logo-track">
            {agencyData.hero.clientLogos.map((client, idx) => (
              <div key={idx} className="client-logo-item">
                <span className="client-logo-text">{client.name}</span>
                <span className="client-logo-cat">{client.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
