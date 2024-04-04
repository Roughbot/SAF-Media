"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-view";
import Image from "next/image";

const content = [
  {
    title: "Passionate about Your Success",
    description:
      "At SAF we don't just offer marketing solutions; we pour our hearts into empowering your business to thrive the digital landscape. Our passion drives us to go above and beyond to help you achieve your goals.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-black bg-white">
        Passionate about Your Success
      </div>
    ),
  },
  {
    title: "Innovative Solutions for Tomorrow's Success",
    description:
      "We are not just trend followers; we are trendsetters. Constantly innovating and staying ahead of industry trends, we bring you cutting-edge marketing solutions that are tailored to drive your business forward.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Innovative Solutions
      </div>
    ),
  },
  {
    title: "Collaboration for Customized Excellence",
    description:
      "Your success is our success. We believe in working hand-in-hand with our clients to understand  their unique needs and craft personalized solutions that resonate with their audience and elevate their brand.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Collaboration
      </div>
    ),
  },
  {
    title: "Integrity at the Core of Everything We Do",
    description:
      "Honesty, transparency, and integrity are not just words for us; they are the pillars of our    operations. You can trust SAF to always act with integrity in all our interactions and relationships, ensuring a partnership built on trust and reliability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Integrity
      </div>
    ),
  },
];
export function StickyScrollRevealComponent() {
  return <StickyScroll content={content} />;
}
