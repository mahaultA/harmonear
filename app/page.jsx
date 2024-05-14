"use client";
import { useEffect, useState } from "react";
import ControlPanel from "@/src/ControlPanel";
import NoteDisplay from "@/src/NoteDisplay";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentNote, setCurrentNote] = useState(null);

  // Fonction pour générer un nombre aléatoire entre 1 et 7 (inclus)
  const generateRandomNote = () => {
    return Math.floor(Math.random() * 7) + 1;
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentNote(generateRandomNote());
      }, speed * 1000);
    }

    return () => clearInterval(intervalId);
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
    </main>
  );
}
