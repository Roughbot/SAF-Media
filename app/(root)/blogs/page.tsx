import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/categories";
import PostCardLists from "@/components/postCardList/PostCardLists";
import MenuLists from "@/components/menuList/MenuLists";

const Blogs = () => {
  return (
    <main className="flex min-h-screen overflow-hidden px-20 flex-col items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div>
        <Featured />
        <Categories />
      </div>
      <div className="flex gap-12 px-32">
        <div className="flex-5 ">
          <PostCardLists />
        </div>
        <div className="flex-2 hidden sm:block">
          <MenuLists />
        </div>
      </div>
    </main>
  );
};

export default Blogs;
