import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./anime";
import { useRef } from "react";

const Description = ({ phrase }: any) => {
  const container = useRef(null);
  const isInView = useInView(container);
  const words = phrase[0];

  return (
    <div
      ref={container}
      className="my-32 h-[400px] items-center pl-40 pr-56 flex justify-center"
    >
      <motion.div
        variants={opacity}
        initial="initial"
        animate={isInView ? "open" : "closed"}
      >
        <p className="m-0 gap-2 text-xl md:text-2xl lg:text-4xl leading-snug">
          {words.split(" ").map((word: string, index: number) => {
            return (
              <span key={index}>
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  custom={index}
                  className="relative inline-flex text-white text-3xl sm:text-6xl overflow-hidden mr-1"
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </motion.div>
    </div>
  );
};

export default Description;
