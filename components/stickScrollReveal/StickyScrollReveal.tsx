"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-view";
import Image from "next/image";
import { whatWeDoContent } from "@/public/assets/whatwedo";

const content = [
  {
    title: "Passionate about Your Success",
    description:
      "At Right Hand Venture we don't just offer marketing solutions; we pour our hearts into empowering your business to thrive the digital landscape. Our passion drives us to go above and beyond to help you achieve your goals.",
    content: (
      <div className="h-full w-full relative flex items-center justify-center text-black bg-white">
        <div className="absolute z-10 text-3xl font-semibold text-yellow-500">
          Passionate about Your Successz
        </div>
        <Image
          src={whatWeDoContent.passionate}
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Innovative Solutions for Tomorrow's Success",
    description:
      "We are not just trend followers; we are trendsetters. Constantly innovating and staying ahead of industry trends, we bring you cutting-edge marketing solutions that are tailored to drive your business forward.",
    content: (
      <div className="h-full w-full relative flex items-center justify-center text-black bg-white">
        <div className="absolute z-10 text-4xl font-semibold">
          Inavative Solution
        </div>
        <Image
          src={whatWeDoContent.innovation}
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Collaboration for Customized Excellence",
    description:
      "Your success is our success. We believe in working hand-in-hand with our clients to understand  their unique needs and craft personalized solutions that resonate with their audience and elevate their brand.",
    content: (
      <div className="h-full w-full relative flex items-center justify-center text-black">
        <div className="absolute z-10 text-4xl font-semibold">
          Collaboration
        </div>
        <Image
          src={whatWeDoContent.collaboration}
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Integrity at the Core of Everything We Do",
    description:
      "Honesty, transparency, and integrity are not just words for us; they are the pillars of our    operations. You can trust Right Hand Venture to always act with integrity in all our interactions and relationships, ensuring a partnership built on trust and reliability.",
    content: (
      <div className="h-full w-full relative flex items-center justify-center text-black">
        <Image
          src={whatWeDoContent.integrity}
          width={300}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealComponent() {
  return <StickyScroll content={content} />;
}
