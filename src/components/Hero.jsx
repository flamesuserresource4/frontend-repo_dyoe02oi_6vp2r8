import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#0b0f12] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IWEIbUehLbfUBd3s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient/overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Copy */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center text-white">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur-sm">
          AyoobAI — Leading with Intelligence. Defined by Precision.
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Bespoke, full‑code AI systems
          <span className="block text-white/80">that elevate human brilliance</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">
          We build elegant, production‑grade AI that delivers measurable ROI. Visionary thinking. Authoritative execution. Effortless outcomes.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#identity" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-[#0b0f12] shadow/50 shadow-black/20 transition hover:opacity-90">
            Explore the Brand
          </a>
          <a href="#messaging" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
            Messaging Guide
          </a>
        </div>
      </div>
    </section>
  );
}
