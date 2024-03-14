import React from "react";
import Link from "next/link";
import image from "../../public/assets/success.svg";

const FeaturedPostCard = () => (
  <div className="relative h-72">
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: image }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        MMM DD, YYYY
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
        Title of the Featured Post
      </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center">
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">
          Author Name
        </p>
      </div>
    </div>
    <Link href="/">
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
