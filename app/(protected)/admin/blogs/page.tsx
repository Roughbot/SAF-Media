import BlogCard from "@/components/blogCard/BlogCard";
import {
  fetchBlogPosts,
  searchBlogPost,
} from "@/utils/actions/blogPost.action";
import SearchBlog from "@/components/searchBlog/SearchBlog";

const Page = async ({ searchParams }: any) => {
  const searchWord = searchParams?.search || "";

  let posts: any;

  if (searchWord) {
    posts = await searchBlogPost(searchWord);
  } else {
    posts = await fetchBlogPosts(1, 6);
  }

  const handleDeleteBlog = (slug: string) => {
    posts = posts.filter((post: any) => post.slug !== slug);
  };

  return (
    <div className="p-8">
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
    </div>
  );
};

export default Page;
