import { ImagesSliderComponent } from "@/components/ImageSlider/Image-Slider";
import VissionAndMission from "@/components/VissionAndMission/VissionAndMission";
import { TextGenerateEffectComponent } from "@/components/text-generate/TextGenerate";
import TextAnimation2 from "@/components/textAnimation2/TextAnimation2";
import { AnimatedTooltipPreview } from "@/components/tooltip/animated-tooltip-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Right Hand Venture",
  description:
    "We are a digital marketing agency that specializes in SEO, Social Media Marketing, and Web Development. We are here to help you grow your business.",
  keywords: "Marketing,Trending,SEO,Web Development, Social Media Marketing",
};

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <ImagesSliderComponent />
      <div style={{ fontFamily: "Rubik" }} className="p-8 md:p-20">
        <p className="text-center text-white text-4xl sm:text-9xl py-10 sm:py-20">
          About Us
        </p>
        <TextGenerateEffectComponent />
      </div>
      <div className="h-screen">
        <TextAnimation2 />
      </div>

      <div>
        <VissionAndMission />
      </div>

      <div className="py-20">
        <AnimatedTooltipPreview />
      </div>
    </div>
  );
};

export default AboutUs;
