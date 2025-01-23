"use server";
import { createClient } from "../utils/supabase/server";

export const getMessages = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("all_message")
    .select("*")
    .order("id");
  if (error) throw error;
  return data;
};

export const getMessageById = async (id: number) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("all_message")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

export const postMessage = async ({
  name,
  message,
}: {
  name: string;
  message: string;
}) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("all_message")
    .insert({
      name,
      message,
    })
    .select("*");
  if (error) throw error;
  return data;
};
