"use client";
import { postComment } from "@/utils/actions/comments.action";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const CommentSubmitForm = ({ slug }: any) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(ref.current as HTMLFormElement);
    await postComment(formData);
    toast.success("Comment posted successfully");
    ref.current?.reset();
  };

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <input type="hidden" name="slug" value={slug} />
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          className="p-4 outline-none w-full rounded-lg h-25 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          name="comment"
          required
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          required
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          required
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>

      <div className="mt-8 items-center">
        <button
          type="submit"
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-indigo-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentSubmitForm;
