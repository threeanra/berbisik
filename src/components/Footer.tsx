import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="lg:absolute bottom-0 left-0 right-0 px-5 md:px-56 flex items-center justify-center p-4">
      <div className="text-sm md:text-base font-light flex flex-col justify-center items-center gap-1">
        <span>2025 © berbisik all rights reserved</span>
        <span>
          Made with <span className="font-bold">love</span> by{" "}
          <Link className="underline" href="https://github.com/threeanra">
            Trian.
          </Link>
        </span>
      </div>
    </footer>
  );
}
