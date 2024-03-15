import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// async function validateToken(token: string) {
//   // Validate the token with your session management system
//   // This could involve checking a database or an external API
//   const isValid = await someExternalValidationFunction(token);
//   return isValid;
// }

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/";
  const isAdminPath = path === "/admin";

  const token = request.cookies.get("token")?.value || "";

  // const isValidToken = await validateToken(token);

  // if (isPublicPath && !isValidToken) {
  //   return NextResponse.redirect(new URL("/login", request.nextUrl));
  // }

  // if (isAdminPath && !isValidToken) {
  //   return NextResponse.redirect(new URL("/login", request.nextUrl));
  // }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (isAdminPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/admin"],
};
