import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import getCurrentUser from "@/lib/getCurrentUser";

export async function GET() {
  const supabase = await createClient();
  const { user, error } = await getCurrentUser();

  if (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal ambil data user",
        error: error.message,
        data: null,
      },
      { status: 500 }
    );
  }

  const { data, error: dbError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user?.id)
    .single();

  if (dbError) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal ambil data user dari DB",
        error: dbError.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Berhasil ambil data user",
    data,
  });
}
