import React from 'react';

const colors = [
  { name: 'Soft Green', hex: '#f0f5ef' },
  { name: 'Slight Green', hex: '#d3eadb' },
  { name: 'Silver Grey', hex: '#d3d9d9' },
  { name: 'Bronzed', hex: '#565448' },
  { name: 'Slate', hex: '#565f6c' },
  { name: 'Navy', hex: '#16232b' },
];

function Swatch({ name, hex }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <div className="h-20 w-full" style={{ backgroundColor: hex }} />
      <div className="bg-black/40 p-3 text-sm text-white">
        <div className="font-medium">{name}</div>
        <div className="text-white/80">{hex}</div>
      </div>
    </div>
  );
}

export default function VisualIdentity() {
  return (
    <section className="relative w-full bg-[#0b0f12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Visual Identity</h2>
            <p className="mt-3 text-white/80">
              A refined palette, typographic authority, and minimalism that communicates clarity and confidence.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {colors.map((c) => (
                <Swatch key={c.hex} name={c.name} hex={c.hex} />
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Typography</h3>
              <p className="mt-2 text-sm text-white/80">
                Primary: STIXGeneral (serif, authority and refinement). Supporting: Inter (sans-serif, clarity and digital readability).
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Primary — STIXGeneral</div>
                  <div className="font-serif text-3xl">Elegance meets authority</div>
                  <div className="font-serif text-white/70">Serif weight for headlines and statements</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Supporting — Inter</div>
                  <div className="font-sans text-xl">Clarity for product and UI</div>
                  <div className="font-sans text-white/70">Readable, modern body text for digital surfaces</div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Photography</h3>
              <p className="mt-2 text-sm text-white/80">
                Natural, candid, and authentic. Neutral tones, soft light, and professionalism. Avoid gimmicks and heavy filters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
