import React, { useState } from 'react';
import {
  Sparkles,
  ArrowUp,
  Mail,
  Phone,
  Check,
  Send,
} from 'lucide-react';
import { agencyData } from '../data/agencyData';
import {
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
  GitHubIcon,
} from './SocialIcons';

const socialComponentMap = {
  Linkedin: LinkedInIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Youtube: YouTubeIcon,
  Github: GitHubIcon,
};

export default function Footer({ onOpenLegal, onSelectService }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2500);
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand & Agency Description */}
          <div className="footer-col brand-col">
            <a
              href="#home"
              className="brand-logo footer-logo"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <div className="logo-symbol">
                <Sparkles size={18} />
              </div>
              <span className="logo-text">
                {agencyData.brand.name}
                <span className="logo-highlight">{agencyData.brand.suffix}</span>
              </span>
            </a>

            <p className="footer-brand-desc">{agencyData.footer.tagline}</p>

            {/* Social Icons */}
            <div className="footer-social-row">
              {agencyData.socials.map((soc) => {
                const IconComp = socialComponentMap[soc.icon] || LinkedInIcon;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={`Follow ${agencyData.brand.name} on ${soc.name}`}
                  >
                    <IconComp size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              {agencyData.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Core Services</h4>
            <ul className="footer-links-list">
              {agencyData.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="footer-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      if (onSelectService) onSelectService(service);
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact Quick Info */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-heading">Growth Newsletter</h4>
            <p className="newsletter-desc">
              Subscribe to our bi-weekly marketing teardowns, algorithmic update insights, and CAC benchmarks.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button
                  type="submit"
                  className="newsletter-submit-btn"
                  aria-label="Subscribe to newsletter"
                >
                  {newsletterSubscribed ? <Check size={16} className="text-emerald" /> : <Send size={15} />}
                </button>
              </div>
              {newsletterSubscribed && (
                <span className="newsletter-success-msg">
                  ✓ You're on the list! Check your inbox soon.
                </span>
              )}
            </form>

            <div className="footer-contact-snippets">
              <div className="snippet-item">
                <Mail size={14} className="snippet-icon" />
                <a href={`mailto:${agencyData.contact.email}`}>{agencyData.contact.email}</a>
              </div>
              <div className="snippet-item">
                <Phone size={14} className="snippet-icon" />
                <a href={`tel:${agencyData.contact.phone.replace(/[^0-9+]/g, '')}`}>
                  {agencyData.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">{agencyData.footer.copyright}</p>

          <div className="footer-legal-links">
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => onOpenLegal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="legal-divider">•</span>
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => onOpenLegal('terms')}
            >
              Terms of Service
            </button>
            <span className="legal-divider">•</span>
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => onOpenLegal('cookies')}
            >
              Cookie Policy
            </button>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
