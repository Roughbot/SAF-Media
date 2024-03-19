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

//get contact data

export async function getContactData() {
  try {
    await connectToDatabase();
    const contactData = await Contact.find(
      {},
      {
        name: 1,
        email: 1,
        company: 1,
        message: 1,
      }
    ).sort({ createdAt: -1 });

    const response = JSON.parse(JSON.stringify(contactData));

    return response;
  } catch (error) {
    handleError(error);
    return error;
  }
}
