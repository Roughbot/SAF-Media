import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "./data";

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
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  items-center gap-4 justify-around">
        {data.map((service: any, i: number) => (
          <motion.div
            variants={slideUp}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            custom={i}
            className="flex flex-col items-center pt-4 justify-center"
            key={i}
          >
            <div className="flex items-center justify-center p-10">
              <Link href={service.link}>
                <div className="block-container w-28 h-28">
                  <div className="btn-back rounded-xl btn-back-black" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <Image
                      src={service.image}
                      width={40}
                      height={40}
                      alt="Project Icon"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="">
              <h4 className="text-white text-2xl text-center">
                {service.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
