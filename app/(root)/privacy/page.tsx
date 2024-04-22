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
      <div>
        <p className="text-white p-8 md:p-20 text-justify text-lg md:text-xl">
          Right Hand Venture and its subsidiaries and affiliates{" "}
          <span className="text-gray-400 font-semibold">
            (“We”, “Our”, “Us” or “PDM”)
          </span>{" "}
          work to maintain a high standard of data privacy following your data
          protection rights under applicable law. The protection and proper use
          of the personal information that you entrust to Us is a responsibility
          We take seriously. This privacy notice explains what personal
          information We may collect through{" "}
          <span className="text-gray-400 font-semibold">
            <a
              href="https://powerdigitalmarketing.com/"
              target="_blank"
              className="hover:text-blue-600"
            >
              (“Power Digital Marketing Site”)
            </a>
          </span>
          , how We may use it, and the rights that you have concerning that data{" "}
          <span className="text-gray-400 font-semibold">
            (“Privacy Notice”)
          </span>
          .
        </p>

        <p className="text-white px-8 md:px-20 pb-10 text-justify text-lg md:text-xl">
          We provide access to our Site and related information, services and
          features, including the Nova platform{" "}
          <span className="text-gray-400 font-semibold">(“Services”)</span> to
          you conditioned upon your acceptance of all terms, conditions,
          policies and notices stated in this Privacy Notice and our Terms of
          Use found here:{" "}
          <span className="text-gray-400 font-semibold">
            <a
              href="https://powerdigitalmarketing.com/terms-of-use/"
              target="_blank"
              className="hover:text-blue-600"
            >
              (“Terms of Use”)
            </a>
          </span>
          . By providing your Personal Information or using the Site you consent
          to the practices outlined in this Privacy Notice, the Terms of Use and
          to Our collection, processing, transfer or use of your Personal
          Information. If you do not consent to any collection, processing,
          transfer or use of such information, please do not use or access any
          part of the Site or submit Personal Information.
        </p>
      </div>
      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">General</h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20 ">
          <div className="space-y-6">
            <p className="text-white text-justify text-lg md:text-xl">
              When you provide personal information about yourself through the
              Sites, We only process your personal information when We have a
              lawful basis to do so. We collect certain information that
              identifies, relates to, describes, is reasonably capable of being
              associated with, or could reasonably be linked, directly or
              indirectly, with a consumer or household{" "}
              <span className="text-gray-400 font-semibold">
                (“Personal Information”)
              </span>
              . Personal Information does not include de-identified or
              aggregated consumer information. We collect Personal Information
              from individuals visiting our Site, including as you browse our
              Site.
            </p>
            <p className="text-white text-justify text-lg md:text-xl">
              By accessing the Site, you acknowledge this Privacy Notice and
              agree to be bound by the terms hereof.
            </p>
            <p className="text-white text-justify text-lg md:text-xl">
              Our legal bases for processing your Personal Information include
            </p>
          </div>
          <ol className="list-decimal text-justify list-inside space-y-3 text-lg md:text-xl pt-4">
            <li>Your consent;</li>
            <li>Fulfilment of a contractual obligation; and</li>
            <li>
              where We have a legitimate interest in processing your Personal
              Information consistent with applicable law. Our legitimate
              interests include:
              <ol className="list-disc list-inside space-y-3 text-lg md:text-xl pt-3 px-3 md:px-10">
                <li>
                  Investigating, preventing, and protecting against fraud,
                  security risks, threats to you and others, and violations of
                  this Privacy Notice;
                </li>
                <li>
                  Protecting and defending our rights and properties, including
                  intellectual property;
                </li>
                <li>
                  Complying with laws and regulations that apply to Us, as well
                  as responding to requests from law enforcement or government
                  authorities or as otherwise required by law;
                </li>
                <li>Improving your experiences with our Site;</li>
                <li>
                  Understanding and improving our Site, user experience, and
                  customer relationships; and
                </li>
                <li>Enabling our business operations.</li>
              </ol>
            </li>
          </ol>
          <p className="text-white text-justify text-lg md:text-xl pt-8">
            Where We rely on your consent to process your Personal Information,
            you have the right to change, withdraw or withhold your consent.
            Notwithstanding the foregoing, the processing of IP addresses is a
            necessary part of providing access to the Sites, so We cannot
            provide access to the Sites without this information.
          </p>
        </div>
      </div>
      <div>
        <div className="py-10 terms_bg border-b-2 border-white">
          <h1 className=" text-3xl pb-2 text-white text-center">
            Information we May Collect
          </h1>
        </div>
        <div className="text-white px-8 py-10 sm:px-8 md:px-20">
          <div className="space-y-6">
            <p className="text-white text-justify text-lg md:text-xl">
              We collect Personal Information that you choose to share with Us
              as well as information provided directly by your browser or device
              when you visit our Site.
            </p>
            <p className="text-white text-justify text-lg md:text-xl">
              Information Collected from You
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
