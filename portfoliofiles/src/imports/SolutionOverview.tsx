import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export const SolutionOverview = () => {
  const [hovered, setHovered] = useState<'parent' | 'teacher' | null>(null);

  return (
    <section id="solution" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F0FF] text-[#8A73FF] text-xs font-bold tracking-wider uppercase mb-4"
          >
            The Solution
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight"
          >
            A Unified <span className="text-[#8A73FF]">Dual Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8E8E93] max-w-2xl mx-auto mt-4 text-lg"
          >
            Two perspectives, one cohesive platform designed to bring parents and teachers closer together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered('parent')}
            onMouseLeave={() => setHovered(null)}
            className="p-10 bg-[#F8F9FA] rounded-[2.5rem] border border-gray-100 hover:border-[#8A73FF]/20 transition-all duration-500 group relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: hovered === 'parent' ? 1.5 : 1, opacity: hovered === 'parent' ? 0.05 : 0 }}
              className="absolute top-0 right-0 w-60 h-60 bg-[#8A73FF] rounded-full -translate-y-1/2 translate-x-1/2 transition-all duration-700"
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#8A73FF] mb-6 group-hover:bg-[#8A73FF] group-hover:text-white transition-all duration-500">
                <User size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1E] mb-3">Eduo Parent</h3>
              <p className="text-[#8E8E93] mb-6 leading-relaxed text-sm">
                Designed for busy parents like Rohan who need quick access to school schedules, meal booking, and Aarav's progress updates.
              </p>
              <ul className="space-y-3">
                {['One-tap meal booking', 'Interactive PTM calendar', 'Push notifications for events', 'Secure student feedback'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#4A4A4A]">
                    <CheckCircle2 size={16} className="text-[#65D4B0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#prototype" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#8A73FF] no-underline hover:gap-3 transition-all">
                Try Parent Flow <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered('teacher')}
            onMouseLeave={() => setHovered(null)}
            className="p-10 bg-[#1C1C1E] rounded-[2.5rem] border border-[#2C2C2E] transition-all duration-500 group relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: hovered === 'teacher' ? 1.5 : 1, opacity: hovered === 'teacher' ? 0.08 : 0 }}
              className="absolute bottom-0 left-0 w-60 h-60 bg-[#8A73FF] rounded-full translate-y-1/2 -translate-x-1/2 transition-all duration-700"
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#8A73FF] mb-6 group-hover:bg-[#8A73FF] group-hover:text-white transition-all duration-500">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Eduo Teacher</h3>
              <p className="text-[#8E8E93] mb-6 leading-relaxed text-sm">
                Empowering teachers like Anjali Sharma with administrative tools that reduce workload and improve parent engagement.
              </p>
              <ul className="space-y-3">
                {['Automated PTM scheduling', 'One-tap attendance marking', 'Instant parent messaging', 'Student profile management'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                    <CheckCircle2 size={16} className="text-[#65D4B0] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#prototype" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#8A73FF] no-underline hover:gap-3 transition-all">
                Try Teacher Flow <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
