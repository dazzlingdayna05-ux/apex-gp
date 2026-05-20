import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function FinishLine() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const carX = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8], ["150vw", "10vw", "-10vw", "-150vw"]);
  const endOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[#020202] z-50">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative w-full h-full flex items-center justify-center max-w-[100vw] overflow-hidden">

          {/* FINISHING STATE */}
          <motion.div
            style={{ opacity: endOpacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          >
            <div className="text-center">
              <h3 className="text-3xl md:text-5xl font-display italic text-white tracking-[0.2em] uppercase">
                APEX <span className="text-performance-red">GP</span>
              </h3>
              <p className="tech-text text-titanium text-[10px] tracking-[0.5em] mt-4 uppercase">
                End of Transmission
              </p>
              <div className="w-12 h-px bg-performance-red/50 mx-auto mt-6 shadow-[0_0_10px_rgba(255,42,42,0.8)]" />
            </div>
          </motion.div>

          {/* SEQUENCE CONTAINER */}
          <motion.div
            style={{ x: carX }}
            className="absolute flex items-center gap-12 md:gap-24 whitespace-nowrap z-10"
          >
            {/* THE CAR */}
            <div className="relative flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-performance-red/30 blur-[80px] rounded-full pointer-events-none" />

              <motion.div
                className="absolute top-1/2 -right-16 -translate-y-1/2 w-[300px] h-[2px] bg-gradient-to-l from-transparent to-white/50 blur-[2px]"
                animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [1, 1.5, 1], x: [0, 50, 0] }}
                transition={{ duration: 0.2, repeat: Infinity }}
              />

              <motion.div
                className="absolute top-1/2 right-[-20px] -translate-y-1/2 w-[80px] h-[30px] bg-gradient-to-l from-transparent via-burnt-orange to-yellow-200 blur-[8px] mix-blend-screen"
                animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.5, 1] }}
                transition={{ duration: 0.1, repeat: Infinity }}
              />

              {/* Naturally flowing horizontal image */}
              <img
                src="/assets/car-top-down.png"
                alt="Apex GP F1 Car"
                className="w-[400px] md:w-[700px] h-auto object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* THE TEXT */}
            <div className="flex flex-col items-start">
              <h2 className="text-[10vw] md:text-[8vw] font-display italic leading-[0.8] text-white tracking-tighter uppercase text-left">
                DRIVE <span className="text-performance-red">THE</span> <br />
                <span className="text-stroke" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>FUTURE</span>
              </h2>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
