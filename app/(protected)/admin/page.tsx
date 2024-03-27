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
        <div className="bg-slate-200 glassmorphism text-gray-400 shadow-white  text-center p-6 rounded-xl  shadow-lg m-3  hover:cursor-pointer hover:text-blue-600 hover:scale-110 hover:transition-transform">
          <h1 className="text-xl font-semibold">Total Blogs</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{BlogCount}</p>
            <DockIcon size={32} />
          </div>
        </div>
        <div className="bg-slate-200 glassmorphism text-gray-400 shadow-white  p-6 rounded-xl shadow-lg m-3  hover:cursor-pointer  text-center hover:text-blue-600 hover:scale-110 hover:transition-transform">
          <h1 className="text-xl font-semibold">Total views</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{views}</p>
            <Eye size={32} />
          </div>
        </div>
        <div className="bg-slate-200 glassmorphism text-gray-400 shadow-white  p-6 text-center    rounded-xl shadow-lg m-3  hover:cursor-pointer hover:text-blue-600 hover:scale-110  hover:transition-transform">
          <h1 className="text-xl font-semibold">Total comments</h1>
          <div className="flex flex-row items-center justify-center gap-4 p-3">
            <p className="text-center text-3xl font-semibold">{CommentCount}</p>
            <MessageSquareText size={32} />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 pt-7 px-6">
        <div className="p-5 glassmorphism rounded-xl shadow-white hover:bg-gray-900 shadow-lg m-2">
          <BarChartComponent categoryCount={categoryCount} />
        </div>
        <div className="bg-slate-200 glassmorphism p-5 rounded-xl shadow-white  shadow-lg m-2">
          <h1 className="text-xl text-center text-gray-400 py-2 font-semibold">
            Top Posts
          </h1>
          <div className="object-contain max-w-full h-[380px] overflow-y-scroll no-scrollbar px-4 m-auto ">
            {topPosts.map((post: any) => (
              <div
                key={post._id}
                className="hover:scale-100 hover:bg-slate-400  duration-500 ease-in-out hover:transition-transform hover:overflow-hidden hover:shadow-lg hover:cursor-pointer hover:shadow-black hover:rounded-xl"
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
