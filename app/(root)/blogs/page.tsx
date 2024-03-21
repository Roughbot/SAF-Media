import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/categories";
import PostCards from "@/components/postCards/PostCards";

import MenuLists from "@/components/menuList/MenuLists";
import {
  fetchFeaturedBlogPosts,
  fetchRecentBlogPosts,
  fetchBlogPosts,
  fetchBlogCount,
} from "@/utils/actions/blogPost.action";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const Blogs = async ({ searchParams }: any) => {
  let page = parseInt(searchParams.page, 10);

  page = !page || page < 1 ? 1 : page;
  const pageSize = 6;

  const { featuredPost, recentPost, blogPosts, blogCount } = await getPostData(
    page,
    pageSize
  );

  const totalPage = Math.ceil(blogCount / pageSize);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  return (
    <div
      style={{ fontFamily: "Dosis" }}
      className="container blog_background mx-auto px-10"
    >
      <div className="pt-28">
        <Featured posts={featuredPost} />
      </div>
      <Categories />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 pt-10 col-span-1">
          {blogPosts.length ? (
            blogPosts.map((post: any) => (
              <PostCards key={post.id} post={post} />
            ))
          ) : (
            <div>
              {[1, 2, 3, 4, 5].map((index) => (
                <Skeleton key={index} className="h-20" />
              ))}
            </div>
          )}
          <div>
            <div className="lg:col-span-8 col-span-1 pb-5 pt-8">
              <div className="flex justify-between">
                <div>
                  <button
                    className={`${
                      page === 1 ? "bg-gray-500" : "bg-gray-900"
                    } text-white px-4 py-2 rounded-md`}
                  >
                    <Link href={`/blogs?page=${prevPage}`}>Previous</Link>
                  </button>
                </div>
                <div>
                  <button
                    className={`${
                      page === totalPage ? "bg-gray-500" : "bg-gray-900"
                    } text-white px-4 py-2 rounded-md`}
                  >
                    <Link href={`/blogs?page=${nextPage}`}>Next</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky py-20 relative top-8">
            <div className="items-center justify-center flex flex-col">
              <MenuLists recentPost={recentPost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

async function getPostData(page: number, pageSize: number) {
  const featuredPost = await fetchFeaturedBlogPosts();
  const recentPost = await fetchRecentBlogPosts();
  const blogPosts = await fetchBlogPosts(page, pageSize);
  const blogCount = await fetchBlogCount();

  return { featuredPost, recentPost, blogPosts, blogCount };
}
