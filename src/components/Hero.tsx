import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { TelemetryUI } from './Shared';

export default function Hero() {
  const [ignited, setIgnited] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIgnited(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <TelemetryUI />
      <AnimatePresence>
        {!ignited && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center overflow-hidden"
          >
            <motion.div 
              animate={{ opacity: [0, 0.05, 0] }}
              transition={{ duration: 0.05, repeat: Infinity }}
              className="absolute inset-0 bg-white"
            />
            <div className="absolute inset-0 scanline opacity-30 shrink-0" />
            
            <motion.div
              initial={{ scale: 3, opacity: 0, filter: "blur(20px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
              className="text-center relative z-10"
            >
              <h1 className="text-6xl md:text-[10vw] font-display leading-none mb-4 italic tracking-tighter">
                SPEED IS <br />
                <motion.span 
                  animate={{ opacity: [1, 0.5, 1], color: ["#F5F5F5", "#FF2A2A", "#F5F5F5"] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                  className="text-performance-red underline decoration-white/20"
                >
                  RELIGION
                </motion.span>
              </h1>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="tech-text text-[10px] md:text-sm tracking-[1em] text-titanium uppercase"
              >
                BIOMETRIC SYNC // CALIBRATING APEX_V1
              </motion.div>
            </motion.div>
            
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ width: 0, x: "-100%" }}
                animate={{ width: "100%", x: "100%" }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05, repeat: Infinity, repeatDelay: Math.random() }}
                className="absolute h-px bg-performance-red opacity-20"
                style={{ top: `${15 + i * 15}%` }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
        <header className="relative z-30 p-8 flex justify-between items-start border-b border-titanium/20 bg-obsidian/40 backdrop-blur-sm">
          <div className="flex flex-col">
            <h1 className="text-5xl font-display leading-none italic">APEX <span className="text-performance-red font-display">GP</span></h1>
            <p className="tech-text text-[10px] uppercase tracking-[0.4em] text-titanium mt-2 italic">Engineered Violence / Series VIII</p>
          </div>
          <div className="flex gap-12 tech-text text-[11px] tracking-widest pt-4 hidden md:flex italic">
            <div className="text-right">
              <p className="text-titanium mb-1">SYSTEMS</p>
              <p className="text-performance-red">ENGAGED</p>
            </div>
            <div className="text-right">
              <p className="text-titanium mb-1">LOC</p>
              <p>MONZA_IT</p>
            </div>
            <div className="text-right">
              <p className="text-titanium mb-1">LATENCY</p>
              <p>0.002MS</p>
            </div>
          </div>
        </header>

        <div className="flex-1 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-5" />
          
          <div className="absolute inset-0 w-full h-full object-cover">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60 scale-105 filter grayscale-[0.5]">
              <source src="https://assets.mixkit.co/videos/preview/mixkit-sports-car-racing-on-a-track-at-night-40019-large.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-20 flex flex-col md:flex-row items-center justify-center px-4 w-full h-full max-w-[1600px] mx-auto">
            <div className="hidden xl:flex flex-col gap-8 tech-text w-64 items-start translate-y-12">
              <div className="p-4 border-l-2 border-performance-red bg-gradient-to-r from-performance-red/10 to-transparent w-full">
                <p className="text-[10px] text-titanium mb-1">VELOCITY</p>
                <p className="text-4xl font-bold italic">342<span className="text-sm italic font-normal ml-1 opacity-50">KM/H</span></p>
              </div>
              <div className="p-4 border-l-2 border-titanium opacity-60 w-full">
                <p className="text-[10px] text-titanium mb-1">G-FORCE</p>
                <p className="text-2xl font-bold italic">4.8<span className="text-sm italic font-normal ml-1 opacity-50">LAT</span></p>
              </div>
              <div className="p-4 border-l-2 border-titanium opacity-60 w-full">
                <p className="text-[10px] text-titanium mb-1">BRAKE P</p>
                <p className="text-2xl font-bold italic">89<span className="text-sm italic font-normal ml-1 opacity-50">BAR</span></p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="flex-1 text-center"
            >
              <div className="inline-block border border-performance-red/40 px-3 py-1 mb-6">
                <p className="tech-text text-[11px] tracking-[0.5em] text-performance-red animate-pulse">IGNITION READY</p>
              </div>
              <h1 className="text-[14vw] md:text-[10vw] font-display leading-[0.8] tracking-tighter uppercase mb-4 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-titanium/50">
                SPEED IS<br />RELIGION
              </h1>
              <p className="max-w-xl mx-auto font-light text-electric-silver tracking-widest uppercase text-xs md:text-sm leading-relaxed opacity-80 italic">
                The machine is evolving faster than humans can adapt. We aren't building cars. We are engineering evolution itself.
              </p>
            </motion.div>

            <div className="hidden xl:flex flex-col gap-8 tech-text items-end w-64 translate-y-12">
              <div className="text-right w-full">
                <p className="text-[10px] text-titanium mb-2 uppercase">Heat Map / Aero-Flow</p>
                <div className="flex flex-col gap-1 h-20 border border-titanium/20 p-2 italic w-full">
                  <div className="w-full h-2 bg-performance-red/40"></div>
                  <div className="w-[80%] h-2 bg-burnt-orange/40"></div>
                  <div className="w-[60%] h-2 bg-titanium/40"></div>
                  <div className="w-[40%] h-2 bg-titanium/20"></div>
                </div>
              </div>
              <div className="text-right w-full">
                <p className="text-[10px] text-titanium mb-1 uppercase">Driver HR</p>
                <p className="text-3xl font-bold text-performance-red italic">172<span className="text-xs ml-1">BPM</span></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-40">
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>
    </>
  );
}
