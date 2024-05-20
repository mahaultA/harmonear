"use client";

import RandomNoteChallenge from "@/src/RandomNoteChallenge";
import ScalePracticer from "@/src/ScalePracticer";
import Timer from "@/src/Timer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold my-4">Music Training App</h1>

      <Timer />
    </main>
  );
}
