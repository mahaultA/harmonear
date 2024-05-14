"use client";
import { useEffect, useState } from "react";
import ControlPanel from "@/src/ControlPanel";
import NoteDisplay from "@/src/NoteDisplay";
import Timer from "@/src/Timer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentNote, setCurrentNote] = useState(null);

  const generateRandomNote = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  useEffect(() => {
    let requestId;
    let lastUpdateTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastUpdateTime;

      if (deltaTime >= speed * 1000 || deltaTime < 0) {
        setCurrentNote(generateRandomNote());
        lastUpdateTime = now;
      }

      requestId = requestAnimationFrame(animate);
    };

    if (isPlaying && speed > 0) {
      requestId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(requestId);
  }, [speed, isPlaying]);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-bold my-4">Music Training App</h1>
      <ControlPanel
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={isPlaying}
        togglePlaying={togglePlaying}
      />
      <NoteDisplay currentNote={currentNote} />
      <Timer />
    </main>
  );
}
