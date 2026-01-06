
import React from 'react';
import { ArrowRightIcon } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-slate-200 dark:bg-slate-800/30 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-slate-300 dark:bg-slate-900/40 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
          Available for Freelance Projects
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-600">
            Masterpieces.
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
          Senior Frontend Engineer specializing in building premium web applications 
          with React, TypeScript, and high-end modern design.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#portfolio" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center">
            View My Work
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </a>
          <a href="#contact" className="px-8 py-4 glass text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center">
            Let's Talk
          </a>
        </div>
        
        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 bg-slate-300 dark:bg-slate-700 rounded-full relative">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-slate-900 dark:bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
