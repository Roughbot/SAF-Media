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
    <div>
      MenuLists
      <div>
        <div className="bg-white shadow-lg rounded-lg p-10 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            Categories
          </h3>
          {categories.map((category, index) => (
            <Link key={index} href={`/${category.link}`}>
              <span
                className={`cursor-pointer block ${
                  index === categories.length - 1 ? "border-b-0" : "border-b"
                } pb-3 mb-3`}
              >
                {category.cate}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuLists;
