"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { productsImage } from "@/public/assets/homepage";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Email Marketing",

    thumbnail: productsImage.emailMarketingImage,
  },
  {
    title: "Google Ads",

    thumbnail: productsImage.googleAdsImage,
  },
  {
    title: "Web Development",

    thumbnail: productsImage.webDevelopmentImage,
  },

  {
    title: "Social Media Marketing",

    thumbnail: productsImage.socialMarketingImage,
  },
  {
    title: "Social Media Integrtion",

    thumbnail: productsImage.socialMediaIntegrationImage,
  },
  {
    title: "Meta Ads",
    thumbnail: productsImage.metaAdsImage,
  },

  {
    title: "Social Media Integrtion",

    thumbnail: productsImage.socialMediaIntegrationImage,
  },
  {
    title: "Meta Ads",
    thumbnail: productsImage.metaAdsImage,
  },
  {
    title: "Email Marketing",

    thumbnail: productsImage.emailMarketingImage,
  },
  {
    title: "Social Media Marketing",

    thumbnail: productsImage.socialMarketingImage,
  },
];
