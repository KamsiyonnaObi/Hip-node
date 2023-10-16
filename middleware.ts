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
    "/profile",
  ],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
  });
  const url = request.nextUrl.clone();
  url.pathname = "/sign-in";
  if (!token) {
    return NextResponse.redirect(url);
  }
}
