'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function ErrorPage() {
  const route = useRouter();
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <span className="text-3xl font-light">
        ber<span className="font-bold">bisik</span>.
      </span>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-light">Ups, ada kesalahan.</span>
        <Button onClick={() => route.push("/")}>Kembali</Button>
      </div>
    </div>
  );
}
