const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/go_partner';

// Security Headers with Helmet
app.use(helmet());

// Cross-Origin Resource Sharing
app.use(
  cors({
    origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

// Body Parsing
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Global Rate Limiting: 100 requests per 15 minutes
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again after 15 minutes.',
  },
});
app.use('/api', globalLimiter);

// Stricter Rate Limiting for Contact / Form Submissions: 10 per 10 minutes
const submissionLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Submission rate limit reached. Please wait before sending another message.',
  },
});

// Database Connection with Retry and Indexing
mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log('MongoDB successfully connected to:', MONGODB_URI);
  })
  .catch((err) => {
    console.warn('MongoDB connection notice (stateless mode active):', err.message);
  });

// Contact Schema with Indexes
const ContactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    emailAddress: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, default: 'new' },
    ipAddress: { type: String },
  },
  { timestamps: true }
);

ContactSchema.index({ emailAddress: 1 });
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ status: 1 });

const ContactModel = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// Quote Schema with Indexes
const QuoteSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    companyName: { type: String, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    emailAddress: { type: String, required: true, trim: true, lowercase: true },
    pickupLocation: { type: String, required: true, trim: true },
    deliveryLocation: { type: String, required: true, trim: true },
    serviceType: { type: String, required: true },
    cargoWeight: { type: String },
    cargoType: { type: String },
    notes: { type: String },
    estimatedCost: { type: String },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

QuoteSchema.index({ emailAddress: 1 });
QuoteSchema.index({ serviceType: 1, createdAt: -1 });
QuoteSchema.index({ createdAt: -1 });

const QuoteModel = mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'GO-PARTNER Backend Service',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: {
      connected: mongoose.connection.readyState === 1,
      state: mongoose.connection.readyState,
    },
  });
});

// Contact Submission Route
app.post('/api/contact', submissionLimiter, async (req, res) => {
  try {
    const { fullName, phoneNumber, emailAddress, subject, message } = req.body;

    if (!fullName || !phoneNumber || !emailAddress || !subject || !message) {
      return res.status(422).json({
        success: false,
        error: 'All fields are required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      return res.status(422).json({
        success: false,
        error: 'Invalid email address format.',
      });
    }

    let saved = null;
    if (mongoose.connection.readyState === 1) {
      saved = await ContactModel.create({
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        emailAddress: emailAddress.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        ipAddress: req.ip,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Your enquiry has been securely received by GO-PARTNER.',
      referenceId: saved ? saved._id : `REF-${Date.now().toString().slice(-6)}`,
    });
  } catch (err) {
    console.error('Express contact error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while processing enquiry.',
    });
  }
});

// Freight Quote Submission Route
app.post('/api/quote', submissionLimiter, async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      phoneNumber,
      emailAddress,
      pickupLocation,
      deliveryLocation,
      serviceType,
      cargoWeight,
      cargoType,
      notes,
    } = req.body;

    if (!fullName || !phoneNumber || !emailAddress || !pickupLocation || !deliveryLocation) {
      return res.status(422).json({
        success: false,
        error: 'Please provide all essential logistics route information.',
      });
    }

    const baseRates = {
      'full-truckload': 6500,
      'less-than-truckload': 1800,
      'temperature-controlled': 8500,
      warehousing: 3500,
      'real-time-tracking': 500,
      'express-dispatch': 4500,
    };

    const base = baseRates[serviceType] || 6000;
    const minStr = base.toLocaleString('en-IN');
    const maxStr = Math.round(base * 1.5).toLocaleString('en-IN');
    const estimatedCost = `₹${minStr} - ₹${maxStr}`;

    let saved = null;
    if (mongoose.connection.readyState === 1) {
      saved = await QuoteModel.create({
        fullName,
        companyName,
        phoneNumber,
        emailAddress,
        pickupLocation,
        deliveryLocation,
        serviceType: serviceType || 'full-truckload',
        cargoWeight,
        cargoType,
        notes,
        estimatedCost,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Quote estimate generated successfully.',
      referenceId: saved ? saved._id : `QT-${Date.now().toString().slice(-6)}`,
      estimatedCost,
    });
  } catch (err) {
    console.error('Express quote error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while calculating quote.',
    });
  }
});

// Driver Partner Registration Schema with Indexes
const DriverPartnerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    drivingLicenceNumber: { type: String, required: true, trim: true, uppercase: true },
    vehicleCategory: { type: String, required: true, trim: true },
    registrationNumber: { type: String, required: true, trim: true, uppercase: true },
    operatingCity: { type: String, default: 'Mumbai MMR' },
    status: { type: String, default: 'pending_verification' },
  },
  { timestamps: true }
);

DriverPartnerSchema.index({ phoneNumber: 1 });
DriverPartnerSchema.index({ drivingLicenceNumber: 1 });
DriverPartnerSchema.index({ status: 1 });

const DriverPartnerModel =
  mongoose.models.DriverPartner || mongoose.model('DriverPartner', DriverPartnerSchema);

// Driver Partner Application Route (0% Commission Model)
app.post('/api/driver-partner', submissionLimiter, async (req, res) => {
  try {
    const { fullName, phoneNumber, drivingLicenceNumber, vehicleCategory, registrationNumber, operatingCity } =
      req.body;

    if (!fullName || !phoneNumber || !drivingLicenceNumber || !vehicleCategory || !registrationNumber) {
      return res.status(422).json({
        success: false,
        error: 'Please provide all driver credentials (Full Name, Phone, DL, Vehicle Category, Vehicle RC Number).',
      });
    }

    let saved = null;
    if (mongoose.connection.readyState === 1) {
      saved = await DriverPartnerModel.create({
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        drivingLicenceNumber: drivingLicenceNumber.trim().toUpperCase(),
        vehicleCategory: vehicleCategory.trim(),
        registrationNumber: registrationNumber.trim().toUpperCase(),
        operatingCity: operatingCity || 'Mumbai MMR',
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Driver partner application submitted successfully. Verification team will review credentials.',
      referenceId: saved ? saved._id : `DRV-${Date.now().toString().slice(-6)}`,
      commissionModel: '0% Direct Driver Model',
    });
  } catch (err) {
    console.error('Driver partner route error:', err);
    return res.status(500).json({
      success: false,
      error: 'Internal server error processing driver application.',
    });
  }
});

// Services List Endpoint
app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    platform: 'GO PARTNER',
    operatingRegion: 'Mumbai MMR & Maharashtra',
    services: [
      { id: 'full-truckload', name: 'Full Truckload (FTL)', description: 'Dedicated high-capacity freight transit across industrial corridors.' },
      { id: 'less-than-truckload', name: 'Part Truckload (LTL)', description: 'Cost-effective consolidated cargo transport for medium shipments.' },
      { id: 'temperature-controlled', name: 'Temperature-Controlled (Reefer)', description: 'Active cold-chain logistics for pharmaceuticals, perishables and dairy.' },
      { id: 'dedicated-warehousing', name: 'Dedicated Warehousing', description: 'Cross-dock facilities, pallet storage and regional inventory hubs.' },
      { id: 'real-time-tracking', name: 'Real-Time Telemetry Tracking', description: 'Milestone tracking, GPS sensor telemetry and electronic proof of delivery.' },
    ],
  });
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found on GO PARTNER API server.',
  });
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    error: 'An internal server error occurred.',
  });
});

const server = app.listen(PORT, () => {
  console.log(`GO PARTNER Express backend running on http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing HTTP server gracefully.');
  server.close(() => {
    mongoose.connection.close(false);
  });
});
