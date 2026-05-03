import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Quote, TrendingUp, Users, Heart } from 'lucide-react';

const AnimatedNumber = ({ value, suffix = '', inView }: { value: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(value / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <>{count}{suffix}</>;
};

export const ResearchInsights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const insights = [
    { label: 'Survey Result', value: 72, suffix: '%', desc: 'Parents feel overwhelmed by multiple school communication channels.', icon: <TrendingUp className="text-[#8A73FF]" size={22} /> },
    { label: 'Interviews', value: 15, suffix: '+', desc: 'Conducted in-depth interviews with parents and teachers across schools in Delhi NCR.', icon: <Users className="text-[#8A73FF]" size={22} /> },
    { label: 'User Retention', value: 88, suffix: '%', desc: 'Believe a unified system would increase engagement by over 30%.', icon: <Heart className="text-[#8A73FF]" size={22} /> },
  ];

  const quotes = [
    {
      text: "I missed the deadline for the school trip because the email was buried under 50 others. It's so frustrating.",
      author: 'Priya Mehta, Parent of 2',
      role: 'Parent Interview',
    },
    {
      text: "I spend nearly 3 hours every week just managing PTM slot requests and meal tallying. It's time I could spend teaching.",
      author: 'Anjali Sharma, Primary Teacher',
      role: 'Teacher Interview',
    },
  ];

  return (
    <section id="research" className="py-28 bg-[#F8F9FA] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F0FF] text-[#8A73FF] text-xs font-bold tracking-wider uppercase mb-4"
          >
            Research Insights
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight"
          >
            Understanding the <span className="text-[#8A73FF]">User's Pain</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-[#8A73FF]/20 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F4F0FF] flex items-center justify-center mb-5 group-hover:bg-[#E8E0FF] transition-colors">
                {insight.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#1C1C1E] mb-1 tabular-nums">
                <AnimatedNumber value={insight.value} suffix={insight.suffix} inView={inView} />
              </h3>
              <p className="text-xs font-bold text-[#8A73FF] uppercase tracking-widest mb-3">{insight.label}</p>
              <p className="text-[#8E8E93] text-sm leading-relaxed">{insight.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {quotes.map((quote, i) => (
            <motion.div
              key={quote.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C1C1E] p-10 lg:p-12 rounded-[2.5rem] relative overflow-hidden group"
            >
              <Quote size={70} className="absolute -top-2 -right-2 text-white/5 rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700" />
              <p className="text-xl lg:text-2xl text-white font-medium mb-8 leading-relaxed italic relative z-10">
                "{quote.text}"
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#8A73FF]/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#8A73FF]">{quote.author[0]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{quote.author}</h4>
                  <p className="text-xs text-[#8E8E93] font-medium">{quote.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
