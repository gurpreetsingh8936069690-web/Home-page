import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowRight, FiSun, FiMoon } from 'react-icons/fi';
import { agencyData } from '../data/agencyData';
import RvCanvasLogo from './RvCanvasLogo';

export default function Navbar({ onOpenContact, theme = 'dark', onToggleTheme }) {
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
            <RvCanvasLogo size={24} />
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

        {/* Desktop CTA & Theme Toggle */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
          </button>

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
            <FiArrowRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
              <RvCanvasLogo size={24} />
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
            <FiX size={22} />
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
                    <FiArrowRight size={16} className="nav-arrow" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-drawer-footer">
          {/* Theme Mode Switcher in Drawer */}
          <div className="mobile-drawer-theme-row">
            <span className="drawer-theme-label">Appearance</span>
            <button
              type="button"
              className="drawer-theme-pill"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <>
                  <FiSun size={16} className="text-amber" />
                  <span>Switch to Light</span>
                </>
              ) : (
                <>
                  <FiMoon size={16} className="text-indigo" />
                  <span>Switch to Dark</span>
                </>
              )}
            </button>
          </div>

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
            <FiArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
