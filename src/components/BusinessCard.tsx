"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function BusinessCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const maxTilt = 8; // degrees

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (x - 0.5) * (maxTilt * 2); // left/right
    const rotateX = -(y - 0.5) * (maxTilt * 2); // up/down
    setTilt({ x: Math.max(-maxTilt, Math.min(maxTilt, rotateX)), y: Math.max(-maxTilt, Math.min(maxTilt, rotateY)) });
  };

  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="w-full flex items-center justify-center px-4 py-12 md:py-24">
      {/* perspective container enables subtle 3D tilt */}
      <div className="group" style={{ perspective: '1000px' }}>
        <div
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          className="relative mx-auto max-w-4xl md:max-w-5xl rounded-2xl bg-white/95 px-14 py-14 md:px-16 md:py-16 shadow-soft ring-1 ring-brand-teal/15 transform-gpu transition-transform duration-300 ease-out [transform-style:preserve-3d] hover:shadow-xl"
        >
          {/* Header with brand and reserved logo space */}
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs md:text-sm font-medium tracking-wide text-brand-teal">Dr. Interested</p>
              <h1 className="mt-1 text-3xl md:text-4xl font-semibold text-brand-dark">
                Kishan Suhi
              </h1>
              <p className="mt-1 text-sm md:text-base text-slate-600">
                Deputy Executive Director | Vice President
              </p>
            </div>
            <div
              aria-label="Logo"
              className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl bg-brand-blue/10 border border-brand-teal/30 overflow-hidden"
            >
              <Image
                src="/DrInt-Logo.png"
                alt="Dr. Interested logo"
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 80px, 96px"
                priority
              />
            </div>
          </div>

          <hr className="my-4 border-brand-teal/20" />

          <div className="space-y-2">
            <a
              className="flex items-center gap-2 text-sm md:text-base text-brand-dark hover:text-brand-teal transition-colors"
              href="mailto:kishan@drinterested.org"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0 8 5 8-5H4zm16 12V9.25l-8 5-8-5V18h16z"/>
              </svg>
              <span>kishan@drinterested.org</span>
            </a>
            <Link
              className="flex items-center gap-2 text-sm md:text-base text-brand-dark hover:text-brand-teal transition-colors"
              href="https://drinterested.org"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c1.9 0 3.64.66 5.01 1.76H6.99A8 8 0 0 1 12 4zm-7.32 5h14.64a8.04 8.04 0 0 1 .5 2H4.18c.1-.69.28-1.36.5-2zm-.5 4h16.64a8.04 8.04 0 0 1-.5 2H4.18a8.04 8.04 0 0 1-.5-2zm1.81 4h12.02A8 8 0 0 1 12 20a8 8 0 0 1-5.01-3z"/>
              </svg>
              <span>drinterested.org</span>
            </Link>
          </div>

          <p className="mt-5 text-sm md:text-base text-slate-600">
            Inspiring and supporting students on their path to healthcare careers.
          </p>

          {/* Moved specialization text lower, without the label */}
          <p className="mt-6 text-sm md:text-base text-slate-700">
            <span className="font-medium">Events</span> |{' '}
            <span className="font-medium">Finance</span> |{' '}
            <span className="font-medium">Technology</span>
          </p>

          {/* Footer icons */}
          <div className="mt-6 pt-4 border-t border-slate-200/70 w-full flex items-center justify-evenly gap-6 md:gap-8">
            <Link
              href="https://www.linkedin.com/in/kishansuhirthan/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-slate-600 hover:text-brand-teal transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zm.02 6.5H2v11h3V10zm7 0h-3v11h3v-5.5c0-3.037 4-3.286 4 0V21h3v-6.5c0-6.264-7-6.034-7-2.967V10z"/>
              </svg>
            </Link>
            <Link
              href="https://kishansuhi.ca/"
              target="_blank"
              aria-label="Website"
              className="text-slate-600 hover:text-brand-teal transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 md:h-6 md:w-6">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c1.9 0 3.64.66 5.01 1.76H6.99A8 8 0 0 1 12 4zm-7.32 5h14.64a8.04 8.04 0 0 1 .5 2H4.18c.1-.69.28-1.36.5-2zm-.5 4h16.64a8.04 8.04 0 0 1-.5 2H4.18a8.04 8.04 0 0 1-.5-2zm1.81 4h12.02A8 8 0 0 1 12 20a8 8 0 0 1-5.01-3z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
