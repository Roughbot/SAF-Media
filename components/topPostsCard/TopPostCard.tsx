import Image from "next/image";
import React from "react";

const TopPostCard = ({ topPosts }: any) => {
  return (
    <div className="rounded-2xl bg-slate-300 m-1">
      <div key={topPosts._id} className="flex flex-row items-center gap-4 p-3">
        <Image
          width={48}
          height={48}
          className="w-12 h-12 rounded-full"
          src={topPosts.image}
          alt="featured"
        />
        <div>
          <h1 className="text-lg font-semibold">{topPosts.title}</h1>
          <p className="text-sm text-gray-900">{topPosts.author}</p>
        </div>
      </div>
    </div>
  );
};

export default TopPostCard;
