"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DataCardt = (props: any) => {
  const { title, description, image, color, i, progress, range, targetScale } =
    props;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-10 mb-10"
    >
      <motion.div
        style={{ top: `calc(-5% + ${i * 25}px)`, scale }}
        className={`max-h-fit w-[400px] sm:h-[500px] sm:w-[1000px] p-8 flex flex-col origin-top rounded-[25px] relative top-8 pure_glass ${color}`}
      >
        <div className="shadow-lg rounded-3xl ">
          <h1
            style={{ fontFamily: "Rubik" }}
            className="font-bold  text-white text-lg sm:text-4xl py-10 text-center"
          >
            {title}
          </h1>
        </div>
        <div className="flex h-full shadow-lg rounded-lg items-center p-10 gap-10">
          <div className="flex w-[60%] flex-row">
            <motion.div
              style={{ opacity: scrollYProgress, scale: imageScale }}
              className="relative top-[10%]"
            >
              <p
                style={{ fontFamily: "Rubik" }}
                className="text-xs sm:text-2xl first-letter:text-xl"
              >
                {description}
              </p>
            </motion.div>
          </div>
          <div className="relative w-[40%] h-[100%]   overflow-hidden">
            <motion.div
              style={{ opacity: scrollYProgress, scale: imageScale }}
              className="w-full h-full justify-center"
            >
              <Image className="object-cover" src={image} alt={title} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DataCardt;
