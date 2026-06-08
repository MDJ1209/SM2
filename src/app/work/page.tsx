import PageHero from "@/components/ui/PageHero";
import ExpandedPortfolio from "@/components/sections/ExpandedPortfolio";
import Image from "next/image";

export default function WorkPage() {
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
          title="Selected Work"
          subtitle="A curated selection of our digital craftsmanship and platform solutions."
          theme="dark"
        />
        
        <ExpandedPortfolio />
        
        {/* CTA Section */}
        <div className="py-32 px-8 text-center border-t border-white/10 max-w-[1800px] mx-auto">
          <h3 className="font-serif text-4xl mb-8">Ready to start your next project?</h3>
          <a href="/contact" className="group inline-flex items-center gap-4 text-white hover:text-white/80 transition-colors">
            <span className="text-[10px] uppercase tracking-widest font-bold">Contact Us</span>
            <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </main>
  );
}
