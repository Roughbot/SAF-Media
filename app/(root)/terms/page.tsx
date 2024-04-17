import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Right Hand Venture",
  description:
    "Terms of Use for Right Hand Venture. Please read these terms and conditions carefully before using Our Service.",
  keywords: "Marketing,Trending,SEO,Web Development, Social Media Marketing",
};

const page = () => {
  return (
    <div className="py-32 sm:py-10 md:py-40 ">
      <div className="py-10 terms_bg border-b-2 border-white">
        <h1 className=" text-6xl pb-2 text-white text-center">
          Terms and Conditions
        </h1>
      </div>
      <div className="min-h-screen text-white px-8 sm:px-16 md:px-40">
        <div className="bg-slate-800 rounded-md mt-10 p-4">
          <p className="sm:text-lg md:text-xl text-base sm:text-justify">
            This website (
            <span className="font-semibold text-slate-400">“Website”</span>) and
            the Platform (defined below) are owned and operated by Right Hand
            Venture LLP, with offices at Gaur City Center, Noida Extension,
            Uttar Pradesh, 201306 (
            <span className="font-semibold text-slate-400">“Company”</span>
            ). These Terms of Use (this{" "}
            <span className="font-semibold text-slate-400">“Agreement”</span>)
            is a binding agreement between the Company and you (
            <span className="font-semibold text-slate-400">
              “End User”, “You” or “Your”
            </span>
            ). This Agreement governs Your use of and access to the Company’s
            Website and the software platform and all related documentation and
            services (
            <span className="font-semibold text-slate-400">“Platform”</span>).
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-justify pt-10">
            THE COMPANY PROVIDES THE PLATFORM AND ACCESS TO THE WEBSITE SOLELY
            ON THE TERMS AND CONDITIONS OUTLINED IN THIS AGREEMENT INCLUDING OUR
            PRIVACY POLICY FOUND HERE AND ON THE CONDITION THAT YOU ACCEPT AND
            COMPLY WITH THEM. BY ACCESSING THE WEBSITE, USING THE PLATFORM AND
            CONDUCTING TRANSACTIONS WITH THE COMPANY IN CONNECTION WITH THE
            WEBSITE AND PLATFORM YOU HEREBY:{" "}
          </h2>
          <ul className="text-2xl pt-10">
            <li>
              ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE LEGALLY BOUND BY ITS
              TERMS;
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
