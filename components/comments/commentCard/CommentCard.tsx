"use client";
import { getComments } from "@/utils/actions/comments.action";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

const CommentCard = ({ slug }: any) => {
  const [comments, setComments] = useState([]);
  console.log(slug, comments);

  useEffect(() => {
    getComments(slug).then((data) => {
      setComments(data);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment: any, index: number) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {new Date(comment.createdAt).toLocaleDateString()}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.message)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CommentCard;
