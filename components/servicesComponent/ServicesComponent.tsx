import Image from "next/image";
import marketing from "../../public/assets/marketing.svg";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServicesComponent = () => {
  const container = useRef(null);
  const isInView = useInView(container);

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i: any) => ({
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.1,
      },
    }),
    closed: {
      y: "100%",
    },
  };

  return (
    <div ref={container}>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center gap-4 justify-center">
        <motion.div
          variants={slideUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          custom={1}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center p-10">
            <Link href="/">
              <div className="block-container w-32 h-32">
                <div className="btn-back rounded-xl btn-back-black" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <Image
                    src={marketing}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <span className="text-white text-2xl font-bold">Marketing</span>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          custom={2}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center p-10">
            <Link href="/">
              <div className="block-container w-32 h-32">
                <div className="btn-back rounded-xl btn-back-black" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <Image
                    src={marketing}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <span className="text-white text-2xl font-bold">Marketing</span>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          custom={3}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center p-10">
            <Link href="/">
              <div className="block-container w-32 h-32">
                <div className="btn-back rounded-xl btn-back-black" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <Image
                    src={marketing}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <span className="text-white text-2xl font-bold">Marketing</span>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="initial"
          animate={isInView ? "open" : "closed"}
          custom={4}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center p-10">
            <Link href="/">
              <div className="block-container w-32 h-32">
                <div className="btn-back rounded-xl btn-back-black" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <Image
                    src={marketing}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="">
            <span className="text-white text-2xl font-bold">Marketing</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesComponent;
