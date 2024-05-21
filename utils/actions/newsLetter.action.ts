"use server";
import Newsletter from "../database/models/newsletter.model";
import { connectToDatabase } from "../database/mongoConnection";
import { handleError } from "../cn";

//save Newsletter Email
export async function saveNewsletterEmail(email: string) {
  try {
    await connectToDatabase();
    const newEmail = await Newsletter.create({ email });
    const response = JSON.parse(
      JSON.stringify({
        message: "Subscribed successfully!",
      })
    );

    return response;
  } catch (error) {
    handleError(error);
    return error;
  }
}
