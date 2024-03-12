"use client";
import { LampComponent } from "@/components/Lamp/Lamp";
import { AnimatedTooltipPreview } from "@/components/tooltip/animated-tooltip-component";
import Description from "@/components/Description/Description";
import { useEffect } from "react";
import inovation from "../../../public/assets/inovation.svg";

const About = () => {
  useEffect(() => {
    document.title = "About Us | SAF Media";

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const phrase = [
    "Where Passion, Innovation, Collaboration, and Integrity Meet to Elevate Your Digital Presence",
    inovation,
  ];

  return (
    <div className="glassmorphism">
      <LampComponent />
      {/* <AnimatedTooltipPreview /> */}
      <Description phrase={phrase} />
    </div>
  );
};

export default About;
