import Categories from "@/components/categories/categories";
import PostCardLists from "@/components/postCardList/PostCardLists";
import Categories2 from "@/components/categories/categories2";
import RecentPosts from "@/components/recentPost/RecentPosts";

const page = ({ params }: any) => {
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
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
