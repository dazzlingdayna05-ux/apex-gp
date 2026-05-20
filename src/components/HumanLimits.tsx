import { motion } from 'motion/react';
import { Activity, Zap } from 'lucide-react';
import { SectionLabel } from './Shared';

export default function HumanLimits() {
  return (
    <section className="py-24 relative bg-obsidian">
      <SectionLabel number="03" text="Human Limits" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center min-h-[80vh]">
        <div className="relative group">
          <div className="absolute -inset-4 bg-performance-red/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
          <motion.div
            initial={{ filter: "grayscale(1) brightness(0.5)" }}
            whileInView={{ filter: "grayscale(0) brightness(1)" }}
            transition={{ duration: 1.5 }}
            className="relative h-[500px] md:h-[700px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1552066316-24f15f0bb6da?q=80&w=1200&auto=format&fit=crop" 
              alt="F1 Driver" 
              className="w-full h-full object-cover scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Heartbeat UI */}
            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md p-6 border border-performance-red/40 w-64">
              <div className="flex justify-between items-center mb-4">
                <span className="tech-text text-xs italic">DRIVER_01 // HEARTBEAT</span>
                <Activity size={16} className="text-performance-red animate-pulse" />
              </div>
              <div className="flex items-end gap-1 h-12 mb-2">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [10, 40, 10] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 bg-performance-red"
                  />
                ))}
              </div>
              <div className="tech-text text-2xl font-bold">178 <span className="text-xs font-normal text-titanium italic">BPM</span></div>
            </div>
          </motion.div>
        </div>

        <div className="lg:pl-24 py-12 space-y-12">
          <h2 className="text-7xl md:text-9xl leading-[0.8] italic uppercase">
            THE <br />
            <span className="text-stroke">FRAGILE</span> <br />
            UPGRADE
          </h2>
          <div className="space-y-6">
            <p className="text-electric-silver text-xl font-light italic">
              The machine has no fear. The driver has nothing else. 
              In the gap between the apex and the wall, humanity 
              becomes the bottleneck.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-performance-red flex items-center justify-center">
                <Zap className="text-performance-red" fill="currentColor" size={24} />
              </div>
              <div>
                <h4 className="tech-text text-xs text-titanium underline">G-FORCE RESISTANCE</h4>
                <p className="text-2xl font-display italic">5.8G SUSTAINED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
