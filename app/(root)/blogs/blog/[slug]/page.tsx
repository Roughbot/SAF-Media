import MenuLists from "@/components/menuList/MenuLists";
import {
  fetchBlogPostBySlug,
  fetchRecentBlogPosts,
  fetchAllSlugs,
} from "@/utils/actions/blogPost.action";
import PostDetails from "@/components/postdetails/PostDetails";
import CommentForm from "@/components/comments/commentForm/CommentForm";
import CommentCard from "@/components/comments/commentCard/CommentCard";
import NextPostNavigation from "@/components/nextPost/NextPostNavigation";
import { Skeleton } from "@/components/ui/skeleton";
import { updateViews } from "@/utils/actions/blogPost.action";

export async function getStaticParams() {
  const slugs = await fetchAllSlugs();
  const paths = slugs.map((slug: any) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

const page = async ({ params }: any) => {
  const { post, recentPost } = await getPostData(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-10  mb-8">
        <Skeleton />
      </div>
    );
  }

  return (
    <div
      style={{ fontFamily: "Dosis" }}
      className="container mx-auto px-10  mb-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-36 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetails post={post} />
          <NextPostNavigation slug={post.slug} />
          <CommentForm slug={post.slug} />
          <CommentCard slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8 pb-10">
            <MenuLists recentPost={recentPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

async function getPostData(slug: string) {
  const post = await fetchBlogPostBySlug(slug);
  const recentPost = await fetchRecentBlogPosts();
  if (post) {
    await updateViews(post.slug);
  }
  return { post, recentPost };
}
