'use client';

import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-md border border-white/20 hover:bg-white/20 transition-colors duration-200"
    >
      <ArrowLeft size={18} />
      Go Back
    </button>
  );
}
