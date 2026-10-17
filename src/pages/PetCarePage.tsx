import React, { useState } from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { BookOpen, Sun, CloudRain, Wind, AlertOctagon, Phone, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';
import petCareImg from '../assets/images/pet_care_wellness_1792235320869.jpg';

interface PetCarePageProps {
  onNavigate: (page: PageId) => void;
}

export const PetCarePage: React.FC<PetCarePageProps> = ({ onNavigate }) => {
  const [selectedPet, setSelectedPet] = useState<'dogs' | 'cats' | 'birds'>('dogs');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
          Pet Health Education
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
          Pet Care &amp; Wellness Guide
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          Practical, evidence-grounded health advice for responsible pet ownership in Lahore. Learn how to protect your companion animals across every season.
        </p>
      </div>

      {/* Featured Educational Intro Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAF9F5] border border-stone-200 rounded-3xl p-6 sm:p-10">
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
            Foundations of Animal Wellness
          </div>
          <h2 className="text-2xl font-bold text-[#1B4332]">
            The Pillars of Responsible Pet Ownership
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Every companion animal relies on its guardian for nutrition, mental enrichment, environmental safety, and timely medical intervention. Regular veterinary checkups allow early detection of common health issues before they become debilitating or costly to treat.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
              <span>Clean, fresh water bowl replenished twice daily</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
              <span>Age-appropriate, balanced protein nutrition</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
              <span>Timely core vaccinations &amp; scheduled deworming</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
              <span>Safe indoor protection from extreme outdoor heat</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-stone-200 aspect-[4/3] shadow-xs">
            <img
              src={petCareImg}
              alt="Healthy dog resting peacefully in comfortable home environment"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Lahore Seasonal Pet Care Guide */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
            Lahore Climate Guidance
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] mt-1">
            Managing Lahore’s Weather Conditions
          </h2>
          <p className="text-stone-600 text-sm max-w-2xl mt-1">
            Lahore experiences distinct climate extremes. Taking specific precautions during each season keeps your pets safe and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Summer Heat */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#B85A3D] flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1B4332]">
                Summer Heat (May – August)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                With Lahore summer temperatures frequently surpassing 42°C, heatstroke is a severe and often fatal hazard.
              </p>
              <ul className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <li className="flex items-start gap-2">
                  <span className="text-[#B85A3D] font-bold">·</span>
                  <span>Never leave pets in parked vehicles or unventilated rooms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B85A3D] font-bold">·</span>
                  <span>Walk dogs only in the early morning (before 7:00 AM) or after sunset to protect paw pads from boiling tarmac.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B85A3D] font-bold">·</span>
                  <span>Ensure multiple shaded water bowls with ice cubes.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Monsoon & Ticks */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <CloudRain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1B4332]">
                Monsoon &amp; Ticks (July – September)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                High humidity creates optimal breeding conditions for ectoparasites (ticks and fleas) and fungal skin dermatitis.
              </p>
              <ul className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">·</span>
                  <span>Inspect behind ears, between toe pads, and in groin folds after outdoor grass contact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">·</span>
                  <span>Dry wet paws thoroughly with a clean towel to prevent interdigital fungal yeast infections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">·</span>
                  <span>Consult the clinic for safe, veterinary-grade anti-tick prophylaxis.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Winter & Smog */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#1B4332]">
                Winter &amp; Smog (November – January)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Elevated air pollution (smog) and cool nights can trigger respiratory coughing and joint stiffness in older animals.
              </p>
              <ul className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <li className="flex items-start gap-2">
                  <span className="text-stone-700 font-bold">·</span>
                  <span>Limit rigorous outdoor exercise during peak air quality index (AQI) spikes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stone-700 font-bold">·</span>
                  <span>Provide elevated, draft-free insulated bedding away from cold tiled floors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-stone-700 font-bold">·</span>
                  <span>Watch for eye tearing or persistent wheezing/coughing.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Red-Flag Symptoms: When to Call the Vet Immediately */}
      <section className="bg-red-50/70 border border-red-200 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-red-100 text-red-700 shrink-0 mt-0.5">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-red-950">
              Red-Flag Signs: Seek Immediate Veterinary Attention
            </h2>
            <p className="text-xs sm:text-sm text-red-800 mt-1 leading-relaxed">
              If your pet exhibits any of the following symptoms, do not wait or attempt home remedies. Contact the clinic immediately by phone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-stone-800">
          <div className="p-4 bg-white rounded-xl border border-red-200/80 space-y-1">
            <span className="font-bold text-red-900 block">Severe Respiratory Distress</span>
            <span className="text-stone-600">Open-mouth breathing in cats, blue-tinged gums, choking sounds, or rapid belly-pumping breathing.</span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-red-200/80 space-y-1">
            <span className="font-bold text-red-900 block">Inability to Urinate (Urinary Blockage)</span>
            <span className="text-stone-600">Straining repeatedly in the litter box without producing urine. This is a fatal medical emergency for male cats within 24-48 hours.</span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-red-200/80 space-y-1">
            <span className="font-bold text-red-900 block">Acute Heat Exhaustion</span>
            <span className="text-stone-600">Excessive panting, thick ropey saliva, dark red or purple gums, glassy eyes, disorientation, and unresponsiveness.</span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-red-200/80 space-y-1">
            <span className="font-bold text-red-900 block">Ingestion of Toxic Substances</span>
            <span className="text-stone-600">Rat poison, human painkillers (Panadol/Brufen), chocolate, onion/garlic extracts, or lilies (lethal to cats).</span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-red-200/80 space-y-1">
            <span className="font-bold text-red-900 block">Continuous Vomiting or Severe Blood in Stool</span>
            <span className="text-stone-600">Frequent repeated vomiting, inability to keep water down, or foul-smelling hemorrhagic diarrhea (suspicion of Parvovirus).</span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-red-200/80 space-y-1">
            <span className="font-bold text-red-900 block">Neurological Symptoms &amp; Seizures</span>
            <span className="text-stone-600">Sudden collapse, repetitive tremors, loss of balance, head tilt, or involuntary muscle convulsions.</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-red-200/60">
          <span className="text-xs text-red-900 font-medium">
            Emergency Line for Urgent Guidance:
          </span>
          <a
            href={`tel:${CLINIC_DATA.mainPhone.number}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-800 hover:bg-red-900 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Clinic Immediately: {CLINIC_DATA.mainPhone.formatted}</span>
          </a>
        </div>
      </section>

      {/* Species-Specific Care Segment */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
            Species Specifics
          </div>
          <h2 className="text-2xl font-bold text-[#1B4332] mt-1">
            Practical Daily Care by Animal Companion
          </h2>
        </div>

        {/* Filter buttons (Interactive segmented control, adhering to design constitution) */}
        <div className="inline-flex p-1 bg-stone-100 rounded-xl border border-stone-200 gap-1 text-xs font-medium">
          <button
            onClick={() => setSelectedPet('dogs')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedPet === 'dogs'
                ? 'bg-white text-[#1B4332] font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Dogs &amp; Puppies
          </button>
          <button
            onClick={() => setSelectedPet('cats')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedPet === 'cats'
                ? 'bg-white text-[#1B4332] font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Cats &amp; Kittens
          </button>
          <button
            onClick={() => setSelectedPet('birds')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedPet === 'birds'
                ? 'bg-white text-[#1B4332] font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Birds &amp; Caged Pets
          </button>
        </div>

        {/* Content for Dogs */}
        {selectedPet === 'dogs' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 animate-in fade-in duration-150">
            <h3 className="text-lg font-bold text-[#1B4332]">
              Canine Wellness &amp; Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Nutrition &amp; Feeding</span>
                <p className="leading-relaxed">
                  Feed high-grade formulated dog food suited for their growth stage (puppy, adult, or senior). Avoid bones that can splinter (such as cooked chicken bones) and table scraps high in salt, spices, or oils.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Exercise &amp; Socialization</span>
                <p className="leading-relaxed">
                  Daily walks stimulate cardiovascular fitness and mental stability. Keep dogs safely leashed when walking near busy multan road traffic or unfamiliar stray animals.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Vaccination Timelines</span>
                <p className="leading-relaxed">
                  Puppies require 3 rounds of primary core vaccinations starting at 6-8 weeks of age, followed by annual boosters and rabies protection as mandated by public veterinary standards.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Parasite Schedule</span>
                <p className="leading-relaxed">
                  Routine deworming every 3 months for adults, and continuous ectoparasite prevention during hot and damp seasons.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content for Cats */}
        {selectedPet === 'cats' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 animate-in fade-in duration-150">
            <h3 className="text-lg font-bold text-[#1B4332]">
              Feline Care &amp; Indoor Well-being
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Obligate Carnivore Diet</span>
                <p className="leading-relaxed">
                  Cats strictly require meat-derived taurine and animal protein. Never feed dog food to cats. Wet canned food helps maintain hydration and supports urinary tract health.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Litter Box Protocol</span>
                <p className="leading-relaxed">
                  Scoop litter boxes daily and provide one box per cat plus one extra. Changes in litter box habits (urinating outside the box) often indicate urinary pain rather than behavioral defiance.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Hairball Management</span>
                <p className="leading-relaxed">
                  Regular combing and brushing removes loose fur and prevents painful intestinal hairball blockages, especially in Persian and Semi-Longhair cats.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Preventive Immunization</span>
                <p className="leading-relaxed">
                  Feline triple vaccination protects against Panleukopenia (feline distemper), Rhinotracheitis, and Calicivirus. Both indoor and outdoor cats require protection.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Content for Birds */}
        {selectedPet === 'birds' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 animate-in fade-in duration-150">
            <h3 className="text-lg font-bold text-[#1B4332]">
              Avian &amp; Small Pet Care
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-700">
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Enclosure Placement</span>
                <p className="leading-relaxed">
                  Keep bird cages away from direct air conditioner drafts, kitchen cooking fumes (PTFE non-stick cookware fumes are toxic to birds), and direct burning afternoon sunlight.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Varied Nutrition</span>
                <p className="leading-relaxed">
                  Do not feed an exclusively seed-only diet; supplement with fresh bird-safe leafy greens, sprouted seeds, and clean cuttlebone for essential calcium.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Hygiene &amp; Cage Lining</span>
                <p className="leading-relaxed">
                  Clean cage drop trays daily. Stale droppings and damp seed husks harbor fungal spores (Aspergillosis) that irritate sensitive avian air sacs.
                </p>
              </div>
              <div className="space-y-2">
                <span className="font-bold text-stone-900 block">Avian Illness Awareness</span>
                <p className="leading-relaxed">
                  Birds mask illness as a natural survival instinct. Fluffed feathers, tail bobbing, sitting on the cage floor, or closing eyes in daytime are signs of advanced illness.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Safety Alert: No Human Medications */}
      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Strict Safety Rule:</strong> Never administer human pain medications (such as Panadol, Calpol, Paracetamol, Disprin, or Brufen) to pets. Even a single dose of paracetamol is rapidly fatal to cats and causes acute liver necrosis and methemoglobinemia in dogs. Always consult the veterinary clinic.
        </div>
      </div>

    </div>
  );
};
