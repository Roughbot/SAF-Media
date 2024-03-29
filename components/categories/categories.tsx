"use client";
import Link from "next/link";
import React from "react";
import categories from "./category";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Categories = () => {
  return (
    <div>
      <h1 className="text-3xl py-8 text-center text-white font-semibold">
        CATEGORIES
      </h1>
      <div className="p-6">
        <Carousel
          autoPlay
          infinite={true}
          slidesToSlide={1}
          rewind={false}
          rewindWithAnimation={false}
          customTransition="all 1s linear"
          responsive={responsive}
          arrows={false}
          autoPlaySpeed={1000}
          pauseOnHover={true}
          itemClass="px-4"
        >
          {categories.map((category, index) => (
            <div key={index} className="glass">
              <Link href={category.link}>
                <p
                  className={
                    "py-3 px-2 text-black hover:text-sky-500 text-center cat_radius  rounded-lg text-xs sm:text-sm md:text-base lg:text-lg"
                  }
                >
                  {category.cate}
                </p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
