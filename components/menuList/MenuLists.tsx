import Image from "next/image";
import image from "../../public/assets/success.svg";

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
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Recent Posts</h3>

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
          <p className="text-gray-500 font-xs">MMM DD, YYYY</p>
          <h4 className="text-lg font-semibold">Post Title</h4>
        </div>
      </div>
    </div>
  );
};

export default MenuLists;
