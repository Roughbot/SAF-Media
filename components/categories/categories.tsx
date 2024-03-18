import Link from "next/link";
import React from "react";
import categories from "./category";

const Categories = () => {
  return (
    <div>
      <h1 className="text-3xl py-8 text-center text-white font-semibold">
        CATEGORIES
      </h1>
      <div className="p-6">
        <div className="flex flex-wrap sm:flex-row gap-3 md:items-center justify-around">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <p
                className={`py-3 px-2 text-black text-center rounded-lg ${category.color} text-xs sm:text-sm md:text-base lg:text-lg`}
              >
                {category.cate}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
