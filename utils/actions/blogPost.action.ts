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

    if (existingPost) {
      slug += "-" + Date.now();
    }

    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      image: formData.get("image") as string,
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

//update BlogPost

export async function updateBlogPost(slug: string, formData: FormData) {
  try {
    await connectToDatabase();

    const blogPost = await BlogPost.findOne({ slug });

    blogPost.title = formData.get("title") as string;
    blogPost.description = formData.get("description") as string;
    blogPost.category = formData.get("category") as string;
    blogPost.image = formData.get("image") as string;
    blogPost.author = formData.get("author") as string;
    blogPost.content = formData.get("content") as string;

    await blogPost.save();

    const response = JSON.parse(
      JSON.stringify({
        message: "BlogPost updated successfully!",
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

//fetch first 10 BlogPost
export async function fetchBlogPosts(page: number, pageSize: number) {
  try {
    await connectToDatabase();

    const blogPosts = await BlogPost.find(
      {},
      {
        image: 1,
        createdAt: 1,
        author: 1,
        title: 1,
        description: 1,
        slug: 1,
        category: 1,
      }
    )
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const response = JSON.parse(JSON.stringify(blogPosts));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch BlogPost By Category

export async function fetchBlogPostsByCategory(
  category: string,
  page: number,
  pageSize: number
) {
  try {
    await connectToDatabase();

    category.toLowerCase();
    const blogPosts = await BlogPost.find(
      { category },
      {
        image: 1,
        createdAt: 1,
        author: 1,
        title: 1,
        description: 1,
        slug: 1,
      }
    )
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

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

    const blogPosts = await BlogPost.find(
      {},
      { title: 1, createdAt: 1, slug: 1, image: 1 }
    )
      .sort({ createdAt: -1 })
      .limit(3);

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
    const blogPosts = await BlogPost.find(
      {},
      { author: 1, title: 1, slug: 1, createdAt: 1, image: 1 }
    )
      .sort({ views: -1 })
      .limit(6);

    const response = JSON.parse(JSON.stringify(blogPosts));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch next BlogPost

export async function fetchNextBlogPost(slug: string) {
  try {
    await connectToDatabase();

    const blogPost = await BlogPost.findOne(
      { slug: { $gt: slug } },
      { image: 1, title: 1, createdAt: 1, slug: 1 }
    ).sort({
      slug: 1,
    });

    const response = JSON.parse(JSON.stringify(blogPost));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch previous BlogPost

export async function fetchPreviousBlogPost(slug: string) {
  try {
    await connectToDatabase();

    const blogPost = await BlogPost.findOne(
      { slug: { $lt: slug } },
      { image: 1, title: 1, createdAt: 1, slug: 1 }
    ).sort({
      slug: -1,
    });

    const response = JSON.parse(JSON.stringify(blogPost));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//views count
export async function updateViews(slug: string) {
  try {
    await connectToDatabase();

    const blogPost = await BlogPost.findOne({ slug });

    blogPost.views += 1;
    await blogPost.save();

    const response = JSON.parse(JSON.stringify({ message: "Views updated!" }));

    return response;
  } catch (error) {
    handleError(error);
  }
}
