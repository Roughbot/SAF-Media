"use client";
import PostCards from "../postCards/PostCards";
import { useEffect, useState, useCallback } from "react";
import { fetchBlogPosts } from "@/utils/actions/blogPost.action";

const PostCardLists = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const fetchPosts = useCallback(async () => {
    const posts = await fetchBlogPosts();

    setPosts(posts);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      {posts.map((post) => (
        <PostCards key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostCardLists;
