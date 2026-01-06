
import React from 'react';
import GlassCard from '../components/GlassCard';
import { LayoutIcon, CodeIcon, SmartphoneIcon, LayersIcon } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating high-fidelity wireframes and user journeys that resonate with your target audience.',
      icon: <LayoutIcon className="w-8 h-8" />,
    },
    {
      title: 'Web Development',
      description: 'Building fast, accessible, and SEO-optimized websites using modern web technologies.',
      icon: <CodeIcon className="w-8 h-8" />,
    },
    {
      title: 'React Solutions',
      description: 'Scalable frontend applications with state management, component libraries, and custom hooks.',
      icon: <LayersIcon className="w-8 h-8" />,
    },
    {
      title: 'Mobile First',
      description: 'Responsive layouts that look stunning on everything from ultra-wide monitors to mobile phones.',
      icon: <SmartphoneIcon className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-100/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4 block">My Services</span>
          <h2 className="text-4xl md:text-5xl font-black">Elevating Brands.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} delay={index * 100} className="flex flex-col h-full">
              <div className="p-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl w-fit mb-6 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
