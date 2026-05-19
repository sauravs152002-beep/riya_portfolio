import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Mail, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { LiquidGlassCursor } from '../../app/components/LiquidGlassCursor';

import { Navbar } from '../Navbar';
import { Hero } from '../Hero';
import { Problem } from '../Problem';
import { ResearchInsights } from '../ResearchInsights';
import { SolutionOverview } from '../SolutionOverview';
import { FeatureHighlights } from '../FeatureHighlights';
import { Process } from '../Process';
import { DesignProcess } from '../DesignProcess';
import { FinalUI } from '../FinalUI';
import { Footer } from '../Footer';

import { ParentApp } from '../App-1';
import { TeacherApp } from '../TeacherApp';

export default function Website() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-[#1C1C1E] min-h-screen font-sans selection:bg-[#8A73FF] selection:text-white">
      <LiquidGlassCursor />
      
      {/* Header Navigation */}
      <Navbar />

      <main>
        <Hero />
        
        {/* Case Study Sections */}
        <Problem />
        <ResearchInsights />
        <SolutionOverview />
        <FeatureHighlights />
        <Process />
        <DesignProcess />
        <FinalUI />

        {/* Live Interactive Prototypes Section */}
        <section id="prototype" className="px-6 py-32 md:px-12 bg-gray-50/50">
          <div className="text-center mb-20">
            <h2 className="text-[36px] font-bold tracking-tight mb-4 text-[#1C1C1E]">
              Interactive Prototypes
            </h2>
            <p className="text-[#8E8E93] text-[18px] max-w-2xl mx-auto leading-relaxed">
              Experience the actual build of Schola Connect. These interactive prototypes run live code bridging the teacher and parent experience.
            </p>
          </div>
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Parent App Mockup */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10">
                <h3 className="text-[24px] font-bold tracking-tight mb-2 text-[#1C1C1E]">Parent Experience</h3>
                <p className="text-[#8E8E93] text-[15px] max-w-sm mx-auto leading-relaxed">Stay updated with real-time notifications, track attendance, book PTM slots, and message teachers.</p>
              </div>
              <div className="w-[331.5px] h-[717.4px] relative flex justify-center group">
                <div className="w-[390px] h-[844px] rounded-[55px] border-[14px] border-[#1C1C1E] bg-[#1C1C1E] overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-transform duration-700 -translate-x-1/2 -translate-y-1/2 scale-[0.85] group-hover:scale-[0.87] ring-1 ring-white/10 shrink-0 absolute top-1/2 left-1/2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-[#1C1C1E] rounded-b-[20px] z-[999] flex justify-center items-center">
                    <div className="w-12 h-1 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-[#1C1C1E] rounded-full z-[999] overflow-hidden"><div className="w-full h-full bg-white/20"></div></div>
                  <div className="w-full h-full rounded-[41px] overflow-hidden bg-black relative" style={{ cursor: 'auto' }}>
                    <div className="w-full h-full">
                      <ParentApp />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher App Mockup */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10">
                <h3 className="text-[24px] font-bold tracking-tight mb-2 text-[#1C1C1E]">Teacher Dashboard</h3>
                <p className="text-[#8E8E93] text-[15px] max-w-sm mx-auto leading-relaxed">Manage attendance quickly, approve leave requests, organize schedules, and monitor student performance.</p>
              </div>
              <div className="w-[331.5px] h-[717.4px] relative flex justify-center group">
                <div className="w-[390px] h-[844px] rounded-[55px] border-[14px] border-[#1C1C1E] bg-[#1C1C1E] overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-transform duration-700 -translate-x-1/2 -translate-y-1/2 scale-[0.85] group-hover:scale-[0.87] ring-1 ring-white/10 shrink-0 absolute top-1/2 left-1/2">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[34px] bg-[#1C1C1E] rounded-b-[20px] z-[999] flex justify-center items-center">
                    <div className="w-12 h-1 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-[#1C1C1E] rounded-full z-[999] overflow-hidden"><div className="w-full h-full bg-white/20"></div></div>
                  <div className="w-full h-full rounded-[41px] overflow-hidden bg-black relative" style={{ cursor: 'auto' }}>
                    <div className="w-full h-full">
                      <TeacherApp />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-white relative overflow-hidden">
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
                  <Link to="/" data-interactive className="w-full sm:w-auto px-8 py-4 bg-white text-[#8A73FF] font-semibold rounded-2xl hover:bg-gray-50 transition-all shadow-xl flex items-center justify-center gap-2 text-sm no-underline">
                    Back to Portfolio <ArrowUpRight size={16} />
                  </Link>
                  {/* Back to Portfolio action icon */}

                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
