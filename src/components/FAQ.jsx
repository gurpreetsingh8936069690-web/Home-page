import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { agencyData } from '../data/agencyData';

export default function FAQ({ onOpenContact }) {
  // Store ID of currently open FAQ (or null if none)
  const [openId, setOpenId] = useState('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFAQs = agencyData.faqs.filter((faq) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query)
    );
  });

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>CLARITY & TRANSPARENCY</span>
          </div>
          <h2 className="section-title">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our digital marketing processes, deliverables, timeline expectations, and pricing models.
          </p>
        </div>

        {/* Search Bar for FAQ */}
        <div className="faq-search-wrapper">
          <div className="faq-search-box">
            <Search size={18} className="faq-search-icon" />
            <input
              type="text"
              className="faq-search-input"
              placeholder="Search questions (e.g. SEO timeline, pricing, social media)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQ questions"
            />
            {searchQuery && (
              <button
                type="button"
                className="faq-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list" role="region" aria-label="Frequently Asked Questions Accordion">
          {filteredFAQs.length === 0 ? (
            <div className="faq-no-results">
              <p>No questions matched "{searchQuery}". Try a different keyword or contact our team directly below.</p>
              <button
                type="button"
                className="btn btn-outline-brand btn-sm"
                onClick={() => setSearchQuery('')}
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-accordion-header"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                  >
                    <div className="faq-question-content">
                      <span className="faq-cat-badge">{faq.category}</span>
                      <h3 className="faq-question-text">{faq.question}</h3>
                    </div>
                    <div className={`faq-icon-toggle ${isOpen ? 'rotate' : ''}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className={`faq-accordion-body ${isOpen ? 'show' : ''}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Prompt */}
        <div className="faq-help-box">
          <div className="help-icon-wrap">
            <MessageSquare size={22} />
          </div>
          <div className="help-text-wrap">
            <h4 className="help-title">Have a question that isn't answered here?</h4>
            <p className="help-desc">
              We provide free preliminary strategy reviews with our senior strategists. Let's discuss your specific goals.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-secondary help-btn"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              if (onOpenContact) onOpenContact();
            }}
          >
            <span>Ask Our Strategists</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
