import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import ProductDemoModal from './components/ProductDemoModal';
import LegalModal from './components/LegalModal';
import './App.css';

export default function App() {
  // Modal states
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  // Preselected service to feed into the Contact consultation form
  const [preselectedService, setPreselectedService] = useState('');

  // Scroll to contact and prefill requested service
  const handleBookService = (serviceName) => {
    setPreselectedService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to contact for product inquiries
  const handleBookProduct = (productName) => {
    setPreselectedService(`Software: ${productName}`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="agency-app">
      {/* 1. STICKY RESPONSIVE NAVBAR */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* MAIN HOMEPAGE SECTIONS */}
      <main id="main-content">
        {/* 2. HERO SECTION */}
        <Hero
          onOpenContact={handleOpenContact}
          onSelectService={(s) => setSelectedService(s)}
        />

        {/* 3. ABOUT US SECTION */}
        <About onOpenContact={handleOpenContact} />

        {/* 4. SERVICES SECTION */}
        <Services
          onSelectService={(s) => setSelectedService(s)}
          onBookService={handleBookService}
        />

        {/* 5. PRODUCTS / SOLUTIONS SECTION */}
        <Products
          onOpenDemoModal={(p) => setSelectedProduct(p)}
          onBookProduct={handleBookProduct}
        />

        {/* 6. FAQ ACCORDION SECTION */}
        <FAQ onOpenContact={handleOpenContact} />

        {/* 7. REQUIREMENTS / CONTACT SECTION */}
        <Contact
          preselectedService={preselectedService}
          onResetPreselected={() => setPreselectedService('')}
        />
      </main>

      {/* 8. FOOTER SECTION */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onSelectService={(s) => setSelectedService(s)}
      />

      {/* SERVICE DETAILS MODAL */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={handleBookService}
        />
      )}

      {/* PRODUCT DEMO MODAL */}
      {selectedProduct && (
        <ProductDemoModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onBookProduct={handleBookProduct}
        />
      )}

      {/* LEGAL & PRIVACY MODAL */}
      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
