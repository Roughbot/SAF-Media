import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Right Hand Venture",
  description:
    "Privacy Policy of Right Hand Venture. We are a digital marketing agency that specializes in SEO, Web Development, and Social Media Marketing. We help businesses grow their online presence and increase their revenue. We are a team of experts who are passionate about helping businesses succeed online. We offer a wide range of services to help businesses reach their goals. Our team is dedicated to providing the best possible service to our clients. We are committed to helping businesses succeed online and we are here to help you grow your business. Contact us today to learn more about how we can help you grow your business online",
  keywords: "Marketing,Trending,SEO,Web Development, Social Media Marketing",
};

const PrivacyPage: React.FC = () => {
  return (
    <div className="py-32 sm:py-10 md:py-40 ">
      <div className="py-10 terms_bg border-b-2 border-white">
        <h1 className=" text-6xl pb-2 text-white text-center">
          Privacy Policy
        </h1>
      </div>
      <p className="text-left text-gray-700">Last updated: April 14, 2024</p>
    </div>
  );
};

export default PrivacyPage;
