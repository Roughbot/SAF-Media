import Link from "next/link";
import React from "react";

const categories = [
  {
    cate: "Technology",
    link: "/blogs/category/technology",
    color: "bg-red-300",
  },
  {
    cate: "Business",
    link: "/blogs/category/business",
    color: "bg-green-300",
  },
  {
    cate: "Entertainment",
    link: "/blogs/category/entertainment",
    color: "bg-blue-300",
  },
  {
    cate: "Health",
    link: "/blogs/category/health",
    color: "bg-yellow-300",
  },
  {
    cate: "Science",
    link: "/blogs/category/science",
    color: "bg-purple-300",
  },
  {
    cate: "Sports",
    link: "/blogs/category/sports",
    color: "bg-pink-300",
  },
];

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
