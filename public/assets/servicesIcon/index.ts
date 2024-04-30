import blog from "./blog.svg";
import blogBg from "./blog-bg.jpg";
import emailMarketing from "./email-marketing.svg";
import emailMarketingBg from "./email-marketing-bg.jpg";
import webDevelopment from "./code.svg";
import webDevelopmentBg from "./code-bg.jpg";
import googleAds from "./google-ads.svg";
import googleAdsBg from "./google-ads-bg.jpg";
import seo from "./seo.svg";
import seoBg from "./seo-bg.jpg";
import socialMedia from "./social-media.svg";
import socialMediaBg from "./social-media-bg.jpg";
import metaAds from "./meta.svg";
import metaAdsBg from "./meta-ads-bg.jpg";

export const servicesIcon = {
  emailMarketingBg,
  webDevelopmentBg,
  googleAdsBg,
  seoBg,
  socialMediaBg,
  metaAdsBg,
  blogBg,
  blog,
  emailMarketing,
  webDevelopment,
  googleAds,
  seo,
  socialMedia,
  metaAds,
};

type ServicesIcon = keyof typeof servicesIcon;
