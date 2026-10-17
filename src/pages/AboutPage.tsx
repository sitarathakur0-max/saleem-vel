import React from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { MapPin, Phone, Mail, Heart, FileText, CheckCircle2, Navigation } from 'lucide-react';
import consultImg from '../assets/images/clinic_consultation_exam_1792235320215.jpg';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
          About Our Practice
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
          About Saleem Veterinary Clinic &amp; Pet Shop
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          A dedicated veterinary facility and companion animal supply center serving pet owners in Sabzazar and along Multan Road in Lahore, Pakistan.
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Saleem Veterinary Clinic &amp; Pet Shop is located at Coca Cola Stop, 8 Km Multan Road, Sabzazar Block H. Our practice brings together routine clinical health consultations and everyday pet essentials under one roof, providing a welcoming environment for pet owners across Lahore.
          </p>

          <p>
            Our core priority is compassionate patient care, gentle handling, and open communication with pet parents. Whether you are welcoming a young kitten needing its primary immunizations or caring for a mature dog requiring dietary and wellness advice, we focus on unhurried, thorough examinations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center mb-2">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#1B4332] text-sm mb-1">
                Gentle Animal Handling
              </h3>
              <p className="text-xs text-stone-600">
                Low-stress handling techniques designed to keep companion animals calm during clinical checkups and physical assessments.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#B85A3D] flex items-center justify-center mb-2">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#1B4332] text-sm mb-1">
                Practical Pet Guidance
              </h3>
              <p className="text-xs text-stone-600">
                Straightforward advice tailored to Lahore’s weather conditions, indoor keeping, and nutritional wellbeing.
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm aspect-[4/3]">
            <img
              src={consultImg}
              alt="Veterinarian examining a small dog during checkup"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3 text-xs text-stone-500 text-center">
            Compassionate veterinary consultations and patient wellness
          </div>
        </div>
      </div>

      {/* Our Care Principles Section */}
      <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
            Our Care Principles
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] mt-1">
            Commitment to Animal Health &amp; Client Trust
          </h2>
          <p className="text-stone-600 text-sm mt-1 max-w-2xl">
            We believe that consistent preventive care and transparent guidance build long-lasting health for your pets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs sm:text-sm text-stone-700">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1B4332]">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              <span>Preventive Wellness</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              Early detection through physical checks, vital sign monitoring, and timely immunizations helps protect pets from preventable conditions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1B4332]">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              <span>Owner Education</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              We take the time to explain dietary choices, deworming intervals, and at-home observations so pet guardians feel confident.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#1B4332]">
              <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
              <span>Integrated Supplies</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-xs">
              Direct access to recommended pet food, feeding essentials, hygiene litters, and grooming accessories in our on-site pet shop.
            </p>
          </div>
        </div>
      </section>

      {/* Facility & Location Summary */}
      <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-[#1B4332]">
          Visit Our Clinic &amp; Shop
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Address
            </span>
            <div className="font-medium text-stone-800 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
              <span>{CLINIC_DATA.address}</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Telephone Lines
            </span>
            <div className="font-medium text-stone-800 space-y-1">
              {CLINIC_DATA.phones.map((p) => (
                <div key={p.number} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <a href={`tel:${p.number}`} className="hover:underline">
                    {p.formatted}
                  </a>
                  <span className="text-xs text-stone-400">({p.label})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Email Contact
            </span>
            <div className="font-medium text-stone-800 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2D6A4F] shrink-0" />
              <a href={`mailto:${CLINIC_DATA.email}`} className="hover:underline text-xs break-all">
                {CLINIC_DATA.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-stone-600">
            Conveniently situated right at Coca Cola Stop along Multan Road.
          </span>
          <div className="flex items-center gap-3">
            <a
              href={CLINIC_DATA.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 rounded-lg font-medium text-xs transition-colors inline-flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B85A3D]" />
              <span>Get Directions</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white rounded-lg font-medium text-xs transition-colors cursor-pointer"
            >
              Contact Clinic Desk
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
