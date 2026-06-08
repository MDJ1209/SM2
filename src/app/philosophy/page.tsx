import PageHero from "@/components/ui/PageHero";

const pillars = [
  {
    num: "01",
    title: "Academic Innovation",
    desc: "We bring fresh, cutting-edge insights directly from top technical classrooms and active laboratories. By bypassing outdated legacy methodologies, we implement tomorrow's design patterns, WebGL systems, and secure cloud architectures today."
  },
  {
    num: "02",
    title: "Extreme Craftsmanship",
    desc: "For our collective, code is not just execution; it is an architectural art. We write modular, clean, and highly performant codebases designed to scale seamlessly under heavy workloads, treated with the meticulous precision of advanced engineering systems."
  },
  {
    num: "03",
    title: "Minimalist Design Precision",
    desc: "Our visual identity is defined by understated luxury, structural grid methodologies, and typographic discipline. We design digital interfaces that are quiet yet powerful—refining every pixel until only the absolute essential remains."
  },
  {
    num: "04",
    title: "The Direct Creator Model",
    desc: "By removing bloated account management teams, sales representatives, and corporate overhead, we link you directly with the talented student creators who are designing and coding your system. This delivers unprecedented agility, speed, and transparency."
  }
];

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHero 
        title="Our Philosophy"
        subtitle="A look under the hood at the foundational values, academic rigor, and design principles that guide our freelance platform."
      />

      {/* Main Philosophy Manifesto */}
      <section className="px-8 py-16 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 block mb-8">
            The Core Belief
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Order creates clarity, <br />
            and clarity creates <br />
            <span className="italic font-normal">confidence</span>.
          </h2>
        </div>
        <div className="lg:col-span-8 lg:pl-16">
          <p className="text-2xl font-light text-neutral-600 leading-relaxed mb-8 font-serif italic">
            "We believe that the premium digital creations of tomorrow cannot be built using the bloated, sluggish corporate processes of yesterday."
          </p>
          <p className="text-lg font-light text-neutral-500 leading-relaxed mb-12">
            SM² was founded to break the mold. As talented student creators, we have the unique advantage of active immersion in state-of-the-art design and computer science developments, while having already proved our engineering capabilities in real-world systems for top-tier companies. This platform is our vehicle to bring precision, performance, and uncompromised passion to every digital project.
          </p>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="px-8 py-20 max-w-[1800px] mx-auto border-t border-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-24">
          {pillars.map((pillar, i) => (
            <div key={i} className="group border-t border-neutral-200 pt-12">
              <span className="font-serif italic text-2xl block mb-6 text-neutral-300 group-hover:text-black transition-colors duration-500">
                {pillar.num}.
              </span>
              <h3 className="text-lg uppercase tracking-widest font-bold mb-6 text-neutral-900">{pillar.title}</h3>
              <p className="text-lg text-neutral-500 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
