"use server";

import Comment from "../database/models/comments.model";
import { connectToDatabase } from "@/utils/database/mongoConnection";
import { handleError } from "@/utils/cn";

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

    const newComment = await Comment.create(data);
    const response = JSON.parse(
      JSON.stringify({
        message: "Comment sent successfully!",
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

    const comments = await Comment.find({ slug });

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
