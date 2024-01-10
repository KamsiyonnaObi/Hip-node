import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/home",
    "/meetups",
    "/groups",
    "/podcasts",
    "/interviews",
    "/profile/:path*",
    "/info",
    "/",
  ],
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const token = await getToken({
    req: request,
  });

  if (!token) {
    url.pathname = "/sign-in";
    return NextResponse.redirect(url);
  }

  if (url.pathname === "/") {
    url.pathname = "/home";
    return NextResponse.redirect(url);
  }
}
