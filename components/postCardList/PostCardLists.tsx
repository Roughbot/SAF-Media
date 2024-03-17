"use client";
import PostCards from "../postCards/PostCards";
import { useEffect, useState, useCallback } from "react";
import { fetchBlogPosts } from "@/utils/actions/blogPost.action";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const PostCardLists = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const fetchPosts = useCallback(async () => {
    const posts = await fetchBlogPosts(page, pageSize);

    setPosts(posts);
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  if (!posts.length) {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <Skeleton key={index} className="h-20" />
        ))}
        <div className="flex justify-between p-10">
          <Button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </Button>
          <Button onClick={handleNextPage}>Next</Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCards key={post.id} post={post} />
      ))}
      <div className="flex justify-between p-10">
        <Button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    </div>
  );
};

export default PostCardLists;
