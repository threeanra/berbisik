import { createClient } from "@/app/utils/supabase/server";
import Container from "@/components/Container";
import FormMessage from "@/components/FormMessage";
import Navbar from "@/components/Navbar";
import React from "react";

export default async function Message() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Container>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <FormMessage name={user?.user_metadata.full_name} />
      </div>
    </Container>
  );
}
