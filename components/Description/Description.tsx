import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./anime";
import { useRef } from "react";
import Image from "next/image";

const Description = ({ phrase }: any) => {
  const container = useRef(null);
  const isInView = useInView(container);
  const words = phrase[0];
  return (
    <div ref={container} className="my-32 pl-52 pr-52 flex justify-center">
      <div className="flex max-w-7xl gap-12 relative">
        <p className="m-0 gap-2 text-4xl leading-snug">
          {words.split(" ").map((word: string, index: number) => {
            return (
              <span key={index}>
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  custom={index}
                  className="relative inline-flex text-gradient_blue overflow-hidden mr-1"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>

        <motion.div
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className="text-2xl w-4/5 text-gradient_blue font-light"
        >
          <Image src={phrase[1]} alt="reference" width={500} height={500} />
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
