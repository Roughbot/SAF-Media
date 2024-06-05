import React from "react";
import { companyData } from "./data";
import Image from "next/image";

const Company = () => {
  return (
    <div className="pb-10">
      <div className=" p-4 md:p-10">
        <h2 className="text-white text-2xl md:text-4xl text-center">
          Join the team of successful clients who have trusted us with their
          business.
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pb-10 md:p-20 ">
          {companyData.map((company, index) => (
            <div
              key={index}
              className="flex justify-evenly items-center hover:bg-slate-100 hover:rounded-2xl p-2 md:p-5 transition duration-1 hover:scale-105 hover:shadow-sm hover:shadow-white"
            >
              <Image src={company} alt="company" className="h-20 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
