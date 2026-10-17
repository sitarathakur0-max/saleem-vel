import React, { useState, useEffect } from 'react';
import { PageId } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingContactButton } from './components/FloatingContactButton.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { PetCarePage } from './pages/PetCarePage.tsx';
import { PetShopPage } from './pages/PetShopPage.tsx';
import { FaqPage } from './pages/FaqPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync with browser hash on load and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'pet-care',
        'pet-shop',
        'faqs',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  // Dynamic SEO title sync per view
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Saleem Veterinary Clinic & Pet Shop | Sabzazar, Multan Road, Lahore',
      about: 'About Us | Saleem Veterinary Clinic & Pet Shop Lahore',
      services: 'Veterinary Services & Pet Consultations | Saleem Vet Clinic Lahore',
      'pet-care': 'Pet Care & Lahore Climate Guide | Saleem Veterinary Clinic',
      'pet-shop': 'Pet Shop Supplies & Pet Food | Saleem Veterinary Clinic Sabzazar',
      faqs: 'Frequently Asked Questions | Saleem Veterinary Clinic Lahore',
      contact: 'Contact & Directions | Saleem Veterinary Clinic & Pet Shop Lahore',
    };

    document.title = titles[currentPage] || 'Saleem Veterinary Clinic & Pet Shop';
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-800 selection:bg-[#2D6A4F]/20 selection:text-[#1B4332]">
      
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'pet-care' && (
          <PetCarePage
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'pet-shop' && (
          <PetShopPage
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'faqs' && (
          <FaqPage
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Fixed Floating Contact Button (Always Bottom-Left on Every Page) */}
      <FloatingContactButton />

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
      />

    </div>
  );
}
