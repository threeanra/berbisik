import { createClient } from "@/app/utils/supabase/server";
import Container from "@/components/Container";
import FormMessage from "@/app/message/create/components/FormMessage";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import ButtonBack from "@/components/ButtonBack";
import Footer from "@/components/Footer";

export default async function Message() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Container>
      <Navbar />
      <div className="lg:h-screen mt-32 md:mt-30 lg:mt-0 mb-10 md:mb-0 flex justify-center items-center flex-col gap-4">
        <div className="w-full md:w-[600px]">
          <ButtonBack customClassname="self-start" />
        </div>
        <Card className="w-full md:w-[600px]">
          <CardHeader className="flex gap-2">
            <CardDescription className="text-sm self-end">
              Halo,{" "}
              <span className="italic">{user?.user_metadata.full_name}</span>
            </CardDescription>
            <CardContent className="p-0">
              <FormMessage />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      <Footer />
    </Container>
  );
}
