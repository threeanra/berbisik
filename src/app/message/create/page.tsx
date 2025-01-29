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
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default async function Message() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "absolute w-full h-full",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "opacity-50"
          )}
        />
      </div>
      <Container>
        <Navbar />
        <section className="2xl:h-screen mt-32 md:mt-30 2xl:mt-0 mb-10 md:mb-0 flex justify-center items-center flex-col gap-4">
          <div className="w-full md:w-[600px]">
            <ButtonBack customClassname="self-start" />
          </div>
          <Card className="w-full md:w-[600px] mb-10">
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
        </section>
        <Footer customClass="2xl:absolute bottom-0 left-0 right-0" />
      </Container>
    </div>
  );
}
