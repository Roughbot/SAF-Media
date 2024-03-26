import BlogCard from "@/components/blogCard/BlogCard";
import { searchBlogPost } from "@/utils/actions/blogPost.action";
import SearchBlog from "@/components/searchBlog/SearchBlog";
import Pagination from "@/components/pagination/Pagination";

const Page = async ({ searchParams }: any) => {
  const searchWord = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const pageSize = 6; // also change in the pagination component
  let posts: any;
  const { response, blogCount } = (await searchBlogPost(
    searchWord,
    page,
    pageSize
  )) as { response: any; blogCount: number };

  posts = response;

  return (
    <div className="p-8 no-scrollbar">
      <div>
        <SearchBlog />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-10">
        {posts.map((post: number, index: number) => (
          <div key={index}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
      <Pagination count={blogCount} />
    </div>
  );
};

export default Page;
