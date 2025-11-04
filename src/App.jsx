import React from 'react';
import Hero from './components/Hero';
import Identity from './components/Identity';
import VisualIdentity from './components/VisualIdentity';
import Messaging from './components/Messaging';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Identity />
      <VisualIdentity />
      <Messaging />

      <footer className="border-t border-white/10 bg-[#0b0f12] py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="text-sm">© {new Date().getFullYear()} AyoobAI — All rights reserved.</div>
          <div className="text-xs">
            Built with a calm, elegant system of precision and clarity.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
