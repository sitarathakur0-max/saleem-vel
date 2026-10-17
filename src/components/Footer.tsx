import React from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { Phone, Mail, MapPin, ExternalLink, HeartHandshake } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#153427] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Saleem Veterinary Clinic &amp; Pet Shop
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              Providing dedicated veterinary consultations, pet care guidance, and quality pet essentials for companion animals in Sabzazar and along Multan Road, Lahore.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  About the Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Veterinary Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pet-care')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pet Care Information
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pet-shop')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pet Shop Supplies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faqs')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact &amp; Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Contact &amp; Location
            </h4>
            
            <div className="space-y-2.5 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {CLINIC_DATA.address}
                </span>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <a
                      href={`tel:${CLINIC_DATA.mainPhone.number}`}
                      className="text-white hover:text-emerald-300 font-medium transition-colors"
                    >
                      {CLINIC_DATA.mainPhone.formatted}
                    </a>
                    <span className="text-xs text-stone-400 ml-1.5">(Main)</span>
                  </div>
                  <div>
                    <a
                      href={`tel:03008469926`}
                      className="hover:text-white transition-colors"
                    >
                      0300 8469926
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:03454743353`}
                      className="hover:text-white transition-colors"
                    >
                      0345 4743353
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#74C69D] shrink-0" />
                <a
                  href={`mailto:${CLINIC_DATA.email}`}
                  className="hover:text-white transition-colors text-xs break-all"
                >
                  {CLINIC_DATA.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_DATA.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#74C69D] hover:text-white font-medium transition-colors"
              >
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Medical Notice */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
              <span>Veterinary Care Notice</span>
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed bg-[#1B4332]/60 p-3.5 rounded-xl border border-stone-800">
              Information on this website is for general educational guidance only and does not replace direct clinical examination, diagnostic work, or treatment by a qualified veterinary doctor. If your pet is showing acute distress, difficulty breathing, or trauma, contact the clinic immediately by telephone.
            </p>
          </div>

        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            &copy; {currentYear} Saleem Veterinary Clinic &amp; Pet Shop · Sabzazar, Lahore, Pakistan. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Multan Road, Sabzazar, Lahore</span>
            <span>·</span>
            <button
              onClick={() => handleNav('faqs')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Patient Guidance &amp; FAQs
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
