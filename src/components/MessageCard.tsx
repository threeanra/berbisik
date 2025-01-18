import React from "react";
import { Card, CardContent } from "./ui/card";

export default function MessageCard() {
  return (
    <Card className="md:w-[330px] h-[250px] cursor-pointer">
      <CardContent className="mt-8 flex flex-col gap-5 px-6 italic font-thin">
        <div className="w-full h-[150px] overflow-hidden items-center flex">
          <span className="text-base line-clamp-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            accusantium voluptatum harum repellendus tempore rem dignissimos
            autem esse saepe illum.
          </span>
        </div>
        <span className="self-end text-sm">- tidak diketahui</span>
      </CardContent>
    </Card>
  );
}
