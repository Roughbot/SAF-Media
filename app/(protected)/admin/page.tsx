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
    <div style={{ fontFamily: "Rubik" }}>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 pt-7 px-6">
        <div className="bg-slate-200  text-center p-6 rounded-xl shadow-black shadow-lg m-3  hover:cursor-pointer hover:text-blue-600 hover:scale-110 hover:transition-transform">
          <h1 className="text-xl font-semibold">Number of Blogs</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{BlogCount}</p>
            <DockIcon size={32} />
          </div>
        </div>
        <div className="bg-slate-200  text-center shadow-black  p-6 rounded-xl shadow-lg m-3  hover:cursor-pointer hover:text-blue-600 hover:scale-110 hover:transition-transform">
          <h1 className="text-xl font-semibold">Number of views</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{views}</p>
            <Eye size={32} />
          </div>
        </div>
        <div className="bg-slate-200  p-6 text-center  shadow-black  rounded-xl shadow-lg m-3  hover:cursor-pointer hover:text-blue-600 hover:scale-110  hover:transition-transform">
          <h1 className="text-xl font-semibold">Number of comments</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{CommentCount}</p>
            <MessageSquareText size={32} />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 pt-7 px-6">
        <div className="bg-slate-200 p-5 rounded-xl shadow-black  shadow-lg m-2">
          <BarChartComponent categoryCount={categoryCount} />
        </div>
        <div className="bg-slate-200 p-5 rounded-xl shadow-black  shadow-lg m-2">
          <h1 className="text-lg text-center font-semibold">Top Posts</h1>
          <div className="object-contain max-w-full h-[380px] overflow-y-scroll no-scrollbar px-4 m-auto ">
            {topPosts.map((post: any) => (
              <div
                key={post._id}
                className="hover:scale-100 hover:bg-slate-400  hover:transition-transform hover:overflow-hidden hover:shadow-lg hover:cursor-pointer hover:shadow-black hover:rounded-xl"
              >
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
