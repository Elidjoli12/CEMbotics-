"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut"} }}
      className="fixed top-0 left-0 right-0 z-[150] py-4 px-6 md:px-12 flex items-center justify-between bg-deep-blue/90 backdrop-blur-2xl border-b border-white/10 shadow-lg"
    >
      {/* Brand & Logo */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <Image src="/images/logo.png" alt="CEMBotics Logo" fill sizes="48px" className="object-contain p-1" />
        </div>
        <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-bright-orange to-yellow-400">
          CEMBotics <span className="text-white text-sm font-medium opacity-50 ml-1 tracking-normal">TOGO</span>
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden lg:flex gap-10 items-center text-sm font-bold text-white tracking-widest uppercase">
        <li><a href="#" className="hover:text-bright-orange transition-colors">Accueil</a></li>
        <li><a href="#piliers" className="hover:text-bright-orange transition-colors">Actions</a></li>
        <li><a href="#impact" className="hover:text-bright-orange transition-colors">Impact</a></li>
        <li>
          <a href="#don" className="px-8 py-3 bg-bright-orange text-deep-blue rounded-full hover:bg-orange-500 hover:text-white shadow-[0_0_20px_rgba(255,140,0,0.6)] transition-all transform hover:scale-105 flex items-center gap-2">
            ♥ DONNER
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
