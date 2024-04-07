import blog from "./blog.svg";
import emailMarketing from "./email-marketing.svg";
import webDevelopment from "./code.svg";
import googleAds from "./google-ads.svg";
import seo from "./seo.svg";
import socialMedia from "./social-media.svg";
import metaAds from "./meta.svg";

export const servicesIcon = {
  blog,
  emailMarketing,
  webDevelopment,
  googleAds,
  seo,
  socialMedia,
  metaAds,
};

type ServicesIcon = keyof typeof servicesIcon;
