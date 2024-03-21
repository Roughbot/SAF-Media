"use client";
import { useEffect, useState } from "react";
import BlogCard from "@/components/blogCard/BlogCard";
import { fetchBlogPosts } from "@/utils/actions/blogPost.action";

const Page = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts(1, 8)
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteBlog = (slug: string) => {
    setPosts(posts.filter((post: any) => post.slug !== slug));
  };

  return (
    <div className="p-8">
      <div>
        <input
          type="text"
          placeholder="Search Blog"
          onChange={(e) => setSearch(e.target.value)}
          className="shadow-xl focus:outline-none text-sm rounded-xl bg-slate-500 text-white p-3"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-10">
        {posts.map((post, index) => (
          <div key={index}>
            <BlogCard post={post} onDelete={handleDeleteBlog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
