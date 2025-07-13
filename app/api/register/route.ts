import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import z from "zod";

const registerSchema = z.object({
  fullname: z.string().min(3, "Fullname must be at least 3 characters"),
  email: z.email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const body = await request.json();

  // Validate body
  const parsed = registerSchema.safeParse(body);

  // Check if validation failed
  if (!parsed.success) {
    const errorMEssages = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { status: "error", message: "validation error", errors: errorMEssages },
      { status: 400 }
    );
  }

  // Get data from body parsed
  const { email, password, fullname } = parsed.data;

  // Register
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
    },
  });

  // Check if email alrekady registered
  if (data?.user?.identities?.length === 0) {
    return NextResponse.json(
      { success: false, message: "Email already registered" },
      { status: 409 }
    );
  }

  // Check error
  if (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }

  // Inesert ke users table
  if (data?.user) {
    await supabase.from("users").upsert({
      id: data.user.id,
      email: data.user.email,
      fullname,
    });
  }

  // Return response
  return NextResponse.json(
    {
      success: true,
      message:
        "User registered successfully. Please check your email to verify your account.",
      data: {
        id: data.user?.id,
        email: data.user?.email,
      },
    },
    { status: 200 }
  );
}
