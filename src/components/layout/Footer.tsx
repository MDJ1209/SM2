import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 lg:pt-48 pb-12 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-12 gap-12 lg:gap-8 mb-24 lg:mb-48">
          <div className="col-span-12 lg:col-span-7">
             <Image src="/projects/logo.png" alt="DUDEE" width={400} height={128} className="h-20 md:h-32 w-auto object-contain mb-8 lg:mb-10" />
             <h2 className="text-5xl sm:text-6xl md:text-[8rem] font-serif leading-[0.85] tracking-tighter" data-purpose="footer-cta">
              LET&apos;S BUILD <br /> SOMETHING <br /> BETTER.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pt-12 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4 block">Inquiries</span>
              <a className="text-2xl md:text-4xl font-serif hover:italic transition-all" href="mailto:dudeepartners@gmail.com">
                dudeepartners@gmail.com
              </a>
            </div>

          </div>
        </div>
        <div className="editorial-hr opacity-20 mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-wider sm:tracking-widest text-neutral-500 gap-4 text-center md:text-left">
          <p className="leading-relaxed">© 2026 DUDEE Collective. <br className="sm:hidden" /> Crafted by talented student creators.</p>
          <p className="mt-2 md:mt-0">Visakhapatnam / India / Remote</p>
        </div>
      </div>
    </footer>
  );
}
