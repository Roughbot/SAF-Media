import Image from "next/image";
import Link from "next/link";

const MenuLists = ({ recentPost }: any) => {
  return (
    <>
      <div>
        <div className="white_glass shadow-lg rounded-lg p-8 pb-4 mb-8">
          <h3 className="text-2xl text-center mb-3 font-semibold border-b pb-4">
            Recent Posts
          </h3>

          {recentPost.map((post: any, index: number) => (
            <div
              key={index}
              className="flex items-center w-full rounded-lg hover:shadow-lg  px-2 py-1 hover:bg-slate-300 hover:shadow-black border-0 mb-4"
            >
              <div className="w-16 flex-none">
                <Image
                  alt="title"
                  width={200}
                  height={200}
                  unoptimized
                  className="object-cover h-full w-full rounded-lg"
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
    </>
  );
};

export default MenuLists;
