import { motion } from 'motion/react';

export const TelemetryUI = () => (
  <div className="fixed bottom-24 left-8 tech-text text-[10px] space-y-4 z-50 hidden xl:block opacity-40">
    <div className="flex flex-col">
      <span className="text-performance-red font-bold">SYSTEM STATUS // ACTIVE</span>
      <span className="text-titanium">CONN: 5.2ms | LAT: LOW</span>
    </div>
    <div className="space-y-1">
      <div className="flex justify-between w-32 pb-1 border-b border-white/10">
        <span>AERODYNAMICS</span>
        <span>98%</span>
      </div>
      <div className="flex justify-between w-32 pb-1 border-b border-white/10">
        <span>THERMAL MGMT</span>
        <span>42°C</span>
      </div>
      <div className="flex justify-between w-32 pb-1 border-b border-white/10">
        <span>TIRE COMP</span>
        <span>SOFT</span>
      </div>
    </div>
  </div>
);

export const SectionLabel = ({ number, text }: { number: string; text: string }) => (
  <div className="absolute top-12 right-12 flex items-center gap-4 tech-text text-xs tracking-[0.2em]">
    <span className="text-performance-red">{number}</span>
    <span className="h-px w-12 bg-white/20"></span>
    <span className="text-titanium uppercase">{text}</span>
  </div>
);
