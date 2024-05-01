"use client";
import { TypewriterEffectSmoothComponent } from "@/components/TypewritterEffect/Typewritter-Effect";
import { HeroParallaxDemo } from "@/components/header/hero-main";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import NumberCounter from "@/components/numberCounter/NumberCounter";
import Company from "@/components/company/Company";
import WhyRHV from "@/components/whyRHV/WhyRHV";
import FiveCard from "@/components/fiveCard/FiveCard";
import ServiceBanner from "@/components/serviceBanner/ServiceBanner";
import WorkBanner from "@/components/workBanner/WorkBanner";

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
        <ServiceBanner />
      </div>

      <div>
        <WorkBanner />
      </div>
      <div className="pt-20 bg-white">
        <h2 className="text-center text-5xl text-black">
          Client <span className="text-blue-700">Testimonials</span>
        </h2>
        <div className="py-20">
          <FiveCard />
        </div>
      </div>
      <div>
        <NumberCounter />
      </div>
      <div>
        <WhyRHV />
      </div>

      <div className="pb-20">
        <TypewriterEffectSmoothComponent />
      </div>
    </>
  );
}
