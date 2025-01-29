import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/server";
import { handleLogout } from "@/lib/actions";
import ButtonLogin from "./ButtonLogin";
import { LogOut } from "lucide-react";
import { ToggleTheme } from "./ToggleTheme";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 ">
      <div className="flex items-center justify-between py-6 border-b-[1px] px-5 lg:px-56">
        <Link href="/">
          <span className="text-2xl font-light">
            ber<span className="font-bold">bisik</span>.
          </span>
        </Link>

        <div className="flex gap-4">
          {user ? (
            <form action={handleLogout}>
              <Button
                className="bg-white text-black border border-black hover:bg-black hover:text-white transition-all duration-300"

                // disabled={loading} // Disable button during loading
              >
                {/* {loading && <Loader2 className="animate-spin" />}
          {loading ? "Keluar" : "Keluar"} */}
                <LogOut />
                Keluar
              </Button>
            </form>
          ) : (
            <ButtonLogin />
          )}
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
