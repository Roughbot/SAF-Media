import MenuLists from "@/components/menuList/MenuLists";
import { fetchBlogPostBySlug } from "@/utils/actions/blogPost.action";
import PostDetails from "@/components/postdetails/PostDetails";
import CommentForm from "@/components/comments/commentForm/CommentForm";
import CommentCard from "@/components/comments/commentCard/CommentCard";

const page = async ({ params }: any) => {
  const post = await fetchBlogPostBySlug(params.slug);
  return (
    <div
      style={{ fontFamily: "Dosis" }}
      className="container mx-auto px-10  mb-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-36 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetails post={post} />
          <CommentForm slug={post.slug} />
          <CommentCard slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <MenuLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

export async function getPostData({ params }: any) {
  const post = await fetchBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}
