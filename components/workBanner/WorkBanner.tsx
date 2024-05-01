import "./workStyles.scss";
import Link from "next/link";

const WorkBanner = () => {
  return (
    <div className="py-20  bg-black ">
      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
        Our Works Showcase <br />{" "}
        <span className="text-blue-700">What We Do</span>{" "}
        <span className="text-2xl hover:text-blue-600">
          <Link href="/work">
            <i className="fa-regular fa-angles-right"></i>
          </Link>
        </span>
      </h1>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <div className="cazd bg-gray-900 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-52">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
              Work 1
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames.
            </p>
          </div>
          <div className="icon"></div>
        </div>
        <div className="cazd bg-gray-900 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
              Work 2
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames.
            </p>
          </div>
        </div>
        <div className="cazd bg-gray-900 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-44">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
              Work 3
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames.
            </p>
          </div>
        </div>
        <div className="cazd bg-gray-900 p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">
              Work 4
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBanner;
