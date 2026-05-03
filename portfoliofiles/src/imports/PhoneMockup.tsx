import React from 'react';

export const PhoneMockup = ({ children, scale = 1 }: { children: React.ReactNode, scale?: number }) => {
  return (
    <div 
      className="w-[375px] h-[812px] rounded-[48px] border-[14px] border-[#1C1C1E] bg-white overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.1)] shrink-0 mx-auto"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[32px] bg-[#1C1C1E] rounded-b-[24px] z-[999] flex justify-center items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
        <div className="w-12 h-1.5 rounded-full bg-white/20"></div>
      </div>
      
      <div className="w-full h-full relative" style={{ cursor: 'auto' }}>
        <div className="w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {children}
        </div>
      </div>
    </div>
  );
};
