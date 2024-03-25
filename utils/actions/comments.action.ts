"use server";
import Blog from "../database/models/post.model";
import Comment from "../database/models/comments.model";
import { connectToDatabase } from "@/utils/database/mongoConnection";
import { handleError } from "@/utils/cn";
import { revalidateTag } from "next/cache";

//post comment

export async function postComment(formData: FormData) {
  try {
    await connectToDatabase();

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("comment") as string,
      slug: formData.get("slug") as string,
    };

    const blogPost = await Blog.findOne({ slug: data.slug });

    if (!blogPost) {
      throw new Error("Blog post not found!");
    }

    const newComment = await Comment.create(data);

    blogPost.comments.push(newComment._id);

    await blogPost.save();
    revalidateTag("comments");

    const response = JSON.parse(
      JSON.stringify({
        message: "Comment posted successfully!",
      })
    );

    return response;
  } catch (error) {
    handleError(error);
    return error;
  }
}

//get comments by slug

export async function getComments(slug: string) {
  try {
    await connectToDatabase();

    const comments = await Comment.find({ slug }).sort({ createdAt: -1 });

    const response = JSON.parse(JSON.stringify(comments));

    return response;
  } catch (error) {
    handleError(error);
    return error;
  }
}

//delete comments by id

export async function deleteComment(id: string) {
  try {
    await connectToDatabase();

    await Comment.findByIdAndDelete(id);

    const response = JSON.parse(
      JSON.stringify({
        message: "Comment deleted successfully!",
      })
    );

    return response;
  } catch (error) {
    handleError(error);
    return error;
  }
}

// fetch the number of comments

export async function fetchCommentCount() {
  try {
    await connectToDatabase();

    const commentCount = await Comment.find({}).countDocuments();

    const response = JSON.parse(JSON.stringify(commentCount));

    return response;
  } catch (error) {
    handleError(error);
    return error;
  }
}
