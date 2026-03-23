import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight,
  Monitor,
  ShieldCheck,
  Zap,
  Cpu,
  Plus,
  Menu
} from 'lucide-react';

const PRODUCTS = [
  { 
    id: '01', 
    name: 'Pathfinder', 
    category: 'Cognitive Engine', 
    desc: 'Autonomous orchestration for high-density neural development.',
    logo: (className, sw = 0.5) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} className={className}>
        {/* Outer bezel */}
        <circle cx="12" cy="12" r="10" strokeOpacity="0.12" />
        {/* Inner ring */}
        <circle cx="12" cy="12" r="5.5" strokeOpacity="0.06" />
        {/* Cardinal tick marks */}
        <line x1="12" y1="2" x2="12" y2="4.2" strokeOpacity="0.35" strokeLinecap="round" />
        <line x1="12" y1="19.8" x2="12" y2="22" strokeOpacity="0.35" strokeLinecap="round" />
        <line x1="2" y1="12" x2="4.2" y2="12" strokeOpacity="0.35" strokeLinecap="round" />
        <line x1="19.8" y1="12" x2="22" y2="12" strokeOpacity="0.35" strokeLinecap="round" />
        {/* Diagonal tick marks — shorter, fainter */}
        <line x1="5.2" y1="5.2" x2="6.4" y2="6.4" strokeOpacity="0.1" strokeLinecap="round" />
        <line x1="17.6" y1="5.2" x2="18.8" y2="6.4" strokeOpacity="0.1" strokeLinecap="round" />
        <line x1="5.2" y1="18.8" x2="6.4" y2="17.6" strokeOpacity="0.1" strokeLinecap="round" />
        <line x1="17.6" y1="18.8" x2="18.8" y2="17.6" strokeOpacity="0.1" strokeLinecap="round" />
        {/* Compass needle — North (filled, prominent) */}
        <path d="M12 6.5 L13.3 12 L12 11 L10.7 12 Z" fill="currentColor" fillOpacity="0.85" stroke="none" />
        {/* Compass needle — South (ghost outline) */}
        <path d="M12 17.5 L13.3 12 L12 13 L10.7 12 Z" strokeOpacity="0.15" strokeWidth={sw * 0.8} strokeLinejoin="round" />
        {/* Center pivot */}
        <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  { 
    id: '02', 
    name: 'Matrix', 
    category: 'Spatial Interface', 
    desc: 'Semantic data mapping within a low-latency holographic environment.',
    logo: (className, sw = 0.5) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} className={className}>
        {/* Outer border */}
        <rect x="3" y="3" width="18" height="18" strokeOpacity="0.15" />
        {/* Grid lines — vertical */}
        <line x1="9" y1="3" x2="9" y2="21" strokeOpacity="0.18" />
        <line x1="15" y1="3" x2="15" y2="21" strokeOpacity="0.18" />
        {/* Grid lines — horizontal */}
        <line x1="3" y1="9" x2="21" y2="9" strokeOpacity="0.18" />
        <line x1="3" y1="15" x2="21" y2="15" strokeOpacity="0.18" />
        {/* Center cell highlight */}
        <rect x="9" y="9" width="6" height="6" strokeWidth={sw * 2} strokeOpacity="0.9" />
        {/* Intersection dots at center cell corners */}
        <circle cx="9"  cy="9"  r="0.55" fill="currentColor" fillOpacity="0.45" stroke="none" />
        <circle cx="15" cy="9"  r="0.55" fill="currentColor" fillOpacity="0.45" stroke="none" />
        <circle cx="9"  cy="15" r="0.55" fill="currentColor" fillOpacity="0.45" stroke="none" />
        <circle cx="15" cy="15" r="0.55" fill="currentColor" fillOpacity="0.45" stroke="none" />
        {/* Center point */}
        <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  { 
    id: '03', 
    name: 'Lifeline', 
    category: 'Biometric Flow', 
    desc: 'Predictive physiological modeling via real-time telemetry.',
    logo: (className, sw = 0.5) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} className={className}>
        <circle cx="12" cy="12" r="10" strokeOpacity="0.1" />
        <path d="M4 12h3l2-4 3 8 2-4h6" strokeWidth={sw * 2} strokeLinecap="round" />
      </svg>
    )
  },
  { 
    id: '04', 
    name: 'Delta', 
    category: 'Quant Protocol', 
    desc: 'Institutional liquidity routing for volatile digital asset classes.',
    logo: (className, sw = 0.5) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} className={className}>
        <path d="M12 3L2 21h20L12 3z" strokeWidth={sw * 2} />
        <path d="M12 8l5 9H7l5-9z" strokeOpacity="0.2" />
      </svg>
    )
  },
];

const SubtleField = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.v = Math.random() * 0.12 + 0.04;
        this.opacity = Math.random() * 0.15;
      }
      update() {
        this.y -= this.v;
        if (this.y < 0) this.reset();
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x, this.y, 1, 1);
      }
    }

    const init = () => {
      particles = Array.from({ length: 50 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize(); animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-30" />;
};

export default function App() {
  const [hoveredId, setHoveredId] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black antialiased">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.012] pointer-events-none z-[100]" />
      <SubtleField />

      {/* Minimal Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ${scrolled ? 'py-5 backdrop-blur-2xl bg-black/40' : 'py-10'}`}>
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-16">
            <span className="font-light text-xl tracking-tighter lowercase opacity-80">architect.</span>
            <div className="hidden md:flex gap-10 text-[9px] font-medium tracking-[0.3em] text-white/20 uppercase">
              <a href="#registry" className="text-white hover:text-white transition-all duration-700">Inventory</a>
              <a href="#about" className="hover:text-white transition-all duration-700">Philosophy</a>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <span className="text-[8px] font-mono text-white/50 tracking-[0.4em] hidden sm:block uppercase">SYS_LOG: ACTIVE</span>
            <button className="text-white/50 hover:text-white transition-colors duration-700">
              <Menu className="w-5 h-5 stroke-[1px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center px-10">
        <div className="max-w-[1400px] w-full grid grid-cols-12 gap-8 items-end relative z-10">
          <div className="col-span-12 lg:col-span-9 animate-in fade-in duration-1000">
            <h1 className="font-bold leading-[0.9] tracking-tighter mb-12 uppercase" style={{ fontSize: '150px', backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              ENGINEERING<br/>
              <span style={{ color: 'rgba(255,255,255,0.2)', WebkitTextFillColor: 'rgba(255,255,255,0.2)' }}>THE FUTURE.</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:pb-12 border-l border-white/10 pl-8 opacity-0 animate-in fade-in duration-1000 delay-500 fill-mode-forwards">
            <p className="text-[15px] text-white/40 leading-snug mb-10 font-light tracking-tight">
              A centralized repository of high-performance tools and scalable infrastructure.
            </p>
            <button className="h-14 px-8 bg-white text-black font-bold text-[9px] tracking-[0.3em] uppercase transition-all duration-700 active:scale-95 hover:bg-neutral-200 rounded-[30px]">
              EXPLORE STACK
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-10 text-[8px] font-mono tracking-[0.4em] text-white/15 flex items-center gap-4 uppercase">
          <div className="w-8 h-[1px] bg-white/15" />
          SCROLL
        </div>
      </section>

      {/* Registry — List Style with Integrated Marks */}
      <section id="registry" className="relative py-32 z-10">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="flex items-baseline justify-between mb-16 border-b border-white/5 pb-8">
             <h2 className="text-[9px] font-medium text-white/50 tracking-[0.5em] uppercase">Inventory_Manifest</h2>
             <span className="text-[9px] font-mono text-white/10 tracking-widest uppercase">04 Active Modules</span>
          </div>

          <div className="flex flex-col">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-16 border-b border-white/[0.04] transition-all duration-1000 cursor-pointer hover:px-8"
              >
                {/* Fluid Background Reveal */}
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 transition-opacity duration-1000 pointer-events-none group-hover:opacity-100 backdrop-blur-[0.5px]" />
                
                {/* Ghost Logo Animation */}
                <div className={`absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 pointer-events-none z-0 ${hoveredId === p.id ? 'opacity-[0.03] scale-[2.5] rotate-12' : 'opacity-0 scale-100 rotate-0'}`}>
                  {p.logo("w-96 h-96 text-white", 0.15)}
                </div>

                <div className="flex items-center gap-10 lg:gap-16 relative z-10">
                  <span className="text-[9px] font-mono text-white/25 group-hover:text-white/50 transition-colors duration-700 w-6">/ {p.id}</span>
                  
                  {/* The Integrated Mark */}
                  <div className="w-14 h-14 flex items-center justify-center transition-all duration-700 border border-white/10 rounded-sm bg-white/[0.04] group-hover:bg-white/8 group-hover:border-white/20">
                    {p.logo(`w-7 h-7 transition-all duration-700 ${hoveredId === p.id ? 'text-white' : 'text-white/40'}`)}
                  </div>

                  <div className="flex flex-col">
                    <h3 className={`text-3xl md:text-5xl font-light tracking-tighter transition-all duration-700 ${hoveredId === p.id ? 'text-white translate-x-1' : 'text-white/70 translate-x-0'}`}>
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[8px] font-mono tracking-[0.3em] text-white/35 uppercase group-hover:text-white/60 transition-colors">
                        {p.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-12 mt-8 lg:mt-0 relative z-10">
                  <p className={`max-w-[320px] text-[13px] leading-relaxed font-light transition-all duration-1000 ${hoveredId === p.id ? 'text-white/70 translate-x-0' : 'text-white/30 -translate-x-2'}`}>
                    {p.desc}
                  </p>
                  <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 ${hoveredId === p.id ? 'border-white/30 bg-white text-black scale-110' : 'text-white/20'}`}>
                    <Plus className={`w-3 h-3 transition-transform duration-700 ${hoveredId === p.id ? 'rotate-90' : 'rotate-0'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className="py-52 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-[8px] font-mono tracking-[0.6em] text-white/20 uppercase mb-8 block">Architecture</span>
                <h2 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight mb-10">
                  Built on the <br/>physics of code.
                </h2>
                <p className="text-lg text-white/25 leading-relaxed font-light max-w-lg">
                  We design for longevity, ensuring every primitive is immutable and every interaction is intentional.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
                {[
                  { label: "Stability", val: "∞" },
                  { label: "Encryption", val: "Quantum" },
                  { label: "Latency", val: "<0.1ms" },
                  { label: "Uptime", val: "99.999" }
                ].map((stat, i) => (
                  <div key={i} className="bg-[#050505] p-10 hover:bg-white/[0.02] transition-colors group">
                    <span className="text-[8px] font-mono tracking-widest text-white/15 uppercase mb-3 block">{stat.label}</span>
                    <span className="text-3xl font-light tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity">{stat.val}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex flex-col gap-1 items-center md:items-start">
             <span className="text-sm font-medium tracking-tighter lowercase opacity-30">architect.</span>
             <span className="text-[8px] font-mono text-white/5 uppercase tracking-[0.4em]">Integrated Precision</span>
           </div>
           
           <div className="flex gap-12 text-[9px] font-medium text-white/20 tracking-[0.4em] uppercase">
             <a href="#" className="hover:text-white transition-colors">Safety</a>
             <a href="#" className="hover:text-white transition-colors">Manifesto</a>
             <a href="#" className="hover:text-white transition-colors">Status</a>
           </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/mono.css');
        @import url('https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/sans.css');

        body {
          font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #050505;
          color: white;
          letter-spacing: -0.02em;
        }

        .font-mono { font-family: 'Geist Mono', monospace; }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fade-in 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        ::-webkit-scrollbar { width: 2px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); }
      `}} />
    </div>
  );
}
