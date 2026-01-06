
import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { SendIcon, MailIcon, MapPinIcon, PhoneIcon } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Connect.</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently taking on new projects and architectural consulting. 
                Drop a message and let's build something extraordinary together.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 glass rounded-xl"><MailIcon className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                  <p className="text-sm font-bold">hello@elitedev.pro</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 glass rounded-xl"><MapPinIcon className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Location</p>
                  <p className="text-sm font-bold">Silicon Valley / Remote</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 glass rounded-xl"><PhoneIcon className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Phone</p>
                  <p className="text-sm font-bold">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <GlassCard className="p-10 border-slate-200 dark:border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                  <textarea 
                    rows={6}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white transition-all resize-none"
                    placeholder="Tell me about your project ideas..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white dark:border-black/30 dark:border-t-black animate-spin rounded-full"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <SendIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                {submitted && (
                  <p className="text-green-500 text-sm font-bold text-center animate-bounce">
                    Thank you! I'll get back to you shortly.
                  </p>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
