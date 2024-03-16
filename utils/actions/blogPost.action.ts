"use server";

import BlogPost from "../database/models/post.model";
import { connectToDatabase } from "../database/mongoConnection";
import { handleError } from "../cn";

//Create BlogPost
export async function createBlogPost(formData: FormData) {
  try {
    await connectToDatabase();

    let slug = formData.get("slug") as string;
    const existingPost = await BlogPost.findOne({ slug });
    console.log(slug, existingPost);

    if (existingPost) {
      slug += "-" + Date.now();
    }

    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      picture: formData.get("picture") as string,
      author: formData.get("author") as string,
      content: formData.get("content") as String,
      slug: slug as string,
    };

    const newBlogPost = await BlogPost.create(data);
    const response = JSON.parse(
      JSON.stringify({
        message: "BlogPost created successfully!",
      })
    );

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch BlogPost By Slug
export async function fetchBlogPostBySlug(slug: string) {
  try {
    await connectToDatabase();

    const blogPost = await BlogPost.findOne({ slug });

    const response = JSON.parse(JSON.stringify(blogPost));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch BlogPost
export async function fetchBlogPosts() {
  try {
    await connectToDatabase();

    const blogPosts = await BlogPost.find();

    const response = JSON.parse(JSON.stringify(blogPosts));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch recent BlogPost

export async function fetchRecentBlogPosts() {
  try {
    await connectToDatabase();

    const blogPosts = await BlogPost.find().sort({ createdAt: -1 }).limit(3);

    const response = JSON.parse(JSON.stringify(blogPosts));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch BlogPost with high views

export async function fetchFeaturedBlogPosts() {
  try {
    await connectToDatabase();

    const blogPosts = await BlogPost.find().sort({ views: -1 }).limit(10);

    const response = JSON.parse(JSON.stringify(blogPosts));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch BlogPost By Category

export async function fetchBlogPostsByCategory(category: string) {
  try {
    await connectToDatabase();

    const blogPosts = await BlogPost.find({ category: category });

    const response = JSON.parse(JSON.stringify(blogPosts));

    return response;
  } catch (error) {
    handleError(error);
  }
}
