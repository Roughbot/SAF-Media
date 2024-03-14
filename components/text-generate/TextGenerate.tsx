"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `At SAF, we are dedicated to empowering businesses like yours to reach new heights through
the magic of digital marketing. With our personalized solutions, we ensure that your individual
goals and requirements are not just met, but exceeded. Our team is truly passionate about
creating strategies that perfectly align with your needs and resources. We stay at the forefront of
industry innovations and trends to guarantee that you always receive the best possible service.
Your success is our ultimate priority, and we are thrilled to be on this journey with you!
`;

export function TextGenerateEffectComponent() {
  return <TextGenerateEffect words={words} />;
}
