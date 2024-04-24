"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `What sets us apart? Our commitment to excellence, transparency, and collaboration. We don't just deliver campaigns; we build lasting relationships based on trust and mutual success. When you partner with us, you gain a dedicated team that is as invested in your success as you are. We are not just like any other digital marketing agency in the market, we don’t offer any blind services. Primarily we gain certain level of understanding of your particular company and we will give you the relevant services based on the analysed data of respective company.
`;

export function TextGenerateEffectComponent() {
  return <TextGenerateEffect words={words} />;
}
