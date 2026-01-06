
import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { ExternalLinkIcon, GithubIcon } from '../constants';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web App', 'E-commerce', 'Dashboard'];
  
  const projects = [
    {
      title: 'Vanguard Trading Platform',
      category: 'Web App',
      image: 'https://picsum.photos/600/400?random=10',
      stack: ['React', 'D3.js', 'Tailwind'],
    },
    {
      title: 'Aura Minimalist Store',
      category: 'E-commerce',
      image: 'https://picsum.photos/600/400?random=11',
      stack: ['Next.js', 'Stripe', 'Supabase'],
    },
    {
      title: 'Nova Analytics Dashboard',
      category: 'Dashboard',
      image: 'https://picsum.photos/600/400?random=12',
      stack: ['React', 'Recharts', 'TypeScript'],
    },
    {
      title: 'Zenith SaaS Marketing',
      category: 'Web App',
      image: 'https://picsum.photos/600/400?random=13',
      stack: ['React', 'Framer Motion'],
    },
    {
      title: 'Pulse Fitness App',
      category: 'Web App',
      image: 'https://picsum.photos/600/400?random=14',
      stack: ['React Native', 'Firebase'],
    },
    {
      title: 'EcoMarket Platform',
      category: 'E-commerce',
      image: 'https://picsum.photos/600/400?random=15',
      stack: ['Next.js', 'Headless CMS'],
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-black">Featured Projects.</h2>
          </div>
          
          <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-xl glass">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeFilter === cat ? 'bg-slate-900 dark:bg-white text-white dark:text-black shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl glass transition-all hover:shadow-2xl hover:scale-[1.02]">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl font-black mt-1">{project.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="p-2 glass rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 glass rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-tighter px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
