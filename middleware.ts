import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

// Daftar route yang boleh diakses tanpa login
const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/artikel",
  "/artikel/[id]/[slug]",
];

export async function middleware(req: NextRequest) {
  const supabase = await createClient();
  const { pathname } = req.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  console.log(user);
  if (userError) {
    console.error("Error getting user:", userError);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log(user);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
