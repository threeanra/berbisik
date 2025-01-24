import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import React from "react";
import MessageDetail from "./components/Message";
import Footer from "@/components/Footer";

export default function DetailMessagePage({
  params,
}: {
  params: { id: string };
}) {
  console.log(params.id);
  return (
    <Container>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center">
        <MessageDetail id={Number(params.id)} />
      </section>
      <Footer customClass="absolute bottom-0 left-0 right-0" />
    </Container>
  );
}
