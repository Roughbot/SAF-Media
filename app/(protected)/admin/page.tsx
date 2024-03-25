import BarChartComponent from "@/components/dashBoardChart/BarChart";
import TopPostCard from "@/components/topPostsCard/TopPostCard";
import {
  fetchBlogCount,
  fetchCategoryCount,
  fetchFeaturedBlogPosts,
  fetchViewsCount,
} from "@/utils/actions/blogPost.action";
import { fetchCommentCount } from "@/utils/actions/comments.action";
import { Eye, MessageSquareText, DockIcon } from "lucide-react";

export default async function Home() {
  const { BlogCount, CommentCount, views, topPosts, categoryCount } =
    await getPostData();

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 pt-10 px-6">
        <div className="bg-white text-center p-6 rounded-xl shadow-black shadow-lg m-3">
          <h1>Number of Blogs</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{BlogCount}</p>
            <DockIcon size={32} />
          </div>
        </div>
        <div className="bg-white text-center shadow-black  p-6 rounded-xl shadow-lg m-3">
          <h1>Number of views</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{views}</p>
            <Eye size={32} />
          </div>
        </div>
        <div className="bg-white p-6 text-center shadow-black  rounded-xl shadow-lg m-3">
          <h1>Number of comments</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{CommentCount}</p>
            <MessageSquareText size={32} />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 pt-10 px-6">
        <div className="bg-slate-200 p-5 rounded-xl shadow-black  shadow-lg m-2">
          <h1 className="text-lg text-center font-semibold">Category chart</h1>
          <BarChartComponent categoryCount={categoryCount} />
        </div>
        <div className="bg-slate-200 p-5 rounded-xl shadow-black  shadow-lg m-2">
          <h1 className="text-lg text-center font-semibold">Top Posts</h1>
          <div className="object-contain max-w-full h-[360px] overflow-scroll px-4 m-auto">
            {topPosts.map((post: any) => (
              <div key={post._id}>
                <TopPostCard topPosts={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

async function getPostData() {
  const BlogCount = await fetchBlogCount();
  const CommentCount = await fetchCommentCount();
  const viewsCount = await fetchViewsCount();
  const topPosts = await fetchFeaturedBlogPosts();
  const categoryCount = await fetchCategoryCount();

  let views = 0;
  for (let i = 0; i < viewsCount.length; i++) {
    views += viewsCount[i].views;
  }

  return { BlogCount, CommentCount, views, topPosts, categoryCount };
}
