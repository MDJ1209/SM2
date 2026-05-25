import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-48 pb-12 px-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-48">
          <div className="col-span-12 lg:col-span-7">
             <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-serif leading-[0.85] tracking-tighter" data-purpose="footer-cta">
              LET&apos;S BUILD <br /> SOMETHING <br /> BETTER.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-12 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 block">Inquiries</span>
              <a className="text-2xl md:text-4xl font-serif hover:italic transition-all" href="mailto:hello@smsquare.studio">
                SMsquare@2026
              </a>
            </div>
            <div className="mt-24 flex gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 block">Follow</span>
                <div className="flex gap-6 text-[10px] uppercase tracking-widest">
                  <Link className="hover:text-neutral-400 transition-colors" href="#">LinkedIn</Link>
                  <Link className="hover:text-neutral-400 transition-colors" href="#">Instagram</Link>
                  <Link className="hover:text-neutral-400 transition-colors" href="#">Behance</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="editorial-hr opacity-20 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-wider sm:tracking-widest text-neutral-500 gap-4 text-center md:text-left">
          <p className="leading-relaxed">© 2026 SM-SQUARE Collective. <br className="sm:hidden" /> Crafted by talented student creators.</p>
          <p className="mt-2 md:mt-0">Zurich / Geneva / Remote</p>
        </div>
      </div>
    </footer>
  );
}
