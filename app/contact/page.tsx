'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState('');

  const validateFrontend = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full Name must be at least 2 characters';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (formData.phoneNumber.replace(/[^0-9]/g, '').length < 7) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email Address is required';
    } else if (!emailRegex.test(formData.emailAddress.trim())) {
      errors.emailAddress = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      errors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      errors.message = 'Message must be at least 5 characters long';
    } else if (formData.message.length > 1000) {
      errors.message = 'Message cannot exceed 1000 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');

    if (!validateFrontend()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry.');
      }

      setSubmitSuccess({
        referenceId: data.referenceId,
        message: data.message,
      });

      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        subject: '',
        message: '',
      });
      setFormErrors({});
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO BANNER (Matching go_partner_ui_contact_us.jpg) */}
      <section className="bg-brand-navy text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header Copy */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
                Let&apos;s Move Your Business Forward
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
                Contact Us
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Have a question, a project in mind, or need logistics support? Our team is here to help.
                Get in touch and we will respond as soon as possible.
              </p>
            </div>

            {/* Right Container Ship & Truck Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-card bg-slate-900 group">
                <div className="relative w-full h-[180px] sm:h-[220px]">
                  <Image
                    src="/images/contact-indian-handshake.jpg"
                    alt="Indian Business Retailer and GO-PARTNER Delivery Driver Partnership"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION (Dual Column matching reference) */}
      <section className="py-14 lg:py-20 bg-brand-light-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Get in Touch (lg: 5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy font-heading mb-1">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Multiple ways to reach us. We are always ready to support your logistics needs.
                </p>
              </div>

              {/* 4 Contact Channels Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Support */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-md bg-blue-50 text-brand-blue flex items-center justify-center mb-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy">Phone Support</h3>
                    <a
                      href="tel:+919820011223"
                      className="text-xs font-semibold text-brand-orange hover:underline block mt-1"
                    >
                      +91 98200 11223
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">Mon - Sat, 8:00 AM - 8:00 PM | 24/7 Dispatch</p>
                </div>

                {/* Email Support */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-md bg-orange-50 text-brand-orange flex items-center justify-center mb-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy">Email Us</h3>
                    <a
                      href="mailto:support@gopartner.in"
                      className="text-xs font-semibold text-brand-navy hover:text-brand-orange block mt-1"
                    >
                      support@gopartner.in
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">We typically respond within 24 hours.</p>
                </div>

                {/* Headquarters Address */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-md bg-slate-100 text-brand-navy flex items-center justify-center mb-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy">Regional HQ</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-snug">
                      Mumbai MMR Logistics Hub
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2">Mumbai, Maharashtra, India</p>
                </div>

                {/* WhatsApp Quick Chat */}
                <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy">WhatsApp Quick Chat</h3>
                    <p className="text-xs text-slate-500 mt-1">Get instant assistance on WhatsApp.</p>
                  </div>
                  <div className="mt-3">
                    <a
                      href="https://wa.me/919820011223?text=Hello%20GO%20PARTNER%20Logistics%20Team"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-md transition-colors w-full justify-center"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Location Map Section */}
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">Our Location</h3>
                    <p className="text-xs text-slate-500">
                      Strategically located across Mumbai MMR and Maharashtra transport corridors.
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Mumbai+Maharashtra+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-blue hover:text-brand-orange inline-flex items-center gap-1"
                  >
                    <span>View Larger Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Map Display */}
                <div className="relative w-full h-56 rounded-md overflow-hidden border border-slate-200 bg-slate-100">
                  <iframe
                    title="GO PARTNER Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Send a Business Enquiry Form (lg: 7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg p-8 sm:p-10 border border-slate-200 shadow-card">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-brand-navy font-heading">
                    Send a Business Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Tell us how we can help. Fill out the form and our logistics team will get back to you promptly.
                  </p>
                </div>

                {submitSuccess ? (
                  <div className="py-10 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Message Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mb-6">{submitSuccess.message}</p>
                    <div className="bg-slate-50 border border-slate-200 rounded-md p-4 w-full max-w-sm mb-6 text-left">
                      <div className="flex justify-between items-center text-xs text-slate-500">
                        <span>Enquiry Reference ID:</span>
                        <span className="font-mono font-bold text-brand-navy">
                          {submitSuccess.referenceId}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(null)}
                      className="px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {serverError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-xs text-red-700">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 ${
                          formErrors.fullName
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:ring-brand-blue'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block text-xs font-semibold text-slate-700 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          required
                          placeholder="+91 98200 11223"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, phoneNumber: e.target.value })
                          }
                          className={`w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 ${
                            formErrors.phoneNumber
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-slate-300 focus:ring-brand-blue'
                          }`}
                        />
                        {formErrors.phoneNumber && (
                          <p className="text-[11px] text-red-600 mt-1">
                            {formErrors.phoneNumber}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="emailAddress"
                          className="block text-xs font-semibold text-slate-700 mb-1"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          required
                          placeholder="you@company.com"
                          value={formData.emailAddress}
                          onChange={(e) =>
                            setFormData({ ...formData, emailAddress: e.target.value })
                          }
                          className={`w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 ${
                            formErrors.emailAddress
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-slate-300 focus:ring-brand-blue'
                          }`}
                        />
                        {formErrors.emailAddress && (
                          <p className="text-[11px] text-red-600 mt-1">
                            {formErrors.emailAddress}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject Selector */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 bg-white ${
                          formErrors.subject
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:ring-brand-blue'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Full Truckload (FTL) Freight">
                          Full Truckload (FTL) Freight
                        </option>
                        <option value="Less-Than-Truckload (LTL)">
                          Less-Than-Truckload (LTL)
                        </option>
                        <option value="Temperature-Controlled Reefer">
                          Temperature-Controlled Reefer
                        </option>
                        <option value="Dedicated Warehousing">Dedicated Warehousing</option>
                        <option value="Carrier & Fleet Partnership">
                          Carrier & Fleet Partnership
                        </option>
                        <option value="General Logistics Enquiry">General Logistics Enquiry</option>
                      </select>
                      {formErrors.subject && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold text-slate-700"
                        >
                          Message *
                        </label>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {formData.message.length}/1000
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        maxLength={1000}
                        placeholder="How can our logistics team support your freight operations?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm border rounded-md focus:outline-none focus:ring-2 resize-none ${
                          formErrors.message
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:ring-brand-blue'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="text-[11px] text-red-600 mt-1">{formErrors.message}</p>
                      )}
                    </div>

                    {/* Submit Button (Strictly rectangular rounded-md, no pill shape) */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition-all disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
