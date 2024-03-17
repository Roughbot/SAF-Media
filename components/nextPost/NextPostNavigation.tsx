"use client";
import { useEffect, useState } from "react";
import NextPost from "./NextPost";
import {
  fetchNextBlogPost,
  fetchPreviousBlogPost,
} from "@/utils/actions/blogPost.action";

const NextPostNavigation = ({ slug }: any) => {
  const [nextPost, setNextPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNextBlogPost(slug).then((response) => {
      if (response) {
        setNextPost(response);
        setLoading(true);
      }
    });

    fetchPreviousBlogPost(slug).then((response) => {
      if (response) {
        setPreviousPost(response);
        setLoading(true);
      }
    });
  }, [slug]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
        {loading && (
          <>
            {previousPost && (
              <div
                className={`${
                  nextPost
                    ? "col-span-1 lg:col-span-4"
                    : "col-span-1 lg:col-span-8"
                } adjacent-post rounded-lg relative h-72`}
              >
                <NextPost post={previousPost} position="LEFT" />
              </div>
            )}
            {nextPost && (
              <div
                className={`${
                  previousPost
                    ? "col-span-1 lg:col-span-4"
                    : "col-span-1 lg:col-span-8"
                } adjacent-post rounded-lg relative h-72`}
              >
                <NextPost post={nextPost} position="RIGHT" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NextPostNavigation;
