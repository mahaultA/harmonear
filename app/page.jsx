"use client";
import { useEffect, useRef, useState } from "react";
import ControlPanel from "@/src/ControlPanel";
import NoteDisplay from "@/src/NoteDisplay";
import Timer from "@/src/Timer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NotePlayer from "@/src/NotePlayer";
import YoutubePlayer from "@/src/YoutubePlayer";

const useRandomNoteScrolling = (isPlaying, speed) => {
  const requestIdRef = useRef(null);
  const lastUpdateTimeRef = useRef(Date.now());
  const [currentNote, setCurrentNote] = useState(null);

  const generateRandomNote = () => {
    return Math.floor(Math.random() * 7) + 1;
  };

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastUpdateTimeRef.current;

      if (deltaTime >= speed * 1000 || deltaTime < 0) {
        let newNote = generateRandomNote();
        while (newNote === currentNote) {
          newNote = generateRandomNote();
        }
        setCurrentNote(() => newNote);
        // setCurrentNote((note) => note + 1);
        lastUpdateTimeRef.current = now;
      }

      requestIdRef.current = requestAnimationFrame(animate);
    };

    if (isPlaying && speed > 0) {
      requestIdRef.current = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(requestIdRef.current);
  }, [isPlaying, speed, currentNote]);

  return currentNote;
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const currentNote = useRandomNoteScrolling(isPlaying, speed);

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
      <NotePlayer />
      <YoutubePlayer />
      <Timer />
    </main>
  );
}
