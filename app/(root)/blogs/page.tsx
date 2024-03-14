import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/categories";
import PostCardLists from "@/components/postCardList/PostCardLists";
import MenuLists from "@/components/menuList/MenuLists";

const Blogs = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="pt-28">
        <Featured />
      </div>
      <Categories />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostCardLists />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky pt-20 relative top-8">
            <MenuLists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
