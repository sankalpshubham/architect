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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Activity className="w-5 h-5 text-black stroke-[1.25] group-hover:scale-110 transition-transform duration-500" />
            <span className="font-medium text-lg tracking-tighter lowercase text-black">lifeline.</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-medium tracking-[0.2em] text-black/35 uppercase">
            <a href="#info" className="hover:text-black transition-colors duration-500">Information</a>
            <a href="#drugs" className="hover:text-black transition-colors duration-500">Registry</a>
            <a href="#places" className="hover:text-black transition-colors duration-500">Logistics</a>
            <a href="#research" className="hover:text-black transition-colors duration-500">Research</a>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-[10px] font-medium tracking-[0.2em] text-black/40 uppercase hover:text-black transition-colors duration-500">
            Internal Access
          </button>
          <button className="h-10 px-8 bg-black text-white font-medium text-[9px] tracking-[0.25em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-500 active:scale-95 shadow-lg shadow-black/10">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ id, label, title, desc }) => (
  <div id={id} className="mb-24">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-[1px] bg-black/20" />
      <span className="text-[10px] font-mono font-medium tracking-[0.4em] uppercase text-black/40">{label}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-[1.1] text-black">
      {title}
    </h2>
    <p className="text-lg text-black/50 font-light max-w-2xl leading-relaxed tracking-tight">
      {desc}
    </p>
  </div>
);

// --- Content Data ---

const DRUGS = [
  { id: '01', name: 'Neuro-Stabilizer A1', category: 'Cognitive', status: 'Approved', type: 'green', info: 'Bilateral neurological stabilization for high-stress cognitive environments and clinical optimization.' },
  { id: '02', name: 'Cellular-Revive Pro', category: 'Regenerative', status: 'Stage III', type: 'blue', info: 'Mitochondrial acceleration designed for rapid cellular restoration and tissue recovery post-trauma.' },
  { id: '03', name: 'Vascular-Boost+', category: 'Cardio', status: 'Clinical', type: 'blue', info: 'Synthetic endothelial enhancement protocols optimized for low-friction cardiovascular performance.' },
  { id: '04', name: 'Immuno-Shield X', category: 'Biodefense', status: 'Critical', type: 'red', info: 'Adaptive T-cell reprogramming architecture providing enhanced immunity against novel biological pathogens.' },
];

const PLACES = [
  { name: 'Zurich Bio-Hub', location: 'Switzerland', type: 'Production', distance: '4km', status: 'Online', color: 'green' },
  { name: 'Singapore Research Arch', location: 'Singapore', type: 'Laboratory', distance: '2.5km', status: 'Active', color: 'green' },
  { name: 'Palo Alto Center', location: 'California, USA', type: 'Distribution', distance: '0.8km', status: 'Online', color: 'green' },
  { name: 'Tokyo Quantum Pharma', location: 'Japan', type: 'R&D', distance: '12km', status: 'Locked', color: 'red' },
];

const RESEARCH_AREAS = [
  { title: 'Neural Plasticity Modeling', leads: 'Dr. Sarah Chen', progress: 78, area: 'Neuroscience', priority: 'High', type: 'blue' },
  { title: 'Bio-Digital Interface', leads: 'Architect Team Alpha', progress: 42, area: 'Cybernetics', priority: 'Medium', type: 'blue' },
  { title: 'Nanoscale Delivery Systems', leads: 'Stanford Lab B-1', progress: 91, area: 'Nanotech', priority: 'Critical', type: 'red' },
  { title: 'Predictive Genomics', leads: 'Helsinki Institute', progress: 65, area: 'Genetics', priority: 'Standard', type: 'blue' },
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
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-black/[0.015] rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-16 items-start">
            <div className="col-span-12 lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-10 opacity-30">
                  <div className="w-10 h-[1px] bg-black" />
                  <span className="text-[10px] font-mono font-medium tracking-[0.5em] uppercase text-black">Unified Biometric Protocol</span>
                </div>
                
                <h1 className="text-[55px] md:text-[75px] lg:text-[90px] font-light leading-[1] tracking-tight mb-20 text-black">
                  Clinical precision <br/>
                  <span className="text-black/30">for biological assets.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 max-w-5xl">
                  <div className="space-y-6">
                    <h3 className="text-[10px] font-mono font-medium tracking-[0.25em] uppercase text-black/30">Engine Mission</h3>
                    <p className="text-lg font-light leading-relaxed text-black/60 tracking-tight">
                      Lifeline centralizes fragmented medical infrastructure into a single, high-performance interface. We optimize for low-friction decision making in critical clinical environments.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-12 border-l border-black/5 pl-12">
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-mono font-medium tracking-[0.25em] uppercase text-black/30">Registry Nodes</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-light tracking-tighter">1,402</span>
                        <ArrowUpRight className="w-4 h-4 text-black/10" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-[10px] font-mono font-medium tracking-[0.25em] uppercase text-black/30">Sync Latency</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-light tracking-tighter">0.02s</span>
                        <Zap className="w-4 h-4 text-black/10" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <button className="h-14 px-10 bg-black text-white font-medium text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-700 active:scale-95 shadow-xl shadow-black/10">
                    Initialize Protocol
                  </button>
                  <button className="h-14 px-10 border border-black/10 text-black font-medium text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-black hover:text-white transition-all duration-700 active:scale-95 flex items-center gap-5">
                    Access Registry <ArrowRight className="w-4 h-4 opacity-40" />
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
                <div className="p-8 border border-black/5 bg-white rounded-[2rem] shadow-sm premium-card">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono font-medium tracking-widest text-black/30 uppercase">Sys_Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 shadow-[0_0_8px_rgba(22,60,46,0.3)] animate-pulse" />
                      <span className="text-[9px] font-bold text-[#163c2e] uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {[
                      { label: 'Neural Sync', val: '98.2%', color: 'green' },
                      { label: 'Bio-Telemetry', val: 'Secured', color: 'green' },
                      { label: 'Encryption', val: 'Quantum', color: 'blue' }
                    ].map((stat, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-black/5 pb-3">
                        <span className="text-[11px] text-black/40 font-medium tracking-tight uppercase">{stat.label}</span>
                        <span className={`text-[12px] font-bold tracking-tight ${stat.color === 'green' ? 'text-[#163c2e]' : 'text-[#1c2b4e]'}`}>{stat.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-black/5 border border-black/5 rounded-[2rem] space-y-8">
                  <div className="flex justify-between items-center">
                    <Stethoscope className="w-6 h-6 text-black/20 stroke-[1.25]" />
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-bold text-[#1c2b4e] uppercase tracking-widest">Live Flow</span>
                      <Activity className="w-4 h-4 text-[#1c2b4e]/40" />
                    </div>
                  </div>
                  <p className="text-[13px] font-light leading-relaxed text-black/50 tracking-tight">
                    Proprietary monitoring of high-fidelity physiological variables across distributed networks.
                  </p>
                  <div className="pt-4 flex items-center gap-5">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-black/5 border border-white" />)}
                    </div>
                    <span className="text-[9px] font-mono font-medium tracking-widest text-black/25 uppercase">+12 Leads</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-6 flex items-center gap-6 opacity-25">
          <div className="text-[9px] font-mono font-medium tracking-[0.45em] uppercase text-black">LIFELINE_CORE // v0.7.2</div>
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
                whileHover={{ y: -8 }}
                className="p-10 premium-card group bg-white shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-700">
                  <feature.icon className="w-6 h-6 text-black/25 group-hover:text-white transition-colors duration-700 stroke-[1.25]" />
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-6 text-black">{feature.title}</h3>
                <p className="text-[14px] text-black/40 leading-relaxed font-light tracking-tight">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Drugs Section */}
        <section className="py-40 border-t border-black/5">
          <SectionHeader 
            id="drugs"
            label="02_Registry"
            title="Pharmacological Inventory."
            desc="Detailed specifications of the active engine drug stack, including chemical profiles and trial synchronization status."
          />

          <div className="grid grid-cols-1 gap-4">
            {DRUGS.map((drug) => (
              <motion.div 
                key={drug.id}
                onMouseEnter={() => setHoveredDrug(drug.id)}
                onMouseLeave={() => setHoveredDrug(null)}
                className="group relative bg-white border border-black/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between hover:border-black/20 transition-all duration-700 cursor-pointer overflow-hidden shadow-sm"
              >
                <div className="flex items-center gap-10 z-10 w-full md:w-auto">
                  <span className="text-[11px] font-mono font-medium text-black/15 group-hover:text-black/40 transition-colors duration-700">/ {drug.id}</span>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-700 text-black">{drug.name}</h4>
                    <p className="text-[14px] text-black/40 font-light max-w-xl tracking-tight">{drug.info}</p>
                  </div>
                </div>
                <div className="flex items-center gap-12 mt-8 md:mt-0 z-10 w-full md:w-auto justify-between md:justify-end">
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-mono font-medium text-black/25 uppercase tracking-[0.2em] mb-3">Protocol Status</span>
                    <span className={`pt-base ${drug.type === 'green' ? 'pt-green' : drug.type === 'red' ? 'pt-red' : 'pt-blue'}`}>
                      {drug.status}
                    </span>
                  </div>
                  <div className={`w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-sm`}>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Places Section */}
        <section className="py-40 border-t border-black/5">
          <SectionHeader 
            id="places"
            label="03_Logistics"
            title="Global Nodes & Hubs."
            desc="Locate verified distribution points, research centers, and clinical laboratories within your regional sector."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLACES.map((place, i) => (
              <div key={i} className="p-8 bg-white border border-black/5 rounded-[2.25rem] shadow-sm hover:border-black/20 transition-all duration-700 group flex flex-col justify-between min-h-[280px] premium-card">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-10 h-10 bg-black/5 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
                      <MapPin className="w-5 h-5 text-black/25 group-hover:text-white transition-colors stroke-[1.25]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`pt-base !px-3 !py-1 !text-[8px] ${place.color === 'green' ? 'pt-green' : 'pt-red'}`}>
                        {place.status}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-light tracking-tight mb-2 text-black">{place.name}</h4>
                  <p className="text-[13px] text-black/40 font-light mb-6 tracking-tight leading-relaxed">{place.location}</p>
                </div>
                <div className="flex items-center justify-between border-t border-black/5 pt-5 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono font-medium tracking-widest text-black/25 uppercase mb-0.5">Sector</span>
                    <span className="text-[10px] font-medium tracking-tight text-black/60 uppercase">{place.type}</span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-black/30 bg-black/5 px-2.5 py-1 rounded-md">{place.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section className="py-40 border-t border-black/5">
          <SectionHeader 
            id="research"
            label="04_R&D_Sync"
            title="Scientific Advancement."
            desc="Exploring the active frontiers of biometric modeling, digital-biological integration, and adaptive genomics."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RESEARCH_AREAS.map((area, i) => (
              <div key={i} className="p-10 bg-white border border-black/5 rounded-[2.5rem] group hover:shadow-xl hover:shadow-black/5 transition-all duration-1000 relative overflow-hidden premium-card">
                <div className="absolute top-0 right-0 p-8">
                   <div className="flex flex-col items-end gap-2">
                     <span className="text-[9px] font-mono font-medium text-black/25 uppercase tracking-widest">Priority</span>
                     <span className={`pt-base !px-3 !py-1 !text-[8px] ${area.priority === 'Critical' ? 'pt-red' : 'pt-blue'}`}>
                       {area.priority}
                     </span>
                   </div>
                </div>
                
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 bg-black/5 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-700">
                    <FlaskConical className="w-6 h-6 text-black/30 group-hover:text-white transition-colors duration-700 stroke-[1.25]" />
                  </div>
                </div>

                <h4 className="text-3xl font-light tracking-tight mb-10 text-black">{area.title}</h4>
                
                <div className="space-y-8">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono font-medium text-black/25 uppercase tracking-widest">Investigator</span>
                      <span className="text-base font-light text-black/60 italic">{area.leads}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-mono font-medium text-black/25 uppercase tracking-widest">Sync Efficiency</span>
                      <span className={`text-xl font-medium ${area.progress > 70 ? 'text-[#163c2e]' : 'text-[#1c2b4e]'}`}>
                        {area.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${area.progress > 70 ? 'bg-[#163c2e]/80' : 'bg-[#1c2b4e]/80'}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.progress}%` }}
                      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/5 flex justify-between items-center">
                   <button className="text-[10px] font-medium tracking-[0.25em] uppercase flex items-center gap-4 hover:gap-6 transition-all duration-500 text-black/80 group">
                    Analyze Protocol <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </button>
                  <ArrowUpRight className="w-5 h-5 text-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-32 border-t border-black/5 relative z-10 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-16 items-start mb-24">
          <div className="col-span-12 lg:col-span-5 space-y-10">
             <div className="flex items-center gap-3 opacity-60">
               <Activity className="w-6 h-6 text-black stroke-[1.5]" />
               <span className="text-xl font-medium tracking-tighter lowercase text-black">lifeline.</span>
             </div>
             <p className="text-lg text-black/40 font-light leading-relaxed max-w-md tracking-tight">
               The global standard for clinical biometric synchronization, pharmacological inventory architecture, and medical-digital infrastructure management.
             </p>
             <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"><Globe className="w-4 h-4" /></div>
               <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"><Database className="w-4 h-4" /></div>
               <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"><Shield className="w-4 h-4" /></div>
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
                <h4 className="text-[10px] font-mono font-medium tracking-widest text-black uppercase opacity-25">{col.label}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, j) => (
                    <li key={j}><a href="#" className="text-[13px] text-black/40 hover:text-black font-medium transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-black/5">
          <div className="text-[10px] font-mono font-medium text-black/25 uppercase tracking-[0.45em]">Global Biometric Standard // ARCH_OS v0.7.2</div>
          <div className="text-[9px] font-mono text-black/15 uppercase tracking-widest font-medium">
            © 2026 Architect Industries. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
