import React from 'react';
import { motion } from 'motion/react';
import { Layers, Search, Lightbulb, PenTool, MousePointer2, Smartphone } from 'lucide-react';

export const DesignProcess = () => {
  const steps = [
    { title: 'Problem', desc: 'Identifying key pain points through qualitative research.', icon: Layers, num: '01' },
    { title: 'Research', desc: 'Gathering insights from parents and teachers across Delhi NCR.', icon: Search, num: '02' },
    { title: 'Ideation', desc: 'Exploring multiple solutions and user flows.', icon: Lightbulb, num: '03' },
    { title: 'Wireframes', desc: 'Building low-fidelity structural models.', icon: PenTool, num: '04' },
    { title: 'Prototype', desc: 'Interactive testing with real users.', icon: MousePointer2, num: '05' },
    { title: 'Final UI', desc: 'Crafting the polished, monochromatic experience.', icon: Smartphone, num: '06' },
  ];

  return (
    <section id="process" className="py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F0FF] text-[#8A73FF] text-xs font-bold tracking-wider uppercase mb-4"
          >
            Design Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight"
          >
            A Systematic <span className="text-[#8A73FF]">Approach</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="bg-white p-7 rounded-[2rem] border border-gray-100 group-hover:border-[#8A73FF]/20 hover:shadow-xl hover:shadow-[#8A73FF]/5 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] text-[#8E8E93] group-hover:bg-[#8A73FF] group-hover:text-white flex items-center justify-center transition-all duration-500">
                    <step.icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-[#C7C7CC] tabular-nums">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">{step.title}</h3>
                <p className="text-sm text-[#8E8E93] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
