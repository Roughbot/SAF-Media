import Image from "next/image";

const PostDetails = ({ post }: any) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12  mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <Image
            src={post.image}
            width={1920}
            height={1080}
            alt={post.title}
            className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center justify-between mb-8 w-full">
            <div className="hidden md:flexjustify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {post.author}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline mr-2 text-blue-500"
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
              <span className="align-middle text-black">
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex flex-row space-x-8">
              <h2 className="text-black text-3xl font-bold">{post.author}</h2>

              <p className="flex items-center justify-center text-black">
                {post.views} Views
              </p>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold text-black">
            {post.title}
          </h1>
          <div
            className="first-letter:text-4xl text-black"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
