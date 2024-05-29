"use client";
import slugify from "slugify";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { uploadFile } from "@/utils/aws-config";
import crypto from "crypto";

import {
  createBlogPost,
  updateBlogPost,
} from "@/utils/actions/blogPost.action";
import toast from "react-hot-toast";

const QuillNoSSRWrapper = dynamic(
  () => {
    import("react-quill/dist/quill.snow.css" as any);
    return import("react-quill");
  },
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const BlogPostForm = ({ existingPost }: any) => {
  //check if existing post is available
  const [title, setTitle] = useState(existingPost ? existingPost.title : "");
  const [description, setDescription] = useState(
    existingPost ? existingPost.description : ""
  );
  const [category, setCategory] = useState(
    existingPost ? existingPost.category : ""
  );
  const [picture, setPicture] = useState(
    existingPost ? existingPost.image : ""
  );
  const [content, setContent] = useState(
    existingPost ? existingPost.content : ""
  );
  const [author, setAuthor] = useState(existingPost ? existingPost.author : "");

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setDescription(existingPost.description);
      setCategory(existingPost.category);
      setPicture(existingPost.image);
      setContent(existingPost.content);
      setAuthor(existingPost.author);
    }
  }, [existingPost]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Function to handle form submission

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const slug = slugify(title, { lower: true, strict: true });

    // Upload image
    setLoading(true);

    if (!selectedFile) {
      throw new Error("No image selected");
    }

    const imageFormData = new FormData();
    imageFormData.append("file", selectedFile);

    const response = await fetch("/api/uploads", {
      method: "POST",
      body: imageFormData,
    });

    console.log(response);

    const data = await response.json();

    setLoading(false);

    const pictureURL = data.path;

    // Create form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("category", category.toLowerCase());
    formData.append("image", pictureURL);
    formData.append("content", content);
    formData.append("author", author);

    if (existingPost) {
      // Update existing post
      toast.promise(
        updateBlogPost(existingPost.slug, formData).then(() => {
          window.location.reload();
        }),
        {
          loading: "Updating...",
          success: "Blog Post Updated successfully!",
          error: "Failed to Update Blog Post!",
        }
      );
    } else {
      // Create new post
      toast.promise(createBlogPost(formData), {
        loading: "Creating...",
        success: "Blog Post Created successfully!",
        error: "Failed to Create Blog Post!",
      });
    }

    setTitle("");
    setDescription("");
    setCategory("");
    setPicture("");
    setContent("");
    setAuthor("");
  };

  return (
    <form
      className="space-y-10 sm:p-10 rounded-3xl shadow-2xl bg-slate-200 pure_glass"
      onSubmit={handleSubmit}
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 p-8 gap-10">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="p-3 rounded-2xl bg-slate-300 !ring-0 !ring-offset-0 shadow-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="p-3 rounded-2xl bg-slate-300 !ring-0 !ring-offset-0 shadow-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="p-3 rounded-2xl bg-slate-300 !ring-0 !ring-offset-0 shadow-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="p-3 rounded-2xl bg-slate-300 !ring-0 !ring-offset-0 shadow-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            name="author"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="picture">Header Image</label>
          <input
            name="picture"
            className="p-3 rounded-2xl bg-slate-300 !ring-0 !ring-offset-0 shadow-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            type="file"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-14 px-10">
        <div className="overflow-hidden rounded-lg shadow-lg border-2 border-gray-300 p-2">
          <label htmlFor="content p-2">Content</label>
          <QuillNoSSRWrapper
            theme="snow"
            className=" bg-slate-300 !ring-0 !ring-offset-0 shadow-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            value={content}
            onChange={setContent}
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
              ],
              clipboard: {
                matchVisual: false,
              },
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "link",
              "image",
            ]}
          />
        </div>
        <div className="flex items-center pb-2 justify-center ">
          <Button type="submit" className="btn w-[120px]  btn-primary">
            {loading ? "Uploading..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BlogPostForm;
