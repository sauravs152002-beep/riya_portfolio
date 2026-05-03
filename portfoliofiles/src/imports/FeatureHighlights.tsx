import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Utensils, Calendar, Shield, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 'communication',
    icon: MessageSquare,
    title: 'Communication Made Simple',
    desc: 'Replace fragmented WhatsApp groups and email chains with a unified messaging system that keeps parents and teachers connected in real time.',
    detail: 'Threaded conversations, read receipts, and smart notifications ensure nothing gets missed.',
    color: 'bg-[#FFF4EC] text-[#FA9A50]',
  },
  {
    id: 'meals',
    icon: Utensils,
    title: 'Clear Meal Booking',
    desc: 'Parents can book Veg, Non-Veg, or Jain meals for the week with nutritionist-approved menus. Teachers see instant tallies without manual counting.',
    detail: 'Weekly menus designed by Dr. Aditi Rao, Senior Pediatric Nutritionist, with dietary preferences and automatic reminders.',
    color: 'bg-[#EFFFF8] text-[#65D4B0]',
  },
  {
    id: 'ptm',
    icon: Calendar,
    title: 'Structured PTM Scheduling',
    desc: 'No more back-and-forth. Teachers set 15-minute availability slots, parents pick a time. Automated reminders for both parties.',
    detail: 'Calendar sync, video call integration, and post-meeting notes sharing.',
    color: 'bg-[#F0F5FF] text-[#6BA4FF]',
  },
  {
    id: 'unified',
    icon: Shield,
    title: 'Unified System',
    desc: 'One login, one platform, one source of truth. Everything from attendance to announcements lives in a single, beautiful interface.',
    detail: 'Role-based dashboards ensure parents and teachers see exactly what they need.',
    color: 'bg-[#F4F0FF] text-[#8A73FF]',
  },
];

export const FeatureHighlights = () => {
  const [activeId, setActiveId] = useState('communication');
  const active = features.find(f => f.id === activeId)!;

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F9FA] text-[#8E8E93] text-xs font-bold tracking-wider uppercase mb-4"
          >
            Key Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight"
          >
            Built for <span className="text-[#8A73FF]">What Matters</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          <div className="space-y-3">
            {features.map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setActiveId(f.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                  activeId === f.id
                    ? 'bg-white border-[#8A73FF]/20 shadow-lg shadow-[#8A73FF]/5'
                    : 'bg-transparent border-transparent hover:bg-[#F8F9FA]'
                }`}
                whileHover={{ x: activeId === f.id ? 0 : 4 }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                  <f.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-sm ${activeId === f.id ? 'text-[#1C1C1E]' : 'text-[#8E8E93]'}`}>
                    {f.title}
                  </h4>
                </div>
                <ChevronRight size={16} className={`shrink-0 transition-colors ${activeId === f.id ? 'text-[#8A73FF]' : 'text-[#C7C7CC]'}`} />
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F8F9FA] rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 flex flex-col justify-center"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${active.color}`}>
                <active.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1E] mb-4">{active.title}</h3>
              <p className="text-[#8E8E93] leading-relaxed mb-6">{active.desc}</p>
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <p className="text-sm text-[#8E8E93] leading-relaxed">{active.detail}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
