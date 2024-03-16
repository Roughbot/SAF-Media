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
    <div className="glass text-center shadow-lg rounded-lg p-8 pb-12 ">
      <h3 className="text-2xl mb-8 font-semibold  ">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href="/">
          <span className="cursor-pointer text-indigo-100 pb-2 block">
            {category.cate}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
