"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export default function ButtonLogin() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/login")}>
      <LogIn />
      Masuk
    </Button>
  );
}
