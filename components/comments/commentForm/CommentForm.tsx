"use client";
import { postComment } from "@/utils/actions/comments.action";
import toast from "react-hot-toast";
import { useRef } from "react";

const CommentForm = ({ slug }: any) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <form
        ref={ref}
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          formData.append("slug", slug);
          toast.promise(postComment(formData), {
            loading: "Sending...",
            success: "Comment sent successfully!",
            error: "Sorry for the inconvenience, please try again.",
          });
          ref.current?.reset();
        }}
      >
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
    </div>
  );
};

export default CommentForm;
