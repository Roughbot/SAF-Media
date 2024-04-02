import { ImagesSliderComponent } from "@/components/ImageSlider/Image-Slider";
import { TextGenerateEffectComponent } from "@/components/text-generate/TextGenerate";
import { AnimatedTooltipPreview } from "@/components/tooltip/animated-tooltip-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Right Hand Venture",
  description:
    "We are a digital marketing agency that specializes in SEO, Social Media Marketing, and Web Development. We are here to help you grow your business.",
  keywords: "Marketing,Trending,SEO,Web Development, Social Media Marketing",
};

const whatwedo = () => {
  return (
    <div className="min-h-screen">
      <ImagesSliderComponent />
      <div style={{ fontFamily: "Rubik" }} className="p-20">
        <p className="text-center text-white text-9xl py-20">About Us</p>
        <TextGenerateEffectComponent />
      </div>
      <AnimatedTooltipPreview />
    </div>
  );
};

export default whatwedo;
