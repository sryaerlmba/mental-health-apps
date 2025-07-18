import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

// Daftar route yang boleh diakses tanpa login
const publicRoutes = ["/", "/login", "/register"];

export async function middleware(req: NextRequest) {
  const supabase = await createClient();
  const { pathname } = req.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.error("Error getting session:", sessionError);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log(session);

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
