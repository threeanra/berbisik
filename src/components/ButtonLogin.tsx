"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ButtonLogin() {
  const router = useRouter();
  return <Button onClick={() => router.push("/login")}>Masuk</Button>;
}
