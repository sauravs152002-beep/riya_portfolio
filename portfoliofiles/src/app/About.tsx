import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { LiquidGlassCursor } from './components/LiquidGlassCursor';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#Fdfdfd] text-[#111111] font-sans selection:bg-[#111111] selection:text-white">
      <LiquidGlassCursor />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-8 md:px-16 bg-[#Fdfdfd]/80 backdrop-blur-md"
      >
        <Link to="/" data-interactive className="text-[20px] font-bold tracking-tighter uppercase hover:opacity-50 transition-opacity">RT.</Link>
        <div className="flex gap-8">
          <Link to="/" data-interactive className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/40 hover:text-black transition-colors">// WORK</Link>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black">// ABOUT</span>
          <a href="mailto:hello@example.com" data-interactive className="text-[11px] uppercase tracking-[0.2em] font-semibold text-black/40 hover:text-black transition-colors">// CONTACT</a>
        </div>
      </motion.nav>

      {/* Content */}
      <div className="pt-40 px-8 md:px-32 pb-32 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Column (Sticky Title) */}
        <div className="lg:col-span-4 relative">
          <div className="lg:sticky lg:top-40">
            <Link to="/" data-interactive className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors mb-12">
              <ArrowLeft size={14} /> Back to Work
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(40px,5vw,60px)] font-bold tracking-tight leading-none mb-12"
            >
              My Story.
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[32px] bg-black/5"
            >
              <ImageWithFallback 
                src="/src/imports/DSC04403.JPG" 
                alt="Riya" 
                className="w-full h-full object-cover grayscale-[30%]"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column (Content) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 lg:col-start-6 flex flex-col gap-24"
        >
          
          {/* Who I Am */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-black/20" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Who I Am</h2>
            </div>
            <p className="text-[20px] md:text-[28px] text-black/80 leading-[1.5] font-light">
              I am a designer with a foundation in <span className="font-medium text-black">Sociology</span> and a focus on <span className="font-medium text-black">Product Design</span>. My background helps me understand people—their behaviors, contexts, and needs—and translate those insights into thoughtful, human-centered design solutions.
            </p>
          </section>

          {/* Design Philosophy */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-black/20" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Design Philosophy</h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="group border-b border-black/10 pb-6">
                <h3 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                  <span className="text-[12px] text-black/30 font-mono tracking-wider">01</span> Human-first
                </h3>
                <p className="text-[16px] text-black/60 pl-9">Design begins with understanding people deeply</p>
              </div>
              <div className="group border-b border-black/10 pb-6">
                <h3 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                  <span className="text-[12px] text-black/30 font-mono tracking-wider">02</span> Clarity over clutter
                </h3>
                <p className="text-[16px] text-black/60 pl-9">Simple, intuitive, and accessible experiences</p>
              </div>
              <div className="group border-b border-black/10 pb-6">
                <h3 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                  <span className="text-[12px] text-black/30 font-mono tracking-wider">03</span> Function + aesthetics
                </h3>
                <p className="text-[16px] text-black/60 pl-9">Useful, but also delightful</p>
              </div>
              <div className="group border-b border-black/10 pb-6">
                <h3 className="text-[18px] font-medium text-black mb-2 flex items-center gap-4">
                  <span className="text-[12px] text-black/30 font-mono tracking-wider">04</span> Curiosity-led
                </h3>
                <p className="text-[16px] text-black/60 pl-9">Questioning, exploring, and refining constantly</p>
              </div>
            </div>
          </section>

          {/* Journey */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-black/20" />
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">Journey</h2>
            </div>
            <div className="flex flex-col gap-8 relative">
              <div className="absolute left-[3px] top-4 bottom-4 w-[1px] bg-black/10 z-0" />
              
              <div className="relative z-10 flex gap-8 group">
                <div className="w-[7px] h-[7px] rounded-full bg-black mt-2 ring-4 ring-[#Fdfdfd]" />
                <div>
                  <h3 className="text-[18px] font-medium text-black mb-1">Master’s in Product Design</h3>
                  <p className="text-[16px] text-black/60">National Institute of Design</p>
                </div>
              </div>
              
              <div className="relative z-10 flex gap-8 group">
                <div className="w-[7px] h-[7px] rounded-full bg-black/30 mt-2 ring-4 ring-[#Fdfdfd] group-hover:bg-black transition-colors" />
                <div>
                  <h3 className="text-[18px] font-medium text-black mb-1">Graphic Designer</h3>
                  <p className="text-[16px] text-black/60">Travaura</p>
                </div>
              </div>
              
              <div className="relative z-10 flex gap-8 group">
                <div className="w-[7px] h-[7px] rounded-full bg-black/30 mt-2 ring-4 ring-[#Fdfdfd] group-hover:bg-black transition-colors" />
                <div>
                  <h3 className="text-[18px] font-medium text-black mb-1">Bachelor’s in Sociology</h3>
                  <p className="text-[16px] text-black/60">Maitreyi College, University of Delhi</p>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
      
      {/* Footer (Simplified for About page) */}
      <footer className="py-16 px-8 md:px-16 border-t border-black/5 bg-[#Fdfdfd] text-black flex justify-between items-center text-[11px] uppercase tracking-widest font-semibold text-black/40">
        <div>© 2026 RIYA TYAGI.</div>
        <div>DESIGNED WITH INTENT.</div>
      </footer>
    </div>
  );
}
