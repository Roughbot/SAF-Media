import Image from "next/image";
import Link from "next/link";
import Categories2 from "../categories/categories2";

const MenuLists = ({ recentPost }: any) => {
  return (
    <>
      <div>
        <div className="glass shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            Recent Posts
          </h3>

          {recentPost.map((post: any, index: number) => (
            <div key={index} className="flex items-center w-full mb-4">
              <div className="w-16 flex-none">
                <Image
                  alt="title"
                  width={200}
                  height={200}
                  unoptimized
                  className="object-cover rounded-lg"
                  src={post.image}
                  priority={true}
                />
              </div>
              <div className="flex-grow ml-4">
                <p className="text-gray-900 font-xs">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <Link
                  href={`/blogs/blog/${post.slug}`}
                  className="text-md"
                  key={index}
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Categories2 />
    </>
  );
};

export default MenuLists;
