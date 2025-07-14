import { createClient } from "@/utils/supabase/client";

export async function fetchFeatures() {
  const supabase = createClient();

  const { data, error } = await supabase.from("features").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
