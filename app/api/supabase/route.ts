import supabase from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("supabase error: ", error.message);
      return NextResponse.json(
        {
          status: "error",
          error: error.message,
          message: "failed to fetch users",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { status: "success", message: "Users retrieved succesfully", data },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("error:", error.message);
      return NextResponse.json(
        {
          status: "error",
          error: error.message,
          message: "Something went wrong",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { status: "error", message: "Something went wrong" },
      { status: 500 }
    );
  }
}
