import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { agencyData } from '../data/agencyData';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle sticky scroll state and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section in viewport
      const sections = ['home', 'about', 'services', 'products', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          aria-label={`${agencyData.brand.name} ${agencyData.brand.suffix} Homepage`}
        >
          <div className="logo-symbol">
            <span className="logo-spark">
              <Sparkles size={18} />
            </span>
          </div>
          <span className="logo-text">
            {agencyData.brand.name}
            <span className="logo-highlight">{agencyData.brand.suffix}</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {agencyData.navigation.map((item) => {
              const secId = item.href.replace('#', '');
              const isActive = activeSection === secId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    {item.label}
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="btn btn-primary btn-sm nav-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
              if (onOpenContact) onOpenContact();
            }}
          >
            <span>Get Started</span>
            <ArrowRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Backdrop & Menu */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <a
            href="#home"
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <div className="logo-symbol">
              <Sparkles size={18} />
            </div>
            <span className="logo-text">
              {agencyData.brand.name}
              <span className="logo-highlight">{agencyData.brand.suffix}</span>
            </span>
          </a>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <ul className="mobile-nav-list">
            {agencyData.navigation.map((item) => {
              const secId = item.href.replace('#', '');
              const isActive = activeSection === secId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="nav-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-contact-info">
            <p className="drawer-contact-label">Direct Client Inquiries:</p>
            <a href={`mailto:${agencyData.contact.email}`} className="drawer-contact-val">
              {agencyData.contact.email}
            </a>
            <a href={`tel:${agencyData.contact.phone.replace(/[^0-9+]/g, '')}`} className="drawer-contact-val">
              {agencyData.contact.phone}
            </a>
          </div>

          <a
            href="#contact"
            className="btn btn-primary btn-lg drawer-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
              if (onOpenContact) onOpenContact();
            }}
          >
            <span>Get Started</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
