import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        title="Start a Project"
        subtitle="Partner with talented student creators. Reach out to collaborate directly with our curated freelance collective."
      />

      <section className="px-8 pb-32 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Contact Form */}
        <div>
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input type="text" id="name" required className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black peer" placeholder=" " />
                <label htmlFor="name" className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest">Your Name</label>
              </div>
              <div className="relative group">
                <input type="email" id="email" required className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black peer" placeholder=" " />
                <label htmlFor="email" className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest">Email Address</label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input type="text" id="company" className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black peer" placeholder=" " />
                <label htmlFor="company" className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest">Company (Optional)</label>
              </div>
              <div className="relative group">
                <select id="projectType" required className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black text-neutral-800 appearance-none">
                  <option value="" disabled selected>Select Project Type</option>
                  <option value="web">Web Development</option>
                  <option value="ai">AI Automation</option>
                  <option value="security">Cybersecurity</option>
                  <option value="architecture">System Architecture</option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <select id="budget" required className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black text-neutral-800 appearance-none">
                <option value="" disabled selected>Estimated Budget Range</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>

            <div className="relative group">
              <textarea id="description" required rows={4} className="w-full bg-transparent border-b border-neutral-300 py-4 focus:outline-none focus:border-black peer resize-none" placeholder=" "></textarea>
              <label htmlFor="description" className="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-valid:-top-4 peer-valid:text-[10px] peer-valid:uppercase peer-valid:tracking-widest">Project Description</label>
            </div>

            <button type="submit" className="bg-black text-white px-12 py-6 text-[10px] uppercase tracking-widest hover:bg-neutral-800 transition-colors inline-block w-full md:w-auto">
              Submit Request
            </button>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="lg:pl-24 lg:border-l border-neutral-100 flex flex-col justify-center">
          <div className="mb-16">
            <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-4 block">Direct Enquiries</h3>
            <a href="mailto:hello@smsquare.studio" className="text-3xl font-serif hover:italic transition-all duration-300">hello@smsquare.studio</a>
          </div>
          
          <div className="mb-16">
            <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-4 block">Platform Hub</h3>
            <p className="text-xl font-light text-neutral-500 leading-relaxed">
              SM² Collective Hub<br />
              Zurich Innovation Park<br />
              Zurich, Switzerland
            </p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-4 block">Social</h3>
            <div className="flex gap-6">
              <a href="#" className="text-lg hover:text-neutral-500 transition-colors">Twitter</a>
              <a href="#" className="text-lg hover:text-neutral-500 transition-colors">LinkedIn</a>
              <a href="#" className="text-lg hover:text-neutral-500 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
