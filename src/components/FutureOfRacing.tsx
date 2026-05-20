import { motion } from 'motion/react';

export default function FutureOfRacing() {
  return (
    <section className="relative min-h-screen bg-obsidian flex flex-col justify-between overflow-hidden pt-32">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1510255375539-780c10260464?q=80&w=1600&auto=format&fit=crop" 
          alt="Futuristic Track" 
          className="w-full h-full object-cover opacity-20 grayscale brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
      </div>
      
      <div className="relative z-10 space-y-12 px-4 shadow-black italic flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="tech-text text-xs tracking-[1em] text-performance-red mb-4 underline uppercase italic">Engineering Evolution</h2>
          <h1 className="text-6xl md:text-[10vw] font-display leading-none mb-8 italic">
            NOT BUILDING CARS <br />
            <span className="text-stroke italic text-white/40">BUILDING GODS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-titanium font-light italic uppercase tracking-widest">
            The finish line doesn't exist. We are simply moving it further 
            into the future. Join the elite or get left in the wake.
          </p>
        </motion.div>
        
        <div className="flex items-center justify-center gap-8 py-12">
          <div className="w-16 h-16 rounded-full border border-performance-red flex items-center justify-center cursor-pointer hover:bg-performance-red transition-all group">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[12px] border-l-white group-hover:border-l-black ml-1"></div>
          </div>
          <p className="tech-text text-sm tracking-[0.3em] font-bold uppercase cursor-pointer border-b border-performance-red pb-1 italic transition-opacity hover:opacity-70">
            EXPERIENCE PHASE
          </p>
        </div>
      </div>

      <footer className="relative w-full p-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-titanium/20 bg-obsidian/60 backdrop-blur-md z-30">
        <div className="md:border-r border-titanium/20 pr-4 tech-text text-left italic">
          <p className="text-[9px] text-titanium mb-2 uppercase">01_The Machine</p>
          <p className="text-xs leading-tight opacity-70 uppercase tracking-tighter">Forged Titanium Chassis / Carbon Aero</p>
        </div>
        <div className="md:border-r border-titanium/20 pr-4 tech-text text-left italic">
          <p className="text-[9px] text-titanium mb-2 uppercase">02_Aerodynamics</p>
          <p className="text-xs leading-tight opacity-70 uppercase tracking-tighter">Fluid Dynamics / Synchronized Flux</p>
        </div>
        <div className="md:border-r border-titanium/20 pr-4 tech-text text-left italic">
          <p className="text-[9px] text-titanium mb-2 uppercase">03_Human Limits</p>
          <p className="text-xs leading-tight opacity-70 uppercase tracking-tighter">Cognitive Integration / Neural Focus</p>
        </div>
        <div className="flex flex-col justify-end items-end tech-text text-[8px] text-titanium/60 uppercase italic text-right">
          <p>APEX GP // RESEARCH & DEVELOPMENT</p>
          <p>PROJECT: MK-01 "GOD-KILLER"</p>
          <p>© 2025 APEX GLOBAL PERFORMANCE</p>
        </div>
      </footer>
    </section>
  );
}
