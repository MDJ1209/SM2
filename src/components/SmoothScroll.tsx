'use client';

import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // 1. Initialize Lenis with the premium configuration
    const lenis = new Lenis({
      lerp: 0.075, 
      wheelMultiplier: 1, 
      syncTouch: true, 
      touchInertiaExponent: 1.5, 
    });

    // 2 & 3. Sync GSAP ticker with Lenis (The GSAP integration)
    const update = (time: number) => {
      lenis.raf(time * 1000); // GSAP measures in seconds, Lenis expects milliseconds
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
