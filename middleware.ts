import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

async function validateToken(token: string) {
  try {
    jwt.verify(token, process.env.SECRET_TOKEN as string);
    return true;
  } catch (error) {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/";
  const isAdminPath = path === "/admin";

  const token = request.cookies.get("token")?.value || "";

  const isValidToken = await validateToken(token);

  if (isPublicPath && token && isValidToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (isAdminPath && !token && !isValidToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/admin"],
};
