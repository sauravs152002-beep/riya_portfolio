import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  MousePointer2,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Layout,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../app/components/figma/ImageWithFallback';
import { LiquidGlassCursor } from '../../app/components/LiquidGlassCursor';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

export default function CaseStudy() {
  return (
    <div 
      className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white"
      style={{ position: 'relative' }}
    >
      <LiquidGlassCursor />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-12 py-6 bg-black/80 backdrop-blur-md border-b border-[#222]">
        <Link to="/" className="flex items-center gap-2 group" data-interactive>
          <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#222] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-[#888]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </div>
          <span className="text-[12px] font-semibold text-[#888] group-hover:text-white transition-colors uppercase tracking-[0.1em]">Back</span>
        </Link>
        <div className="text-[10px] tracking-[0.18em] uppercase text-[#888] font-medium">ui/ux case study . 2026, fintech emi journey</div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-end px-12 pb-16">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 bg-[#0a0a0a] border border-[#222] rounded-full shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#888] font-medium">ui/ux case study . 2026, fintech emi journey</span>
          </div>
          <h1 className="text-[clamp(68px,11vw,156px)] font-bold leading-[0.9] tracking-[-0.03em] mb-12 text-white">
            Action.<br />
            <span className="text-[#888] font-light">Interactive.</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#222] max-w-[680px]">
            {[
              { label: 'Role', value: 'UI/UX Designer' },
              { label: 'Timeline', value: '4 Weeks' },
              { label: 'Platform', value: 'iOS / Android' },
              { label: 'Impact', value: '+24% Retention' }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-[10px] tracking-[0.14em] uppercase text-[#888] font-semibold mb-1">{item.label}</div>
                <div className="text-[13px] text-white font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Context Section */}
      <section className="border-t border-[#222] pb-24 bg-[#0a0a0a]">
        <div className="px-12 pt-32 mb-16">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-12">
              01 / The Context
              <div className="w-8 h-px bg-white" />
            </div>
            <h2 className="text-[clamp(38px,6vw,76px)] font-bold leading-[0.96] tracking-[-0.03em] mb-16 text-white">
              The Friction<br /><span className="text-[#888] font-light">of Awareness.</span>
            </h2>
          </Reveal>
        </div>

        <div className="px-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <Reveal>
            <div className="bg-black p-10 rounded-[24px] border border-[#222] h-full shadow-sm">
              <div className="text-[10px] tracking-[0.14em] uppercase text-[#aaa] font-bold mb-4">Before: The Problem</div>
              <h3 className="text-[22px] font-semibold mb-4 leading-tight text-white">Notifications as passive signals</h3>
              <p className="text-[13px] leading-[1.85] text-[#888] mb-6">Traditional payment reminders are dead-ends. A user sees an EMI alert, swipes it away, and forgets. Every step to pay is a potential drop-off.</p>
              <div className="space-y-3">
                {[
                  'Unlock phone', 'Find & open app', 'Login / authenticate', 'Navigate to EMI', 'Initiate payment'
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-[13px] text-[#888] font-medium">
                    <div className="w-6 h-6 rounded-full bg-[#0a0a0a] border border-[#333] flex items-center justify-center text-[10px] text-white shrink-0 shadow-sm">{i+1}</div>
                    {s}
                  </div>
                ))}
              </div>
              <div className="text-[12px] font-bold mt-8 text-[#aaa] flex items-center gap-2">
                <AlertCircle size={14} /> Result: High drop-off & CIBIL score impact.
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-[#0a0a0a] p-10 rounded-[24px] border border-[#333] h-full shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <div className="text-[10px] tracking-[0.14em] uppercase text-white font-bold mb-4">After: The Solution</div>
              <h3 className="text-[22px] font-semibold mb-4 leading-tight text-white">Notification as a GPay-style CIBIL gateway</h3>
              <p className="text-[13px] leading-[1.85] text-[#888] mb-6">By staying in the OS notification layer, the alert becomes a direct gateway to a GPay-style CIBIL score check. 5 steps collapse into 1.</p>
              <div className="space-y-3">
                {[
                  'See notification', 'Tap to check CIBIL Score', 'Face ID authenticates', 'Score dashboard loads'
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-[13px] text-white font-medium">
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold shrink-0">{i+1}</div>
                    {s}
                  </div>
                ))}
              </div>
              <div className="text-[12px] font-bold mt-8 text-white flex items-center gap-2">
                <CheckCircle2 size={14} /> Result: Zero friction, protected credit score.
              </div>
            </div>
          </Reveal>
        </div>

        {/* Wireframe Scroller */}
        <div className="px-12 overflow-hidden">
          <Reveal>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#888] font-bold mb-7">Early Wireframes — Exploring the OS Layer</div>
            <div className="flex gap-5 overflow-x-auto pb-8 no-scrollbar">
              {[
                { t: 'v1 — Basic alert', active: false },
                { t: 'v2 — Added CTA', active: false },
                { t: 'v3 — App branding', active: false },
                { t: 'v4 — Urgency colour', active: false },
                { t: 'Final — Selected', active: true }
              ].map((wf, i) => (
                <div key={i} className="shrink-0 w-[148px]">
                  <div className={`w-[148px] h-[260px] bg-[#0a0a0a] border rounded-[20px] p-4 flex flex-col gap-1.5 relative shadow-sm transition-all ${wf.active ? 'border-white ring-4 ring-white/10' : 'border-[#222]'}`}>
                    <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-9 h-1 bg-[#333] rounded-full" />
                    <div className="w-[44%] h-1.5 bg-[#333] rounded-full mb-1" />
                    <div className="w-[54%] h-[22px] bg-[#111] rounded-md mb-1.5" />
                    <div className="mt-auto bg-black border border-[#222] rounded-lg p-2 flex flex-col gap-1.5">
                      <div className="w-1/2 h-1 bg-[#333] rounded-full" />
                      <div className="w-[88%] h-1 bg-[#111] rounded-full" />
                      {i > 0 && (
                        <div className="flex gap-1.5 mt-1.5">
                          <div className="flex-1 h-6 bg-[#111] rounded-md" />
                          <div className={`flex-1 h-6 rounded-md ${i === 4 ? 'bg-white' : 'bg-[#333]'}`} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`text-[11px] font-medium text-center mt-4 ${wf.active ? 'text-white' : 'text-[#666]'}`}>{wf.t}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="border-t border-[#222] bg-black">
        <div className="px-12 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
            <Reveal>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-5">02 / The Experience</div>
              <h2 className="text-[clamp(38px,6vw,76px)] font-bold leading-[0.96] tracking-[-0.03em] mb-7 text-white">
                Experience the<br /><span className="text-[#888] font-light">Solution.</span>
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#888] max-w-[440px]">
                Four adaptive notification states. Each one interactive. Each one complete — from lock screen through Face ID to a seamless GPay-style CIBIL score dashboard. Try every flow yourself.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="pt-18">
                {[
                  { n: '4', d: 'Fully interactive prototype flows' },
                  { n: '~12s', d: 'Avg. time from notification to CIBIL dashboard' },
                  { n: '0', d: 'App launches required' }
                ].map((stat, i) => (
                  <div key={i} className="py-6 border-b border-[#222] first:border-t">
                    <div className="text-[42px] font-bold tracking-[-0.02em] text-white">{stat.n}</div>
                    <div className="text-[13px] font-medium text-[#888]">{stat.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { id: '01', t: 'Before Due Date', d: 'Gentle awareness. Calm notification with score check option.', s: 'Upcoming', c: '#666', bg: '#111' },
              { id: '02', t: 'Due Date', d: 'Direct urgency. Amber title. Immediate score check intent.', s: 'Due Today', c: '#888', bg: '#111' },
              { id: '03', t: 'Due Date Passed', d: 'Critical red. Empathetic but urgent. Check impact now.', s: 'Missed', c: '#aaa', bg: '#1a1a1a' },
              { id: '04', t: 'Last 2 Days', d: 'Final warning. Credit score at stake. Check CIBIL directly.', s: 'Critical', c: '#fff', bg: '#222' }
            ].map((sc, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-[#0a0a0a] p-8 rounded-[24px] border border-[#222] shadow-sm h-full flex flex-col gap-5 border-t-4" style={{ borderTopColor: sc.c }}>
                  <div className="flex justify-between items-center">
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold" style={{ color: sc.c }}>State {sc.id}</div>
                    <div className="px-2 py-1 rounded-md text-[10px] font-bold" style={{ backgroundColor: sc.bg, color: sc.c }}>{sc.s}</div>
                  </div>
                  <div>
                    <div className="text-[18px] font-bold text-white leading-tight">{sc.t}</div>
                    <div className="text-[13px] text-[#888] leading-[1.7] mt-3 font-medium">{sc.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-8 mt-16">
              <Link to="/prototype" className="inline-flex items-center gap-3.5 bg-white text-black px-8 py-4 rounded-full text-[15px] font-bold tracking-tight transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:bg-[#eee]" data-interactive>
                Experience all 4 flows
                <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={16} className="text-black" />
                </div>
              </Link>
              <span className="text-[11px] text-[#888] font-bold tracking-[0.08em] uppercase">Fully interactive · No install needed</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t border-[#222] pb-24 bg-[#0a0a0a]">
        <div className="px-12 pt-32 mb-16">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-12">
              03 / Design Process
              <div className="w-8 h-px bg-white" />
            </div>
            <h2 className="text-[clamp(38px,6vw,76px)] font-bold leading-[0.96] tracking-[-0.03em] mb-16 text-white">
              How I<br /><span className="text-[#888] font-light">Got Here.</span>
            </h2>
          </Reveal>
        </div>
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: '01', t: 'Research & Discovery', b: 'Interviewed 12 users who had missed EMI payments. Mapped the full journey from notification receipt to completion. 68% dismissed notifications, fearing immediate payment prompts.' },
            { n: '02', t: 'Insight Synthesis', b: 'Three core insights: (1) Users trusted biometrics at the OS layer. (2) Urgency language needed to be earned. (3) A GPay-style CIBIL score check felt less daunting than direct payment.' },
            { n: '03', t: 'Ideation & Constraint', b: 'Explored 20+ concepts. Key constraint: stay in the OS notification layer. No app launch. The transition to the CIBIL dashboard had to feel native.' },
            { n: '04', t: 'Progressive Urgency System', b: 'Designed a 4-state visual language where colour, copy, and CTA hierarchy adapt based on time-to-impact. Neutral whites escalate through amber to critical red.' },
            { n: '05', t: 'Prototyping & Testing', b: 'Built high-fidelity interactive prototypes for all 4 states. Usability tested with 8 participants. Iterated on Face ID timing and the GPay-style dashboard entrance.' },
            { n: '06', t: 'Final Delivery', b: 'Complete design system with 4 adaptive states, full biometric score-checking flows, and developer handoff. A 5-step process collapsed into a single-tap experience.' }
          ].map((pc, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bg-black border border-[#222] rounded-[24px] p-9 h-full hover:border-[#444] transition-colors">
                <div className="text-[56px] font-bold text-[#333] tracking-[-0.03em] leading-none mb-4">{pc.n}</div>
                <div className="text-[16px] font-bold text-white mb-3">{pc.t}</div>
                <div className="text-[13px] text-[#888] leading-[1.8] font-medium">{pc.b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Principles Section */}
      <section className="border-t border-[#222] pb-24 bg-black">
        <div className="px-12 pt-32 mb-16">
          <Reveal>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-12">
              04 / Design Principles
              <div className="w-8 h-px bg-white" />
            </div>
            <h2 className="text-[clamp(38px,6vw,76px)] font-bold leading-[0.96] tracking-[-0.03em] mb-16 text-white">
              What Drives<br /><span className="text-[#888] font-light">the System.</span>
            </h2>
          </Reveal>
        </div>
        <div className="px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Clock />, t: 'Contextual Urgency', b: 'Copy and colour adapt from neutral whites to alert reds as the due date approaches — a psychological nudge calibrated to the moment.' },
            { icon: <ShieldCheck />, t: 'Face ID Native', b: 'By staying in the OS layer, native biometric authentication replaces login flows entirely. Face ID is more secure and significantly faster.' },
            { icon: <TrendingUp />, t: 'CIBIL Safety Net', b: 'A dedicated "Final Warning" state surfaces credit score consequence as the primary message — providing a clear value proposition.' }
          ].map((pr, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#0a0a0a] border border-[#222] rounded-[24px] shadow-sm p-9 h-full">
                <div className="w-[48px] h-[48px] bg-white text-black rounded-full flex items-center justify-center mb-6">
                  {pr.icon}
                </div>
                <div className="text-[18px] font-bold text-white mb-3">{pr.t}</div>
                <div className="text-[14px] text-[#888] leading-[1.8] font-medium">{pr.b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="border-t border-[#222] bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="px-12 py-32">
            <Reveal>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white font-bold mb-7">05 / Impact</div>
              <h2 className="text-[clamp(38px,6vw,76px)] font-bold leading-[0.96] tracking-[-0.03em] mb-5 text-white">
                What<br /><span className="text-white font-light">Changed.</span>
              </h2>
              <p className="text-[15px] leading-[1.9] text-[#888] max-w-[360px] font-medium">
                Projected metrics based on usability testing, competitive benchmarking, and CIBIL check friction analysis across India's fintech landscape.
              </p>
            </Reveal>
          </div>
          <div className="px-12 py-32 lg:border-l border-[#222]">
            <Reveal delay={0.15}>
              <div className="space-y-0">
                {[
                  { n: '+24%', d: 'Projected EMI engagement retention improvement', c: '#ccc' },
                  { n: '−80%', d: 'Reduction in steps to check CIBIL score (5 → 1)', c: '#fff' },
                  { n: '4', d: 'Adaptive states with distinct visual & copy systems', c: '#aaa' },
                  { n: '~12s', d: 'Average time: notification to CIBIL dashboard', c: '#888' }
                ].map((row, i) => (
                  <div key={i} className="py-8 border-b border-[#222] first:border-t grid grid-cols-2 gap-4 items-center">
                    <div className="text-[56px] font-bold tracking-[-0.03em] leading-none" style={{ color: row.c }}>{row.n}</div>
                    <div className="text-[14px] text-[#888] leading-[1.7] font-medium">{row.d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#222] bg-black px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-3">
          <Link to="/" className="text-[15px] font-bold text-white hover:text-[#ccc] transition-colors" data-interactive>← Back to projects</Link>
          <div className="text-[12px] text-[#666] font-medium">© 2026. Fintech UI/UX Case Study.</div>
        </div>
        <div className="text-[11px] tracking-[0.2em] uppercase text-[#666] font-bold">End of Case Study</div>
      </footer>
    </div>
  );
}