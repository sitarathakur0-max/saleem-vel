import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types.ts';
import { CLINIC_DATA, ENQUIRY_OPTIONS } from '../constants/clinicData.ts';
import { MapPin, Phone, Mail, Navigation, ExternalLink, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contact: '',
    enquiryType: ENQUIRY_OPTIONS[0],
    petType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{ message: string; id: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessResponse(null);

    // Client-side quick validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!formData.contact.trim() || formData.contact.trim().length < 5) {
      setErrorMessage('Please provide a valid phone number or email address so we can reply.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage('Please describe your enquiry or pet care question in the message field.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessResponse({
          message: data.message || 'Your message has been submitted successfully to Saleem Veterinary Clinic & Pet Shop.',
          id: data.enquiryId || 'enq_success',
        });
        setFormData({
          name: '',
          contact: '',
          enquiryType: ENQUIRY_OPTIONS[0],
          petType: '',
          message: '',
        });
      } else {
        setErrorMessage(data.error || 'Unable to submit enquiry. Please check your entries and try again.');
      }
    } catch {
      setErrorMessage(
        'Unable to submit at this time. Please check your connection or call our clinic desk directly at 0324 4467556.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
          Get in Touch
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
          Contact &amp; Visit Saleem Veterinary Clinic
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          Reach our clinic desk by telephone, visit our facility in Sabzazar Lahore, or submit an inquiry using the message form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Information & Directions */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-[#1B4332]">
              Clinic Contact Details
            </h2>

            {/* Address */}
            <div className="space-y-1.5 pb-4 border-b border-stone-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                Clinic Address
              </span>
              <p className="text-sm font-medium text-stone-800 leading-snug">
                {CLINIC_DATA.address}
              </p>
              <div className="pt-2">
                <a
                  href={CLINIC_DATA.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#2D6A4F] font-semibold hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B85A3D]" />
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-2 pb-4 border-b border-stone-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                Telephone Lines
              </span>

              <div className="space-y-2 text-sm">
                <div>
                  <a
                    href={`tel:${CLINIC_DATA.mainPhone.number}`}
                    className="font-bold text-[#1B4332] hover:text-[#2D6A4F] text-base transition-colors"
                  >
                    {CLINIC_DATA.mainPhone.formatted}
                  </a>
                  <span className="text-xs text-stone-500 ml-2">
                    ({CLINIC_DATA.mainPhone.label})
                  </span>
                </div>

                <div>
                  <a
                    href={`tel:03008469926`}
                    className="font-medium text-stone-700 hover:text-[#1B4332] transition-colors"
                  >
                    0300 8469926
                  </a>
                  <span className="text-xs text-stone-500 ml-2">
                    (Additional Contact)
                  </span>
                </div>

                <div>
                  <a
                    href={`tel:03454743353`}
                    className="font-medium text-stone-700 hover:text-[#1B4332] transition-colors"
                  >
                    0345 4743353
                  </a>
                  <span className="text-xs text-stone-500 ml-2">
                    (Additional Contact)
                  </span>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5 pb-4 border-b border-stone-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#2D6A4F]" />
                Email Address
              </span>
              <div>
                <a
                  href={`mailto:${CLINIC_DATA.email}`}
                  className="text-sm font-medium text-stone-800 hover:text-[#2D6A4F] hover:underline break-all"
                >
                  {CLINIC_DATA.email}
                </a>
              </div>
            </div>

            {/* Landmark Guidance */}
            <div className="text-xs text-stone-600 bg-stone-50 p-4 rounded-xl border border-stone-200/80 space-y-1.5">
              <div className="font-semibold text-stone-900">
                Landmark Directions:
              </div>
              <p>
                The clinic is situated adjacent to the well-known <strong>Coca Cola Stop</strong> on 8 Km Multan Road, approximately 8 kilometers from Thokar Niaz Baig, entering Sabzazar Housing Scheme Block H.
              </p>
            </div>

          </div>

        </div>

        {/* Right Column: Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332]">
                Send an Inquiry to the Clinic
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                Fill in your details below. Our team reviews all messages and responds via your contact number or email.
              </p>
            </div>

            {/* Success state */}
            {successResponse && (
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-stone-800 space-y-3 animate-in fade-in duration-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-emerald-950 text-sm">
                      Enquiry Successfully Received
                    </h3>
                    <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                      {successResponse.message}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-200/80 flex items-center justify-between text-xs">
                  <span className="text-stone-600 text-[11px]">
                    Need immediate assistance?
                  </span>
                  <a
                    href={`tel:${CLINIC_DATA.mainPhone.number}`}
                    className="font-bold text-[#1B4332] hover:underline"
                  >
                    Call {CLINIC_DATA.mainPhone.formatted}
                  </a>
                </div>
              </div>
            )}

            {/* Error state */}
            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900 flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                <div className="leading-relaxed">{errorMessage}</div>
              </div>
            )}

            {/* The Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-stone-700 uppercase tracking-wider"
                >
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Muhammad Ali or Ayesha Khan"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none transition-all placeholder:text-stone-400"
                />
              </div>

              {/* Contact Method */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact"
                  className="block text-xs font-bold text-stone-700 uppercase tracking-wider"
                >
                  Phone Number or Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="e.g. 0300 1234567 or yourname@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none transition-all placeholder:text-stone-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Enquiry Type */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="enquiryType"
                    className="block text-xs font-bold text-stone-700 uppercase tracking-wider"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none transition-all bg-white"
                  >
                    {ENQUIRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pet Type (Optional) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="petType"
                    className="block text-xs font-bold text-stone-700 uppercase tracking-wider"
                  >
                    Pet Species &amp; Breed (Optional)
                  </label>
                  <input
                    id="petType"
                    type="text"
                    value={formData.petType || ''}
                    onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                    placeholder="e.g. Persian Cat, German Shepherd, Bird"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none transition-all placeholder:text-stone-400"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-stone-700 uppercase tracking-wider"
                >
                  Message / Details of Your Question <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe how we can assist you with your pet, vaccination inquiries, or pet shop supplies..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-stone-800 text-sm focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none transition-all placeholder:text-stone-400 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1B4332] hover:bg-[#2D6A4F] disabled:bg-stone-400 text-white font-semibold rounded-xl text-sm shadow-xs hover:shadow transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-300" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

    </div>
  );
};
