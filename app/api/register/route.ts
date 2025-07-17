import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";
import z from "zod";

const registerSchema = z
  .object({
    fullname: z.string().min(3, "Nama lengkap minimal 3 karakter"),
    email: z
      .string()
      .refine((val) => val.trim().length > 0, {
        message: "Email wajib diisi",
      })
      .refine((val) => /\S+@\S+\.\S+/.test(val), {
        message: "Email tidak valid",
      }),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const body = await request.json();

  // Validate body
  const parsed = registerSchema.safeParse(body);

  // Check if validation failed
  if (!parsed.success) {
    const errorMessage = z.flattenError(parsed.error).fieldErrors;

    return NextResponse.json(
      { success: false, message: "Error validasi", errors: errorMessage },
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

  // Check if email already registered
  if (data?.user?.identities?.length === 0) {
    return NextResponse.json(
      { success: false, message: "Email sudah terdaftar" },
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
        "Registrasi berhasil. Silakan cek email Anda untuk verifikasi akun.",
      data: {
        id: data.user?.id,
        email: data.user?.email,
      },
    },
    { status: 200 }
  );
}
