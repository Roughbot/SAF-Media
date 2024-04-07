"use client";
import ServicesComponent from "@/components/servicesComponent/ServicesComponent";
import Image from "next/image";
import services from "@/public/assets/services.jpg";
import { serviceData } from "./data";
import VerticalTimeLine from "@/components/verticalTimeLine/VerticalTimeLine";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const page = ({ params }: any) => {
  const service = params.slug;
  return (
    <div className="py-40">
      <div className="relative">
        <h1 className="lg:text-8xl text-4xl text-white pb-3">
          {serviceData[0][service as keyof (typeof serviceData)[0]].title}
        </h1>
        <Image
          src={services}
          alt="Marketing"
          className="object-cover w-full h-[400px] lg:h-[500px]"
        />
        <div
          className="absolute pure_glass "
          style={{
            position: "absolute",
            top: "95%",
            left: "60%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p className="text-black text-xs md:text-xl lg:text-2xl p-5">
            {
              serviceData[0][service as keyof (typeof serviceData)[0]]
                .description
            }
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="text-6xl text-white pt-40">Our Services</h1>

        <VerticalTimeline lineColor="#837F7F">
          {serviceData[0][
            service as keyof (typeof serviceData)[0]
          ].information.map((info: any, index: number) => (
            <VerticalTimeLine
              data={info}
              image={
                serviceData[0][service as keyof (typeof serviceData)[0]].image
              }
              theme={
                serviceData[0][service as keyof (typeof serviceData)[0]].theme
              }
              index={index}
              key={index}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div className="pt-20">
        <ServicesComponent />
      </div>
    </div>
  );
};

export default page;
