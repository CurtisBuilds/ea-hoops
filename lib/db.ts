// Shared Coach table lookup — same table used by EA Rally
import { createSupabaseServerClient } from "./supabase/server";

export async function findCoachByEmail(email: string) {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase
    .from("Coach")
    .select("id, email, firstName, lastName, role, status")
    .eq("email", email.toLowerCase())
    .single();
  return data;
}
