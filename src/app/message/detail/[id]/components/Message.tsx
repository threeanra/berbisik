"use client";
import { getMessageById } from "@/app/services/messageService";
import ButtonBack from "@/components/ButtonBack";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Quote } from "lucide-react";
import React from "react";

export default function MessageDetail({ id }: { id: number }) {
  const { data: detailData, isLoading } = useQuery({
    queryFn: async () => {
      const data = await getMessageById(id);
      return data;
    },
    queryKey: ["messageDetail", id],
  });

  if (isLoading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <Loader2 className="animate-spin" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative flex flex-col gap-24 text-center justify-center items-center w-11/12 md:w-10/12 lg:w-8/12">
        <span className="relative text-2xl md:text-4xl italic font-thin px-5 2xl:p-2">
          <Quote className="absolute left-[-5px] md:left-[-10px] top-[-5px] opacity-60" />
          {detailData?.message}
        </span>
        <span className="text-xl md:text-2xl italic font-light">
          - {detailData?.name}
        </span>
      </div>
      <div className="absolute flex justify-center bottom-24 left-0 right-0">
        <ButtonBack />
      </div>
    </>
  );
}
