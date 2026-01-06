
import React from 'react';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="w-full h-[500px] glass rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/1000?random=1" 
                alt="Developer Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl shadow-2xl border-slate-200 dark:border-white/10">
              <span className="text-4xl font-black block">8+</span>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Driven by Design, <br />Powered by Code.
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                I am a senior frontend architect with a passion for building seamless, 
                user-centric digital experiences. My journey started with a fascination 
                for how design impacts psychology, leading me into the world of web engineering.
              </p>
              <p>
                Currently based in a remote-first environment, I help brands and startups 
                scale their digital presence through robust React architectures and pixel-perfect 
                animations. I believe that every line of code should serve a purpose 
                and contribute to a larger, beautiful story.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-12">
              <GlassCard className="!p-4">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-sm text-slate-500">Projects Completed</p>
              </GlassCard>
              <GlassCard className="!p-4">
                <p className="text-2xl font-bold">40+</p>
                <p className="text-sm text-slate-500">Happy Clients</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
