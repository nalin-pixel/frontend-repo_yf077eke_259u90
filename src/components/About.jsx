import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'FastAPI',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'AWS',
    'Docker',
    'CI/CD'
  ];

  return (
    <section id="about" className="relative w-full py-20">
      {/* Subtle square grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
          <User size={14} /> About
        </div>
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
              Crafting modern web products end‑to‑end
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              I build reliable, maintainable software with a focus on developer experience and customer value. I enjoy
              translating product ideas into elegant interfaces, designing APIs, and orchestrating data flows that scale.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-neutral-700">Core skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
