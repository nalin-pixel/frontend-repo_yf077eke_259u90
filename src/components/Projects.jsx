import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Realtime Chat Platform',
    description:
      'Secure messaging with websockets, presence indicators, and media uploads. Built with React, FastAPI, and MongoDB.',
    stack: ['React', 'FastAPI', 'MongoDB', 'WebSockets'],
    demo: '#',
    code: '#',
  },
  {
    title: 'E‑commerce Dashboard',
    description:
      'Admin dashboard with analytics, product management, and role-based access. Server-side search and CSV exports.',
    stack: ['Vite', 'Node.js', 'PostgreSQL', 'Tailwind'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Content Micro‑CMS',
    description:
      'Markdown editing, image optimization, and static site generation pipeline for blazing fast blogs and docs.',
    stack: ['React', 'TypeScript', 'AWS S3', 'CI/CD'],
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20">
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

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
          <Code size={14} /> Selected Projects
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  <ExternalLink size={14} /> Live demo
                </a>
                <a
                  href={p.code}
                  className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  <Github size={14} /> Source
                </a>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-100 opacity-0 blur-xl transition group-hover:opacity-60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
