"use client";
import { TypewriterEffectSmoothComponent } from "@/components/TypewritterEffect/Typewritter-Effect";
import { HeroParallaxDemo } from "@/components/header/hero-main";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import NumberCounter from "@/components/numberCounter/NumberCounter";
import Company from "@/components/company/Company";
import WhyRHV from "@/components/whyRHV/WhyRHV";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <HeroParallaxDemo />

      <div>
        <Company />
      </div>
      <div>
        <WhyRHV />
      </div>
      <TypewriterEffectSmoothComponent />

      <div>
        <NumberCounter />
      </div>
    </>
  );
}
