"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const router = useRouter();
  return (
    <Container>
      <div className="h-screen flex items-center justify-center">
        <Card className="w-[400px]">
          <CardHeader className="flex gap-2">
            <CardTitle className="text-center text-3xl mt-5 mb-3">
              <Link href="/">
                <span className="text-2xl font-light">
                  ber<span className="font-bold">bisik</span>.
                </span>
              </Link>
            </CardTitle>
            <Button>Masuk dengan akun Google</Button>
            <Button
              onClick={() => {
                router.push("/");
              }}
              variant={"outline"}
            >
              Kembali
            </Button>
            <span className="text-sm font-thin text-center">
              Masuk untuk mulai menulis
            </span>
          </CardHeader>
        </Card>
      </div>
    </Container>
  );
}
