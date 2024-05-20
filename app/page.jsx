"use client";
import { Button } from "@/components/ui/button";
import TimerDialog from "@/src/TimerDialog";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold my-4">Music Training App</h1>
      <span className="text-2xl font-bold">🎵</span>
      <p className="my-4">
        The ear trainer for singers/chorists, and musicians
      </p>
      <Button>
        <TimerDialog />
      </Button>
    </main>
  );
}
