import Link from "next/link";
import React from "react";
import categories from "./category";

const Categories = () => {
  return (
    <div className="glass text-center shadow-lg rounded-lg p-8 pb-12 ">
      <h3 className="text-2xl mb-8 font-semibold  ">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={category.link}>
          <span className="cursor-pointer text-indigo-100 pb-2 block">
            {category.cate}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
