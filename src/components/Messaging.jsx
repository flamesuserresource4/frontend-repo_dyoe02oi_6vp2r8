import React from 'react';

function Tier({ title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="prose prose-invert mt-3 max-w-none text-white/90">
        {children}
      </div>
    </div>
  );
}

export default function Messaging() {
  return (
    <section id="messaging" className="relative w-full bg-[#0e1317] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Voice, Tone & Messaging</h2>
          <p className="mt-3 text-white/80">
            Visionary. Authoritative. Elegant. Avoid jargon, hype, or arrogance. Keep it simple and credible.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Tier title="Full Story">
            <p>
              AyoobAI delivers bespoke, full‑code AI systems that transform how enterprises operate. We work selectively with leaders who value precision and real outcomes — not experiments. Our solutions ship fast, integrate deeply, and deliver measurable ROI.
            </p>
          </Tier>

          <Tier title="Snapshot">
            <p>
              Precision-built AI for serious teams. Elegant systems, clean execution, and results you can measure.
            </p>
          </Tier>

          <Tier title="Micro Bio">
            <p>
              AyoobAI: Leading with intelligence. Defined by precision.
            </p>
          </Tier>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-emerald-300/10 via-sky-300/10 to-white/5 p-6 text-white/90">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60">Founded</div>
              <div className="text-lg font-medium">2024</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60">Reputation</div>
              <div className="text-lg font-medium">Rapid success with measurable ROI</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/60">Future Vision</div>
              <div className="text-lg font-medium">The “Birkin of AI Solutions”</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
