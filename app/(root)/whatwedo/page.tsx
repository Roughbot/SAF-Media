import { ImagesSliderComponent } from "@/components/ImageSlider/Image-Slider";
import { TextGenerateEffectComponent } from "@/components/text-generate/TextGenerate";

const whatwedo = () => {
  return (
    <div className="min-h-screen">
      <ImagesSliderComponent />
      <div style={{ fontFamily: "monospace" }} className="p-20">
        <p>What WE DO</p>
        <TextGenerateEffectComponent />
      </div>
    </div>
  );
};

export default whatwedo;
