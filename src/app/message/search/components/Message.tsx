"use client";
import { getAllMessages } from "@/app/services/messageService";
import MessageCard from "@/components/MessageCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Message() {
  const { data: allMessages, isLoading } = useQuery({
    queryFn: async () => {
      const data = await getAllMessages();
      return data;
    },
    queryKey: ["allMessages"],
  });
  return (
    <>
      {isLoading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        allMessages?.map((data) => (
          <MessageCard
            key={data.id}
            id={data.id}
            message={data.message}
            name={data.name}
          />
        ))
      )}
    </>
  );
}
