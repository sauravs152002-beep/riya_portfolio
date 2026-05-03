import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, CheckSquare, Settings } from 'lucide-react';

export function Process() {
  return (
    <section className="py-32 bg-[#Fdfdfd] text-[#1C1C1E] relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text explanation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#8A73FF] font-bold uppercase tracking-wider mb-2 block text-sm">Design Process</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            From Wireframes to Final Solutions
          </h2>
          <p className="text-xl text-[#8E8E93] leading-relaxed mb-10">
            I began by analyzing user flows for both parents and teachers. Wireframing focused on keeping navigation minimal, ensuring the most crucial actions—like booking a PTM or meal—were accessible within two taps.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F4F0FF] flex items-center justify-center shrink-0">
                <LayoutDashboard className="w-6 h-6 text-[#8A73FF]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Dual Dashboards</h4>
                <p className="text-[#8E8E93] leading-relaxed">Distinct interfaces tailored to what matters most. Parents see updates on their child; teachers get a holistic view of the class.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F4F0FF] flex items-center justify-center shrink-0">
                <CheckSquare className="w-6 h-6 text-[#8A73FF]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Frictionless Booking</h4>
                <p className="text-[#8E8E93] leading-relaxed">Unified calendars for meals and PTM slots, designed to eliminate back-and-forth messaging.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Right: CSS Wireframes */}
        <div className="relative h-[650px] flex items-center justify-center">
          {/* Wireframe 3 (Back) */}
          <motion.div
            initial={{ opacity: 0, rotate: -15, x: -40, y: 30 }}
            whileInView={{ opacity: 0.4, rotate: -15, x: -40, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bg-white p-4 rounded-[2.5rem] w-64 h-[28rem] shadow-xl border-2 border-gray-100 flex flex-col gap-4 z-0"
          >
             <div className="w-10 h-10 bg-gray-50 rounded-full mx-auto"></div>
             <div className="space-y-2 mt-4">
               <div className="h-4 bg-gray-50 rounded w-3/4"></div>
               <div className="h-4 bg-gray-50 rounded w-1/2"></div>
             </div>
             <div className="grid grid-cols-2 gap-2 mt-4">
               <div className="h-20 bg-gray-50 rounded-xl"></div>
               <div className="h-20 bg-gray-50 rounded-xl"></div>
             </div>
          </motion.div>

          {/* Wireframe 1 (Middle) */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, y: 50 }}
            whileInView={{ opacity: 1, rotate: -5, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-0 bg-white p-4 rounded-[2.5rem] w-72 h-[34rem] shadow-2xl border border-gray-100 flex flex-col gap-4 transform rotate-[-5deg] z-10"
          >
            <div className="flex justify-between items-center px-2 pt-2">
              <div className="w-12 h-4 bg-gray-100 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
            </div>
            <div className="w-full h-32 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 mt-2"></div>
            <div className="px-2 font-bold text-gray-300 text-xs mt-2 uppercase tracking-widest">Quick Actions</div>
            <div className="grid grid-cols-2 gap-3 px-2">
              <div className="h-20 bg-gray-50 rounded-xl border border-gray-100"></div>
              <div className="h-20 bg-gray-50 rounded-xl border border-gray-100"></div>
            </div>
            <div className="px-2 font-bold text-gray-300 text-xs mt-4 uppercase tracking-widest">Recent Updates</div>
            <div className="space-y-3 px-2">
              <div className="h-10 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3 gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                <div className="w-32 h-1.5 bg-gray-100 rounded-full"></div>
              </div>
              <div className="h-10 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3 gap-3">
                <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
                <div className="w-24 h-1.5 bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <div className="mt-auto flex justify-between items-center px-6 pb-4 border-t border-gray-50 pt-4">
               <div className="w-5 h-5 bg-gray-200 rounded-md"></div>
               <div className="w-5 h-5 bg-gray-100 rounded-md"></div>
               <div className="w-5 h-5 bg-gray-100 rounded-md"></div>
            </div>
          </motion.div>

          {/* Wireframe 2 (Front) */}
          <motion.div
            initial={{ opacity: 0, rotate: 8, y: 70 }}
            whileInView={{ opacity: 1, rotate: 8, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-0 top-10 bg-[#Fdfdfd] p-5 rounded-[2.5rem] w-72 h-[34rem] shadow-2xl border border-purple-50 flex flex-col gap-4 transform rotate-[8deg] z-20"
          >
            <div className="flex justify-between items-center px-2 pt-2 mb-4">
              <div className="w-20 h-5 bg-purple-50 rounded-md"></div>
              <div className="w-8 h-8 bg-purple-50 rounded-full"></div>
            </div>
            
            <div className="w-full h-44 bg-purple-50/50 rounded-3xl flex flex-col items-center justify-center gap-4 border border-purple-100/50">
               <div className="w-28 h-28 border-2 border-purple-100 rounded-full flex items-center justify-center">
                 <div className="w-20 h-20 bg-purple-100/50 rounded-full"></div>
               </div>
            </div>
            
            <div className="px-2 font-bold text-[#8A73FF] text-xs mt-4 uppercase tracking-widest">PTM Scheduling</div>
            <div className="space-y-3 px-2">
              <div className="h-14 bg-white rounded-2xl border border-purple-100 flex items-center justify-between px-4 shadow-sm">
                 <div className="w-24 h-2 bg-purple-50 rounded-full"></div>
                 <div className="w-8 h-8 bg-purple-100/50 rounded-full"></div>
              </div>
              <div className="h-14 bg-white rounded-2xl border border-purple-50 flex items-center justify-between px-4">
                 <div className="w-28 h-2 bg-purple-50 rounded-full"></div>
                 <div className="w-8 h-8 bg-purple-50 rounded-full"></div>
              </div>
            </div>

            <div className="mt-auto flex justify-between items-center px-8 pb-4 border-t border-purple-50 pt-4">
               <div className="w-5 h-5 bg-purple-100/50 rounded-md"></div>
               <div className="w-5 h-5 bg-purple-100/50 rounded-md"></div>
               <div className="w-5 h-5 bg-[#8A73FF] rounded-md shadow-lg shadow-purple-200"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}