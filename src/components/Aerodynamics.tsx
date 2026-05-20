import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionLabel } from './Shared';

export default function Aerodynamics() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="min-h-screen relative flex items-center bg-obsidian py-32 overflow-hidden">
      <SectionLabel number="02" text="Aerodynamics" />
      
      {/* Top-down Car Blueprint Parallax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 perspective-1000">
        <motion.img 
          style={{ 
            scale: useTransform(scrollYProgress, [0.3, 0.7], [0.5, 1.5]),
            rotateZ: useTransform(scrollYProgress, [0.3, 0.7], [-20, 20]),
            rotateY: useTransform(scrollYProgress, [0.3, 0.7], [-30, 30]),
            opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 0.4, 0.4, 0]),
            filter: useTransform(scrollYProgress, [0.3, 0.5, 0.7], ["blur(15px)", "blur(0px)", "blur(15px)"])
          }}
          src="/assets/1778102122626.png"
          className="w-[80vw] md:w-[50vw] h-auto transform-gpu mix-blend-screen"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {[...Array(20)].map((_, i) => (
            <motion.path
              key={i}
              d={`M -100 ${200 + i * 40} Q 500 ${200 + i * 40 + Math.sin(i) * 50} 1100 ${200 + i * 40}`}
              stroke="white"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 1 }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-8xl md:text-[15vw] font-display text-stroke italic mb-4">AERO-VORTEX</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-xl md:text-3xl font-light text-electric-silver leading-tight">
              Sculpting the unseen. We don't fight the wind. <br />
              <span className="text-performance-red font-bold underline decoration-2 underline-offset-8 italic">We bend it to our will.</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {[
                { label: "FRONT WING", val: "340KG DF" },
                { label: "DIFFUSER", val: "ACTIVE" },
                { label: "DRUID", val: "L-22 SYSTEM" },
                { label: "VORTEX", val: "CLEAN" }
              ].map((item) => (
                <div key={item.label} className="border-t border-white/20 pt-4 text-left">
                  <div className="tech-text text-[10px] text-performance-red mb-1 underline">{item.label}</div>
                  <div className="text-2xl font-display">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
