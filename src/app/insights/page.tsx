import PageHero from "@/components/ui/PageHero";

const articles = [
  {
    title: "The Future of Headless E-Commerce with Next.js",
    category: "Web Development",
    date: "Oct 12, 2025",
    excerpt: "Exploring why enterprise brands are moving away from monoliths to headless systems for unparalleled speed."
  },
  {
    title: "Automating Agency Workflows with Deep Learning",
    category: "AI Automation",
    date: "Nov 04, 2025",
    excerpt: "How we leveraged internal LLM tools to drastically cut down our project discovery phases."
  },
  {
    title: "Designing for Trust: Security as UX",
    category: "Cybersecurity",
    date: "Jan 18, 2026",
    excerpt: "Security shouldn't be invisible. Visualizing security protocols enhances user confidence on platforms."
  },
  {
    title: "Microservices Architecture in 2026",
    category: "System Design",
    date: "Feb 22, 2026",
    excerpt: "Patterns to avoid when decoupling your monolith into a distributed system array."
  },
  {
    title: "Minimalism is not lazy design.",
    category: "Digital Strategy",
    date: "Mar 05, 2026",
    excerpt: "Why stripping away features takes more effort and yields higher conversions than feature-bloat."
  }
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        title="Insights"
        subtitle="Thoughts, essays, and technical research from the talented student creators behind the DUDEE collective."
      />

      <section className="px-4 md:px-8 pb-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <article key={idx} className="group cursor-pointer flex flex-col h-full border border-neutral-100 p-8 hover:bg-neutral-50 transition-colors duration-500">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">{article.category}</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">{article.date}</span>
              </div>
              <h3 className="font-serif text-3xl mb-4 group-hover:italic transition-all duration-500 pr-8">{article.title}</h3>
              <p className="text-lg text-neutral-500 font-light leading-relaxed mt-auto">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
