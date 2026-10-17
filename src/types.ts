export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'pet-care'
  | 'pet-shop'
  | 'faqs'
  | 'contact';

export interface ClinicPhone {
  number: string;
  formatted: string;
  label: string;
  isMain?: boolean;
}

export interface ClinicInfo {
  name: string;
  shortName: string;
  address: string;
  streetOnly: string;
  area: string;
  city: string;
  country: string;
  phones: ClinicPhone[];
  mainPhone: ClinicPhone;
  email: string;
  mapsSearchUrl: string;
}

export interface ContactFormData {
  name: string;
  contact: string;
  enquiryType: string;
  petType?: string;
  message: string;
}

export interface StoredEnquiry extends ContactFormData {
  id: string;
  createdAt: string;
  status: 'new' | 'reviewed';
}
