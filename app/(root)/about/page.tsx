import { LampComponent } from "@/components/Lamp/Lamp";
import { AnimatedTooltipPreview } from "@/components/tooltip/animated-tooltip-component";

const About = () => {
  return (
    <div>
      <LampComponent />
      {/* <AnimatedTooltipPreview /> */}
      <div className="p-32">
        <h1 className="text-white ">About</h1>
      </div>
    </div>
  );
};

export default About;
