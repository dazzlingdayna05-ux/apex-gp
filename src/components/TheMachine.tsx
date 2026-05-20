import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cpu, Database, Activity, Timer } from 'lucide-react';
import { SectionLabel } from './Shared';

export default function TheMachine() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <SectionLabel number="01" text="The Machine" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0.3, 0.7], [50, -50]) }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-6xl md:text-8xl leading-none italic uppercase">
            CARBON <br />
            <span className="text-performance-red italic">SKELETON</span>
          </h2>
          <p className="text-titanium max-w-md text-lg font-light leading-relaxed">
            Every curve is a calculation. Every surface is an obsession. 
            The MK-01 is not a car; it is a clinical instrument designed 
            to dissect time and space at 340km/h. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-carbon p-6 border border-white/5 group hover:border-performance-red/50 transition-colors">
              <Cpu className="text-performance-red mb-4" />
              <h3 className="text-xl mb-2 italic">NEURAL SYNC</h3>
              <p className="text-[10px] tech-text text-titanium">ADAPTIVE CHASSIS RESPONSE SYSTEM</p>
            </div>
            <div className="bg-carbon p-6 border border-white/5 group hover:border-performance-red/50 transition-colors">
              <Database className="text-performance-red mb-4" />
              <h3 className="text-xl mb-2 italic">DATA FLOW</h3>
              <p className="text-[10px] tech-text text-titanium">1.2TB TELEMETRY PER LAP</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0.3, 0.7], [0, -150]) }}
            className="mt-24 space-y-4"
          >
            <div className="h-80 bg-carbon relative overflow-hidden group border border-white/5 perspective-1000">
              <motion.img 
                style={{ 
                  y: useTransform(scrollYProgress, [0.4, 0.6], ["-20%", "20%"]),
                  scale: useTransform(scrollYProgress, [0.4, 0.6], [1.4, 1]),
                  rotateX: useTransform(scrollYProgress, [0.4, 0.6], [15, 0]),
                  filter: useTransform(scrollYProgress, [0.3, 0.5, 0.7], ["brightness(0.5) blur(10px)", "brightness(1.2) blur(0px)", "brightness(0.8) blur(2px)"])
                }}
                src="/assets/1778101942390.png" 
                alt="Apex GP Front View" 
                className="absolute inset-0 w-full h-[130%] object-cover transform-gpu origin-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-performance-red/10 mix-blend-overlay pointer-events-none" />
            </div>
            <div className="h-64 bg-performance-red flex items-center justify-center p-8 overflow-hidden relative">
              <h2 className="text-4xl text-black -rotate-90 whitespace-nowrap italic z-10">FORGED METAL</h2>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_25%,rgba(0,0,0,0.05)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.05)_75%)] bg-[length:4px_4px]" />
            </div>
          </motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0.3, 0.7], [0, 80]) }}
            className="space-y-4"
          >
            <div className="h-64 bg-titanium/20 flex flex-col justify-end p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                <Activity size={120} />
              </div>
              <Timer size={40} className="mb-4 text-performance-red relative z-10" />
              <div className="tech-text text-xs tracking-tighter relative z-10">SHIFT RESPONSE: 0.01MS</div>
            </div>
            <div className="h-96 bg-carbon relative overflow-hidden group border border-white/5">
              <motion.img 
                style={{ 
                  y: useTransform(scrollYProgress, [0.4, 0.6], ["20%", "-20%"]),
                  scale: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [1.5, 1, 1.2]),
                  clipPath: useTransform(scrollYProgress, [0.4, 0.6], ["polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]),
                  filter: useTransform(scrollYProgress, [0.4, 0.6], ["contrast(1.5) saturate(0)", "contrast(1) saturate(1.2)"])
                }}
                src="/assets/1778102060385.png" 
                alt="Apex GP Rear Power" 
                className="absolute inset-0 w-full h-[130%] object-cover transform-gpu"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-performance-red/10 mix-blend-overlay pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
