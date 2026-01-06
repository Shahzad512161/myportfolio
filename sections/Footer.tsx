
import React from 'react';
import { TwitterIcon, LinkedinIcon, GithubIcon, InstagramIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/10 glass">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black mb-2 tracking-tighter">ELITE<span className="text-slate-400">DEV</span></h3>
            <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Architecting the future.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-500 transition-colors"><TwitterIcon className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slate-500 transition-colors"><GithubIcon className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slate-500 transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slate-500 transition-colors"><InstagramIcon className="w-5 h-5" /></a>
          </div>
          
          <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Elite Portfolio. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
