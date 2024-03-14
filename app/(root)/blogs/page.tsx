import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/categories";
import PostCardLists from "@/components/postCardList/PostCardLists";
import MenuLists from "@/components/menuList/MenuLists";

const Blogs = () => {
  return (
    <div
      style={{ fontFamily: "Dosis" }}
      className="container blog_background mx-auto px-10"
    >
      <div className="pt-28">
        <Featured />
      </div>
      <Categories />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 pt-10 col-span-1">
          <PostCardLists />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky py-20 relative top-8">
            <div className="items-center justify-center flex flex-col">
              <MenuLists />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
