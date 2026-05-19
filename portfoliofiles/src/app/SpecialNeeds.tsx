import React, { useRef, createContext, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Smartphone, Search, Brain, Rocket, ChevronRight, Menu, Home, 
  Layers, Eye, Share2, Mail, ExternalLink, PlayCircle, Info
} from 'lucide-react';
import { LiquidGlassCursor } from './components/LiquidGlassCursor';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { PhoneMockup } from "../imports/PhoneMockup";
import { ParentApp } from "../imports/ParentApp";
import { TeacherApp } from "../imports/TeacherApp";

import imgField from "../imports/image-8.png";
import imgCondition from "../imports/image-10.png";
import imgObs1 from "../imports/image-11.png";
import imgObs2 from "../imports/Screenshot_2026-04-30_181704.png";
import imgObs3 from "../imports/Screenshot_2026-04-30_181624.png";
import imgLandscape from "../imports/image-9.png";
import imgRaina from "../imports/Screenshot_2026-04-30_210227.png";
import imgMap from "../imports/image-12.png";
import imgConcept1 from "../imports/image-14.png";
import imgConcept2 from "../imports/image-15.png";
import imgConcept3 from "../imports/image-16.png";
import imgConcept4 from "../imports/image-17.png";
import imgConcept5 from "../imports/image-18.png";
import imgProto1 from "../imports/WhatsApp_Image_2026-05-01_at_1.39.04_AM-1.jpeg";
import imgProto2 from "../imports/WhatsApp_Image_2026-05-01_at_1.39.07_AM-1.jpeg";
import imgProto3 from "../imports/WhatsApp_Image_2026-05-01_at_1.39.07_AM_(1)-1.jpeg";
import imgProto4 from "../imports/WhatsApp_Image_2026-05-01_at_1.38.41_AM.jpeg";
import imgProto5 from "../imports/WhatsApp_Image_2026-05-01_at_1.38.27_AM_(1).jpeg";
import imgProto6 from "../imports/WhatsApp_Image_2026-05-01_at_1.38.26_AM.jpeg";
import imgFinalMockup1 from "../imports/Screenshot_2026-05-01_015508.png";
import imgFinalMockup2 from "../imports/Screenshot_2026-05-01_015525.png";
import imgFinalDelivery from "../imports/P1120845.PNG";
import imgProductCaller from "../imports/P1120856_(2).PNG";
import imgProductGame from "../imports/P1120828.PNG";
import imgProductComm from "../imports/P1120830.PNG";
import imgHero from "../imports/WhatsApp_Image_2026-05-03_at_9.53.37_PM_(1).jpeg";

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const containerRef = useContext(ScrollContext);
  // @ts-ignore - root accepts RefObject<Element>
  const isInView = useInView(ref, { once: true, margin: "-100px", root: containerRef || undefined });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className = "" }: { src: string; alt: string, className?: string }) => {
  const ref = useRef(null);
  const containerRef = useContext(ScrollContext);
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    container: containerRef || undefined,
    offset: ["start end", "end start"] 
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className={`w-full py-12 ${className}`} style={{ position: 'relative' }}>
      <motion.div style={{ y }} className="w-full rounded-[32px] md:rounded-[56px] overflow-hidden shadow-[0_32px_96px_rgba(0,0,0,0.07)] bg-white border border-black/[0.03]" data-interactive>
        <ImageWithFallback 
          src={src} 
          alt={alt} 
          className="w-full h-auto block hover:scale-[1.04] transition-transform duration-1000 ease-out" 
        />
      </motion.div>
    </div>
  );
};

const SectionHeader = ({ num, subtitle, title }: { num: string, subtitle: string, title: string }) => (
  <Reveal>
    <div className="flex flex-col gap-6 mb-16">
      <div className="flex items-center gap-4">
        <div className="w-10 h-[1px] bg-[#8A73FF]" />
        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#8A73FF]">{num}</span>
        <span className="text-[11px] tracking-[0.2em] uppercase text-black/20 font-bold">{subtitle}</span>
      </div>
      <h2 className="text-[clamp(40px,6vw,64px)] font-bold leading-[1] tracking-[-0.04em] max-w-[800px] text-[#1a1a1a]">
        {title}
      </h2>
    </div>
  </Reveal>
);

const FloatingGlassHeader = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const navItems = [
    { label: 'Context', icon: <Info size={18} />, id: 'research' },
    { label: 'Insights', icon: <Brain size={18} />, id: 'insights' },
    { label: 'Sandbox', icon: <PlayCircle size={18} />, id: 'prototypes' },
    { label: 'Solution', icon: <ExternalLink size={18} />, id: 'outcome' },
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <motion.header 
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-0 right-0 z-[100] flex justify-center pointer-events-none"
    >
      <div className="flex items-center gap-1.5 p-1.5 bg-[#Fdfdfd]/30 backdrop-blur-3xl rounded-full border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.08)] pointer-events-auto">
        <Link 
          to="/" 
          data-interactive 
          onMouseEnter={() => setHoveredTab('home')}
          onMouseLeave={() => setHoveredTab(null)}
          className="w-11 h-11 rounded-full bg-white/80 border border-black/5 flex items-center justify-center text-black/60 hover:text-[#8A73FF] hover:border-[#8A73FF]/20 transition-all duration-500 shadow-sm relative group"
        >
          <Home size={18} />
          <AnimatePresence>
            {hoveredTab === 'home' && (
              <motion.div 
                layoutId="nav-tooltip"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md"
              >
                Home
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
        
        <div className="h-6 w-[1px] bg-black/10 mx-1.5" />
        
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              data-interactive
              className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-full transition-all duration-500 group ${activeTab === item.id ? 'text-[#8A73FF]' : 'text-black/40 hover:text-black'}`}
            >
              {activeTab === item.id && (
                <motion.div 
                  layoutId="nav-active-bg"
                  className="absolute inset-0 bg-white border border-[#8A73FF]/10 shadow-[0_4px_12px_rgba(138,115,255,0.08)] rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`transition-transform duration-500 ${hoveredTab === item.id ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className="hidden md:block text-[11px] font-black uppercase tracking-wider">{item.label}</span>
              
              <AnimatePresence>
                {hoveredTab === item.id && (
                  <motion.div 
                    layoutId="nav-tooltip"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </nav>
        
        <div className="h-6 w-[1px] bg-black/10 mx-1.5" />
        
        <div className="flex items-center gap-1">
          <button 
            data-interactive
            className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#8A73FF] transition-all duration-500 shadow-lg shadow-black/10 active:scale-90"
          >
            <Share2 size={16} />
          </button>
          <button 
            data-interactive
            className="w-11 h-11 rounded-full bg-[#8A73FF] text-white flex items-center justify-center hover:bg-black transition-all duration-500 shadow-lg shadow-[#8A73FF]/20 active:scale-90"
          >
            <Mail size={16} />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default function SpecialNeeds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProto, setActiveProto] = useState<'parent' | 'teacher'>('parent');

  return (
    <ScrollContext.Provider value={containerRef}>
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto bg-[#Fdfdfd] text-[#111111] font-sans selection:bg-[#8A73FF] selection:text-white scrollbar-hide scroll-smooth" 
        style={{ position: 'relative', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <LiquidGlassCursor />
        <FloatingGlassHeader containerRef={containerRef} />
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-8 md:px-24 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-[0.05] pointer-events-none">
            <img 
              src={imgHero} 
              alt="" 
              className="w-full h-full object-cover grayscale brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
          </div>
          
          <div className="max-w-[1600px] mx-auto w-full">
            <Reveal>
              <div className="flex items-center gap-8 mb-16">
                <div className="w-20 h-[2px] bg-[#8A73FF]" />
                <span className="text-[13px] font-black uppercase tracking-[0.4em] text-[#8A73FF]">Case Study — 2026</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-8">
                  <h1 className="text-[clamp(80px,14vw,200px)] font-bold leading-[0.82] tracking-[-0.06em] text-[#1a1a1a] mb-16 uppercase">
                    सुनो<br />
                    <span className="text-black/5 font-light italic font-serif lowercase ml-[0.05em]">suno</span>
                  </h1>
                  
                  <p className="text-[24px] md:text-[36px] text-black/80 max-w-[900px] leading-[1.3] mb-20 font-light tracking-tight">
                    Bridging the communication gap for children with <span className="text-black font-medium border-b-4 border-[#8A73FF]/30 pb-1">Down syndrome</span> through tactile play and sensory expression.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-black/5">
                    {[
                      { label: 'Project Type', value: 'Inclusive Design' },
                      { label: 'User Group', value: 'Down Syndrome' },
                      { label: 'Role', value: 'Product Designer' },
                      { label: 'Duration', value: '14 Weeks' }
                    ].map((item, i) => (
                      <div key={i} className="group">
                        <div className="text-[10px] tracking-[0.25em] uppercase text-black/30 font-black mb-3 group-hover:text-[#8A73FF] transition-colors">{item.label}</div>
                        <div className="text-[16px] text-black/90 font-bold tracking-tight">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-4 lg:pt-20 hidden lg:flex flex-col items-end gap-24">
                  <div className="w-[1px] h-40 bg-linear-to-b from-black/0 via-black/20 to-black/0" />
                  <div className="flex flex-col items-end gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/20 text-right">Guided By</span>
                    <span className="text-[14px] font-bold text-black/60 text-right">G. Menon & S. Kumaresh</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Content Wrapper */}
        <div className="max-w-[1600px] mx-auto px-8 md:px-24 flex flex-col gap-80 pb-80">

          {/* 01 Field Research */}
          <section id="research" className="pt-40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
              <div className="lg:col-span-5">
                <SectionHeader num="01" subtitle="Research" title="Immersion into Special Education" />
                <Reveal delay={0.1}>
                  <div className="space-y-10">
                    <p className="text-[20px] text-black/50 leading-[1.7] font-light">
                      We spent weeks at <span className="text-black font-semibold">BPA India</span> and <span className="text-black font-semibold">Prabhat Foundation</span>, observing the daily lives of children who navigate the world through non-verbal channels.
                    </p>
                    <p className="text-[20px] text-black/50 leading-[1.7] font-light">
                      The goal was simple yet profound: to understand the <span className="italic text-black/80 font-serif">unspoken nuances</span> of their interaction—from the way they grip a toy to the subtle shifts in facial expression.
                    </p>
                    
                    <div className="pt-10 flex flex-col gap-6">
                      <div className="flex items-center gap-6 group" data-interactive>
                        <div className="w-14 h-14 rounded-2xl bg-[#8A73FF]/5 border border-[#8A73FF]/10 flex items-center justify-center text-[#8A73FF] group-hover:bg-[#8A73FF] group-hover:text-white transition-all duration-500">
                          <Search size={24} />
                        </div>
                        <div>
                          <h4 className="text-[16px] font-bold text-black">Ethnographic Observation</h4>
                          <p className="text-[13px] text-black/40 font-medium">100+ Hours of field research</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <ParallaxImage src={imgField} alt="Field Research Observation" />
              </div>
            </div>
          </section>

          {/* 02 Bio Insights */}
          <section id="insights">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative">
                  <ParallaxImage src={imgCondition} alt="Down Syndrome Impact Areas" />
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#8A73FF]/5 rounded-full blur-[100px] -z-10" />
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 sticky top-40">
                <SectionHeader num="02" subtitle="Insights" title="The Cognitive Landscape" />
                <Reveal delay={0.1}>
                  <p className="text-[20px] text-black/50 leading-[1.7] mb-16 font-light">
                    Down syndrome impacts cognitive processing and motor coordination. We mapped these constraints to identify opportunities for assistive intervention.
                  </p>

                  <div className="grid gap-6">
                    {[
                      { title: "Trisomy 21", desc: "Common (95%) genetic blueprint variation.", icon: <Brain size={20} /> },
                      { title: "Sensory Processing", desc: "Hypersensitivity to material texture and sound.", icon: <Layers size={20} /> },
                      { title: "Motor Controls", desc: "Low muscle tone affects grip and manipulation.", icon: <Smartphone size={20} /> }
                    ].map((insight, i) => (
                      <div key={i} className="group p-8 rounded-[40px] bg-white border border-black/[0.03] hover:border-[#8A73FF]/20 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-[#8A73FF]/5" data-interactive>
                        <div className="flex items-center gap-5 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-black/[0.02] flex items-center justify-center text-black/20 group-hover:bg-[#8A73FF]/10 group-hover:text-[#8A73FF] transition-all duration-500">
                            {insight.icon}
                          </div>
                          <h4 className="text-[20px] font-bold text-black group-hover:translate-x-1 transition-transform duration-500">{insight.title}</h4>
                        </div>
                        <p className="text-[16px] text-black/40 leading-relaxed font-medium pl-15">{insight.desc}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* 03 The Ecosystem (Eduo Highlight) */}
          <section id="prototypes" className="pt-20">
            <div className="w-full bg-[#111111] rounded-[64px] p-12 md:p-32 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#8A73FF]/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#8A73FF]/10 rounded-full blur-[150px] pointer-events-none" />
              
              <div className="max-w-[1000px] mb-32 relative z-10">
                <Reveal>
                  <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 mb-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8A73FF] animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white/60">Digital Bridge</span>
                  </div>
                  <h2 className="text-[clamp(48px,8vw,100px)] font-bold leading-[0.9] tracking-[-0.05em] mb-12">
                    Connecting the<br />Ecosystem.
                  </h2>
                  <p className="text-[24px] text-white/40 leading-relaxed font-light max-w-[700px]">
                    The Eduo platform acts as a high-fidelity bridge between caregivers and special education specialists, ensuring every insight is shared and every milestone celebrated.
                  </p>
                </Reveal>
              </div>

              <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-center relative z-10">
                <div className="xl:w-1/3 space-y-8">
                  <div className="flex flex-col gap-6">
                    {[
                      { id: 'parent', label: 'Parent Application', icon: <Smartphone size={20} />, desc: 'Real-time updates, home care logs, and direct messaging with educators.', color: 'text-[#8A73FF]', bg: 'bg-[#8A73FF]/10' },
                      { id: 'teacher', label: 'Teacher Console', icon: <Menu size={20} />, desc: 'Assessment tools, attendance tracking, and streamlined lesson planning.', color: 'text-[#6BA4FF]', bg: 'bg-[#6BA4FF]/10' }
                    ].map((item) => (
                      <div 
                        key={item.id}
                        className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col gap-4"
                      >
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg} ${item.color}`}>
                          {item.icon}
                        </div>
                        <h4 className="text-[22px] font-bold tracking-tight text-white">{item.label}</h4>
                        <p className="text-[15px] font-medium leading-relaxed text-white/40">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 rounded-[40px] bg-[#8A73FF]/10 border border-[#8A73FF]/20 mt-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A73FF]/20 blur-3xl rounded-full" />
                    <div className="flex items-center gap-3 text-[#8A73FF] mb-4 relative z-10">
                      <Eye size={18} />
                      <span className="text-[11px] font-black uppercase tracking-widest">Interactive Sandbox</span>
                    </div>
                    <p className="text-[14px] text-[#8A73FF]/80 leading-relaxed font-medium relative z-10">
                      The prototypes are fully functional simulations. Feel free to interact with both screens simultaneously.
                    </p>
                  </div>
                </div>

                <div className="xl:w-2/3 flex justify-center items-center relative min-h-[850px] w-full">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
                    {/* Parent App */}
                    <div className="relative group">
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                         <span className="text-[11px] font-black uppercase tracking-widest text-[#8A73FF] bg-[#8A73FF]/10 border border-[#8A73FF]/20 px-4 py-2 rounded-full whitespace-nowrap backdrop-blur-md">Parent View</span>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 transition-transform duration-700 hover:scale-[1.02] hover:z-30"
                      >
                        <PhoneMockup scale={0.85}>
                          <div className="w-full h-full bg-white relative">
                            <ParentApp />
                          </div>
                        </PhoneMockup>
                      </motion.div>
                    </div>

                    {/* Teacher App */}
                    <div className="relative group">
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                         <span className="text-[11px] font-black uppercase tracking-widest text-[#6BA4FF] bg-[#6BA4FF]/10 border border-[#6BA4FF]/20 px-4 py-2 rounded-full whitespace-nowrap backdrop-blur-md">Teacher View</span>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 transition-transform duration-700 hover:scale-[1.02] hover:z-30"
                      >
                        <PhoneMockup scale={0.85}>
                          <div className="w-full h-full bg-[#F8F9FA] relative">
                            <TeacherApp />
                          </div>
                        </PhoneMockup>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 04 Raina Observation */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <ParallaxImage src={imgRaina} alt="Raina" className="z-10" />
                  <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#8A73FF]/5 rounded-full blur-[120px] -z-10 animate-pulse" />
                </div>
              </div>
              <div className="lg:col-span-6">
                <SectionHeader num="03" subtitle="Persona" title="Raina: The Silent Expresser" />
                <Reveal delay={0.1}>
                  <div className="space-y-12">
                    <p className="text-[22px] text-black/60 leading-relaxed italic font-serif font-light">
                      "Expressions stay passive even when the want is clear. Raina represents the millions whose internal world is rich, but external tools are poor."
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="p-10 rounded-[48px] bg-white border border-black/[0.03] shadow-sm">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#8A73FF] mb-8">Observation Key</h4>
                        <ul className="space-y-5">
                          {[
                            { label: "State", val: "Passive" },
                            { label: "Trigger", val: "Tactile" },
                            { label: "Need", val: "Turn-taking" }
                          ].map((item, i) => (
                            <li key={i} className="flex justify-between items-center border-b border-black/[0.03] pb-4">
                              <span className="text-[14px] font-bold text-black/40">{item.label}</span>
                              <span className="text-[14px] font-black text-black">{item.val}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-10 rounded-[48px] bg-[#8A73FF] text-white shadow-2xl shadow-[#8A73FF]/20 flex flex-col justify-center">
                        <Rocket size={32} className="mb-6 opacity-60" />
                        <h4 className="text-[18px] font-bold mb-4">Design Pivot</h4>
                        <p className="text-[15px] font-medium leading-relaxed opacity-80">
                          Shift focus from speech generation to sensory-triggered communication boards.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* 05 Outcome (SUNO) */}
          <section id="outcome">
            <div className="w-full">
              <SectionHeader num="04" subtitle="Solution" title="SUNO: Listening Through Play" />
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mt-16">
                  <div className="lg:col-span-12">
                    <ParallaxImage src={imgFinalDelivery} alt="SUNO Final Product" />
                  </div>
                  
                  <div className="lg:col-span-5">
                    <div className="space-y-12 pr-12">
                      <h3 className="text-[36px] font-bold tracking-tight leading-[1.1]">The Final Manifestation.</h3>
                      <p className="text-[20px] text-black/40 leading-relaxed font-light">
                        A flower-shaped assistive paddle that blends into a child's toy collection while providing a robust communication vocabulary.
                      </p>
                      
                      <div className="flex items-center gap-12 pt-8">
                        <div className="text-center">
                          <div className="text-[32px] font-black text-[#8A73FF]">02</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-black/20">Sides</div>
                        </div>
                        <div className="w-[1px] h-10 bg-black/5" />
                        <div className="text-center">
                          <div className="text-[32px] font-black text-[#8A73FF]">Tactile</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-black/20">Input</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-3 gap-6">
                      {[imgProductCaller, imgProductGame, imgProductComm].map((img, i) => (
                        <div key={i} className="aspect-square rounded-[32px] overflow-hidden border border-black/[0.03] group relative" data-interactive>
                          <ImageWithFallback src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="py-32 px-8 md:px-24 border-t border-black/[0.03] bg-white text-black relative">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-6 space-y-12">
              <Link to="/" className="text-[16px] font-black text-[#8A73FF] flex items-center gap-3 group" data-interactive>
                <div className="w-12 h-12 rounded-full border border-[#8A73FF]/20 flex items-center justify-center group-hover:bg-[#8A73FF] group-hover:text-white transition-all duration-500">
                  <ArrowLeft size={20} />
                </div>
                Back to Archive
              </Link>
              <h2 className="text-[48px] font-bold tracking-tighter leading-none">Let&apos;s build for<br />inclusion.</h2>
            </div>
            
            <div className="md:col-span-6 flex flex-col md:items-end justify-between h-full py-2">
              <div className="flex gap-12">
                {['LinkedIn', 'Twitter', 'Email'].map(social => (
                  <a key={social} href="#" data-interactive className="text-[11px] font-black uppercase tracking-[0.3em] text-black/20 hover:text-[#8A73FF] transition-colors">{social}</a>
                ))}
              </div>
              <p className="text-[11px] text-black/20 uppercase tracking-[0.4em] font-black mt-20">© 2026 RIYA TYAGI • DESIGNED WITH INTENT</p>
            </div>
          </div>
        </footer>
      </div>
    </ScrollContext.Provider>
  );
}
