import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-10 min-h-screen flex flex-col px-5 lg:px-56">
      {children}
    </div>
  );
}
