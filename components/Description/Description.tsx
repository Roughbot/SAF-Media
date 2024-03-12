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
      <div className="flex flex-col md:flex-row max-w-7xl gap-12 relative">
        <div>
          <p className="m-0 gap-2 text-xl md:text-2xl lg:text-4xl leading-snug">
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
        </div>

        <motion.div
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          className="w-4/5 flex flex-wrap justify-center items-center md:min-w-[350px]"
        >
          <Image src={phrase[1]} alt="reference" width={600} height={600} />
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
