import React from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20">
      {/* Subtle square grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">Let’s build something great</h2>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
          I’m available for freelance projects, consulting, and full‑time roles. Reach out with your idea and timeline.
        </p>
        <div className="mt-7">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <Mail size={18} /> Email me
          </a>
        </div>
      </div>

      <footer className="relative mx-auto max-w-6xl px-6 mt-14 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </section>
  );
}
