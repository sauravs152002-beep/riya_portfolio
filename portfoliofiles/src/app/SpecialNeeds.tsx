import React, { useRef, createContext, useContext } from 'react';
import { Link } from 'react-router';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { LiquidGlassCursor } from './components/LiquidGlassCursor';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

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

const ScrollContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const containerRef = useContext(ScrollContext);
  // @ts-ignore - root accepts RefObject<Element>
  const isInView = useInView(ref, { once: true, margin: "-100px", root: containerRef || undefined });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null);
  const containerRef = useContext(ScrollContext);
  
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    container: containerRef || undefined,
    offset: ["start end", "end start"] 
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div ref={ref} className="w-full py-8" style={{ position: 'relative' }}>
      <motion.div style={{ y }} className="w-full rounded-[16px] md:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] bg-white border border-black/5" data-interactive>
        <ImageWithFallback 
          src={src} 
          alt={alt} 
          className="w-full h-auto block hover:scale-[1.02] transition-transform duration-700 ease-out" 
        />
      </motion.div>
    </div>
  );
};

const SectionHeader = ({ num, subtitle, title }: { num: string, subtitle: string, title: string }) => (
  <Reveal>
    <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-black/40 mb-8">
      {num} / {subtitle}
      <div className="w-8 h-px bg-black/10" />
    </div>
    <h2 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.02em] mb-12 max-w-[600px] text-[#1a1a1a]">
      {title}
    </h2>
  </Reveal>
);

export default function SpecialNeeds() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={containerRef}>
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto bg-[#Fdfdfd] text-[#111111] font-sans selection:bg-[#111111] selection:text-white scrollbar-hide" 
        style={{ position: 'relative', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <LiquidGlassCursor />
        
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-8 md:px-16 bg-[#Fdfdfd]/80 backdrop-blur-md">
          <Link to="/" data-interactive className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/40 group-hover:text-black transition-colors">Back</span>
          </Link>
          <div className="text-[20px] font-bold tracking-tighter uppercase">RT.</div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-8 md:px-16">
          <div className="max-w-[1200px] mx-auto w-full">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-black/20" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Inclusive Design • 2024</span>
              </div>
              <h1 className="text-[clamp(48px,8vw,110px)] font-bold leading-[0.9] tracking-[-0.04em] text-[#1a1a1a] mb-12">
                SUNO<br />
                <span className="text-black/30 font-light italic font-serif">सुनो</span>
              </h1>
              <p className="text-[18px] md:text-[22px] text-black/60 max-w-[700px] leading-[1.6] mb-16">
                Listening Through Play — a personalised communication aid and play tool designed for a child with Down syndrome.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-black/10 max-w-[900px]">
                {[
                  { label: 'Focus', value: 'Communication Aid' },
                  { label: 'Subject', value: 'Down Syndrome' },
                  { label: 'Team', value: 'Nikhil, Saurav, Riya, Sourav' },
                  { label: 'Guided By', value: 'G. Menon & S. Kumaresh' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-black/40 mb-1">{item.label}</div>
                    <div className="text-[13px] text-black/80 font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 pb-32 flex flex-col gap-32">

          {/* 01 Field Research */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <SectionHeader num="01" subtitle="Field Research" title="Visit to BPA & Prabhat Foundation" />
                <Reveal delay={0.1}>
                  <p className="text-[16px] text-black/60 leading-[1.8]">
                    Founded in 1954, BPA India has grown into one of Asia's largest organisations working for people with disabilities, offering services from prevention and education to rehabilitation. Our visits helped us observe children with Down Syndrome engaged in learning, playing, and physiotherapy.
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <ParallaxImage src={imgField} alt="Field Research Observation" />
              </div>
            </div>
          </section>

          {/* 02 Understanding the Condition */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <ParallaxImage src={imgCondition} alt="Down Syndrome Impact Areas" />
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <SectionHeader num="02" subtitle="Understanding the Condition" title="Down Syndrome & How it Affects Children" />
                <Reveal delay={0.1}>
                  <p className="text-[16px] text-black/60 leading-[1.8] mb-6">
                    Down syndrome is a genetic condition that happens when there is an extra copy of chromosome 21 in the body, affecting how the body and brain grow and work.
                  </p>
                  <p className="text-[16px] text-black/60 leading-[1.8] mb-12">
                    We studied its profound impact areas including intellectual disability, speech difficulty, hearing issues, and motor coordination challenges, aiming to design around these precise constraints.
                  </p>

                  <div className="space-y-8 pt-8 border-t border-black/5">
                    <div>
                      <h3 className="text-[14px] font-bold uppercase tracking-wider mb-3 text-black/80">01. Trisomy 21 (Nondisjunction)</h3>
                      <p className="text-[15px] text-black/60 leading-[1.6]">
                        The most common type (95% of cases). It results in an embryo with three copies of chromosome 21 instead of the usual two. Prior to or at conception, a pair of 21st chromosomes in either the sperm or the egg fails to separate.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold uppercase tracking-wider mb-3 text-black/80">02. Translocation</h3>
                      <p className="text-[15px] text-black/60 leading-[1.6]">
                        Accounts for about 3% of cases. The total number of chromosomes in the cells remains 46; however, an additional full or partial copy of chromosome 21 attaches to another chromosome, usually chromosome 14.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold uppercase tracking-wider mb-3 text-black/80">03. Mosaicism</h3>
                      <p className="text-[15px] text-black/60 leading-[1.6]">
                        The rarest form (about 2% of cases). Mosaicism occurs when some cells contain the usual 46 chromosomes and some contain 47. Those with 47 chromosomes contain an extra copy of chromosome 21.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* 03 Field Observation */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <SectionHeader num="03" subtitle="Field Observation" title="Observations & Key Insights" />
                <Reveal delay={0.1}>
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-black/80">Observations</h3>
                      <ul className="space-y-4">
                        {[
                          "Children used rubber-based construction pieces in open-ended, self-directed play.",
                          "Their play included symbolic actions and imitating each other.",
                          "A mismatched LEGO block was immediately noticed and rejected.",
                          "The child used a marker on a wipeable sheet with printed black dots.",
                          "Circling a single dot was done easily.",
                          "Circling multiple dots caused loss of focus and incomplete work."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4 text-[16px] text-black/60 leading-[1.6]">
                            <span className="text-black/20 font-mono text-[14px] pt-1">0{i+1}</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-black/80">Key Insights</h3>
                      <ul className="space-y-4">
                        {[
                          "Children use open-ended materials for symbolic and imitative play with peers.",
                          "They are sensitive to material consistency and notice disruptions quickly.",
                          "Play flows better when materials remain consistent and uninterrupted.",
                          "Children engage better with simple, single-step tasks.",
                          "Increased task complexity leads to disengagement.",
                          "Repetitive or demanding instructions can trigger avoidance behaviors."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4 text-[16px] text-black/60 leading-[1.6]">
                            <span className="text-black/40 font-mono text-[14px] pt-1">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
              
              <div className="lg:col-span-7 space-y-8">
                <ParallaxImage src={imgObs1} alt="Observation Detail 1" />
                <div className="grid grid-cols-2 gap-8">
                  <ParallaxImage src={imgObs2} alt="Observation Detail 2" />
                  <ParallaxImage src={imgObs3} alt="Observation Detail 3" />
                </div>
              </div>
            </div>
          </section>

          {/* 04 Communication Methods */}
          <section>
            <div className="w-full">
              <div className="max-w-[700px] mb-16">
                <SectionHeader num="04" subtitle="Landscape" title="The Communication Methods" />
                <Reveal delay={0.1}>
                  <p className="text-[16px] text-black/60 leading-[1.8] mb-6">
                    "Communication is the ability to express needs, emotions, intentions, and choices — not just spoken words."
                  </p>
                  <p className="text-[16px] text-black/60 leading-[1.8]">
                    Communication is most effective for children with Down syndrome when paired with an external aid. It significantly reduces forced, body-based communication efforts which possess a higher chance of misinterpretation.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="relative p-8 md:p-12 bg-white rounded-[32px] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden" data-interactive>
                  {/* Background Accents */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#Fdfdfd] to-transparent pointer-events-none" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                    {/* Left Column: Natural/Body-Based */}
                    <div className="space-y-10">
                      <div>
                        <div className="text-[10px] tracking-widest uppercase font-bold text-black/30 mb-4">Internal</div>
                        <h4 className="text-[18px] font-bold text-black mb-6">Natural Communication</h4>
                        <div className="space-y-4">
                          {[
                            { title: "Physical Cues", items: ["Facial Expressions", "Body Movements", "Gestures"] },
                            { title: "Verbalizations", items: ["Crying", "Noises", "Single Words"] }
                          ].map((group, idx) => (
                            <div key={idx} className="p-5 rounded-2xl bg-[#Fdfdfd] border border-black/[0.03]">
                              <span className="text-[12px] font-bold text-black/40 block mb-2">{group.title}</span>
                              <div className="flex flex-wrap gap-2">
                                {group.items.map(item => (
                                  <span key={item} className="px-2 py-1 bg-black/5 rounded text-[13px] text-black/60">{item}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle Column: External Aids */}
                    <div className="lg:col-span-2">
                      <div className="text-[10px] tracking-widest uppercase font-bold text-black/30 mb-4">External Support</div>
                      <h4 className="text-[18px] font-bold text-black mb-6">Augmentative and Alternative Communication (AAC)</h4>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Unaided */}
                        <div className="p-6 rounded-3xl bg-black/[0.02] border border-black/5">
                          <h5 className="text-[15px] font-bold mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                            Unaided Systems
                          </h5>
                          <p className="text-[13px] text-black/50 mb-4 italic leading-relaxed">Does not require any external tool or equipment.</p>
                          <div className="space-y-3">
                            {["Sign Language", "Keyword Signing", "Lámh", "Makaton"].map(item => (
                              <div key={item} className="flex items-center gap-3 text-[14px] text-black/70">
                                <div className="w-1 h-1 rounded-full bg-black/10" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Aided */}
                        <div className="p-6 rounded-3xl bg-black/[0.04] border border-black/5 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ImageWithFallback src={imgLandscape} alt="Icon" className="w-12 h-12 grayscale invert" />
                          </div>
                          <h5 className="text-[15px] font-bold mb-4 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                            Aided Systems
                          </h5>
                          <p className="text-[13px] text-black/50 mb-4 italic leading-relaxed">Requires an external tool or equipment.</p>
                          
                          <div className="space-y-6">
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-tight text-black/30 block mb-2">No-Tech / Low-Tech</span>
                              <div className="flex flex-wrap gap-2">
                                {["PECS", "Communication Boards", "Visual Schedules", "Communication Books"].map(item => (
                                  <span key={item} className="px-2 py-1 bg-white rounded border border-black/5 text-[12px] text-black/60">{item}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-tight text-black/30 block mb-2">High-Tech (SGDs)</span>
                              <div className="flex flex-wrap gap-2">
                                {["Proloquo2Go", "TouchChat", "Eye-Gaze Devices", "Dedicated SGDs"].map(item => (
                                  <span key={item} className="px-2 py-1 bg-black text-white rounded text-[12px]">{item}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Thread Note */}
                  <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="text-[13px] text-black/40 italic">
                      Note: Most individuals use a combination of these methods (Multimodal Communication).
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black/40">Visual</div>
                      <div className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black/40">Tactile</div>
                      <div className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black/40">Auditory</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 05 Meet Raina */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="w-full max-w-[480px]">
                  <ParallaxImage src={imgRaina} alt="Raina" />
                </div>
              </div>
              <div className="lg:col-span-6">
                <SectionHeader num="05" subtitle="User Persona" title="Meet Raina" />
                <Reveal delay={0.1}>
                  <p className="text-[16px] text-black/60 leading-[1.8] mb-8">
                    Raina is our primary user and design subject. A full-day behavioural observation highlighted her unique interactions: passive expressions during iPad turns, idle time fidgeting with a thread necklace, and spontaneous bursts of happiness. 
                  </p>
                  <div className="p-6 rounded-2xl bg-black/[0.02] border border-black/5 space-y-4 mb-12">
                    <div className="flex justify-between items-center pb-4 border-b border-black/5">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-black/30">Subject</span>
                      <span className="text-[14px] font-semibold text-black">Raina</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-black/5">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-black/30">Context</span>
                      <span className="text-[14px] font-semibold text-black">Prabhat Foundation</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[12px] font-bold uppercase tracking-wider text-black/30">Focus Area</span>
                      <span className="text-[14px] font-semibold text-black">Symbolic Play</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-[14px] font-bold uppercase tracking-wider text-black/80">Full Day Behavioural Observation</h3>
                    <div className="space-y-4 text-[15px] text-black/60 leading-[1.6]">
                      <p>
                        A day at Raina’s foundation centre starts with a routine morning prayer and exercise session. She sits with her peer Vishwa and communicates using gestures and small facial expressions.
                      </p>
                      <p>
                        She feels discomfort because her clothes shift and her hair is tied in a ponytail. This is seen through repeated actions where she adjusts her clothes and tries to loosen her hair slightly.
                      </p>
                      <p>
                        She takes part in the routine morning exercise at the centre, but often loses focus and gets distracted.
                      </p>
                      <p>
                        Even when there is a clear want, expression stays very passive. Only small hints are given, so the need is often not noticed. In this situation, she tries to ask for her turn to draw on the iPad, but her effort is not understood and is ignored by her classmates.
                      </p>
                      <p>
                        Often fidgets with a thread necklace when there is no activity to do. Rubs the nose due to discomfort, but this suddenly changes into a burst of happiness with clapping.
                      </p>
                      <p>
                        Shows appreciation clearly by clapping and smiling in the classroom.
                      </p>
                    </div>

                    <div className="pt-12 mt-12 border-t border-black/5">
                      <h3 className="text-[14px] font-bold uppercase tracking-wider text-black/80 mb-8">Observation Mapping</h3>
                      <div className="bg-white rounded-3xl border border-black/5 p-4 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.03)] overflow-hidden">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                              { time: "09:00", activity: "Prayer & Exercise", state: "Distracted", details: "Loses focus during routine exercise at center." },
                              { time: "10:30", activity: "Social Interaction", state: "Passive", details: "Sits with peer Vishwa. Uses gestures and small facial expressions." },
                              { time: "11:15", activity: "Sensory Discomfort", state: "Agitated", details: "Clothes shift & hair ponytail causes discomfort. Seen through repeated adjustments." },
                              { time: "12:00", activity: "Digital Play", state: "Ignored", details: "Wants turn on iPad. Effort is not understood by classmates." },
                              { time: "13:30", activity: "Idle Time", state: "Fidgety", details: "Fidgets with thread necklace when there is no activity to do." },
                              { time: "14:15", activity: "Sudden Change", state: "Burst", details: "Rubs nose from discomfort, then suddenly claps in happiness." },
                              { time: "15:00", activity: "End of Day", state: "Appreciative", details: "Shows appreciation clearly by clapping and smiling." }
                            ].map((item, i) => (
                              <div key={i} className="group">
                                <div className="text-[11px] font-mono text-black/30 mb-2">{item.time}</div>
                                <div className="text-[14px] font-bold text-black mb-1">{item.activity}</div>
                                <div className="inline-block px-2 py-0.5 bg-black/5 rounded text-[10px] font-bold uppercase tracking-wider text-black/40 mb-3">{item.state}</div>
                                <p className="text-[13px] text-black/50 leading-relaxed group-hover:text-black/70 transition-colors">{item.details}</p>
                              </div>
                            ))}
                         </div>
                         <div className="mt-12 pt-8 border-t border-black/5 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                            
                         </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* 06 Problem Framing & Direction */}
          <section>
            <div className="max-w-[1200px] mx-auto">
              <SectionHeader num="06" subtitle="Strategy" title="Problem Framing & Design Direction" />
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="space-y-4">
                    <h3 className="text-[14px] font-bold uppercase tracking-wider text-black/80">Core Problem</h3>
                    <p className="text-[16px] text-black/60 leading-[1.8]">
                      Raina is aware of her needs but often does not communicate them clearly, especially in social settings, resulting in unmet needs.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-[14px] font-bold uppercase tracking-wider text-black/80">Design Opportunity</h3>
                    <p className="text-[16px] text-black/60 leading-[1.8]">
                      To support Raina in expressing her needs through a non-verbal, personalised communication aid that builds on her interests and existing behaviours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[14px] font-bold uppercase tracking-wider text-black/80">Design Direction</h3>
                    <p className="text-[16px] text-black/60 leading-[1.8]">
                      Design a non-verbal communication aid that allows Raina to express needs through interaction rather than speech. Include engaging, game-like elements based on ordering, sequencing, and colour to sustain attention and naturally create moments for communication.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[14px] font-bold uppercase tracking-wider text-black/80">Scope</h3>
                    <p className="text-[16px] text-black/60 leading-[1.8]">
                      This is a child-specific design, not a universal solution for all children with Down syndrome.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 07 Things I Need to Express */}
          <section>
            <div className="max-w-[1200px] mx-auto">
              <SectionHeader num="07" subtitle="Expression" title="Things I Need to Express" />
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {[
                    { label: "Discomfort", icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" />
                      </svg>
                    )},
                    { label: "Move", icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                        <path d="M13 5l7 7-7 7M5 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )},
                    { label: "Sorry", icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )},
                    { label: "Want", icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )},
                    { label: "Help", icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m0 4h.01" strokeLinecap="round" />
                      </svg>
                    )},
                    { label: "More/Less", icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" className="translate-y-2 opacity-20" />
                      </svg>
                    )}
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-all group" data-interactive>
                      <div className="text-black/40 group-hover:text-black transition-colors mb-4">
                        {item.icon}
                      </div>
                      <span className="text-[13px] font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* 08 Concepts & Sketching */}
          <section>
            <div className="max-w-[1200px] mx-auto">
              <SectionHeader num="08" subtitle="Ideation" title="Early Concepts & Sketching" />
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { img: imgConcept1, title: "Attention Caller", desc: "Wearable or handheld devices designed to bridge the gap between Raina and her peers." },
                    { img: imgConcept2, title: "Mechanism Study", desc: "Exploring tactile feedback and physical triggers for non-verbal expression." },
                    { img: imgConcept3, title: "Form Exploration", desc: "Defining the silhouette and grip requirements for a child-specific tool." },
                    { img: imgConcept4, title: "Interaction Model", desc: "Early mapping of how sensory play connects to the communication output." },
                    { img: imgConcept5, title: "Final Direction Sketch", desc: "Converging on a playful, approachable form factor that feels like a toy but acts as a tool." }
                  ].map((concept, i) => (
                    <div key={i} className="group">
                      <div className="aspect-[4/3] rounded-2xl bg-white border border-black/5 overflow-hidden mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-700">
                        <ImageWithFallback 
                          src={concept.img} 
                          alt={concept.title} 
                          className="w-full h-full object-contain p-8 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <h4 className="text-[14px] font-bold uppercase tracking-wider text-black/80 mb-2">{concept.title}</h4>
                      <p className="text-[14px] text-black/50 leading-relaxed">{concept.desc}</p>
                    </div>
                  ))}
                  <div className="hidden lg:flex flex-col justify-center p-8 rounded-2xl border border-dashed border-black/10 bg-black/[0.01]">
                    <span className="text-[12px] font-bold uppercase tracking-widest text-black/20 mb-2">Process Note</span>
                    <p className="text-[13px] italic text-black/40 leading-relaxed">
                      "Ideation focused on removing the 'medical' feel of communication aids, replacing it with a language of play that Raina already understood."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 09 Prototype @1 for Raina */}
          <section>
            <div className="max-w-[1200px] mx-auto">
              <SectionHeader num="09" subtitle="Development" title="Prototype @1 for Raina" />
              <Reveal delay={0.1}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { img: imgProto1, caption: "Testing basic mechanics" },
                    { img: imgProto2, caption: "Form study v1" },
                    { img: imgProto3, caption: "Tactile surface testing" },
                    { img: imgProto4, caption: "Grip and weight check" },
                    { img: imgProto5, caption: "Mechanism refinement" },
                    { img: imgProto6, caption: "Raina's first interaction" }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="aspect-[3/4] rounded-2xl bg-white border border-black/5 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-700">
                        <ImageWithFallback 
                          src={item.img} 
                          alt={item.caption} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                        />
                      </div>
                      <p className="mt-3 text-[12px] font-medium text-black/40 uppercase tracking-widest text-center group-hover:text-black/60 transition-colors">
                        {item.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-12 max-w-[700px]">
                  <p className="text-[15px] italic text-black/50 leading-relaxed border-l-2 border-black/5 pl-6">
                    "The first physical manifestation of our research. These low-fidelity mockups were crucial for understanding how Raina would physically manipulate the object before we committed to final materials."
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 10 Insights from Testing */}
          <section>
            <div className="max-w-[1200px] mx-auto">
              <SectionHeader num="10" subtitle="Evaluation" title="Insights from Testing" />
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      num: "01",
                      title: "Form and Ergonomics",
                      desc: "The rectangular board was too large and heavy for Raina's small hands. It lacked a clear 'handle' or point of engagement."
                    },
                    {
                      num: "02",
                      title: "Interaction and Feedback",
                      desc: "The rotating mechanism required too much precision. Raina preferred a more tactile, 'push' or 'pull' interaction."
                    },
                    {
                      num: "03",
                      title: "Visual Language",
                      desc: "The distinction between the game side and the communication side needs to be more intuitive through color or texture."
                    }
                  ].map((insight, i) => (
                    <div key={i} className="p-10 rounded-[40px] bg-white border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-700 group flex flex-col items-start" data-interactive>
                      <div className="w-10 h-10 rounded-full bg-black/[0.03] flex items-center justify-center text-[11px] font-bold text-black/30 group-hover:bg-black group-hover:text-white transition-all duration-500 mb-8">
                        {insight.num}
                      </div>
                      <h4 className="text-[20px] font-bold text-[#1a1a1a] mb-4 leading-tight">{insight.title}</h4>
                      <p className="text-[15px] text-black/50 leading-relaxed">{insight.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* 11 Final Mockup Model */}
          <section>
            <div className="w-full">
              <SectionHeader num="11" subtitle="Refinement" title="Final Mockup Model" />
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  <div className="rounded-[24px] md:rounded-[40px] overflow-hidden bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] group" data-interactive>
                    <ImageWithFallback 
                      src={imgFinalMockup1} 
                      alt="Final Mockup Model - Side A" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    />
                  </div>
                  <div className="rounded-[24px] md:rounded-[40px] overflow-hidden bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] group" data-interactive>
                    <ImageWithFallback 
                      src={imgFinalMockup2} 
                      alt="Final Mockup Model - Side B" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="max-w-[700px] mt-16">
                  <p className="text-[16px] text-black/60 leading-[1.8]">
                    The final mockup bridges the gap between the initial prototypes and the production model. It incorporates the ergonomic feedback from Raina's testing—introducing a more defined grip, tactile surface feedback, and a clearer visual hierarchy between the communication and play sides.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* 12 SUNO Product */}
          <section>
            <div className="w-full">
              <div className="max-w-[700px] mb-16">
                <SectionHeader num="12" subtitle="Final Delivery" title="Two Sides, One Tool" />
                <Reveal delay={0.1}>
                  <p className="text-[16px] text-black/60 leading-[1.8]">
                    SUNO has two sides — one for communication, one for play. Together they make a single tool Raina can carry, use, and grow with. 
                    <br/><br/>
                    The final form evolved from the rectangular board into an approachable, flower-shaped paddle that is undeniably playful, highly grippable, and distinctly Raina's own.
                  </p>
                </Reveal>
              </div>
              
              <Reveal delay={0.2}>
                <div className="max-w-[1000px] mx-auto">
                  <ParallaxImage 
                    src={imgFinalDelivery} 
                    alt="SUNO Final Product - Two Sides, One Tool" 
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* 13 SUNO Detailed Views */}
          <section className="pb-20">
            <div className="w-full">
              <Reveal>
                <h1 className="text-[clamp(40px,6vw,80px)] font-bold leading-[0.9] tracking-[-0.04em] text-[#1a1a1a] mb-20 text-center">
                  SUNO<br />
                  <span className="text-black/30 font-light italic font-serif">सुनो</span>
                </h1>
              </Reveal>

              <div className="space-y-32">
                <Reveal delay={0.1}>
                  <div className="max-w-[900px] mx-auto">
                    <div className="aspect-video rounded-[32px] overflow-hidden bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] mb-8">
                      <ImageWithFallback 
                        src={imgProductCaller} 
                        alt="The Caller" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/80 mb-2">Communication side (with illustrated cue cards)</h3>
                      
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="max-w-[900px] mx-auto">
                    <div className="aspect-video rounded-[32px] overflow-hidden bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] mb-8">
                      <ImageWithFallback 
                        src={imgProductGame} 
                        alt="Game Side" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/80 mb-2">The Caller(central orange hub)</h3>
                      
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="max-w-[900px] mx-auto">
                    <div className="aspect-video rounded-[32px] overflow-hidden bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.04)] mb-8">
                      <ImageWithFallback 
                        src={imgProductComm} 
                        alt="Communication Side" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/80 mb-2">Game side(with shapes and textures)</h3>
                      
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="py-16 px-8 md:px-16 border-t border-black/5 bg-[#Fdfdfd] text-black flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-[14px] font-semibold text-black hover:text-black/60 transition-colors" data-interactive>← Back to projects</Link>
            <div className="text-[11px] text-black/40 uppercase tracking-widest font-semibold">© 2026. Special Needs Inclusive Case Study.</div>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-black/40 font-bold">End of Case Study</div>
        </footer>
      </div>
    </ScrollContext.Provider>
  );
}