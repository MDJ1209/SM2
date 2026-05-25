import PageHero from "@/components/ui/PageHero";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications, digital products, and high-performance WebGL systems engineered by developers who have built real systems for global companies.",
    cases: ["Bespoke E-commerce", "Interactive 3D & WebGL", "Corporate Web Apps"]
  },
  {
    title: "AI Automation",
    description: "Integrating custom LLMs, vector search, and deep learning pipelines to automate complex workflows, drawing directly from active computer science research.",
    cases: ["LLM & Agent Integration", "Workflow Automation", "Intelligent Data Processing"]
  },
  {
    title: "Cybersecurity",
    description: "Rigorous security audits, penetration testing, and system hardening informed by top-tier academic cybersecurity labs.",
    cases: ["Penetration Testing", "Security Protocol Audits", "Secure Architecture Design"]
  },
  {
    title: "System Architecture",
    description: "Designing fault-tolerant, highly reliable, and horizontally scalable cloud infrastructures for complex SaaS platforms.",
    cases: ["Cloud Infrastructure (AWS/Vercel)", "Microservices Decoupling", "Database Speed Optimization"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        title="Capabilities"
        subtitle="End-to-end digital solutions combining academic innovation and design excellence, executed directly by talented student creators."
      />

      <section className="px-8 pb-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-16 lg:gap-x-32">
          {services.map((service, idx) => (
            <div key={idx} className="group border-t border-neutral-200 pt-12">
              <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-8 block">
                0{idx + 1}.
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 group-hover:italic transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-xl text-neutral-500 font-light leading-relaxed mb-12">
                {service.description}
              </p>
              
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block">Use Cases</span>
                <ul className="space-y-4">
                  {service.cases.map((useCase, cIdx) => (
                    <li key={cIdx} className="text-sm font-light text-neutral-600 flex items-center gap-4">
                      <div className="w-4 h-[1px] bg-neutral-300"></div>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-48 bg-[#fafafa] px-8 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif tracking-tighter mb-12">
          Ready to build with <br className="hidden md:block" /> next-generation creators?
        </h2>
        <a href="/contact" className="inline-flex items-center justify-center bg-black text-white px-12 py-6 text-[10px] uppercase tracking-widest hover:bg-neutral-800 transition-colors">
          Start a Project
        </a>
      </section>
    </main>
  );
}
