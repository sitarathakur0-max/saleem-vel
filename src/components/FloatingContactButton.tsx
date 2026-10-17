import React, { useState, useEffect, useRef } from 'react';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { Phone, X } from 'lucide-react';

export const FloatingContactButton: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setPopupOpen(false);
      }
    };

    if (popupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPopupOpen(false);
      }
    };
    if (popupOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [popupOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start gap-3"
      role="region"
      aria-label="Direct Clinic Contact"
    >
      {/* Contact the Clinic popup */}
      {popupOpen && (
        <div
          className="bg-white border border-stone-200/90 rounded-2xl shadow-2xl p-5 w-80 max-w-[calc(100vw-2.5rem)] text-stone-800 animate-in fade-in slide-in-from-bottom-2 duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-popup-heading"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div>
              <h3
                id="contact-popup-heading"
                className="text-sm font-bold text-[#1B4332]"
              >
                Contact the Clinic
              </h3>
              <p className="text-xs text-stone-500">
                Call our desk directly for inquiries
              </p>
            </div>
            <button
              onClick={() => setPopupOpen(false)}
              className="p-1 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close contact options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Clickable Telephone Links */}
          <div className="py-3 space-y-2">
            {CLINIC_DATA.phones.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#FAF9F5] transition-colors border border-stone-100 hover:border-stone-200 text-stone-800 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-stone-900 group-hover:text-[#1B4332] transition-colors">
                      {phone.formatted}
                    </span>
                    <span className="block text-[11px] text-stone-500">
                      {phone.label}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#2D6A4F] group-hover:underline">
                  Call
                </span>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div className="pt-2.5 border-t border-stone-100 text-[11px] text-stone-500 leading-snug">
            Coca Cola Stop, 8 Km Multan Road, Sabzazar, Lahore
          </div>
        </div>
      )}

      {/* Main floating button: strictly bottom-left */}
      <button
        onClick={() => setPopupOpen(!popupOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#1B4332] hover:bg-[#2D6A4F] active:bg-[#153427] text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
        aria-label="Contact the Clinic phone lines"
        aria-expanded={popupOpen}
      >
        <Phone className="w-4 h-4 text-emerald-300" />
        <span className="text-sm font-semibold tracking-wide">
          Contact Clinic
        </span>
      </button>
    </div>
  );
};
