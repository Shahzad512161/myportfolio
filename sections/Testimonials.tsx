
import React from 'react';
import GlassCard from '../components/GlassCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechNova",
      content: "Working with this developer was a game-changer for our platform. The attention to detail in the UI transitions is simply unmatched.",
      avatar: "https://picsum.photos/100/100?random=30"
    },
    {
      name: "Marcus Aurelius",
      role: "Founder, Zenith Design",
      content: "A truly senior perspective on frontend engineering. Not only do they code fast, but they architect systems that scale beautifully.",
      avatar: "https://picsum.photos/100/100?random=31"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Lead, EcoShop",
      content: "The ability to translate complex design systems into modular React components saved us months of development time.",
      avatar: "https://picsum.photos/100/100?random=32"
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4 block">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-black">Client Love.</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <GlassCard key={i} className="flex flex-col">
              <div className="flex items-center mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-slate-200 dark:border-white/20" />
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed">
                "{t.content}"
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
