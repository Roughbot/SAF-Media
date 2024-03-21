import Categories from "@/components/categories/categories";
import MenuLists from "@/components/menuList/MenuLists";
import PostCards from "@/components/postCards/PostCards";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchBlogPostsByCategory,
  fetchRecentBlogPosts,
} from "@/utils/actions/blogPost.action";
import Link from "next/link";

const page = async ({ params }: any) => {
  let page = parseInt(params.page, 10);

  page = !page || page < 1 ? 1 : page;
  const pageSize = 6;

  const { recentPost, blogPosts } = await getPostData(
    page,
    pageSize,
    params.slug
  );

  const totalPage = Math.ceil(blogPosts.length / pageSize);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  return (
    <div
      style={{ fontFamily: "Dosis" }}
      className="container blog_background mx-auto px-10"
    >
      <div className="pt-20">
        <Categories />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 pt-10 col-span-1">
          {blogPosts.length ? (
            blogPosts.map((post: any) => (
              <PostCards key={post.id} post={post} />
            ))
          ) : (
            <div>
              {[1, 2, 3, 4, 5].map((index) => (
                <Skeleton key={index} className="h-10" />
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

export default page;

async function getPostData(page: number, pageSize: number, category: string) {
  const recentPost = await fetchRecentBlogPosts();
  const blogPosts = await fetchBlogPostsByCategory(category, page, pageSize);

  return { recentPost, blogPosts };
}
