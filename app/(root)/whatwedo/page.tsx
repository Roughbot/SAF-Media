"use client";
import Description from "@/components/Description/Description";
import { useEffect, useRef } from "react";
import inovation from "../../../public/assets/inovation.svg";
import { points } from "./data";
import DataCardt from "@/components/dataCard/DataCardt";
import { useScroll } from "framer-motion";
import { AuroraBackgroundComponent } from "@/components/auroraBackground/AuroraBackground";

const About = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    document.title = "What we Do | Right Hand Venture";
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "We are a digital marketing agency that specializes in SEO, Social Media Marketing, and Web Development. We are here to help you grow your business."
      );
    }
    const keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        "content",
        "Marketing,Trending,SEO,Web Development, Social Media Marketing"
      );
    }
  }, []);

  const phrase = [
    "Where  Passion, Innovation, Collaboration, and  Integrity Meet  to  Elevate Your Digital Presence",
    inovation,
  ];

  return (
    <div>
      <AuroraBackgroundComponent />
      {/* <Description phrase={phrase} /> */}
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
    </div>
  );
};

export default About;
