"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { deleteBlogPost } from "@/utils/actions/blogPost.action";
import { ManageComment } from "../commentsViewer/CommentsViewer";
import { UpdateBlog } from "../updateBlog/UpdateBlog";

const BlogCard = ({ post }: any) => {
  return (
    <div className="hover:scale-105 duration-300 ease-in-out hover:transition-transform  transform translateZ(0)">
      <div className="bg-slate-200 flex flex-col p-5 pure_glass rounded-3xl shadow-2xl">
        <div>
          <Image
            width={1000}
            height={800}
            src={post.image}
            alt="blog"
            className="w-[800px] h-40 object-cover rounded-2xl"
          />
        </div>
        <div className="py-4 overflow-auto">
          <div className="flex flex-row justify-between">
            <p className="text-gray-400 text-sm">{post.author}</p>
            <p className="text-gray-400 text-sm">
              {new Date(post.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>
          <h2 className="text-base text-gray-300 font-bold overflow-hidden h-[3em]">
            {post.title}
          </h2>
          <p className="text-white text-sm text-center">{post.category}</p>
        </div>
        <div className="flex flex-row justify-around">
          <UpdateBlog post={post.slug} />

          <ManageComment slug={post.slug} />
          <form action={deleteBlogPost}>
            <input type="hidden" name="slug" value={post.slug} />
            <input type="hidden" name="image" value={post.image} />

            <Button size="sm" className="btn-back-orange">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
