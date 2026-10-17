import React from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { Phone, Navigation, ArrowRight, HeartPulse, ShoppingBag, BookOpen, MapPin, AlertCircle, Sparkles } from 'lucide-react';

import heroImg from '../assets/images/hero_veterinary_care_1792235319589.jpg';
import petCareImg from '../assets/images/pet_care_wellness_1792235320869.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
                <span>Sabzazar Phase 1 &amp; 2</span>
                <span aria-hidden="true">·</span>
                <span>8 Km Multan Road</span>
                <span aria-hidden="true">·</span>
                <span>Lahore</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B4332] leading-tight tracking-tight text-balance">
                Dedicated Veterinary Care &amp; Pet Supplies in Sabzazar, Lahore
              </h1>

              {/* Grounded introduction */}
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Saleem Veterinary Clinic &amp; Pet Shop provides clinical consultations, preventive health guidance, and everyday nutrition for companion animals. Conveniently located at Coca Cola Stop on Multan Road.
              </p>

              {/* Primary Actions: Call Now & Get Directions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${CLINIC_DATA.mainPhone.number}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all text-sm whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>Call {CLINIC_DATA.mainPhone.formatted}</span>
                </a>

                <a
                  href={CLINIC_DATA.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold rounded-xl shadow-xs transition-all text-sm whitespace-nowrap shrink-0"
                >
                  <Navigation className="w-4 h-4 text-[#B85A3D]" />
                  <span>Get Directions (Multan Rd)</span>
                </a>
              </div>

              {/* Clean Trust Strip */}
              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-600">
                <span className="flex items-center gap-1.5 font-medium text-stone-800">
                  <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
                  Compassionate Animal Care
                </span>
                <span aria-hidden="true">·</span>
                <span>Cats, Dogs &amp; Small Pets</span>
                <span aria-hidden="true">·</span>
                <span>Clinical Consultations &amp; Pet Nutrition</span>
              </div>

            </div>

            {/* Right Media Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 aspect-[4/3] lg:h-full lg:aspect-auto">
                <img
                  src={heroImg}
                  alt="Veterinarian examining a healthy pet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <p className="font-semibold text-sm">
                      Saleem Veterinary Clinic &amp; Pet Shop
                    </p>
                    <p className="text-xs text-stone-200">
                      Coca Cola Stop, Multan Road, Sabzazar, Lahore
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Dual Services: Veterinary Care & Pet Supplies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] tracking-tight">
            Veterinary Care &amp; Pet Supplies
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Serving cat, dog, and small animal owners across Sabzazar, Allama Iqbal Town, and surrounding Multan Road communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Veterinary Care Card */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#2D6A4F]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1B4332]">
                Veterinary Clinical Care
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                General wellness examinations, vaccination advisories, parasite management (deworming, tick and flea prevention), and physical assessment for unwell companion animals.
              </p>

              <div className="pt-2 text-xs text-stone-600 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                  <span>Physical clinical assessments &amp; vital checks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                  <span>Vaccination schedules &amp; preventive health</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                  <span>Dietary and seasonal management guidance</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Walk-ins and appointments welcome
              </span>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#2D6A4F] cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pet Shop Card */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#2D6A4F]/40 transition-colors">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#B85A3D] flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1B4332]">
                Pet Shop &amp; Daily Supplies
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Stocking nutritious pet foods, feeding bowls, hygienic litter, grooming tools, and essential pet accessories right beside the clinic for your convenience.
              </p>

              <div className="pt-2 text-xs text-stone-600 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85A3D]" />
                  <span>Nutritional dog &amp; cat foods</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85A3D]" />
                  <span>Litter, hygiene supplies &amp; grooming items</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B85A3D]" />
                  <span>Collars, leashes, and everyday pet accessories</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                In-store collection &amp; inquiries
              </span>
              <button
                onClick={() => onNavigate('pet-shop')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#2D6A4F] cursor-pointer"
              >
                <span>Browse Pet Supplies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Pet Care Guidance Section */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm aspect-[4/3]">
                <img
                  src={petCareImg}
                  alt="Healthy domestic pet resting comfortably"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
                Helping You Care for Your Pet
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] tracking-tight">
                Essential Health Guidance for Lahore Pet Owners
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Keeping pets healthy in Lahore requires special attention to seasonal changes—protecting dogs and cats from acute heat stroke during peak summer temperatures (often exceeding 40°C) and managing tick surges during the monsoon months.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-stone-700">
                <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                  <span className="font-bold text-[#1B4332] block mb-1">Summer Hydration</span>
                  <span>Never leave pets in parked cars or unshaded spaces; replenish fresh water multiple times daily.</span>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                  <span className="font-bold text-[#1B4332] block mb-1">Preventive Deworming</span>
                  <span>Regular parasite control preserves your pet's energy and protects the health of the entire household.</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('pet-care')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1B4332] hover:text-[#2D6A4F] cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Read Full Pet Care Educational Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Visit Our Clinic Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B4332] rounded-3xl text-white p-8 sm:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-[#74C69D] uppercase tracking-wider">
                Visit Our Clinic · Sabzazar Lahore
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Visit Saleem Veterinary Clinic &amp; Pet Shop
              </h2>
              <p className="text-stone-200 text-sm leading-relaxed max-w-xl">
                Located right at Coca Cola Stop on 8 Km Multan Road, Sabzazar Block H. Easily accessible from Allama Iqbal Town, Thokar Niaz Baig, and surrounding areas.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-200">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{CLINIC_DATA.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Main: {CLINIC_DATA.mainPhone.formatted} · Alternate: 0300 8469926 · Support: 0345 4743353</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={CLINIC_DATA.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1B4332] font-semibold rounded-xl text-sm hover:bg-stone-100 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#B85A3D]" />
                <span>Open in Google Maps</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/10 border border-white/40 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              >
                <span>Send Online Message / Enquiry</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Medical Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-amber-900 flex items-start gap-3 text-xs leading-relaxed">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Veterinary Notice:</strong> The health information provided on this website is for educational orientation. It is not a substitute for clinical diagnostics, prescription, or in-person evaluation by a licensed veterinary doctor. In case of emergency or severe trauma, please contact the clinic directly by phone.
          </div>
        </div>
      </section>

    </div>
  );
};
