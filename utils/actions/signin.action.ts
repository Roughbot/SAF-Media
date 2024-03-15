"use server";

import { connectToDatabase } from "@/utils/database/mongoConnection";
import User from "@/utils/database/models/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function SignIn(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
  try {
    await connectToDatabase();
    const reqBody = await req.json();
    const { username, password } = reqBody;

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 400 });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Incorrect Password" },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      user: user.username,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN!, {
      expiresIn: "12h",
    });

    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
