# GO-PARTNER | Official Logistics Web Platform

A complete, premium, modern, responsive, and production-ready logistics website for **GO-PARTNER**, engineered with Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, and MongoDB.

---

## 🚚 Website Architecture & Pages

The application delivers six fully functional pages with persistent URLs, active state navigation, and smooth page transitions:

1. **Home (`/`)**:
   - Hero section featuring authentic GO-PARTNER logistics fleet photography.
   - Specific freight messaging: *"Reliable Goods Transportation, From Pickup to Delivery"*.
   - Value propositions: Verified Partner Network, Pan-Industrial Coverage, On-Time Dispatch Priority.
   - "How It Works" 4-step process cards with SVG icons and connector flows.
   - Core freight service cards with route/weight specifications.
   - Driver & Fleet Partner onboarding spotlight.
   - Pre-footer freight quote call-to-action banner.

2. **About Us (`/about`)**:
   - Logistics warehouse docks and modern fleet imagery.
   - Company story and background.
   - Dedicated "Our Mission" and "Our Vision" cards.
   - "Our Approach" three-pillar methodology (Connect, Optimize, Move Forward).
   - Core guiding values (Integrity, Partner Respect, Punctuality, Modern Technology).

3. **Services (`/services`)**:
   - Dedicated sections for Full Truckload (FTL), Less-Than-Truckload (LTL/PTL), Temperature-Controlled Reefer, Dedicated Warehousing, Real-Time Tracking & Telematics, and Express/Hot Shot Dispatch.
   - Technical specifications (miles, weight limits, compliance standards).
   - Interactive Freight Rate Estimator modal with instant rate calculation.

4. **Contact Us (`/contact`)**:
   - Regional contact channels: Helpline & 24/7 Dispatch (+91 86527 68171), Support Email (contact@gopartnerlogistics.in), Regional Transport Headquarters (Mumbai MMR, Maharashtra, India).
   - One-click WhatsApp Direct Chat integration (+91 86527 68171).
   - Embedded interactive location map covering Mumbai MMR.
   - Business enquiry form with real-time frontend validation, server-side validation, rate limiting, and MongoDB persistence.

5. **Privacy Policy (`/privacy-policy` & `/privacy`)**:
   - Numbered legal sections covering Information Collection (DL, RC, Fitness, PUC, Aadhaar, GSTIN), Precise GPS Geolocation tracking, Telecom OTP pipeline via Jio DLT & MSG91 (DLT Header: GOPNTR), Razorpay payment processing, Data Security (TLS 1.3, PostgreSQL 16, Redis 7, UFW firewall), and IT Act 2000 Grievance Officer details.
   - Quick table of contents navigation.
   - Downloadable policy document action.

6. **Terms & Conditions (`/terms-and-conditions` & `/terms`)**:
   - Complete commercial logistics agreement sections covering Digital Intermediary Nature under IT Act 2000, Commercial Driver Partner Obligations, 0% Commission Direct Driver Model, Strict Prohibited Goods Policy with high-visibility alerts, 100% Toll Pass-Through (Bandra-Worli Sea Link, Atal Setu / MTHL, Mumbai-Pune Expressway), Limitation of Liability, and Mumbai Court Jurisdiction.
   - Downloadable terms document action.

7. **Cancellation & Refund Policy (`/refund` & `/cancellation`)**:
   - 3-tier customer cancellation structure: Before Driver Acceptance (₹0 Free), Within 5 Minutes (₹0 Free), Driver Dispatched / Arrived at Pickup (₹50 Fuel Compensation Fee credited 100% to driver).
   - Driver cancellation rules with automated account strikes and instant zero-impact customer re-routing.
   - Detailed refund settlement timelines: Instant GO Wallet refunds vs 2-4 business days for Razorpay UPI/NetBanking.
   - Downloadable refund policy document action.

---

## 🎨 Branding & Strict Design Rules Adherence

- **Official Brand Logo**: Extracted and integrated directly from the official corporate branding, featuring the blue square badge with orange truck emblem, "GO-PARTNER" bold typography, and Hindi tagline *"हर सफ़र का पार्टनर"*.
- **No Pill-Shaped Buttons**: Clean, professional, slightly rounded rectangular buttons (`rounded-md` / `rounded-lg`).
- **No Fake Statistics / Counters**: No invented counter widgets or synthetic delivery metrics.
- **No Em Dashes**: Zero em dashes (`—`) across all pages.
- **No Emojis**: 100% consistent SVG and Lucide icons.
- **Realistic Photography**: Authentic logistics truck, warehouse dock, container port, and driver imagery.
- **No "Made with AI" Badges**: Clean corporate codebase.

---

## 🛠️ Tech Stack & Backend Requirements

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion.
- **Backend**:
  - Next.js Server-Side Route Handlers (`/api/contact`, `/api/quote`, `/api/health`).
  - Standalone Express.js backend service (`server/index.js`) with Helmet security headers, CORS, and Express Rate Limit.
- **Database**:
  - MongoDB via Mongoose.
  - Indexed collections: `ContactEnquiry` (indexed on `emailAddress`, `createdAt`, `status`) and `QuoteRequest` (indexed on `emailAddress`, `serviceType`, `createdAt`).
  - Graceful fallback for offline development.
  - Compatible with MongoDB Compass (`mongodb://127.0.0.1:27017/go_partner`).
- **Rate Limiting**: Sliding-window rate limiter preventing bot spam on API endpoints.
- **Caching**: HTTP caching headers configured for static assets and images in `next.config.mjs`.
- **SEO & Accessibility**: Semantic HTML5, metadata titles, meta descriptions, OpenGraph, JSON-LD schema, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.x or 20.x
- MongoDB (optional for local persistence; application runs gracefully with or without active mongod)

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Verify `.env` configuration (see `.env.example`):
```env
PORT=5000
NEXT_PUBLIC_APP_URL=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017/go_partner
NODE_ENV=development
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

### 6. Run Express Backend (Optional Standalone Service)
```bash
npm run server
```
Runs Express on `http://localhost:5000`.

---

## 📋 Pre-Launch Verification

- [x] All 7 core & legal pages operational (`/`, `/about`, `/services`, `/contact`, `/privacy-policy`, `/terms-and-conditions`, `/refund`)
- [x] Clean URL rewrites configured for `/privacy`, `/terms`, `/cancellation`
- [x] Active navigation state indicator & responsive mobile drawer
- [x] Official GO-PARTNER logo, badge, and favicon
- [x] Functional Freight Quote calculation and enquiry form with INR (₹) rates
- [x] Server-side validation, rate limiting, and MongoDB indexing active
- [x] Standalone Express.js backend running on port 5000 with driver partner and services endpoints
- [x] Responsive layout verified for mobile, tablet, and desktop
- [x] XML Sitemap (`/sitemap.xml`) and Robots (`/robots.txt`) working
- [x] Clean corporate copy, zero em dashes, zero pill buttons, zero fake counters
