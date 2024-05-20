"use client";
import TimerDialog from "@/src/TimerDialog";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-2xl font-bold my-4">Music Training App</h1>
      <p>Presentation</p>
      <TimerDialog />
    </main>
  );
}
