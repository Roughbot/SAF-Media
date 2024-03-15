"use client";
import Image from "next/image";
import image from "../../public/assets/success.svg";
import { useState, useEffect, useCallback } from "react";
import { fetchRecentBlogPosts } from "@/utils/actions/blogPost.action";

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  const fetchRecentPosts = useCallback(async () => {
    const response = (await fetchRecentBlogPosts()) || [];
    setRecentPosts(response);
  }, []);

  useEffect(() => {
    fetchRecentPosts();
  }, [fetchRecentPosts]);

  return (
    <div>
      <div className="glass shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Recent Posts
        </h3>

        {recentPosts.map((post: any, index: number) => (
          <div key={index} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <Image
                alt="title"
                width={60}
                height={60}
                unoptimized
                className="align-middle rounded-full"
                src={image}
                priority={true}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-900 font-xs">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <h4 className="text-lg font-semibold">{post.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
