import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowDown, MoveRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { LiquidGlassCursor } from './components/LiquidGlassCursor';
import { projects } from './data/projects';
import profileImg from '../imports/DSC04403.JPG';

export default function Home() {
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);

  // Mouse interactivity for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -1 to 1
    mouseX.set((clientX / innerWidth) * 2 - 1);
    mouseY.set((clientY / innerHeight) * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const textParallaxX = useTransform(smoothMouseX, [-1, 1], [-30, 30]);
  const textParallaxY = useTransform(smoothMouseY, [-1, 1], [-30, 30]);
  const bgParallaxX = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const bgParallaxY = useTransform(smoothMouseY, [-1, 1], [-15, 15]);

  return (
    <div 
      className="bg-[#Fdfdfd] text-[#111111] font-sans selection:bg-[#111111] selection:text-white"
      style={{ position: 'relative' }}
    >
      <LiquidGlassCursor />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-8 md:px-16 bg-[#Fdfdfd]/80 backdrop-blur-md"
      >
        <div className="text-[20px] font-bold tracking-tighter uppercase">RT.</div>
        <div className="flex gap-8">
          <a href="#work" data-interactive className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/40 hover:text-black transition-colors">// WORK</a>
          <a href="#story" data-interactive className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/40 hover:text-black transition-colors">// ABOUT</a>
          <a href="#contact" data-interactive className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/40 hover:text-black transition-colors">// CONTACT</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ opacity: heroOpacity, y: heroY }}
        className="h-[100dvh] flex flex-col justify-center px-8 md:px-32 relative overflow-hidden"
      >
        <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-start mt-20">
          
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-black/20" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Product Designer</span>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col items-start w-full">
            {/* Main Heading */}
            <motion.div 
              style={{ x: textParallaxX, y: textParallaxY }}
              className="relative mb-8 text-left"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(24px,3vw,36px)] font-light text-black/60 tracking-tight leading-none mb-3"
              >
                Hi, I&apos;m
              </motion.h2>
              <h1 className="text-[clamp(48px,8vw,110px)] font-bold leading-[0.9] tracking-[-0.04em] text-[#1a1a1a]">
                Riya
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[600px] mb-12 text-left"
            >
              <p className="text-[15px] md:text-[18px] text-black/60 leading-[1.6]">
                I design experiences rooted in <span className="font-semibold text-black/80">human understanding</span>.<br className="hidden md:block"/>
                <span className="italic text-black/70 font-serif text-[17px] md:text-[20px]">Shaping simple, thoughtful solutions from complex realities.</span>
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10"
            >
              <a 
                href="#work" 
                data-interactive
                className="bg-[#111111] text-white px-8 py-4 rounded-full text-[13px] font-medium hover:bg-black hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-3"
              >
                Selected Work <ArrowDown size={14} />
              </a>
              <a 
                href="#story"
                data-interactive
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors"
              >
                Read My Story
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-8 md:left-32 flex items-center gap-4 z-20"
        >
          <div className="w-12 h-[1px] bg-black/20" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">Scroll to explore</span>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-8 md:px-16 bg-white min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-24 border-b border-black/10 pb-12">
            <h2 className="text-[40px] md:text-[64px] font-bold tracking-tight">Selected Work</h2>
            <div className="text-[14px] font-medium text-black/40">2025 — 2026</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link 
                  to={project.link} 
                  data-interactive 
                  className="block w-full rounded-[40px] bg-[#f8f8f8] p-4 pb-12 transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,0,0,0.06)] hover:-translate-y-2"
                >
                  <div className="w-full overflow-hidden rounded-[32px] aspect-[4/3] lg:aspect-[16/11] relative mb-12">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-[12px] font-bold uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 pointer-events-none"
                      >
                        View
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start px-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                      <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-black/30">{project.category}</span>
                    </div>
                    <div className="flex justify-between items-end w-full">
                      <h3 className="text-[32px] md:text-[42px] font-bold leading-[1] tracking-[-0.03em] text-[#1a1a1a]">{project.title}</h3>
                      <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="story" className="py-32 px-8 md:px-16 bg-[#Fdfdfd]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column (Sticky Title) */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-40">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(40px,5vw,60px)] font-bold tracking-tight leading-none mb-12"
              >
                My Story.
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[32px] bg-black/5"
              >
                <img 
                  src={profileImg} 
                  alt="Riya" 
                  className="w-full h-full object-cover grayscale-[30%]"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column (Content) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:col-start-6 flex flex-col gap-24"
          >
            {/* Who I Am */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-black/20" />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Who I Am</h3>
              </div>
              <p className="text-[20px] md:text-[28px] text-black/80 leading-[1.5] font-light">
                I am a designer with a foundation in <span className="font-medium text-black">Sociology</span> and a focus on <span className="font-medium text-black">Product Design</span>. My background helps me understand people—their behaviors, contexts, and needs—and translate those insights into thoughtful, human-centered design solutions.
              </p>
            </section>

            {/* Design Philosophy */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-black/20" />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Design Philosophy</h3>
              </div>
              <div className="flex flex-col gap-6">
                <div className="group border-b border-black/10 pb-6">
                  <h4 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                    <span className="text-[12px] text-black/30 font-mono tracking-wider">01</span> Human-first
                  </h4>
                  <p className="text-[16px] text-black/60 pl-9">Design begins with understanding people deeply</p>
                </div>
                <div className="group border-b border-black/10 pb-6">
                  <h4 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                    <span className="text-[12px] text-black/30 font-mono tracking-wider">02</span> Clarity over clutter
                  </h4>
                  <p className="text-[16px] text-black/60 pl-9">Simple, intuitive, and accessible experiences</p>
                </div>
                <div className="group border-b border-black/10 pb-6">
                  <h4 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                    <span className="text-[12px] text-black/30 font-mono tracking-wider">03</span> Function + aesthetics
                  </h4>
                  <p className="text-[16px] text-black/60 pl-9">Useful, but also delightful</p>
                </div>
                <div className="group border-b border-black/10 pb-6">
                  <h4 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                    <span className="text-[12px] text-black/30 font-mono tracking-wider">04</span> Curiosity-led
                  </h4>
                  <p className="text-[16px] text-black/60 pl-9">Questioning, exploring, and refining constantly</p>
                </div>
              </div>
            </section>

            {/* Journey */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-black/20" />
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Journey</h3>
              </div>
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-black/10 z-0" />
                
                <div className="relative z-10 flex gap-8 group">
                  <div className="w-[7px] h-[7px] rounded-full bg-black mt-2 ring-4 ring-[#Fdfdfd]" />
                  <div>
                    <h4 className="text-[18px] font-medium text-black mb-1">Master’s in Product Design</h4>
                    <p className="text-[16px] text-black/60">National Institute of Design</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex gap-8 group">
                  <div className="w-[7px] h-[7px] rounded-full bg-black/30 mt-2 ring-4 ring-[#Fdfdfd] group-hover:bg-black transition-colors" />
                  <div>
                    <h4 className="text-[18px] font-medium text-black mb-1">Graphic Designer</h4>
                    <p className="text-[16px] text-black/60">Travaura</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex gap-8 group">
                  <div className="w-[7px] h-[7px] rounded-full bg-black/30 mt-2 ring-4 ring-[#Fdfdfd] group-hover:bg-black transition-colors" />
                  <div>
                    <h4 className="text-[18px] font-medium text-black mb-1">Bachelor’s in Sociology</h4>
                    <p className="text-[16px] text-black/60">Maitreyi College, University of Delhi</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-8 md:px-16 border-t border-black/5 bg-[#Fdfdfd] text-black flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[11px] uppercase tracking-widest font-semibold text-black/40">© 2026 RIYA TYAGI.</div>
        <div className="flex gap-12 text-[11px] uppercase tracking-widest font-semibold text-black/40">
          <a href="mailto:hello@example.com" data-interactive className="hover:text-black transition-colors">Email</a>
          <a href="#" data-interactive className="hover:text-black transition-colors">LinkedIn</a>
        </div>
        <div className="text-[11px] uppercase tracking-widest font-semibold text-black/40">DESIGNED WITH INTENT.</div>
      </footer>
    </div>
  );
}
