/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Hero from './components/Hero';
import TheMachine from './components/TheMachine';
import Aerodynamics from './components/Aerodynamics';
import HumanLimits from './components/HumanLimits';
import VelocityTest from './components/VelocityTest';
import FutureOfRacing from './components/FutureOfRacing';
import FinishLine from './components/FinishLine';

export default function App() {
  return (
    <div className="relative bg-obsidian selection:bg-performance-red selection:text-white border-8 border-carbon min-h-screen flex flex-col">
      <div className="absolute inset-0 carbon-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none glitch-border border-[40px] border-transparent" />
      <div className="absolute top-0 left-0 w-full telemetry-line opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full telemetry-line opacity-20 pointer-events-none" />

      {/* Assembly of all sections */}
      <Hero />
      <TheMachine />
      <Aerodynamics />
      <HumanLimits />
      <VelocityTest />
      <FinishLine />
      <FutureOfRacing />


      {/* Global Cursor Effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-performance-red mix-blend-difference pointer-events-none z-[200] hidden md:block"
        animate={{
          x: -16, y: -16
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />
    </div>
  );
}
