"use server";
import { createClient } from "@/app/utils/supabase/server";

export async function handleLogout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
