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
    link: "services/emailmarketing",
    thumbnail: productsImage.emailMarketingImage,
  },
  {
    title: "Google Ads",
    link: "services/googleads",
    thumbnail: productsImage.googleAdsImage,
  },
  {
    title: "Web Development",
    link: "services/webdevelopment",
    thumbnail: productsImage.webDevelopmentImage,
  },

  {
    title: "Social Media Marketing",
    link: "services/socialmedia",
    thumbnail: productsImage.socialMarketingImage,
  },
  {
    title: "Social Media Integrtion",
    link: "services/seo",
    thumbnail: productsImage.socialMediaIntegrationImage,
  },
  {
    title: "Meta Ads",
    link: "services/metaads",
    thumbnail: productsImage.metaAdsImage,
  },

  {
    title: "Social Media Integrtion",
    link: "services/seo",
    thumbnail: productsImage.socialMediaIntegrationImage,
  },
  {
    title: "Meta Ads",
    link: "services/metaads",
    thumbnail: productsImage.metaAdsImage,
  },
  {
    title: "Email Marketing",
    link: "services/emailmarketing",
    thumbnail: productsImage.emailMarketingImage,
  },
  {
    title: "Social Media Marketing",
    link: "services/socialmedia",
    thumbnail: productsImage.socialMarketingImage,
  },
];
