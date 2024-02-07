"use client";

import { StaticClass, getValue } from "@/lib/static-class";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p>{StaticClass.getValue()}</p>
    </div>
  );
}
