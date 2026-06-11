import dynamic from 'next/dynamic';
import Image from "next/image";
import Hero from "@/components/sections/Hero";

const About = dynamic(() => import('@/components/sections/About'));
const Services = dynamic(() => import('@/components/sections/Services'));
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'));
const Capabilities = dynamic(() => import('@/components/sections/Capabilities'));
const Manifesto = dynamic(() => import('@/components/sections/Manifesto'));
const Validation = dynamic(() => import('@/components/sections/Validation'));

export default function Home() {
  return (
    <>
      <Hero />

      {/* ── Content sections with background image ── */}
      <div className="relative overflow-hidden bg-black">
        {/* Background image layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-img.jpg"
            alt=""
            fill
            loading="lazy"
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Sections on top */}
        <div className="relative z-10">
          <About />
          <Services />
          <Portfolio />
          <Validation />
          <Capabilities />
          <Manifesto />
        </div>
      </div>
    </>
  );
}
