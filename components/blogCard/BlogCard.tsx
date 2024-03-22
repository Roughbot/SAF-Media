"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { deleteBlogPost } from "@/utils/actions/blogPost.action";
import toast from "react-hot-toast";
import { ManageComment } from "../commentsViewer/CommentsViewer";
import { UpdateBlog } from "../updateBlog/UpdateBlog";

const BlogCard = ({ post }: any) => {
  return (
    <div>
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
            <p className="text-gray-900 text-sm">{post.author}</p>
            <p className="text-gray-900 text-sm">
              {new Date(post.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>
          <h2 className="text-base font-bold overflow-hidden h-[3em]">
            {post.title}
          </h2>
          <p className="text-slate-900 text-sm text-center">{post.category}</p>
        </div>
        <div className="flex flex-row justify-around">
          <UpdateBlog post={post.slug} />
          <form action={deleteBlogPost}>
            <input type="hidden" name="slug" value={post.slug} />
            <input type="hidden" name="image" value={post.image} />

            <Button size="sm" variant="destructive">
              Delete
            </Button>
          </form>
          <ManageComment slug={post.slug} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
