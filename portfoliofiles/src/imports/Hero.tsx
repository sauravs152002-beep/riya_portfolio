import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PhoneMockup } from './PhoneMockup';
import { ArrowRight, MessageSquare, Calendar, Utensils, Bell, Users, Sparkles, CalendarCheck, Video, ClipboardList } from 'lucide-react';

import imgSchola from "figma:asset/Gemini_Generated_Image_7qzwoj7qzwoj7qzw-2.png";

const words = ['Seamlessly', 'Effortlessly', 'Beautifully'];

export const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const { scrollY } = useScroll();
  const phoneY = useTransform(scrollY, [0, 600], [0, 80]);
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);

  useEffect(() => {
    const interval = setInterval(() => setWordIdx(p => (p + 1) % words.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src={imgSchola} 
          alt="" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      <motion.div style={{ y: bgY }} className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] bg-[#F4F0FF] rounded-full blur-[100px] -z-10 opacity-60" />
      <motion.div style={{ y: bgY }} className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#F0F5FF] rounded-full blur-[100px] -z-10 opacity-40" />

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-[10%] w-12 h-12 bg-[#F4F0FF] rounded-2xl opacity-40 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-72 left-[8%] w-8 h-8 bg-[#EFFFF8] rounded-full opacity-40 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Background Wireframe Artifacts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-24 top-0 w-48 p-4 bg-white border-2 border-dashed border-gray-200 rounded-2xl hidden xl:block"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 mb-3" />
            <div className="h-2 w-full bg-gray-100 rounded-full mb-1.5" />
            <div className="h-2 w-2/3 bg-gray-100 rounded-full mb-4" />
            <div className="h-12 w-full bg-gray-50 rounded-lg" />
            <div className="absolute -top-3 -right-3 bg-white px-2 py-0.5 border border-gray-200 rounded text-[8px] font-bold text-[#8E8E93] shadow-sm uppercase tracking-tighter">
              v1.0 Iteration
            </div>
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-12 bottom-12 w-56 p-4 bg-white border-2 border-dashed border-gray-200 rounded-2xl hidden xl:block z-20"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rounded-full bg-[#6BA4FF]/20" />
              <div className="h-1.5 w-16 bg-gray-100 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 bg-gray-50 rounded-lg" />
              <div className="h-10 bg-gray-50 rounded-lg" />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-[#8A73FF] px-2 py-0.5 rounded text-[8px] font-bold text-white shadow-lg uppercase tracking-tighter">
              User Flow #4
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-[#1C1C1E] leading-[1.05] tracking-tight"
            >
              Bridging Parents &{' '}
              <span className="text-[#8A73FF]">Teachers</span>
              <br />
              <span className="relative inline-block">
                <motion.span
                  key={words[wordIdx]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-[#8E8E93]"
                >
                  {words[wordIdx]}
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#8E8E93] max-w-lg leading-relaxed"
            >
              Eduo is a unified school communication app that replaces fragmented systems, missed updates, and manual meal booking with one elegant experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#prototype" className="px-8 py-4 bg-[#8A73FF] text-white font-semibold rounded-2xl hover:bg-[#765EE3] transition-all flex items-center gap-2 shadow-[0_8px_20px_rgba(138,115,255,0.3)] no-underline text-sm">
                Explore Prototype <ArrowRight size={18} />
              </a>
              <a href="#process" className="px-8 py-4 bg-white text-[#1C1C1E] font-semibold rounded-2xl border border-gray-200 hover:border-[#8A73FF]/30 hover:bg-[#F4F0FF]/50 transition-all no-underline text-sm">
                Design Process
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-6"
            >
              {[
                { icon: MessageSquare, label: 'Messaging' },
                { icon: Calendar, label: 'Scheduling' },
                { icon: Utensils, label: 'Meal Booking' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-[#8E8E93] text-sm font-medium">
                  <item.icon size={14} />
                  {item.label}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', damping: 25 }}
            style={{ y: phoneY }}
            className="relative lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A73FF]/20 to-[#6BA4FF]/10 rounded-[4rem] scale-110 blur-3xl" />

            {/* Design System Redlines (Visual Artifacts) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -right-8 top-1/4 hidden lg:flex flex-col items-center gap-1 z-20"
            >
              <div className="w-px h-12 bg-[#FF7A7A] relative">
                <div className="absolute top-0 -left-1 w-2 h-[1px] bg-[#FF7A7A]" />
                <div className="absolute bottom-0 -left-1 w-2 h-[1px] bg-[#FF7A7A]" />
              </div>
              <span className="text-[8px] font-mono text-[#FF7A7A] bg-white px-1 border border-[#FF7A7A]/30 rounded">24px</span>
            </motion.div>

            <PhoneMockup scale={0.62}>
              <motion.div key="hero-phone" className="h-full flex flex-col bg-white">
                <div className="flex-1 overflow-y-auto px-6 pt-20 pb-32 space-y-5">
                  {/* Teacher Dashboard Preview */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[10px] font-bold text-[#8A73FF] uppercase tracking-[0.15em] mb-1">Teacher Hub</p>
                      <h3 className="text-2xl font-bold text-[#1C1C1E] tracking-tight">Hi, Anjali! 👋</h3>
                      <p className="text-xs text-[#8E8E93] font-medium">Class 5A • Delhi Public School</p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#F4F0FF] border border-[#E8E0FF] flex items-center justify-center shadow-sm relative">
                      <span className="text-xl font-bold text-[#8A73FF]">AS</span>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF7A7A] border-2 border-white rounded-full" />
                    </div>
                  </div>

                  {/* Dashboard Cards */}
                  {[
                    { icon: CalendarCheck, label: 'Attendance', sub: '12 Students left', badge: 'Urgent', iconColor: 'text-[#8A73FF]', iconBg: 'bg-[#F4F0FF]', badgeBg: 'bg-[#8A73FF] text-white shadow-md' },
                    { icon: Video, label: 'PTM Slots', sub: '3 Pending setup', badge: '2 Today', iconColor: 'text-[#6BA4FF]', iconBg: 'bg-[#F0F5FF]', badgeBg: 'bg-[#6BA4FF] text-white' },
                    { icon: MessageSquare, label: 'Messages', sub: 'New from parents', badge: '3 Unread', iconColor: 'text-[#FA9A50]', iconBg: 'bg-[#FFF4EC]', badgeBg: 'bg-[#FA9A50] text-white' },
                    { icon: ClipboardList, label: 'Leave Req', sub: 'Review status', badge: '2 Pending', iconColor: 'text-[#FF7A7A]', iconBg: 'bg-[#FFF0F0]', badgeBg: 'bg-[#FF7A7A] text-white' },
                    { icon: Users, label: 'Students', sub: 'Class roster', badge: '', iconColor: 'text-[#65D4B0]', iconBg: 'bg-[#EFFFF8]', badgeBg: '' },
                  ].map((card) => (
                    <div key={card.label} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
                      <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                        <card.icon size={22} className={card.iconColor} strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-[15px] font-bold text-[#1C1C1E] truncate leading-tight">{card.label}</p>
                          {card.badge && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${card.badgeBg}`}>{card.badge}</span>
                          )}
                        </div>
                        <p className="text-[12px] text-[#8E8E93] font-medium mt-1 leading-none">{card.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 flex justify-around items-center pt-4 pb-12 z-20 px-6">
                  {[
                    { icon: Sparkles, active: true },
                    { icon: MessageSquare, active: false },
                    { icon: Calendar, active: false },
                    { icon: Users, active: false }
                  ].map((i, idx) => (
                    <div key={`hero-nav-${idx}`} className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${i.active ? 'bg-[#F4F0FF] text-[#8A73FF] shadow-sm' : 'text-[#B0B0B5]'}`}>
                      <i.icon size={26} strokeWidth={2.2} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
