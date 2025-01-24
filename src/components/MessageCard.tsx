import React from "react";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

export default function MessageCard({
  id,
  name,
  message,
}: {
  id: string;
  name: string;
  message: string;
}) {
  const newName = name === "anonim" ? "tidak diketahui" : name;
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/message/detail/${id}`)}
      className="w-full md:w-[330px] h-[250px] cursor-pointer"
    >
      <Card>
        <CardContent className="mt-8 flex flex-col gap-5 px-6 italic font-thin">
          <div className="w-full h-[150px] overflow-hidden items-center flex justify-center">
            <span className="text-base line-clamp-6">{message}</span>
          </div>
          <span className="self-end text-sm">- {newName}</span>
        </CardContent>
      </Card>
    </div>
  );
}
