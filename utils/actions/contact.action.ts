"use server";

import Contact from "../database/models/contact.model";
import { connectToDatabase } from "../database/mongoConnection";
import { handleError } from "../cn";

//Create Contact
export async function createContact(formData: FormData) {
  try {
    await connectToDatabase();

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: Number(formData.get("phone")),
      message: formData.get("message") as string,
    };

    const newContact = await Contact.create(data);
    const response = JSON.parse(
      JSON.stringify({
        message: "Message sent successfully!",
      })
    );

    return response;
  } catch (error) {
    handleError(error);
    return error;
  }
}
