import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Daftar route yang boleh diakses tanpa login
const publicRoutes = ["/", "/login", "/register"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("pathname", pathname);

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get("sb-access-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], 
};
