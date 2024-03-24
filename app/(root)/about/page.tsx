"use client";
import { LampComponent } from "@/components/Lamp/Lamp";
import { AnimatedTooltipPreview } from "@/components/tooltip/animated-tooltip-component";
import Description from "@/components/Description/Description";
import { useEffect, useRef } from "react";
import inovation from "../../../public/assets/inovation.svg";
import { points } from "./data";
import DataCardt from "@/components/dataCard/DataCardt";
import { useScroll } from "framer-motion";

const About = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    document.title = "About Us | SAF Media";
  }, []);

  const phrase = [
    "Where  Passion, Innovation, Collaboration, and  Integrity Meet  to  Elevate Your Digital Presence",
    inovation,
  ];

  return (
    <div>
      <LampComponent />
      <Description phrase={phrase} />
      <div>
        <div ref={container}>
          {points.map((point, index) => {
            const targetScale = 1 - (points.length - index) * 0.08;
            return (
              <DataCardt
                key={index}
                i={index}
                {...point}
                range={[index * 0.25, 1]}
                progress={scrollYProgress}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>

      <AnimatedTooltipPreview />
    </div>
  );
};

export default About;
