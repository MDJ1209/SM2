'use client';

import { useState } from 'react';
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import CustomSelect from "@/components/ui/CustomSelect";
import BudgetLock from "@/components/ui/BudgetLock";
import { motion, AnimatePresence } from 'framer-motion';

const orgOptions = [
  { value: "company", label: "Company" },
  { value: "student", label: "Student" },
  { value: "personal", label: "Personal / Individual" }
];

const domainOptions = [
  { value: "web-dev", label: "Website Development" },
  { value: "mobile-dev", label: "Mobile App Development" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "ai-integration", label: "AI Integration Services" },
  { value: "college-project", label: "College Project Development" }
];

export default function ContactPage() {
  const [organization, setOrganization] = useState("");
  const [projectDomain, setProjectDomain] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [hasBudget, setHasBudget] = useState<boolean | null>(null);
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization: orgOptions.find(o => o.value === organization)?.label || organization,
          projectDomain: domainOptions.find(d => d.value === projectDomain)?.label || projectDomain,
          budget,
          contact,
          description,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        // Reset form
        setName("");
        setEmail("");
        setOrganization("");
        setProjectDomain("");
        setBudget("");
        setContact("");
        setDescription("");
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-img.jpg"
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <PageHero 
          title="Start a Project"
          subtitle="Partner with talented student creators. Reach out to collaborate directly with our curated freelance collective."
          theme="dark"
        />

        <section className="px-4 md:px-8 py-16 md:py-20 pb-24 md:pb-32 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
          {/* Contact Form */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-white">Request Submitted</h3>
                <p className="text-white/50 text-sm font-light max-w-md leading-relaxed">
                  Thank you for reaching out! We&apos;ll review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="group relative overflow-hidden border border-white/20 rounded-full px-4 md:px-8 py-3 text-white hover:border-white transition-all duration-500 inline-block cursor-pointer bg-transparent mt-4"
                >
                  <span className="relative z-10 text-[10px] uppercase tracking-widest font-semibold group-hover:text-black transition-colors duration-500">
                    Submit Another Request
                  </span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="relative group">
                    <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-5 focus:outline-none focus:border-white peer text-base text-white placeholder-transparent" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 top-4 text-white/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-white/70">Your Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-5 focus:outline-none focus:border-white peer text-base text-white placeholder-transparent" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 top-4 text-white/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-white/70">Email Address</label>
                  </div>
                </div>

                {/* Row 2: Organization & Project Domain */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 z-20 relative">
                  <div className="relative group">
                    <CustomSelect
                      id="organization"
                      placeholder="Organization Type"
                      options={orgOptions}
                      value={organization}
                      onChange={setOrganization}
                      required
                    />
                  </div>
                  <div className="relative group">
                    <CustomSelect
                      id="projectDomain"
                      placeholder="Project Domain"
                      options={domainOptions}
                      value={projectDomain}
                      onChange={setProjectDomain}
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Estimated Budget & Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                  {/* Budget Choice & Selector */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.25em] text-white/50 block font-bold">Do you have an estimated budget?</label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setHasBudget(true)}
                          className={`px-6 py-3 rounded-full text-[10px] font-semibold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                            hasBudget === true
                              ? 'bg-white text-black border-white shadow-lg'
                              : 'bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setHasBudget(false);
                            setBudget("");
                          }}
                          className={`px-6 py-3 rounded-full text-[10px] font-semibold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
                            hasBudget === false
                              ? 'bg-white text-black border-white shadow-lg'
                              : 'bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          No
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {hasBudget === true && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="space-y-6 overflow-hidden"
                        >
                          <div className="relative group pt-4">
                            <input 
                              type="text" 
                              id="budget" 
                              required={hasBudget === true} 
                              value={budget} 
                              onChange={(e) => setBudget(e.target.value)} 
                              className="w-full bg-transparent border-b border-white/20 py-5 focus:outline-none focus:border-white peer text-base text-white placeholder-transparent" 
                              placeholder="Estimated Budget" 
                            />
                            <label htmlFor="budget" className="absolute left-0 top-8 text-white/50 transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white peer-valid:top-0 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-white/70">Estimated Budget (Optional)</label>
                          </div>
                          <BudgetLock value={budget} onChange={setBudget} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact details */}
                  <div className="relative group pt-4 md:pt-0">
                    <input type="text" id="contact" required value={contact} onChange={(e) => setContact(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-5 focus:outline-none focus:border-white peer text-base text-white placeholder-transparent" placeholder="Contact Details" />
                    <label htmlFor="contact" className="absolute left-0 top-4 text-white/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-white/70">Contact Number / WhatsApp</label>
                  </div>
                </div>

                {/* Description */}
                <div className="relative group">
                  <textarea id="description" required rows={4} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-transparent border-b border-white/20 py-5 focus:outline-none focus:border-white peer resize-none text-base text-white placeholder-transparent" placeholder="Description"></textarea>
                  <label htmlFor="description" className="absolute left-0 top-4 text-white/50 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-white peer-valid:-top-4 peer-valid:text-xs peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-white/70">Project Description</label>
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-sm font-light">
                    {errorMessage}
                  </div>
                )}

                {/* Premium Slider Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`group relative overflow-hidden border border-white/20 rounded-full px-4 md:px-8 py-4 md:px-12 md:py-5 text-white hover:border-white transition-all duration-500 inline-block w-full md:w-auto text-center cursor-pointer bg-transparent ${status === 'loading' ? 'opacity-60 pointer-events-none' : ''}`}
                >
                  <span className="relative z-10 text-[10px] uppercase tracking-widest font-semibold group-hover:text-black transition-colors duration-500">
                    {status === 'loading' ? 'Sending...' : 'Submit Request'}
                  </span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Info */}
          <div className="lg:pl-24 lg:border-l border-white/10 flex flex-col justify-center">
            <div className="mb-16">
              <h3 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 block">Direct Enquiries</h3>
              <a href="mailto:dudeepartners@gmail.com" className="text-3xl font-serif text-white hover:italic transition-all duration-300 break-all">dudeepartners@gmail.com</a>
            </div>
            
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 block">Platform Hub</h3>
              <p className="text-xl font-light text-white/60 leading-relaxed">
                Vizag
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
