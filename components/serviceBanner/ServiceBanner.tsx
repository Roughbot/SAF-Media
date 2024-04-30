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
          leveraging paid media and organic SEO, local SEO, and docial media
          marketing tactics, we&#39;ve got you covered.
        </p>
      </div>
      <div>
        <div className="flex justify-center py-10">
          <button className="bg-blue-700 text-4xl text-white px-10 py-2 rounded-2xl">
            <Link href="/whatwedo">View all Services</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
