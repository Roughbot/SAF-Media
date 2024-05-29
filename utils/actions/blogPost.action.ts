"use server";
import { encode } from "urlencode";
import BlogPost from "../database/models/post.model";
import Comment from "../database/models/comments.model";
import { connectToDatabase } from "../database/mongoConnection";
import { handleError } from "../cn";
import { revalidatePath } from "next/cache";
import path from "path";

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

//fetch  BlogPost by count
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

//fetch blog count

export async function fetchBlogCount() {
  try {
    await connectToDatabase();

    const blogCount = await BlogPost.countDocuments();

    const response = JSON.parse(JSON.stringify(blogCount));

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

//delete blog post by slug

export async function deleteBlogPost(formData: FormData) {
  try {
    await connectToDatabase();

    const slug = formData.get("slug") as string;
    const image = formData.get("image") as string;

    const blogImage = path.basename(image);
    console.log(encode(blogImage));
    await fetch(`/api/deleteImage?name=${encode(blogImage)}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    await BlogPost.deleteOne({ slug });

    await Comment.deleteMany({ slug });

    const response = JSON.parse(
      JSON.stringify({
        message: "BlogPost deleted successfully!",
      })
    );
  } catch (error) {
    handleError(error);
  }

  revalidatePath("/admin/blogs");
}

//fetch all Slugs

export async function fetchAllSlugs() {
  try {
    await connectToDatabase();

    const blogPosts = await BlogPost.find({}, { slug: 1 });

    const response = JSON.parse(JSON.stringify(blogPosts));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//search blogpost by title

export async function searchBlogPost(
  search: string,
  page: number,
  pageSize: number
) {
  try {
    await connectToDatabase();

    const blogCount = await BlogPost.countDocuments({
      title: { $regex: search, $options: "i" },
    });

    const blogPosts = await BlogPost.find({
      title: { $regex: search, $options: "i" },
    })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const response = JSON.parse(JSON.stringify(blogPosts));

    return { response, blogCount };
  } catch (error) {
    handleError(error);
  }
}

//fetch views count

export async function fetchViewsCount() {
  try {
    await connectToDatabase();

    const views = await BlogPost.find({}, { views: 1 });

    const response = JSON.parse(JSON.stringify(views));

    return response;
  } catch (error) {
    handleError(error);
  }
}

//fetch catagory and its count

export async function fetchCategoryCount() {
  try {
    await connectToDatabase();

    const categoryCount = await BlogPost.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    const response = JSON.parse(JSON.stringify(categoryCount));

    return response;
  } catch (error) {
    handleError(error);
  }
}
