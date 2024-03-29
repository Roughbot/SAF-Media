import Image from "next/image";
import Link from "next/link";

const PostCards = ({ post }: any) => {
  const date = new Date(post.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="white_glass shadow-lg rounded-lg p-0 lg:p-6 pb-6 mb-4">
      <div className="relative overflow-hidden shadow-md pb-40 mb-3">
        <Image
          src={post.image}
          width={600}
          height={800}
          alt="Image of the post"
          className="object-top absolute h-full  w-full object-fill shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      <h1 className="transition duration-700 text-center mb-4 cursor-pointer hover:text-blue-700 text-xl font-semibold">
        <Link href={`/blogs/blog/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-4 w-full">
        <div className="flex justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-4 items-center">
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-base">
            {post.author}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline mr-1 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">{date}</span>
        </div>
      </div>
      <p className="text-center text-sm sm:text-xl text-gray-900 font-normal px-2 lg:px-10 mb-4">
        {post.description}
      </p>
      <div className="text-center">
        <Link href={`/blogs/blog/${post.slug}`}>
          <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-700 text-base font-medium rounded-full text-white px-4 py-2 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCards;
