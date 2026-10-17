import React from 'react';
import { PageId } from '../types.ts';
import { CLINIC_DATA } from '../constants/clinicData.ts';
import { ShoppingBag, Phone, PackageCheck, ArrowRight } from 'lucide-react';
import shopImg from '../assets/images/pet_shop_supplies_1792235320400.jpg';

interface PetShopPageProps {
  onNavigate: (page: PageId) => void;
}

export const PetShopPage: React.FC<PetShopPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
          Pet Supplies &amp; Nutrition
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight">
          Pet Shop &amp; Daily Essentials
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          Providing high-quality nutrition, hygienic litter, feeding bowls, and pet accessories directly alongside the veterinary clinic in Sabzazar, Lahore.
        </p>
      </div>

      {/* Featured Intro Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-7 space-y-5">
          <h2 className="text-2xl font-bold text-[#1B4332]">
            Carefully Selected Pet Supplies for Everyday Needs
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Finding genuine, high-quality pet supplies in Lahore should be straightforward. Located right at Coca Cola Stop on Multan Road, our pet shop section offers pet owners the convenience of purchasing veterinarian-recommended food and daily maintenance items during their regular clinic visits.
          </p>

          <div className="p-4 bg-stone-100/90 rounded-xl border border-stone-200/80 text-xs text-stone-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-stone-900">
              <PackageCheck className="w-4 h-4 text-[#2D6A4F]" />
              <span>In-Store Selection &amp; Availability</span>
            </div>
            <p className="leading-relaxed">
              Our pet shop operates as a convenient walk-in retail counter for clinic visitors. Because product varieties and dietary lines sell quickly, we invite pet owners to call our clinic desk before visiting if you are looking for a specific food formula, flavor, or bag size.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${CLINIC_DATA.mainPhone.number}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Shop Desk: {CLINIC_DATA.mainPhone.formatted}</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-[#1B4332] cursor-pointer"
            >
              <span>Submit Product Enquiry Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[4/3]">
            <img
              src={shopImg}
              alt="Pet shop accessories and pet supplies display"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 text-xs text-stone-500 text-center">
            Pet supplies counter at Saleem Veterinary Clinic
          </div>
        </div>

      </div>

      {/* Product Categories Overview */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-[#2D6A4F] uppercase tracking-wider">
            Available Supplies
          </div>
          <h2 className="text-2xl font-bold text-[#1B4332] mt-1">
            Supplies Available In-Store
          </h2>
          <p className="text-stone-600 text-sm max-w-2xl mt-1">
            Essential categories stocked at the shop. Feel free to telephone ahead to check current in-store options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <h3 className="font-bold text-base text-[#1B4332]">
              Pet Nutrition &amp; Feeds
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Dry kibble and wet canned options for kittens, adult cats, puppies, and adult dogs. Growth formulas and maintenance blends.
            </p>
            <div className="text-[11px] text-[#2D6A4F] font-medium pt-2 border-t border-stone-100">
              Nutritious daily meals &amp; treats
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <h3 className="font-bold text-base text-[#1B4332]">
              Litter &amp; Hygiene Supplies
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Clumping cat litters, unscented and gently fragranced varieties, litter scoops, odor control sprays, and clean training pads.
            </p>
            <div className="text-[11px] text-[#2D6A4F] font-medium pt-2 border-t border-stone-100">
              Clean home hygiene essentials
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <h3 className="font-bold text-base text-[#1B4332]">
              Grooming &amp; Coat Care
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Deshedding brushes, slicker combs, nail clippers, pet toothbrushes, and gentle, non-irritating animal shampoos.
            </p>
            <div className="text-[11px] text-[#2D6A4F] font-medium pt-2 border-t border-stone-100">
              Skin and coat health tools
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
            <h3 className="font-bold text-base text-[#1B4332]">
              Accessories &amp; Feeders
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Stainless steel and ceramic food/water bowls, sturdy dog walking leashes, adjustable harnesses, and cat collars.
            </p>
            <div className="text-[11px] text-[#2D6A4F] font-medium pt-2 border-t border-stone-100">
              Durable everyday walking gear
            </div>
          </div>

        </div>
      </section>

      {/* Pre-Visit Information */}
      <div className="bg-[#FAF9F5] border border-stone-200 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332]">
            Looking for a Specific Brand or Specialty Food?
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            If your veterinarian has recommended a specific dietary formula, or if your cat prefers a particular flavor, feel free to call our desk before visiting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block">1. Note Your Preferred Item</span>
            <span className="text-stone-600">Have the brand name, animal age, and preferred bag size in mind.</span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block">2. Call Direct</span>
            <span className="text-stone-600">Call {CLINIC_DATA.mainPhone.formatted} or alternate lines (0300 8469926 / 0345 4743353).</span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
            <span className="font-bold text-stone-900 block">3. In-Store Collection</span>
            <span className="text-stone-600">Our desk team can set the item aside for you to collect at the clinic counter.</span>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={`tel:${CLINIC_DATA.mainPhone.number}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-300" />
            <span>Call Shop Desk Now</span>
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            <span>Send Stock Availability Request</span>
          </button>
        </div>
      </div>

    </div>
  );
};
