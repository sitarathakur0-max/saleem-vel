import { ClinicInfo } from '../types.ts';

export const CLINIC_DATA: ClinicInfo = {
  name: 'Saleem Veterinary Clinic & Pet Shop',
  shortName: 'Saleem Veterinary Clinic',
  address: 'Coca Cola Stop, 8 Km Multan Road, Sabzazar Housing Scheme, Lahore, Pakistan',
  streetOnly: 'Coca Cola Stop, 8 Km Multan Road',
  area: 'Sabzazar Housing Scheme, Block H',
  city: 'Lahore',
  country: 'Pakistan',
  mainPhone: {
    number: '03244467556',
    formatted: '0324 4467556',
    label: 'Main Contact',
    isMain: true,
  },
  phones: [
    {
      number: '03244467556',
      formatted: '0324 4467556',
      label: 'Main Contact',
      isMain: true,
    },
    {
      number: '03008469926',
      formatted: '0300 8469926',
      label: 'Additional Contact',
    },
    {
      number: '03454743353',
      formatted: '0345 4743353',
      label: 'Additional Contact',
    },
  ],
  email: 'syedfaheemahmad@gmail.com',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Coca+Cola+Stop%2C+8+Km+Multan+Road%2C+Sabzazar+Block+H%2C+Sabzazar+Housing+Scheme+Phase+1+%26+2%2C+Lahore%2C+Pakistan',
};

export const ENQUIRY_OPTIONS = [
  'General Veterinary Enquiry',
  'Clinic Consultation & Checkup',
  'Vaccination & Preventive Care',
  'Pet Shop Product Availability',
  'Location & Directions Guidance',
  'Other Enquiry',
];
