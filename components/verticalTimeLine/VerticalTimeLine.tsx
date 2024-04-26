"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const VerticalTimeLine = ({
  data,
  index,
  image,
  theme,
}: {
  data: any;
  index: number;
  image: any;
  theme: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const information = data;

  return (
    <div ref={ref}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        visible={inView}
        position={index % 2 === 0 ? "right" : "left"}
        contentStyle={{
          background: "#F9F9F9",
          borderBottom: "8px",
          borderStyle: "solid",
          borderBottomColor: theme,
        }}
        contentArrowStyle={{ borderRight: "7px solid  #837F7F" }}
        iconStyle={{
          background: theme,
          color: theme,
        }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={image}
              alt={information.heading}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div className="bg-slate-300 shadow-lg rounded-xl pl-2 p-1">
          <h3 className="text-black text-2xl">{information.heading}</h3>
        </div>
        <div className="bg-slate-200 shadow-lg rounded-lg p-1 mt-4">
          <ul className="my-5 list-disc ml-5 space-y-2">
            {information.info.map((item: string, index: number) => (
              <li
                className="text-black font-normal pl-1 text-base "
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    </div>
  );
};

export default VerticalTimeLine;
