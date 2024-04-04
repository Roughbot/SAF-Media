"use client";
import Description from "@/components/Description/Description";
import { useEffect } from "react";
import { AuroraBackgroundComponent } from "@/components/auroraBackground/AuroraBackground";
import { StickyScrollRevealComponent } from "@/components/stickScrollReveal/StickyScrollReveal";

const About = () => {
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
  ];

  return (
    <div>
      <AuroraBackgroundComponent />
      <Description phrase={phrase} />
      <StickyScrollRevealComponent />
    </div>
  );
};

export default About;
