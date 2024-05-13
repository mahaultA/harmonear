"use client";

import ControlPanel from "@/src/ControlPanel";
import { Header } from "@/src/Header";
import NoteDisplay from "@/src/NoteDisplay";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold my-4">Music Training App</h1>
      <ControlPanel
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <NoteDisplay speed={speed} isPlaying={isPlaying} />
    </main>
  );
}
