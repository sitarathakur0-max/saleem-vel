import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Veterinary Services' },
    { id: 'pet-care', label: 'Pet Care' },
    { id: 'pet-shop', label: 'Pet Shop' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact & Visit' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-8 h-20">
          
          {/* Main Brand Title & Subtitle */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] rounded-lg min-w-0"
          >
            <span className="block text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors truncate">
              Saleem Veterinary Clinic &amp; Pet Shop
            </span>
            <span className="block text-xs text-stone-500 font-normal truncate">
              Veterinary Care &amp; Pet Supplies · Sabzazar, Lahore
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`cursor-pointer whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#1B4332] font-semibold'
                      : 'text-stone-600 hover:text-[#1B4332]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2D6A4F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Prominent Call Clinic button + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${CLINIC_DATA.mainPhone.number}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1B4332] hover:bg-[#2D6A4F] active:bg-[#153427] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
              <span>Call Clinic: {CLINIC_DATA.mainPhone.formatted}</span>
            </a>

            {/* Mobile / Tablet menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-[#FAF9F5] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#2D6A4F]/10 text-[#1B4332] font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-stone-200 space-y-3">
            <div className="text-xs text-stone-500">
              Coca Cola Stop, Multan Road, Sabzazar, Lahore
            </div>
            <a
              href={`tel:${CLINIC_DATA.mainPhone.number}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#1B4332] text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>Call Clinic ({CLINIC_DATA.mainPhone.formatted})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
