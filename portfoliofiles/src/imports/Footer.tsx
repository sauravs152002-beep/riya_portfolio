import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 bg-[#Fdfdfd] text-[#8E8E93] text-center border-t border-gray-100">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-sm font-medium">Designed with</span>
        <Heart className="w-4 h-4 text-[#8A73FF] fill-[#8A73FF]" />
        <span className="text-sm font-medium">for better education</span>
      </div>
      <p className="text-xs tracking-wide uppercase opacity-60">© {new Date().getFullYear()} Schola Case Study. All rights reserved.</p>
    </footer>
  );
}