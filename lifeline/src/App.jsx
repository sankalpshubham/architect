import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  MapPin, 
  Microscope, 
  FlaskConical, 
  Plus, 
  ArrowRight, 
  ChevronRight, 
  Search,
  Activity,
  Zap,
  Shield,
  Layers,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-white stroke-[1.5]" />
            <span className="font-light text-lg tracking-tighter lowercase opacity-90">lifeline.</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">
            <a href="#info" className="hover:text-white transition-colors duration-500">Information</a>
            <a href="#drugs" className="hover:text-white transition-colors duration-500">Drugs</a>
            <a href="#places" className="hover:text-white transition-colors duration-500">Logistics</a>
            <a href="#research" className="hover:text-white transition-colors duration-500">Research</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase hover:text-white transition-colors duration-500">
            Internal Access
          </button>
          <button className="h-10 px-6 bg-white text-black font-bold text-[9px] tracking-[0.2em] uppercase rounded-full hover:bg-neutral-200 transition-colors duration-500 active:scale-95">
            Connect Engine
          </button>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ id, label, title, desc }) => (
  <div id={id} className="mb-20">
    <div className="flex items-center gap-3 mb-6 opacity-30">
      <div className="w-8 h-px bg-white" />
      <span className="text-[8px] font-mono tracking-[0.6em] uppercase">{label}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-8 leading-tight">
      {title}
    </h2>
    <p className="text-lg text-white/30 font-light max-w-xl leading-relaxed">
      {desc}
    </p>
  </div>
);

// --- Content Data ---

const DRUGS = [
  { id: '01', name: 'Neuro-Stabilizer A1', category: 'Cognitive', status: 'Approved' },
  { id: '02', name: 'Cellular-Revive Pro', category: 'Regenerative', status: 'Stage III' },
  { id: '03', name: 'Vascular-Boost+', category: 'Cardio', status: 'Clinical' },
  { id: '04', name: 'Immuno-Shield X', category: 'Biodefense', status: 'Phase I' },
];

const PLACES = [
  { name: 'Zurich Bio-Hub', location: 'Switzerland', type: 'Production' },
  { name: 'Singapore Research Arch', location: 'Singapore', type: 'Laboratory' },
  { name: 'Palo Alto Center', location: 'California, USA', type: 'Distribution' },
  { name: 'Tokyo Quantum Pharma', location: 'Japan', type: 'R&D' },
];

const RESEARCH_AREAS = [
  { title: 'Neural Plasticity Modeling', leads: 'Dr. Sarah Chen', progress: 78 },
  { title: 'Bio-Digital Interface', leads: 'Architect Team Alpha', progress: 42 },
  { title: 'Nanoscale Delivery Systems', leads: 'Stanford Lab B-1', progress: 91 },
  { title: 'Predictive Genomics', leads: 'Helsinki Institute', progress: 65 },
];

// --- Main App ---

export default function App() {
  const [hoveredDrug, setHoveredDrug] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black antialiased relative">
      <div className="noise-overlay" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-center gap-3 mb-10 opacity-40">
                  <div className="w-10 h-[1px] bg-white" />
                  <span className="text-[10px] font-mono tracking-[0.5em] uppercase">Status: Terminal_Active</span>
                </div>
                <h1 className="text-[70px] md:text-[110px] lg:text-[130px] font-bold leading-[0.85] tracking-tighter mb-12 uppercase italic">
                  INTELLIGENT <br/>
                  <span className="text-white/20 not-italic">BIOMETRICS.</span>
                </h1>
                <div className="flex flex-wrap gap-4">
                  <button className="h-16 px-10 bg-white text-black font-bold text-[10px] tracking-[0.3em] uppercase rounded-full hover:bg-neutral-200 transition-all duration-700 active:scale-95">
                    Start Protocol
                  </button>
                  <button className="h-16 px-10 border border-white/10 text-white font-bold text-[10px] tracking-[0.3em] uppercase rounded-full hover:bg-white/5 transition-all duration-700 active:scale-95 flex items-center gap-4">
                    View Registry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="col-span-12 lg:col-span-4 lg:pt-20 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Activity className="w-24 h-24 text-white/10 stroke-[1]" />
                </div>
                <div className="absolute bottom-0 right-0 p-8 border border-white/10 rounded-3xl bg-black/50 backdrop-blur-xl">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-light tracking-tighter">98.2</span>
                    <span className="text-[10px] font-mono text-white/30 uppercase">% SYNC</span>
                  </div>
                  <div className="w-32 h-1 bg-white/5 overflow-hidden rounded-full">
                    <motion.div 
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: '98%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 flex items-center gap-4 opacity-20">
          <div className="text-[8px] font-mono tracking-[0.4em] uppercase">ARCHITECT_OS / v0.4.0</div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 pb-40">
        
        {/* Information Section */}
        <section className="py-32">
          <SectionHeader 
            id="info"
            label="01_Information"
            title="A unified medical engine for the modern age."
            desc="We aggregate data across the biome to provide a friction-less interface for medical professionals and researchers."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Verified Data", text: "End-to-end encrypted medical repositories with multi-layer verification protocols." },
              { icon: Zap, title: "Instant Access", text: "Low-latency retrieval of pharmacological data and research findings globally." },
              { icon: Globe, title: "Global Sync", text: "Real-time synchronization across 42 research hubs and 1500+ distribution centers." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 border border-white/5 bg-white/[0.02] rounded-3xl hover:bg-white/[0.04] transition-all duration-700"
              >
                <feature.icon className="w-8 h-8 mb-8 opacity-40 stroke-[1.5]" />
                <h3 className="text-xl font-light tracking-tight mb-4">{feature.title}</h3>
                <p className="text-[14px] text-white/25 leading-relaxed font-light">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Drugs Section */}
        <section className="py-32 border-t border-white/5">
          <SectionHeader 
            id="drugs"
            label="02_Registry"
            title="Pharmacological Inventory."
            desc="Detailed specifications of the current drug stack, from clinical trials to full deployment."
          />

          <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {DRUGS.map((drug) => (
              <div 
                key={drug.id}
                onMouseEnter={() => setHoveredDrug(drug.id)}
                onMouseLeave={() => setHoveredDrug(null)}
                className="group relative bg-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between hover:bg-white/[0.02] transition-colors duration-700 cursor-pointer"
              >
                <div className="flex items-center gap-10">
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40">/ {drug.id}</span>
                  <div className="flex flex-col">
                    <h4 className="text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-700">{drug.name}</h4>
                    <span className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mt-2">{drug.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-12 mt-6 md:mt-0">
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em] mb-1">Status</span>
                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${drug.status === 'Approved' ? 'border-white/20 text-white' : 'border-white/5 text-white/40'}`}>
                      {drug.status}
                    </span>
                  </div>
                  <div className={`w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700`}>
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Places Section */}
        <section className="py-32 border-t border-white/5">
          <SectionHeader 
            id="places"
            label="03_Logistics"
            title="Global Nodes."
            desc="Locate verified distribution points, research centers, and laboratories near you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLACES.map((place, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:border-white/10 transition-all duration-700">
                <MapPin className="w-5 h-5 mb-6 opacity-30 stroke-[1.5]" />
                <h4 className="text-lg font-light tracking-tight mb-2">{place.name}</h4>
                <p className="text-[12px] text-white/20 mb-6">{place.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-mono tracking-widest text-white/30 uppercase">{place.type}</span>
                  <ChevronRight className="w-3 h-3 opacity-20" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-1 bg-white/5 rounded-full flex items-center max-w-2xl mx-auto backdrop-blur-md">
            <div className="pl-6 text-white/20"><Search className="w-4 h-4" /></div>
            <input 
              type="text" 
              placeholder="Search for nodes or drugs in your region..." 
              className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-[12px] font-light placeholder:text-white/10"
            />
            <button className="h-10 px-8 bg-white/10 text-white text-[9px] font-bold tracking-widest uppercase rounded-full hover:bg-white/20 transition-all">Find Node</button>
          </div>
        </section>

        {/* Research Section */}
        <section className="py-32 border-t border-white/5">
          <SectionHeader 
            id="research"
            label="04_R&D"
            title="The Edge of Discovery."
            desc="Exploring the intersection of digital systems and biological limits."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RESEARCH_AREAS.map((area, i) => (
              <div key={i} className="p-10 border border-white/5 bg-white/[0.01] rounded-3xl group hover:bg-white/[0.03] transition-all duration-700">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <FlaskConical className="w-5 h-5 text-white/40" />
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">{area.progress}% Complete</span>
                </div>
                <h4 className="text-2xl font-light tracking-tight mb-4">{area.title}</h4>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="text-[11px] text-white/40 font-light italic">Lead: {area.leads}</span>
                </div>
                <div className="w-full h-px bg-white/5 mb-8" />
                <button className="text-[9px] font-bold tracking-[0.3em] uppercase flex items-center gap-3 hover:gap-5 transition-all duration-500">
                  Access Data <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-3">
             <div className="flex items-center gap-2 opacity-50">
               <Activity className="w-4 h-4" />
               <span className="text-sm font-light tracking-tighter lowercase">lifeline.</span>
             </div>
             <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.5em]">Global Biometric Standard</span>
          </div>
          
          <div className="flex gap-12 text-[9px] font-medium text-white/20 tracking-[0.4em] uppercase">
            <a href="#" className="hover:text-white transition-colors">Ethics</a>
            <a href="#" className="hover:text-white transition-colors">Protocols</a>
            <a href="#" className="hover:text-white transition-colors">Connect</a>
          </div>

          <div className="text-[8px] font-mono text-white/5 uppercase tracking-widest">
            © 2026 Architect Industries
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-white/[0.02] tracking-tighter uppercase select-none pointer-events-none">
          Lifeline
        </div>
      </footer>
    </div>
  );
}
