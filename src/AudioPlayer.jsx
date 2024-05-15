import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { noteFrequencies } from "./noteFrequencies";

const AudioPlayer = () => {
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    setAudioContext(context);
  }, []);

  const createAndPlayOscillator = (frequency) => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    oscillator.connect(audioContext.destination);
    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, 1000);
  };

  const playNote = (noteName) => {
    const frequency = noteFrequencies[noteName];
    if (frequency) {
      createAndPlayOscillator(frequency);
    } else {
      console.error(`Note ${noteName} non supportée.`);
    }
  };

  return (
    <div className="flex gap-1">
      <Button onClick={() => playNote("G3")}>G3</Button>
      <Button onClick={() => playNote("A3")}>A3</Button>
      <Button onClick={() => playNote("B3")}>B3</Button>
      <Button onClick={() => playNote("C4")}>C4</Button>
      <Button onClick={() => playNote("D4")}>D4</Button>
      <Button onClick={() => playNote("E4")}>E4</Button>
      <Button onClick={() => playNote("F#4")}>F#4</Button>
      <Button onClick={() => playNote("G4")}>G4</Button>
    </div>
  );
};

export default AudioPlayer;
