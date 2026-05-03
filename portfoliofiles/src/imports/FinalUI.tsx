import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Calendar, MessageSquare, CalendarCheck, Video, Users, ClipboardList, Menu, User, Search, Check, X } from 'lucide-react';

const screens = [
  {
    title: 'Teacher Dashboard',
    subtitle: 'Home overview for teachers',
    content: (
      <div className="p-3.5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-[6px] border border-gray-100 flex items-center justify-center"><Menu size={10} className="text-[#1C1C1E]" /></div>
            <div><p className="text-[8px] font-bold text-[#1C1C1E]">Hi! Anjali S.</p><p className="text-[6px] text-[#8E8E93]">Class 5A</p></div>
          </div>
          <div className="w-6 h-6 bg-white rounded-[6px] border border-gray-100 flex items-center justify-center"><span className="text-[7px] font-bold text-[#8A73FF]">A</span></div>
        </div>
        {[
          { icon: CalendarCheck, color: 'text-[#8A73FF]', bg: 'bg-[#F4F0FF]', label: 'Attendance', badge: 'Urgent', bb: 'bg-[#8A73FF] text-white' },
          { icon: Video, color: 'text-[#6BA4FF]', bg: 'bg-[#F0F5FF]', label: 'PTM Slots', badge: '2 Today', bb: 'bg-[#F0F5FF] text-[#6BA4FF]' },
          { icon: MessageSquare, color: 'text-[#FA9A50]', bg: 'bg-[#FFF4EC]', label: 'Messages', badge: '3 Unread', bb: 'bg-[#FA9A50] text-white' },
          { icon: ClipboardList, color: 'text-[#FF7A7A]', bg: 'bg-[#FFF0F0]', label: 'Leaves', badge: '2 Pending', bb: 'bg-[#FFF0F0] text-[#FF7A7A]' },
          { icon: Users, color: 'text-[#65D4B0]', bg: 'bg-[#EFFFF8]', label: 'Students', badge: '', bb: '' },
        ].map(c => (
          <div key={c.label} className="bg-white rounded-[8px] p-2 flex items-center gap-2 shadow-sm border border-gray-50">
            <div className={`w-7 h-7 rounded-[6px] ${c.bg} flex items-center justify-center shrink-0`}><c.icon size={12} className={c.color} /></div>
            <div className="flex-1 min-w-0">
              <p className="text-[7px] font-bold text-[#1C1C1E]">{c.label}</p>
              {c.badge && <span className={`text-[5px] font-bold px-1 py-0.5 rounded ${c.bb}`}>{c.badge}</span>}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Attendance',
    subtitle: 'Quick mark present/absent',
    content: (
      <div className="p-3.5 space-y-2">
        <p className="text-[9px] font-bold text-[#1C1C1E]">Attendance</p>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="bg-[#8A73FF] text-white py-1.5 rounded-[6px] flex flex-col items-center"><span className="text-[6px] font-bold opacity-80">Total</span><span className="text-[10px] font-bold">12</span></div>
          <div className="bg-[#EFFFF8] text-[#65D4B0] py-1.5 rounded-[6px] flex flex-col items-center"><span className="text-[6px] font-bold">Present</span><span className="text-[10px] font-bold">10</span></div>
          <div className="bg-[#FFF0F0] text-[#FF7A7A] py-1.5 rounded-[6px] flex flex-col items-center"><span className="text-[6px] font-bold">Absent</span><span className="text-[10px] font-bold">2</span></div>
        </div>
        {['Aarav', 'Diya', 'Kavya', 'Reyansh', 'Ananya', 'Vihaan'].map((n, i) => (
          <div key={n} className="bg-white rounded-[6px] py-1 px-2 flex items-center justify-between shadow-sm border border-gray-50">
            <div className="flex items-center gap-1.5"><span className="text-[6px] font-bold text-[#8E8E93]">{i+1}.</span><span className="text-[7px] font-bold text-[#1C1C1E]">{n}</span></div>
            <div className="flex bg-[#F8F9FA] rounded p-0.5">
              <div className={`w-4 h-3 rounded text-[5px] font-bold flex items-center justify-center ${i !== 3 ? 'bg-[#65D4B0] text-white' : 'text-[#8E8E93]'}`}>P</div>
              <div className={`w-4 h-3 rounded text-[5px] font-bold flex items-center justify-center ${i === 3 ? 'bg-[#FF7A7A] text-white' : 'text-[#8E8E93]'}`}>A</div>
            </div>
          </div>
        ))}
        <div className="h-6 bg-[#8A73FF] rounded-[6px] flex items-center justify-center"><span className="text-[7px] font-bold text-white">Submit Attendance</span></div>
      </div>
    ),
  },
  {
    title: 'Parent Dashboard',
    subtitle: 'Home overview for parents',
    content: (
      <div className="p-3.5 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-[6px] border border-gray-100 flex items-center justify-center"><Menu size={10} className="text-[#1C1C1E]" /></div>
            <div><p className="text-[8px] font-bold text-[#1C1C1E]">Hi! Rohan S.</p><p className="text-[6px] text-[#8E8E93]">Parent of Aarav</p></div>
          </div>
          <div className="w-6 h-6 bg-white rounded-[6px] border border-gray-100 flex items-center justify-center"><span className="text-[7px] font-bold text-[#8A73FF]">R</span></div>
        </div>
        {[
          { icon: Utensils, color: 'text-[#65D4B0]', bg: 'bg-[#EFFFF8]', label: 'Lunch Booking', badge: 'Booked', bb: 'bg-[#65D4B0] text-white' },
          { icon: Video, color: 'text-[#6BA4FF]', bg: 'bg-[#F0F5FF]', label: 'PTM Slots', badge: '2 Today', bb: 'bg-[#F0F5FF] text-[#6BA4FF]' },
          { icon: ClipboardList, color: 'text-[#FF7A7A]', bg: 'bg-[#FFF0F0]', label: 'Leaves', badge: '2 Pending', bb: 'bg-[#FFF0F0] text-[#FF7A7A]' },
          { icon: MessageSquare, color: 'text-[#FA9A50]', bg: 'bg-[#FFF4EC]', label: 'Messages', badge: '1 Unread', bb: 'bg-[#FA9A50] text-white' },
          { icon: User, color: 'text-[#8A73FF]', bg: 'bg-[#F4F0FF]', label: 'Aarav Sharma', badge: 'A+', bb: 'bg-[#F4F0FF] text-[#8A73FF]' },
        ].map(c => (
          <div key={c.label} className="bg-white rounded-[8px] p-2 flex items-center gap-2 shadow-sm border border-gray-50">
            <div className={`w-7 h-7 rounded-[6px] ${c.bg} flex items-center justify-center shrink-0`}><c.icon size={12} className={c.color} /></div>
            <div className="flex-1 min-w-0">
              <p className="text-[7px] font-bold text-[#1C1C1E]">{c.label}</p>
              {c.badge && <span className={`text-[5px] font-bold px-1 py-0.5 rounded ${c.bb}`}>{c.badge}</span>}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Meal Booking',
    subtitle: 'Weekly canteen selection',
    content: (
      <div className="p-3.5 space-y-2">
        <p className="text-[9px] font-bold text-[#1C1C1E]">Lunch Booking</p>
        <div className="bg-white rounded-[8px] p-2 border border-gray-50 shadow-sm flex items-center gap-2">
          <div className="w-7 h-7 rounded-[6px] bg-[#EFFFF8] flex items-center justify-center"><Utensils size={12} className="text-[#65D4B0]" /></div>
          <div><p className="text-[7px] font-bold text-[#1C1C1E]">Weekly Canteen Plan</p><p className="text-[5px] text-[#8E8E93]">Select healthy meals</p></div>
        </div>
        {['Mon 15 Apr', 'Tue 16 Apr', 'Wed 17 Apr'].map(d => (
          <div key={d} className="bg-white rounded-[8px] p-2 border border-gray-50 shadow-sm">
            <p className="text-[6px] text-[#8E8E93] font-bold uppercase tracking-wider mb-1">{d}</p>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-[#EFFFF8] text-[#65D4B0] py-1 rounded text-[6px] font-bold text-center flex items-center justify-center gap-0.5"><div className="w-1 h-1 rounded-full bg-[#65D4B0]" />Veg</div>
              <div className="bg-[#FFF0F0] text-[#FF7A7A] py-1 rounded text-[6px] font-bold text-center flex items-center justify-center gap-0.5"><div className="w-1 h-1 rounded-full bg-[#FF7A7A]" />Non-Veg</div>
            </div>
          </div>
        ))}
        <div className="h-6 bg-[#65D4B0] rounded-[6px] flex items-center justify-center"><span className="text-[7px] font-bold text-white">Confirm Plan</span></div>
      </div>
    ),
  },
];

export const FinalUI = () => {
  return (
    <section className="py-28 bg-[#1C1C1E] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(138,115,255,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A73FF]/20 text-[#8A73FF] text-xs font-bold tracking-wider uppercase mb-4 border border-[#8A73FF]/20"
          >
            Final UI Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Monochromatic <span className="text-[#8A73FF]">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8E8E93] max-w-2xl mx-auto text-lg"
          >
            A cohesive visual language that prioritizes clarity, accessibility, and trust.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mx-auto border-[5px] border-[#2C2C2E] rounded-[1.6rem] overflow-hidden bg-[#F8F9FA] shadow-2xl shadow-black/30 group-hover:border-[#3C3C3E] transition-colors duration-500 aspect-[9/16]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3.5 w-16 bg-[#2C2C2E] rounded-b-lg z-10" />
                <div className="pt-4 h-full overflow-hidden">
                  {screen.content}
                </div>
                <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-10 bg-gray-300 rounded-full" />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-white font-semibold text-sm">{screen.title}</h4>
                <p className="text-[#8E8E93] text-xs mt-0.5">{screen.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
