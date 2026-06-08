import PageHero from "@/components/ui/PageHero";
import ExpandedServices from "@/components/sections/ExpandedServices";
import Image from "next/image";

export default function ServicesPage() {
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
          title="Capabilities"
          subtitle="End-to-end digital solutions combining academic innovation and design excellence, executed directly by talented student creators."
          theme="dark"
        />

        <ExpandedServices />

        <section className="py-20 md:py-32 lg:py-48 px-8 text-center border-t border-white/10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif tracking-tighter mb-12 text-white">
            Ready to build with <br className="hidden md:block" /> next-generation creators?
          </h2>
          <a
            href="/contact"
            className="group relative overflow-hidden border border-white/20 rounded-full px-12 py-6 text-white hover:border-white transition-all duration-500 inline-flex items-center justify-center text-[10px] uppercase tracking-widest font-semibold cursor-pointer"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Start a Project
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </a>
        </section>
      </div>
    </main>
  );
}
