import React from "react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ButtonBack from "@/components/ButtonBack";
import Footer from "@/components/Footer";
import Message from "./components/Message";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function MessageSearchPage() {
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

        <section className="mt-32 md:mt-30 mb-10 md:mb-0 flex-grow flex justify-center items-center flex-col gap-4">
          <div className="w-full 2xl:max-w-5xl">
            <ButtonBack customClassname="self-start" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:max-w-7xl 2xl:max-w-5xl mx-auto mb-10">
            <Message />
          </div>
        </section>

        <Footer />
      </Container>
    </div>
  );
}
