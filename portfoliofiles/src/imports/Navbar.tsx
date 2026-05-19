import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'solution', label: 'Solution' },
  { id: 'prototype', label: 'Prototype' },
  { id: 'process', label: 'Process' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      let current = '';
      for (const sec of sections) {
        if (sec && sec.getBoundingClientRect().top <= 200) current = sec.id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#8A73FF] origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 bg-[#8A73FF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-[#1C1C1E] tracking-tight text-lg">Schola</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 no-underline ${
                  activeSection === link.id
                    ? 'text-[#8A73FF] bg-[#F4F0FF]'
                    : 'text-[#8E8E93] hover:text-[#1C1C1E] hover:bg-[#F8F9FA]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-[#F8F9FA] text-[#1C1C1E]"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col items-center gap-2 pt-8 px-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileOpen(false)}
                className={`w-full text-center py-3 px-6 rounded-2xl text-sm font-semibold transition-all no-underline ${
                  activeSection === link.id ? 'bg-[#F4F0FF] text-[#8A73FF]' : 'text-[#8E8E93] hover:bg-[#F8F9FA]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};
