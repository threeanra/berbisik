import React from "react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import ButtonBack from "@/components/ButtonBack";
import Footer from "@/components/Footer";
import Message from "./components/Message";

export default function MessageSearchPage() {
  return (
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
  );
}
