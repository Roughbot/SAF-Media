"use client";
import React from "react";
import { fetchBlogPosts } from "@/utils/actions/blogPost.action";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [blogPosts, setBlogPosts] = React.useState<any[]>([]);

  const fetchpost = async () => {
    const fetchedPosts = await fetchBlogPosts();
    setBlogPosts(fetchedPosts || []);
    console.log(fetchedPosts);
  };
  return (
    <div className="m-10">
      <Button onClick={fetchpost}>fetch</Button>

      <div>
        <h1>Blog Posts</h1>
        {blogPosts.map((post: any) => {
          return (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <h1 className="text-green-500">{post.slug}</h1>
              <p>{post.description}</p>
              <p>{post.category}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
