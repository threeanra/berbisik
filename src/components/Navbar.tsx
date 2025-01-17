"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/client";
import { Loader2 } from "lucide-react";
import { useUser } from "@/app/hooks/useUser";

export default function Navbar() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    setTimeout(async () => {
      const supabase = await createClient();
      await supabase.auth.signOut();
      setUser(null);
      setLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="flex items-center justify-between py-6 border-b-[1px] px-5 md:px-56">
        <Link href="/">
          <span className="text-2xl font-light">
            ber<span className="font-bold">bisik</span>.
          </span>
        </Link>

        {user ? (
          <Button
            className="bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300"
            onClick={handleLogout}
            disabled={loading} // Disable button during loading
          >
            {loading && <Loader2 className="animate-spin" />}
            {loading ? "Keluar" : "Keluar"}
          </Button>
        ) : (
          <Button
            onClick={() => {
              router.push("/login");
            }}
          >
            Masuk
          </Button>
        )}
      </div>
    </div>
  );
}
