"use server";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoConnection";
import { handleError } from "../cn";
import { revalidatePath } from "next/cache";

type CreateUserParams = {
  username: string;
  password: string;
  isAdmin?: boolean;
  isSuperAdmin?: boolean;
};

//Create User
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

//Get All User
export async function getAllUser() {
  try {
    await connectToDatabase();

    const users = await User.find({});
    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    handleError(error);
  }
}

//Delete User
export async function deleteUser(id: string) {
  try {
    await connectToDatabase();

    const userToDelete = await User.findById(id);

    if (!userToDelete) {
      throw new Error("User not found");
    }

    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

//Update User
export async function updateUser(id: string, user: CreateUserParams) {
  try {
    await connectToDatabase();

    const userToUpdate = await User.findOneAndUpdate(
      {
        _id: id,
      },
      user,
      {
        new: true,
      }
    );

    if (!userToUpdate) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(userToUpdate));
  } catch (error) {
    handleError(error);
  }
}
