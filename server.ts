import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactEnquiry {
  id: string;
  name: string;
  contact: string; // phone or email
  enquiryType: string;
  petType?: string;
  message: string;
  createdAt: string;
  status: 'new' | 'reviewed';
}

const enquiries: ContactEnquiry[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Health and info check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'operational',
      clinic: 'Saleem Veterinary Clinic & Pet Shop',
      address: 'Coca Cola Stop, 8 Km Multan Road, Sabzazar, Lahore, Pakistan',
      mainPhone: '0324 4467556',
      listedPhones: ['0324 4467556', '0300 8469926', '0345 4743353'],
      email: 'syedfaheemahmad@gmail.com',
      backendFormActive: true,
    });
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, contact, enquiryType, petType, message } = req.body || {};

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      res.status(400).json({
        success: false,
        error: 'Please provide your full name (at least 2 characters).',
      });
      return;
    }

    if (!contact || typeof contact !== 'string' || contact.trim().length < 5) {
      res.status(400).json({
        success: false,
        error: 'Please provide a valid phone number or email address so we can contact you back.',
      });
      return;
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      res.status(400).json({
        success: false,
        error: 'Please include a message describing your question or pet care enquiry (at least 5 characters).',
      });
      return;
    }

    const validTypes = [
      'General Veterinary Enquiry',
      'Clinic Consultation & Checkup',
      'Vaccination & Preventive Care',
      'Pet Shop Product Availability',
      'Location & Directions Guidance',
      'Other Enquiry',
    ];

    const sanitizedEnquiryType = validTypes.includes(enquiryType)
      ? enquiryType
      : 'General Veterinary Enquiry';

    const newEnquiry: ContactEnquiry = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      contact: contact.trim(),
      enquiryType: sanitizedEnquiryType,
      petType: petType && typeof petType === 'string' ? petType.trim() : undefined,
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    enquiries.unshift(newEnquiry);
    console.log(`[Contact Form Received] ID: ${newEnquiry.id} from ${newEnquiry.name} (${newEnquiry.contact}) - ${newEnquiry.enquiryType}`);

    res.status(200).json({
      success: true,
      message: 'Your enquiry has been successfully received by Saleem Veterinary Clinic & Pet Shop. Our team will review your message and respond via your provided contact details.',
      enquiryId: newEnquiry.id,
      submittedAt: newEnquiry.createdAt,
    });
  });

  // Admin/Owner verification endpoint to inspect received queries
  app.get('/api/contact/messages', (_req: Request, res: Response) => {
    res.json({
      total: enquiries.length,
      enquiries: enquiries.slice(0, 50),
    });
  });

  // Connect Vite in development mode or serve static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Saleem Veterinary Clinic & Pet Shop server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
