export default function Capabilities() {
  const capabilities = [
    {
      number: "01",
      title: "Strategy",
      description: "Fusing cutting-edge academic research with our experience at leading firms to chart clear technical paths."
    },
    {
      number: "02",
      title: "Design",
      description: "Meticulous UI/UX systems rooted in structural grid methodologies, interaction theory, and design excellence."
    },
    {
      number: "03",
      title: "Development",
      description: "Enterprise-grade engineering utilizing high-performance web standards, built directly by talented student creators."
    }
  ];

  return (
    <section className="py-20 md:py-32 lg:py-48 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-8">
        <div className="mb-16 md:mb-24 lg:mb-32">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-8">
            Our Capabilities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl max-w-4xl leading-tight text-white">
            Bridging the gap between artistic vision and technical precision.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {capabilities.map((cap, i) => (
            <div key={i} className="group">
              <span className="font-serif italic text-2xl block mb-12 text-white/30 group-hover:text-white transition-colors duration-500">
                {cap.number}.
              </span>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-white">{cap.title}</h4>
              <p className="text-white/60 leading-relaxed font-light">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

