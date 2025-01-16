"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="flex items-center justify-between py-6 border-b-[1px] px-5 md:px-56">
        <Link href="/">
          <span className="text-2xl font-light">
            ber<span className="font-bold">bisik</span>.
          </span>
        </Link>

        <Button
          onClick={() => {
            router.push("/login");
          }}
        >
          Masuk
        </Button>
      </div>
    </div>
  );
}
