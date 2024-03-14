import Image from "next/image";
import image from "../../public/assets/success.svg";
import Link from "next/link";

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
const MenuLists = () => {
  return (
    <>
      <div className="glass shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Recent Posts
        </h3>

        <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt="title"
              width={60}
              height={60}
              unoptimized
              className="align-middle rounded-full"
              src={image}
              priority={true}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-900 font-xs">MMM DD, YYYY</p>
            <h4 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            </h4>
          </div>
        </div>
        <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt="title"
              width={60}
              height={60}
              unoptimized
              className="align-middle rounded-full"
              src={image}
              priority={true}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-900 font-xs">MMM DD, YYYY</p>
            <h4 className="text-lg font-semibold">Lorem ipsum dolor sit</h4>
          </div>
        </div>
        <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt="title"
              width={60}
              height={60}
              unoptimized
              className="align-middle rounded-full"
              src={image}
              priority={true}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-900 font-xs">MMM DD, YYYY</p>
            <h4 className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            </h4>
          </div>
        </div>
      </div>
      <div className="glass text-center shadow-lg w-[200px] rounded-lg p-8 pb-12 ">
        <h3 className="text-2xl mb-8 font-semibold  ">Categories</h3>
        {categories.map((category, index) => (
          <Link key={index} href="/">
            <span className="cursor-pointer pb-2 block">{category.cate}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MenuLists;
