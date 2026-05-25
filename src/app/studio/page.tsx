import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import Validation from "@/components/sections/Validation";

const team = [
  { name: "Marc Keller", role: "Co-Founder & Technical Lead", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" },
  { name: "Elena Voser", role: "Co-Founder & Design Lead", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
  { name: "Lukas Weber", role: "Full-Stack Developer & AI Lead", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" },
  { name: "Sophie Blanc", role: "WebGL Developer & Creative Engineer", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop" }
];

const timeline = [
  { year: "2024", title: "Collective Formed", description: "SM² was formed as an informal group of talented student creators collaborating on freelance design and complex engineering contracts." },
  { year: "2025", title: "Real-World Proof", description: "Partnered with companies and startups to design HIPAA-compliant health portals, high-end resort engines, and visual Shopify variant tools." },
  { year: "2026", title: "Freelance Platform Launch", description: "Launched our specialized premium freelance platform to directly connect elite student creators with innovative global businesses." }
];

export default function StudioPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        title="The Studio"
        subtitle="A specialized freelance platform and digital collective of talented student creators sitting at the intersection of academic innovation and rigorous engineering."
      />

      {/* Philosophy */}
      <section className="px-8 pb-32 max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif mb-8">Our Philosophy</h2>
        </div>
        <div>
          <p className="text-2xl font-light text-neutral-600 leading-relaxed mb-8">
            We believe that the best digital products are born when raw technological innovation and elegant visual aesthetics are treated with equal reverence. We don't just build sites; we architect digital systems.
          </p>
          <p className="text-lg font-light text-neutral-500 leading-relaxed">
            By bypassing traditional bloated corporate agencies, our platform connects clients directly with the talented student creators doing the actual design and development. Every line of code and every pixel aligns with strict, professional execution.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="px-8 py-20 sm:py-32 bg-neutral-100">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-4xl font-serif mb-12 sm:mb-16">Founding Collective</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[3/4] mb-4 sm:mb-6 overflow-hidden bg-white">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-2xl mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-[9px] sm:text-sm uppercase tracking-widest text-neutral-500 leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-8 py-20 sm:py-32 max-w-[1800px] mx-auto">
        <h2 className="text-4xl font-serif mb-16 sm:mb-24">Our Journey</h2>
        <div className="space-y-12 sm:space-y-16">
          {timeline.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 border-t border-neutral-200 pt-6 sm:pt-8">
              <span className="text-2xl sm:text-3xl font-serif text-neutral-400">{item.year}</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-medium mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-base sm:text-lg text-neutral-500 font-light max-w-2xl leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Re-use Testimonials */}
      <Validation />
    </main>
  );
}
