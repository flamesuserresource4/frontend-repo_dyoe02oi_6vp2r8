import React from 'react';
import { Rocket, Target, Shield, Star } from 'lucide-react';

const Pillar = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-sm transition hover:bg-white/[0.08]">
    <div className="flex items-center gap-3">
      <div className="rounded-md bg-white/10 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/80">{desc}</p>
  </div>
);

export default function Identity() {
  return (
    <section id="identity" className="relative w-full bg-[#0e1317] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Core Brand Identity</h2>
          <p className="mt-3 text-white/80">
            Visionary, authoritative, and elegant. AyoobAI delivers precision-built AI systems with clarity and impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm uppercase tracking-wider text-white/60">Vision</h3>
            <p className="mt-2 text-lg font-medium">
              Redefine the future of work with bespoke, precision-built AI systems that elevate human brilliance.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm uppercase tracking-wider text-white/60">Mission</h3>
            <p className="mt-2 text-lg font-medium">
              Deliver seamless, full-code AI solutions that empower businesses to unlock their full potential.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-4">
          <Pillar icon={Rocket} title="Innovation" desc="We build ahead of the curve — thoughtfully, not recklessly." />
          <Pillar icon={Shield} title="Exclusivity" desc="We partner selectively with serious, large-scale clients." />
          <Pillar icon={Target} title="Precision" desc="Every line of code and design decision is deliberate." />
          <Pillar icon={Star} title="Empowerment" desc="AI that augments people — simple, calm, effective." />
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6">
          <p className="text-center text-base md:text-lg">
            <span className="text-white/70">Tagline: </span>
            <span className="font-semibold">Leading with Intelligence. Defined by Precision.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
