import React from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { Stethoscope, Shield, Bug, Sparkles, Scale, AlertTriangle, Phone, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const servicesList = [
    {
      title: 'General Clinical Consultations',
      icon: Stethoscope,
      summary: 'Comprehensive routine and illness physical assessments for domestic dogs, cats, and small animals.',
      details: [
        'Vital signs check: temperature, heart rate, respiration, and mucous membrane colour',
        'Physical examination of eyes, ears, oral cavity, teeth, and skin condition',
        'Abdominal palpation and musculoskeletal movement assessment',
        'Discussion of changes in appetite, behaviour, hydration, or litter box habits',
      ],
      serviceNote: 'Available by walk-in or advance appointment; call ahead recommended.',
    },
    {
      title: 'Preventive Immunization & Vaccines',
      icon: Shield,
      summary: 'Immunization guidance to protect pets from infectious diseases common in urban environments.',
      details: [
        'Puppy core immunization protocols (distemper, hepatitis, parvovirus, parainfluenza)',
        'Kitten core vaccination guidance (feline panleukopenia, herpesvirus, calicivirus)',
        'Rabies vaccination protocols and booster tracking for companion animals',
        'Pre-vaccination health check to ensure pet is afebrile and fit for vaccination',
      ],
      serviceNote: 'Administered under proper cold-chain storage standards.',
    },
    {
      title: 'Deworming & Parasite Control',
      icon: Bug,
      summary: 'Prophylactic and therapeutic management for internal and external parasites.',
      details: [
        'Scheduled oral deworming based on weight and age (roundworms, tapeworms, hookworms)',
        'Topical and oral ectoparasite prevention against seasonal ticks and fleas',
        'Zoonotic prevention advice to protect human family members from parasite transmission',
        'Environmental control recommendations for bedding and living spaces',
      ],
      serviceNote: 'Dosages calculated on actual measured pet weight at the clinic.',
    },
    {
      title: 'Nutritional & Weight Guidance',
      icon: Scale,
      summary: 'Dietary guidance tailored to breed, age stage, and specific metabolic considerations.',
      details: [
        'Puppy and kitten growth diets supporting skeletal and organ development',
        'Portion control and calorie management for overweight or indoor pets',
        'Safe transitions between different pet food brands to prevent gastrointestinal upset',
        'Hydration strategies, particularly during Lahore’s intense summer heat',
      ],
      serviceNote: 'Matched directly with nutritional pet foods available in our shop.',
    },
    {
      title: 'Basic Pet Hygiene & Coat Care',
      icon: Sparkles,
      summary: 'Assessment of coat hygiene, matting prevention, and basic wellness maintenance.',
      details: [
        'Ear canal inspection and gentle cleaning to prevent bacterial or yeast buildup',
        'Nail trimming advice to avoid painful overgrown nails and ingrown claws',
        'Medicated shampoo guidance for itchy, allergic, or sensitive skin conditions',
        'Sanitary trims and coat brushing recommendations for long-haired breeds',
      ],
      serviceNote: 'Guidance on safe home grooming practices and hygiene tools.',
    },
    {
      title: 'First-Aid Evaluation & Triage',
      icon: AlertTriangle,
      summary: 'Assessment and initial stabilization for accidental trauma, cuts, or acute distress.',
      details: [
        'Triage evaluation for shock, severe dehydration, or sudden lethargy',
        'Cleaning and antiseptic dressing of minor cuts, abrasions, or bites',
        'Referral coordination if specialized advanced surgical or radiography procedures are required',
        'Guidance on safe patient transport for injured or distressed pets',
      ],
      serviceNote: 'In acute distress, please phone ahead so staff can prepare before arrival.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
          Clinical Offerings
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
          Veterinary Services at Saleem Veterinary Clinic
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          Compassionate veterinary consultations and preventive care designed to safeguard the wellbeing of your pets in Sabzazar and surrounding areas.
        </p>
      </div>

      {/* Medical Disclaimer Notice */}
      <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-6 text-xs sm:text-sm text-stone-800 space-y-3">
        <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
          <span>Important Veterinary &amp; Medical Notice</span>
        </div>
        <p className="text-stone-700 leading-relaxed">
          The descriptions on this website are provided strictly for informational and educational orientation. <strong>Online content does not constitute medical advice and cannot replace in-person physical examination, diagnostic tests, and treatment prescribed by a licensed veterinary doctor.</strong>
        </p>
        <p className="text-stone-600 text-xs">
          Treatment outcomes depend on individual clinical factors, timely presentation, and adherence to professional recommendations. Never administer human pharmaceuticals (such as paracetamol or ibuprofen) to dogs or cats without explicit veterinary instruction, as they can be fatal.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {servicesList.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#2D6A4F]/50 transition-colors space-y-4"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#1B4332]">
                    {srv.title}
                  </h2>
                  <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                    {srv.summary}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                    Key Procedures &amp; Focus
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {srv.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#2D6A4F] font-bold">·</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-[#2D6A4F] font-medium">
                {srv.serviceNote}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Banner */}
      <div className="bg-[#FAF9F5] border border-stone-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332]">
            Need to Schedule a Visit or Consult?
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Please call our clinic desk before visiting to check current doctor availability or plan a routine checkup.
          </p>
          <div className="text-xs text-stone-500 pt-1">
            Coca Cola Stop, Multan Road, Sabzazar, Lahore
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_DATA.mainPhone.number}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold rounded-xl text-sm transition-all shadow-xs"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Call {CLINIC_DATA.mainPhone.formatted}</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
          >
            <span>Online Enquiry Form</span>
            <ArrowRight className="w-4 h-4 text-stone-500" />
          </button>
        </div>
      </div>

    </div>
  );
};
