// logout
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Gagal logout",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Berhasil logout",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Gagal logout",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
