import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

interface FaqItem {
  question: string;
  answer: string;
  category: 'location' | 'appointments' | 'services' | 'contact';
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<'all' | 'appointments' | 'services' | 'location'>('all');

  const faqs: FaqItem[] = [
    {
      question: 'Where exactly is the clinic located on Multan Road?',
      answer: `Saleem Veterinary Clinic & Pet Shop is located at Coca Cola Stop, 8 Km Multan Road, Sabzazar Block H, in the Sabzazar Housing Scheme, Lahore, Pakistan. The landmark Coca Cola Stop is well known locally and easily accessible directly from Multan Road.`,
      category: 'location',
    },
    {
      question: 'What are the daily operating hours for consultations and the pet shop?',
      answer: `The clinic provides routine daytime consultations and pet care services throughout the week. Because doctor schedules may vary with surgical procedures or clinical appointments, we encourage pet owners to call 0324 4467556 before visiting to verify the doctor's current availability for the day.`,
      category: 'appointments',
    },
    {
      question: 'Do I need a prior appointment, or can I walk in with my pet?',
      answer: `Both walk-in visits and advance appointment calls are accommodated. For routine preventive care, vaccines, and pet shop purchases, walk-ins are welcomed. Calling ahead at 0324 4467556 or 0300 8469926 helps minimize your waiting time and ensures the clinic staff is ready for your pet.`,
      category: 'appointments',
    },
    {
      question: 'Which phone numbers can I use to reach Saleem Veterinary Clinic?',
      answer: `You can reach our clinic desk on our main telephone line: 0324 4467556. Additional contact numbers include 0300 8469926 and 0345 4743353. For non-urgent written inquiries, you can email syedfaheemahmad@gmail.com or use our website contact form.`,
      category: 'contact',
    },
    {
      question: 'What should I bring when bringing my pet for an examination?',
      answer: `Please bring your pet’s previous vaccination booklet or medical card (if any), a carrier or secure basket for cats and small pets, and a secure leash and collar for dogs. If your pet is experiencing digestive trouble, noting the onset of symptoms or bringing a fresh stool sample is very helpful for the examination.`,
      category: 'services',
    },
    {
      question: 'Can I visit the Pet Shop without booking a veterinary appointment?',
      answer: `Yes, certainly. The pet shop counter is open to all pet owners looking for quality pet food, hygienic litter, feeding bowls, grooming supplies, or accessories, without requiring a clinic consultation.`,
      category: 'services',
    },
    {
      question: 'What should I do if my pet experiences an urgent medical emergency?',
      answer: `If your pet suffers acute trauma, breathing distress, sudden collapse, or ingestion of toxic substances, please telephone our clinic desk immediately at 0324 4467556. Calling ahead allows our team to prepare emergency triage equipment before you arrive at the facility.`,
      category: 'services',
    },
    {
      question: 'Does the clinic provide medical diagnoses or prescribe medications over the phone?',
      answer: `No. In adherence to professional veterinary ethics, medications (especially antibiotics, hormonal treatments, or dewormers) cannot be safely prescribed without an in-person physical examination and accurate weight measurement. Telephone guidance is limited to triage and visit planning.`,
      category: 'services',
    },
  ];

  const filteredFaqs = filter === 'all' ? faqs : faqs.filter((f) => f.category === filter);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4">
        <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
          Client Questions &amp; Answers
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl">
          Helpful information about contacting Saleem Veterinary Clinic &amp; Pet Shop, preparing for a visit, and finding our location in Sabzazar, Lahore.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-xl border border-stone-200 text-xs font-medium max-w-md">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-white text-[#1B4332] font-bold shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          All Questions ({faqs.length})
        </button>
        <button
          onClick={() => setFilter('appointments')}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            filter === 'appointments'
              ? 'bg-white text-[#1B4332] font-bold shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Appointments &amp; Hours
        </button>
        <button
          onClick={() => setFilter('services')}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            filter === 'services'
              ? 'bg-white text-[#1B4332] font-bold shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Care &amp; Services
        </button>
        <button
          onClick={() => setFilter('location')}
          className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
            filter === 'location'
              ? 'bg-white text-[#1B4332] font-bold shadow-xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Location
        </button>
      </div>

      {/* FAQs Accordion */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors focus-visible:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-sm sm:text-base text-[#1B4332]">
                  {faq.question}
                </span>
                <span className="p-1 rounded-md text-stone-400 group-hover:text-stone-600 shrink-0 mt-0.5">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-[#FAF9F5]/40 space-y-3">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Prompt Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-base text-[#1B4332]">
            Still have a question about your pet?
          </h3>
          <p className="text-xs text-stone-600">
            Our staff will be glad to assist you over the phone or via our contact form.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CLINIC_DATA.mainPhone.number}`}
            className="px-4 py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {CLINIC_DATA.mainPhone.formatted}</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </div>

    </div>
  );
};
