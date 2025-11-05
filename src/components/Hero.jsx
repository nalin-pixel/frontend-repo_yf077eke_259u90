import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* subtle gradient for text readability without blocking interactions */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <h1 className="pointer-events-none text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            Full‑Stack Web Developer
          </h1>
          <p className="pointer-events-none mt-4 text-neutral-600 md:text-lg max-w-2xl mx-auto">
            I design and build fast, accessible, and scalable web apps. From crisp user interfaces to robust APIs and databases.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              View Projects
            </a>
            <a
              href="mailto:hello@example.com"
              className="pointer-events-auto inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white/80 px-5 py-2.5 text-sm font-medium text-neutral-900 backdrop-blur hover:bg-white"
            >
              <Mail size={18} /> Contact
            </a>
          </div>
        </div>

        {/* Top navigation */}
        <div className="absolute top-0 left-0 right-0">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="pointer-events-none select-none text-sm font-medium tracking-wide text-neutral-800">
              YOUR NAME
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/70 p-2 text-neutral-700 backdrop-blur hover:bg-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/70 p-2 text-neutral-700 backdrop-blur hover:bg-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/70 p-2 text-neutral-700 backdrop-blur hover:bg-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
