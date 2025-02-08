import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type FooterProps = {
  isAbsolute?: boolean;
  customClass?: string;
};

export default function Footer({
  isAbsolute = false,
  customClass,
}: FooterProps) {
  return (
    <footer
      className={cn(
        `px-5 md:px-56 flex items-center justify-center p-4 ${customClass}`,
        isAbsolute ? "lg:absolute bottom-0 left-0 right-0" : ""
      )}
    >
      <div className="text-sm md:text-base font-light flex flex-col justify-center items-center gap-1 z-10">
        <span>2025 © berbisik all rights reserved</span>
        <span>
          Made with <span className="font-bold">love</span> by{" "}
          <Link
            className="underline"
            href="https://github.com/threeanra"
            target="_blank"
          >
            Trian.
          </Link>
        </span>
      </div>
    </footer>
  );
}
