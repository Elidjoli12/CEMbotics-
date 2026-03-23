"use client";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function HeroCEMBotics() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-[90vh] bg-deep-blue text-white overflow-hidden font-sans pt-32 pb-16 flex items-center">
      {/* Background Accents (Glows Glassmorphism) */}
      <div className="absolute top-[0%] right-[-5%] w-[40rem] h-[40rem] bg-bright-orange/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* L'Image d'Impact : La "Main à la pâte" (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          className="relative h-[50vh] min-h-[400px] lg:h-[70vh] w-full rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] group order-last lg:order-first"
        >
           <Image 
             src="/images/ateliers/hands_on_wire.png" 
             alt="Enfant togolais connectant un circuit Arduino" 
             fill 
             className="object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/10 to-transparent pointer-events-none" />
           <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-xl">
                <p className="text-sm font-bold text-bright-orange uppercase tracking-wide">La pratique avant la théorie</p>
                <p className="text-white text-lg font-bold">Maison de Quartier, Adjidogomé</p>
              </div>
           </div>
        </motion.div>

        {/* Le Message Purgé & Aéré (Right Side) */}
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.2 }}}} className="space-y-8 order-first lg:order-last">
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
            Transformer l'avenir des enfants <br/>
            <span className="text-bright-orange relative inline-block">
               d'Adjidogomé
               <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
            </span> <br/>
            <span className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-light">par la robotique.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-xl text-gray-300 leading-relaxed font-light max-w-lg">
            L'accès à l'éducation technologique et aux outils makerspace ne devrait pas être un privilège. CEMBotics dote matériellement la jeunesse togolaise des compétences pratiques indispensables pour devenir les ingénieurs de notre futur.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-6">
            <a href="#don" className="px-8 py-5 rounded-full bg-bright-orange hover:bg-orange-500 transition-all text-deep-blue font-bold text-lg shadow-[0_0_30px_rgba(255,140,0,0.5)] flex items-center justify-center gap-2 group">
              Rejoindre l'Action
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#piliers" className="px-8 py-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md transition-all text-white font-bold text-lg text-center flex items-center justify-center gap-2">
              Nos Piliers
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
