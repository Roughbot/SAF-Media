import { ImagesSliderComponent } from "@/components/ImageSlider/Image-Slider";
import { TextGenerateEffectComponent } from "@/components/text-generate/TextGenerate";

const whatwedo = () => {
  return (
    <div className="min-h-screen">
      <ImagesSliderComponent />
      <div style={{ fontFamily: "Dosis" }} className="p-20">
        <p className="text-center text-white text-9xl py-20">What WE DO</p>
        <TextGenerateEffectComponent />
      </div>
    </div>
  );
};

export default whatwedo;
