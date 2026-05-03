import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { AlertCircle, Clock, XCircle, Search } from 'lucide-react';

const useCounter = (end: number, inView: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return count;
};

export const Problem = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stat1 = useCounter(72, inView);
  const stat2 = useCounter(45, inView);
  const stat3 = useCounter(3, inView, 1000);

  const problems = [
    {
      title: 'Missed Updates',
      desc: 'Critical school news gets lost in buried emails or fragmented WhatsApp groups.',
      icon: <AlertCircle className="text-[#FF7A7A]" size={22} />,
      color: 'bg-[#FFF0F0]',
      border: 'hover:border-[#FF7A7A]/30',
    },
    {
      title: 'Inefficient Booking',
      desc: 'Confusing paper systems or legacy portals make meal and slot booking a headache.',
      icon: <Clock className="text-[#FFB067]" size={22} />,
      color: 'bg-[#FFF4EC]',
      border: 'hover:border-[#FFB067]/30',
    },
    {
      title: 'Fragmented Systems',
      desc: 'Parents juggle multiple logins and platforms for different school administrative tasks.',
      icon: <XCircle className="text-[#8E8E93]" size={22} />,
      color: 'bg-[#F8F9FA]',
      border: 'hover:border-[#8E8E93]/30',
    },
    {
      title: 'Lack of Insight',
      desc: "Communication is one-way, leaving parents disconnected from their child's school day.",
      icon: <Search className="text-[#6BA4FF]" size={22} />,
      color: 'bg-[#F0F5FF]',
      border: 'hover:border-[#6BA4FF]/30',
    },
  ];

  return (
    <section id="problem" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F9FA] text-[#8E8E93] text-xs font-bold tracking-wider uppercase mb-4"
            >
              The Problem
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-[#1C1C1E] leading-tight tracking-tight"
            >
              Fragmented systems create <span className="text-[#8A73FF]">communication gaps</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-[#8E8E93] max-w-lg mb-2"
          >
            Indian schools still rely on legacy portals, paper forms, and disparate apps, leading to missed updates, confused parents, and overwhelmed teachers.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-16 p-8 bg-[#F8F9FA] rounded-[2rem] border border-gray-100"
        >
          <div className="text-center">
            <span className="text-4xl font-bold text-[#1C1C1E]">{stat1}%</span>
            <p className="text-xs text-[#8E8E93] font-medium mt-1">Parents feel overwhelmed</p>
          </div>
          <div className="text-center border-x border-gray-200">
            <span className="text-4xl font-bold text-[#1C1C1E]">{stat2}min</span>
            <p className="text-xs text-[#8E8E93] font-medium mt-1">Avg. weekly time wasted</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-[#1C1C1E]">{stat3}+</span>
            <p className="text-xs text-[#8E8E93] font-medium mt-1">Platforms per parent</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-7 rounded-[1.5rem] border border-gray-100 ${item.border} hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-500 group cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">{item.title}</h3>
              <p className="text-[#8E8E93] leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
