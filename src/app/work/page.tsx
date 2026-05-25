import PageHero from "@/components/ui/PageHero";
import Portfolio from "@/components/sections/Portfolio";

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        title="Selected Work"
        subtitle="A curated selection of our digital craftsmanship and platform solutions."
      />
      
      {/* Re-use the Portfolio grid styling here, typically this would receive props but we use the existing component for exact match */}
      <Portfolio />
      
      {/* CTA Section */}
      <div className="py-32 px-8 text-center border-t border-neutral-100 max-w-[1800px] mx-auto">
        <h3 className="font-serif text-4xl mb-8">Ready to start your next project?</h3>
        <a href="/contact" className="group inline-flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest font-bold">Contact Us</span>
          <div className="w-12 h-[1px] bg-black group-hover:w-24 transition-all duration-500"></div>
        </a>
      </div>
    </main>
  );
}
