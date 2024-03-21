import Categories from "@/components/categories/categories";
import MenuLists from "@/components/menuList/MenuLists";
import PostCardLists from "@/components/postCardList/PostCardLists";
import { fetchRecentBlogPosts } from "@/utils/actions/blogPost.action";

const page = async ({ params }: any) => {
  const { recentPost } = await getPostData();

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
          <PostCardLists type={`${params.slug}`} />
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

async function getPostData() {
  const recentPost = await fetchRecentBlogPosts();
  return recentPost;
}
