"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

const VerticalTimeLine = ({ data, index }: { data: any; index: number }) => {
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
          background: "#f9f9f9",
          color: "#000",
          borderBottomColor: "#837F7F",
          borderStyle: "solid",
          borderBottom: "8px",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #837F7F" }}
        iconStyle={{ background: "#f9f9f9", color: "#837F7F" }}
        icon={<i className="fas fa-code"></i>}
      >
        <div>
          <h3 className="text-black text-xl font-poppins font-semibold">
            {information.heading}
          </h3>
        </div>
        <ul className="my-5 list-disc ml-5 space-y-2">
          {information.info.map((item: string, index: number) => (
            <li
              className="text-black-500/50 font-normal pl-1 text-sm "
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
};

export default VerticalTimeLine;
