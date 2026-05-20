import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function VelocityTest() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-white text-black flex items-center">
      {/* High Speed Parallax Side View */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center perspective-1000">
        <motion.img 
          style={{ 
            x: useTransform(scrollYProgress, [0.3, 0.7], ["-50%", "150%"]),
            scale: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1.2, 1.5]),
            skewX: useTransform(scrollYProgress, [0.3, 0.7], [-15, 30]),
            rotateZ: useTransform(scrollYProgress, [0.3, 0.7], [-5, 5]),
            filter: useTransform(scrollYProgress, [0.3, 0.5, 0.7], ["blur(20px) brightness(0.5)", "blur(0px) brightness(1.5)", "blur(30px) brightness(0.2)"]),
            opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 0.6, 0.6, 0])
          }}
          src="/assets/1778102323608.png"
          className="h-[80vh] w-auto object-contain transform-gpu mix-blend-lighten"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute inset-0 tech-text opacity-5 select-none overflow-hidden whitespace-nowrap text-[20vw] font-black italic">
        LIMIT LIMIT LIMIT LIMIT LIMIT LIMIT
      </div>
      <div className="relative z-10 w-full px-6">
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0.3, 0.7], [0, -500]) }}
          className="flex gap-12 whitespace-nowrap"
        >
          <h1 className="text-[25vw] font-display leading-none italic">VELOCITY</h1>
          <h1 className="text-[25vw] font-display leading-none text-stroke italic" style={{ WebkitTextStroke: "2px black" }}>CHAOS</h1>
          <h1 className="text-[25vw] font-display leading-none italic">KINETIC</h1>
        </motion.div>
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="border-l-4 border-black pl-6 italic">
            <span className="tech-text text-xs uppercase underline">Engine Response</span>
            <p className="text-4xl font-display mt-2">INSTANT</p>
          </div>
          <div className="border-l-4 border-black pl-6 italic">
            <span className="tech-text text-xs uppercase underline">Distortion</span>
            <p className="text-4xl font-display mt-2">94% SCALE</p>
          </div>
          <div className="border-l-4 border-black pl-6 italic hidden md:block italic">
            <span className="tech-text text-xs uppercase underline">Reality Leak</span>
            <p className="text-4xl font-display mt-2">TERMINAL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
