import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { ResearchInsights } from '../components/ResearchInsights';
import { SolutionOverview } from '../components/SolutionOverview';
import { Prototype } from '../components/Prototype';
import { FeatureHighlights } from '../components/FeatureHighlights';
import { DesignProcess } from '../components/DesignProcess';
import { Wireframes } from '../components/Wireframes';
import { FinalUI } from '../components/FinalUI';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ResearchInsights />
        <SolutionOverview />
        <Prototype />
        <FeatureHighlights />
        <Wireframes />
        <DesignProcess />
        <FinalUI />

        {/* CTA Section */}
        <section id="cta" className="py-28 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#8A73FF] to-[#765EE3] p-12 lg:p-20 rounded-[3rem] text-center text-white relative overflow-hidden shadow-[0_20px_60px_rgba(138,115,255,0.3)]"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20"
                >
                  <Mail size={28} className="text-white" />
                </motion.div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
                  Designing better school experiences
                </h2>
                <p className="text-white/80 text-lg mb-10">
                  Ready to see how Schola can transform your school's communication? Explore the full design case study or get in touch.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#8A73FF] font-semibold rounded-2xl hover:bg-gray-50 transition-all shadow-xl flex items-center justify-center gap-2 text-sm">
                    View Portfolio <ArrowUpRight size={16} />
                  </button>
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#1C1C1E] text-white font-semibold rounded-2xl hover:bg-[#2C2C2E] transition-all flex items-center justify-center gap-2 text-sm">
                    Let's Connect
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#8A73FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-semibold text-[#1C1C1E] tracking-tight">Schola</span>
            </div>

            <p className="text-[#8E8E93] text-sm">
              &copy; 2026 Schola Case Study • Designed for Parents & Teachers
            </p>

            <div className="flex gap-6">
              {['Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-[#8E8E93] hover:text-[#8A73FF] text-sm font-medium transition-colors no-underline">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
