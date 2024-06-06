import Link from "next/link";
import React from "react";

const ServiceBanner = () => {
  return (
    <div className="pb-20">
      <div className="pb-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-center font-bold text-white">
          <span className="bg-blue-700 px-2 rounded-2xl inline-block">
            YOUR GOAL
          </span>
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-center font-bold text-white">
          <span className="bg-blue-700 rounded-2xl px-2 inline-block">
            OUR SERVICES
          </span>
        </h1>
      </div>
      <div>
        <p className="text-white px-10 md:px-24 text-center md:text-xl lg:text-2xl">
          Whether you&#39;re seeking to craft a fresh website, revamp your
          exisiting one, bolster your ecommerce platform, enrich your content
          marketing efforts, or manage your social media presence, our seasoned
          experts are here to guide you. We&#39;ll collaborate with you to
          devise a tailored strategy and flawlessly execute it, all at a
          surprisingly competitive price. With over a decade of digital
          marketing experience, we&#39;re adept at effectively promoting your
          business online. From crafting search engine optimized website to
          leveraging paid media and organic SEO, local SEO, and social media
          marketing tactics, we&#39;ve got you covered.
        </p>
      </div>
      <div>
        <div className="flex justify-center py-10">
          <Link href="/whatwedo">
            <span className="text-gray-400 text-2xl hover:text-blue-700 max-w-lg mx-auto mb-2 capitalize flex items-center">
              what we&#39;re offering{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="text-indigo-600 ml-3 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
