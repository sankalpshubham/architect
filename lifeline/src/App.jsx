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
  Globe,
  Database,
  Cross,
  Stethoscope,
  ArrowUpRight,
  ClipboardList,
  Navigation,
  Beaker
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Activity className="w-6 h-6 text-black stroke-[2] group-hover:scale-110 transition-transform duration-500" />
            <span className="font-semibold text-xl tracking-tighter lowercase text-black">lifeline.</span>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] text-black/40 uppercase">
            <a href="#info" className="hover:text-black transition-colors duration-500">Information</a>
            <a href="#drugs" className="hover:text-black transition-colors duration-500">Registry</a>
            <a href="#places" className="hover:text-black transition-colors duration-500">Logistics</a>
            <a href="#research" className="hover:text-black transition-colors duration-500">Research</a>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-[11px] font-bold tracking-[0.2em] text-black/50 uppercase hover:text-black transition-colors duration-500">
            Internal Access
          </button>
          <button className="h-11 px-8 bg-black text-white font-bold text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-500 active:scale-95 shadow-lg shadow-black/15">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ id, label, title, desc }) => (
  <div id={id} className="mb-24">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-[2px] bg-black" />
      <span className="text-[11px] font-mono font-bold tracking-[0.45em] uppercase text-black/60">{label}</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-10 leading-[1.1] text-black">
      {title}
    </h2>
    <p className="text-xl text-black/60 font-light max-w-2xl leading-relaxed tracking-tight">
      {desc}
    </p>
  </div>
);

// --- Content Data ---

const DRUGS = [
  { id: '01', name: 'Neuro-Stabilizer A1', category: 'Cognitive', status: 'Approved', info: 'Advanced bilateral neurological stabilization for high-stress cognitive environments and clinical optimization.' },
  { id: '02', name: 'Cellular-Revive Pro', category: 'Regenerative', status: 'Stage III', info: 'Mitochondrial acceleration technology designed for rapid cellular restoration and tissue recovery post-trauma.' },
  { id: '03', name: 'Vascular-Boost+', category: 'Cardio', status: 'Clinical', info: 'Synthetic endothelial enhancement protocols optimized for low-friction cardiovascular performance and blood flow.' },
  { id: '04', name: 'Immuno-Shield X', category: 'Biodefense', status: 'Phase I', info: 'Adaptive T-cell reprogramming architecture providing enhanced immunity against novel biological and airborne pathogens.' },
];

const PLACES = [
  { name: 'Zurich Bio-Hub', location: 'Switzerland', type: 'Production', distance: '4km', status: 'Online' },
  { name: 'Singapore Research Arch', location: 'Singapore', type: 'Laboratory', distance: '2.5km', status: 'Active' },
  { name: 'Palo Alto Center', location: 'California, USA', type: 'Distribution', distance: '0.8km', status: 'Online' },
  { name: 'Tokyo Quantum Pharma', location: 'Japan', type: 'R&D', distance: '12km', status: 'Locked' },
];

const RESEARCH_AREAS = [
  { title: 'Neural Plasticity Modeling', leads: 'Dr. Sarah Chen', progress: 78, area: 'Neuroscience', priority: 'High' },
  { title: 'Bio-Digital Interface', leads: 'Architect Team Alpha', progress: 42, area: 'Cybernetics', priority: 'Medium' },
  { title: 'Nanoscale Delivery Systems', leads: 'Stanford Lab B-1', progress: 91, area: 'Nanotech', priority: 'Critical' },
  { title: 'Predictive Genomics', leads: 'Helsinki Institute', progress: 65, area: 'Genetics', priority: 'Standard' },
];

// --- Main App ---

export default function App() {
  const [hoveredDrug, setHoveredDrug] = useState(null);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#111111] font-sans selection:bg-black selection:text-white antialiased relative">
      <div className="noise-overlay opacity-[0.03]" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-48 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-black/[0.02] rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-16 items-start">
            <div className="col-span-12 lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-14">
                  <div className="w-12 h-[2px] bg-black" />
                  <span className="text-[12px] font-mono font-bold tracking-[0.5em] uppercase text-black">Unified Biometric Protocol</span>
                </div>
                
                <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-bold leading-[0.95] tracking-tight mb-20 text-black">
                  Clinical precision <br/>
                  <span className="text-black/40">for biological assets.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 max-w-5xl">
                  <div className="space-y-6">
                    <h3 className="text-[12px] font-mono font-bold tracking-[0.25em] uppercase text-black/30">Engine Mission</h3>
                    <p className="text-xl font-light leading-relaxed text-black/70 tracking-tight">
                      Lifeline centralizes fragmented medical infrastructure into a single, high-performance interface. We optimize for low-friction decision making in critical clinical environments.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h3 className="text-[12px] font-mono font-bold tracking-[0.25em] uppercase text-black/30">Registry Nodes</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-semibold tracking-tighter">1,402</span>
                        <ArrowUpRight className="w-5 h-5 text-black/20" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-[12px] font-mono font-bold tracking-[0.25em] uppercase text-black/30">Sync Latency</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-semibold tracking-tighter">0.02s</span>
                        <Zap className="w-5 h-5 text-black/20" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <button className="h-16 px-12 bg-black text-white font-bold text-[11px] tracking-[0.25em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-700 active:scale-95 shadow-2xl shadow-black/15">
                    Initialize Protocol
                  </button>
                  <button className="h-16 px-12 border-2 border-black/10 text-black font-bold text-[11px] tracking-[0.25em] uppercase rounded-full hover:bg-black hover:text-white transition-all duration-700 active:scale-95 flex items-center gap-5">
                    Access Registry <ArrowRight className="w-5 h-5 opacity-40" />
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="col-span-12 lg:col-span-3 lg:pt-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-10"
              >
                <div className="p-10 border border-black/10 bg-white rounded-[2.5rem] shadow-xl shadow-black/5 premium-card">
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-black/40 uppercase">Sys_Status</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Active</span>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: 'Neural Sync', val: '98.2%' },
                      { label: 'Bio-Telemetry', val: 'Secured' },
                      { label: 'Data Encryption', val: 'Quantum' }
                    ].map((stat, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-black/5 pb-3">
                        <span className="text-[12px] text-black/50 font-bold tracking-tight uppercase">{stat.label}</span>
                        <span className="text-[13px] font-bold tracking-tight text-black">{stat.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-10 bg-black text-white rounded-[2.5rem] shadow-2xl shadow-black/20 space-y-8">
                  <div className="flex justify-between items-center">
                    <Stethoscope className="w-8 h-8 text-white/40 stroke-[1.5]" />
                    <Activity className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-[14px] font-light leading-relaxed text-white/70 tracking-tight">
                    Proprietary monitoring of high-fidelity physiological variables across distributed clinical networks.
                  </p>
                  <div className="pt-4 flex items-center gap-5">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => <div key={i} className="w-9 h-9 rounded-full bg-white/10 border-2 border-black" />)}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase">+12 Leads</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 flex items-center gap-6 opacity-40">
          <div className="text-[10px] font-mono font-bold tracking-[0.45em] uppercase text-black">LIFELINE_CORE // v0.6.2</div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-6 pb-60">
        
        {/* Information Section */}
        <section className="py-40">
          <SectionHeader 
            id="info"
            label="01_Capabilities"
            title="Medical infrastructure for modern science."
            desc="We provide a seamless interface between digital architecture and biological imperatives, ensuring zero-latency data flow and institutional trust."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "Verified Protocols", text: "End-to-end encrypted medical repositories utilizing multi-layered institutional verification standards." },
              { icon: Database, title: "Unified Registry", text: "A single, authoritative source of truth for pharmacological specifications and biometric telemetry." },
              { icon: Globe, title: "Global Synchrony", text: "Proprietary real-time data sync across distributed clinical research nodes and local pharmaceutical hubs." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="p-12 premium-card group bg-white"
              >
                <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-all duration-700">
                  <feature.icon className="w-8 h-8 text-black/30 group-hover:text-white transition-colors duration-700 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-black">{feature.title}</h3>
                <p className="text-[15px] text-black/50 leading-relaxed font-light tracking-tight">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Drugs Section */}
        <section className="py-40 border-t border-black/10">
          <SectionHeader 
            id="drugs"
            label="02_Registry"
            title="Pharmacological Inventory."
            desc="Detailed specifications of the active engine drug stack, including chemical profiles and trial synchronization status."
          />

          <div className="grid grid-cols-1 gap-6">
            {DRUGS.map((drug) => (
              <motion.div 
                key={drug.id}
                onMouseEnter={() => setHoveredDrug(drug.id)}
                onMouseLeave={() => setHoveredDrug(null)}
                className="group relative bg-white border border-black/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between hover:border-black/30 transition-all duration-700 cursor-pointer overflow-hidden shadow-sm"
              >
                <div className="flex items-center gap-12 z-10 w-full md:w-auto">
                  <span className="text-[12px] font-mono font-bold text-black/20 group-hover:text-black transition-colors duration-700">/ {drug.id}</span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-3 transition-transform duration-700 text-black">{drug.name}</h4>
                    <p className="text-[15px] text-black/60 font-light max-w-xl leading-relaxed tracking-tight">{drug.info}</p>
                  </div>
                </div>
                <div className="flex items-center gap-16 mt-8 md:mt-0 z-10 w-full md:w-auto justify-between md:justify-end">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono font-bold text-black/30 uppercase tracking-[0.2em] mb-2">Protocol Status</span>
                    <span className={`text-[11px] font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full border-2 ${drug.status === 'Approved' ? 'border-emerald-500/20 text-emerald-700 bg-emerald-50/50' : 'border-black/5 text-black/50 bg-black/5'}`}>
                      {drug.status}
                    </span>
                  </div>
                  <div className={`w-14 h-14 rounded-full border-2 border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-lg`}>
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Places Section */}
        <section className="py-40 border-t border-black/10">
          <SectionHeader 
            id="places"
            label="03_Logistics"
            title="Global Nodes & Hubs."
            desc="Locate verified distribution points, research centers, and clinical laboratories within your regional sector."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PLACES.map((place, i) => (
              <div key={i} className="p-10 bg-white border border-black/10 rounded-[2.5rem] shadow-sm hover:border-black/40 transition-all duration-700 group flex flex-col justify-between min-h-[300px] premium-card">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
                      <MapPin className="w-6 h-6 text-black/30 group-hover:text-white transition-colors stroke-[1.5]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-bold uppercase tracking-widest ${place.status === 'Locked' ? 'text-red-500' : 'text-emerald-600'}`}>{place.status}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${place.status === 'Locked' ? 'bg-red-400' : 'bg-emerald-400'}`} />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight mb-3 text-black">{place.name}</h4>
                  <p className="text-[14px] text-black/50 font-light mb-6 leading-relaxed tracking-tight">{place.location}</p>
                </div>
                <div className="flex items-center justify-between border-t border-black/5 pt-6 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-black/30 uppercase mb-1">Sector</span>
                    <span className="text-[11px] font-bold tracking-tight text-black/70 uppercase">{place.type}</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-black/40 bg-black/5 px-3 py-1 rounded-md">{place.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section className="py-40 border-t border-black/10">
          <SectionHeader 
            id="research"
            label="04_R&D_Sync"
            title="Scientific Advancement."
            desc="Exploring the active frontiers of biometric modeling, digital-biological integration, and adaptive genomics."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {RESEARCH_AREAS.map((area, i) => (
              <div key={i} className="p-12 bg-white border border-black/10 rounded-[3rem] group hover:shadow-2xl hover:shadow-black/10 transition-all duration-1000 relative overflow-hidden premium-card">
                <div className="absolute top-0 right-0 p-10">
                   <div className="flex flex-col items-end gap-2">
                     <span className="text-[10px] font-mono font-bold text-black/30 uppercase tracking-widest">Priority</span>
                     <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md ${area.priority === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-black/5 text-black/60'}`}>{area.priority}</span>
                   </div>
                </div>
                
                <div className="flex justify-between items-start mb-14">
                  <div className="w-16 h-16 bg-black/5 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
                    <FlaskConical className="w-8 h-8 text-black/40 group-hover:text-white transition-colors duration-700 stroke-[1.5]" />
                  </div>
                </div>

                <h4 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-black">{area.title}</h4>
                
                <div className="space-y-8">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-mono font-bold text-black/30 uppercase tracking-widest">Lead Investigator</span>
                      <span className="text-lg font-light text-black/80">{area.leads}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[11px] font-mono font-bold text-black/30 uppercase tracking-widest">Efficiency</span>
                      <span className="text-2xl font-bold text-black">{area.progress}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.progress}%` }}
                      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

                <div className="mt-14 pt-10 border-t border-black/5 flex justify-between items-center">
                   <button className="text-[11px] font-bold tracking-[0.25em] uppercase flex items-center gap-4 hover:gap-6 transition-all duration-500 text-black group">
                    Analyze Protocol <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </button>
                  <ArrowUpRight className="w-6 h-6 text-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-32 border-t border-black/10 relative z-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-16 items-start mb-24">
          <div className="col-span-12 lg:col-span-5 space-y-10">
             <div className="flex items-center gap-3">
               <Activity className="w-8 h-8 text-black stroke-[2]" />
               <span className="text-2xl font-semibold tracking-tighter lowercase text-black">lifeline.</span>
             </div>
             <p className="text-lg text-black/50 font-light leading-relaxed max-w-md tracking-tight">
               The global standard for clinical biometric synchronization, pharmacological inventory architecture, and medical-digital infrastructure management.
             </p>
             <div className="flex gap-6">
               <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"><Globe className="w-5 h-5" /></div>
               <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"><Database className="w-5 h-5" /></div>
               <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"><Shield className="w-5 h-5" /></div>
             </div>
          </div>
          
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Protocols', links: ['Neural-Sync', 'Bio-Telemetry', 'Encryption', 'Adaptive-Flow'] },
              { label: 'Registry', links: ['Pharmacology', 'Biometrics', 'Inventory', 'Sector-Nodes'] },
              { label: 'Company', links: ['Ethics', 'Philosophy', 'Connect', 'Research'] },
              { label: 'System', links: ['Status', 'Safety', 'Changelog', 'Terminal'] }
            ].map((col, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-[12px] font-mono font-bold tracking-widest text-black uppercase opacity-30">{col.label}</h4>
                <ul className="space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="text-[14px] text-black/60 hover:text-black font-semibold transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-black/10">
          <div className="text-[11px] font-mono font-bold text-black/30 uppercase tracking-[0.45em]">Global Biometric Standard // ARCH_OS v0.7.0</div>
          <div className="text-[10px] font-mono text-black/20 uppercase tracking-widest font-bold">
            © 2026 Architect Industries. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
