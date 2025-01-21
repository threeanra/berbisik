"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";

export default function ButtonBack({
  customClassname,
}: Readonly<{ customClassname?: string }>) {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={() => router.back()}
      className={customClassname}
    >
      <MoveLeft />
      Kembali
    </Button>
  );
}
