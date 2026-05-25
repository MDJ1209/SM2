import PageHero from "@/components/ui/PageHero";

const steps = [
  { id: "01", title: "Discovery", desc: "Collaborating directly with you to map project requirements, target audiences, and core research goals." },
  { id: "02", title: "Strategy", desc: "Selecting state-of-the-art technical stacks, sketching robust architectural schemas, and planning elegant user flows." },
  { id: "03", title: "Design", desc: "Applying strict grid systems, typographic discipline, and immersive interactive design to draft pixel-perfect interfaces." },
  { id: "04", title: "Engineering", desc: "Implementing codebases with academic rigor—writing clean, highly performant Next.js/TypeScript code optimized for speed." },
  { id: "05", title: "Launch", desc: "Executing comprehensive testing, deploying onto premium edge nodes, and establishing stable pipelines for continuous success." }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        title="Our Process"
        subtitle="A disciplined, highly collaborative workflow turning complex ideas into finished systems, with zero agency overhead."
      />

      <section className="px-8 pb-32 max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-24 relative before:absolute before:inset-y-0 before:left-[11px] md:before:left-1/2 before:w-[1px] before:bg-neutral-200">
          {steps.map((step, idx) => (
            <div key={idx} className={`relative flex items-center md:justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[11px] md:left-1/2 w-6 h-6 rounded-full bg-black border-4 border-white transform -translate-x-1/2 flex items-center justify-center z-10"></div>
              
              <div className="w-full pl-12 md:pl-0 md:w-5/12">
                <div className={`p-6 md:p-10 bg-white border border-neutral-100 hover:shadow-xl transition-shadow duration-500 rounded-sm ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-4 block">Phase {step.id}</span>
                  <h3 className="font-serif text-3xl mb-4">{step.title}</h3>
                  <p className="text-lg text-neutral-500 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
