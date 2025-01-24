"use client";
import React from "react";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import MessageCard from "@/components/MessageCard";
import { useRouter } from "next/navigation";
import { NotebookText, Pencil, UserSearch } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getLatestMessage } from "@/app/services/messageService";
import { SkeletonCard } from "./SkeletonCard";
export default function Hero() {
  const router = useRouter();
  const { data: latestMessage, isLoading } = useQuery({
    queryFn: async () => {
      const data = await getLatestMessage();
      return data;
    },
    queryKey: ["latestMessage"],
  });
  return (
    <Container>
      <section className="lg:h-screen mt-48 md:mt-30 lg:mt-0 2xl:mt-0 flex items-center justify-center flex-col gap-5 text-center">
        <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-light text-center">
          Ruang hening tempat aksara ber
          <span className="font-bold">bisik</span>
        </h1>

        <div className="flex flex-col md:text-xl 2xl:text-2xl font-light">
          <p>
            Ditempat ini, kamu bebas mengekspresikan diri tanpa terusik, tanpa
            terpikirkan, tanpa terpengaruh.
          </p>
          <p>Sampaikan pesanmu, yang tak pernah tersampaikan itu.</p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => {
              router.push("/message/create");
            }}
          >
            <Pencil />
            Tulis pesanmu
          </Button>
          <Button className="bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300">
            <UserSearch /> Pesan orang lain
          </Button>
        </div>

        <div className="flex flex-wrap lg:flex-row justify-center mt-5 gap-5">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            latestMessage?.map((data) => (
              <MessageCard
                key={data.id}
                id={data.id}
                message={data.message}
                name={data.name}
              />
            ))
          )}
        </div>
        {!isLoading && (
          <Button variant={"outline"} className="my-2">
            <NotebookText />
            Lihat Pesan Lainnya
          </Button>
        )}
      </section>
    </Container>
  );
}
