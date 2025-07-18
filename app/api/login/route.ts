import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import z from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .refine(
      (value) => {
        if (value === "") return true;
        return z.email().safeParse(value).success;
      },
      {
        message: "Email tidak valid",
      }
    ),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const body = await request.json();

  // validated body
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    const errorMessage = z.flattenError(parsed.error).fieldErrors;

    return NextResponse.json(
      {
        success: false,
        message: "Error validasi",
        error: errorMessage,
      },
      { status: 400 }
    );
  }

  const { email, password } = parsed.data;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.status === 400) {
      return NextResponse.json(
        {
          success: false,
          message: "Email atau password salah. Pastikan Anda sudah terdaftar.",
          error: error.message,
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan saat mencoba login.",
        error: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Login berhasil!",
      data: data.user,
    },
    { status: 200 }
  );
}
