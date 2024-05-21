import React, { useState } from "react";
import toast from "react-hot-toast";
import { saveNewsletterEmail } from "@/utils/actions/newsLetter.action";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    saveNewsletterEmail(email)
      .then(() => {
        setEmail("");
        toast.success("Subscribed successfully!");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="pb-8">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label htmlFor="newsletter-email" className=" text-white text-xl ">
          Subscribe to Our Newsletter
        </label>
        <input
          className="border-2 border-gray-300 text-black bg-white h-10 px-5 pr-5 rounded-lg text-sm focus:outline-none focus:border-blue-700 focus:border-2"
          id="newsletter-email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
