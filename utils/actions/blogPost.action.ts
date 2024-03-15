"use server";

import BlogPost from "../database/models/post.model";
import { connectToDatabase } from "../database/mongoConnection";
import { handleError } from "../cn";

//Create BlogPost
export async function createBlogPost(formData: FormData) {
  try {
    await connectToDatabase();

    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      picture: formData.get("picture") as string,
      author: formData.get("author") as string,
      content: formData.get("content") as String,
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
