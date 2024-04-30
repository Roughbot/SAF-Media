"use client";
import { TypewriterEffectSmoothComponent } from "@/components/TypewritterEffect/Typewritter-Effect";
import { HeroParallaxDemo } from "@/components/header/hero-main";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import NumberCounter from "@/components/numberCounter/NumberCounter";
import Company from "@/components/company/Company";
import WhyRHV from "@/components/whyRHV/WhyRHV";
import FiveCard from "@/components/fiveCard/FiveCard";

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
      <div className="pt-20">
        <h2 className="text-center text-5xl text-white">
          Client <span className="text-blue-700">Testimonials</span>
        </h2>
        <div className="py-20">
          <FiveCard />
        </div>
      </div>

      <div>
        <NumberCounter />
      </div>
      <TypewriterEffectSmoothComponent />
    </>
  );
}
