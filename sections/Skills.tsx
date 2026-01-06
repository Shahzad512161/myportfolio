
import React from 'react';
import GlassCard from '../components/GlassCard';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 98 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Three.js / Canvas', level: 75 },
    { name: 'Performance Optimization', level: 92 },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-100/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4 block">Proficiency</span>
            <h2 className="text-4xl md:text-5xl font-black">Technical Toolkit.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold tracking-tight">{skill.name}</span>
                  <span className="text-xs font-black text-slate-500">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-slate-900 dark:bg-white transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex flex-wrap justify-center gap-4">
            {['Jest', 'Git', 'Vercel', 'AWS', 'Docker', 'Figma', 'Redux', 'GraphQL'].map((tag) => (
              <span key={tag} className="px-6 py-3 glass rounded-full text-sm font-bold hover:scale-105 transition-transform cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
