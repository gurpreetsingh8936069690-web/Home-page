import React, { useState } from 'react';
import {
  Compass,
  Eye,
  ShieldCheck,
  ArrowRight,
  Layers,
  CheckCircle,
  Calendar,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { agencyData } from '../data/agencyData';

export default function About({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('mission');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (onOpenContact) onOpenContact();
  };

  const steps = agencyData.about.steps;
  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Compass size={14} />
            <span>{agencyData.about.badge}</span>
          </div>
          <h2 className="section-title">
            We Don't Just Buy Clicks. We Scale{' '}
            <span className="text-gradient">Market Leaders</span>.
          </h2>
          <p className="section-subtitle">
            Marketing shouldn't be an unpredictable gamble. We combine technical engineering, deep consumer psychology, and relentless optimization to build reliable revenue systems.
          </p>
        </div>

        {/* Narrative & Mission/Vision Interactive Block */}
        <div className="about-grid">
          {/* Left Column: Story & Mission Tabs */}
          <div className="about-story-col">
            <h3 className="about-col-heading">Built by Marketers Obsessed With ROI</h3>
            <p className="about-text-p">{agencyData.about.description}</p>
            <p className="about-text-p">{agencyData.about.descriptionSecond}</p>

            {/* Mission / Vision Tabs */}
            <div className="mission-vision-container">
              <div className="tab-buttons-row" role="tablist" aria-label="About tabs">
                <button
                  type="button"
                  className={`about-pill-btn ${activeTab === 'mission' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mission')}
                  role="tab"
                  aria-selected={activeTab === 'mission'}
                >
                  <Compass size={15} />
                  <span>Our Mission</span>
                </button>
                <button
                  type="button"
                  className={`about-pill-btn ${activeTab === 'vision' ? 'active' : ''}`}
                  onClick={() => setActiveTab('vision')}
                  role="tab"
                  aria-selected={activeTab === 'vision'}
                >
                  <Eye size={15} />
                  <span>Our Vision</span>
                </button>
                <button
                  type="button"
                  className={`about-pill-btn ${activeTab === 'values' ? 'active' : ''}`}
                  onClick={() => setActiveTab('values')}
                  role="tab"
                  aria-selected={activeTab === 'values'}
                >
                  <ShieldCheck size={15} />
                  <span>Core Values</span>
                </button>
              </div>

              <div className="tab-content-box">
                {activeTab === 'mission' && (
                  <div className="tab-pane-fade">
                    <p className="tab-pane-text">{agencyData.about.mission}</p>
                    <div className="tab-features-list">
                      <div className="tab-feature-item">
                        <CheckCircle size={15} className="feature-check" />
                        <span>Data-backed campaigns with statistical rigor</span>
                      </div>
                      <div className="tab-feature-item">
                        <CheckCircle size={15} className="feature-check" />
                        <span>Zero vanity metrics; we track real attributed revenue</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="tab-pane-fade">
                    <p className="tab-pane-text">{agencyData.about.vision}</p>
                    <div className="tab-features-list">
                      <div className="tab-feature-item">
                        <CheckCircle size={15} className="feature-check" />
                        <span>Pioneering automated multi-touch attribution</span>
                      </div>
                      <div className="tab-feature-item">
                        <CheckCircle size={15} className="feature-check" />
                        <span>Total client asset ownership &amp; open-book reporting</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'values' && (
                  <div className="tab-pane-fade">
                    <div className="values-stack">
                      {agencyData.about.pillars.map((pillar, idx) => (
                        <div key={idx} className="value-item">
                          <strong className="value-title">{pillar.title}</strong>
                          <p className="value-desc">{pillar.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="btn btn-primary btn-shimmer" onClick={scrollToContact}>
                <span>Learn More About Our Approach</span>
                <ArrowRight size={16} className="btn-arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Highlights & Growth Methodology Stepper */}
          <div className="about-visual-col">
            {/* 4 Key Statistics Cards */}
            <div className="about-stats-grid">
              {agencyData.about.highlights.map((item) => (
                <div key={item.id} className="about-stat-card">
                  <span className="about-stat-val text-gradient">{item.value}</span>
                  <h4 className="about-stat-title">{item.title}</h4>
                  <p className="about-stat-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Growth Framework Interactive Box */}
            <div className="methodology-card">
              <div className="methodology-header">
                <div className="methodology-icon-wrap">
                  <Layers size={18} className="methodology-icon" />
                </div>
                <div>
                  <h4 className="methodology-title">The Apex Growth Engine™</h4>
                  <span className="methodology-sub">4-Stage Proprietary Revenue System</span>
                </div>
              </div>

              {/* Step Navigation Selector Pills */}
              <div className="methodology-pills-row" role="tablist" aria-label="Engine Steps">
                {steps.map((st, idx) => (
                  <button
                    key={st.num}
                    type="button"
                    className={`methodology-pill-btn ${activeStepIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveStepIndex(idx)}
                    role="tab"
                    aria-selected={activeStepIndex === idx}
                  >
                    <span>{st.num}</span>
                    <span className="pill-phase-text">{st.phase}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Showcase Card */}
              <div className="active-step-card tab-anim">
                <div className="active-step-top">
                  <span className="active-step-timeline">
                    <Calendar size={13} />
                    <span>{currentStep.timeline}</span>
                  </span>
                  <span className="active-step-kpi">
                    <TrendingUp size={13} />
                    <span>{currentStep.kpi}</span>
                  </span>
                </div>

                <h5 className="active-step-title">{currentStep.title}</h5>
                <p className="active-step-desc">{currentStep.desc}</p>

                <div className="active-step-deliverable">
                  <Sparkles size={14} className="deliverable-sparkle" />
                  <span>Deliverable: <strong>{currentStep.deliverable}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
