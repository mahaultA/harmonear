import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { noteFrequencies } from "./noteFrequencies";

const patternMajorScale = [2, 2, 1, 2, 2, 2, 1];

const ScalePlayer = ({ startNote }) => {
  const [audioContext, setAudioContext] = useState(null);
  const [majorScaleNotes, setMajorScaleNotes] = useState([]);

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    setAudioContext(context);

    // Build major scale notes
    const buildMajorScale = () => {
      let currentNote = startNote;
      const notes = [startNote];
      patternMajorScale.forEach((interval) => {
        const nextNoteIndex =
          Object.keys(noteFrequencies).indexOf(currentNote) + interval;
        const nextNote = Object.keys(noteFrequencies)[nextNoteIndex];
        notes.push(nextNote);
        currentNote = nextNote;
      });
      setMajorScaleNotes(notes);
    };

    buildMajorScale();
  }, [startNote]);

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
    <div className="my-8 text-center">
      <p className="font-bold my-2 text-center">Major Scale Reminder 🎶</p>
      <p className="my-2 text-center">Starting note: {startNote}</p>
      <div className="flex flex-wrap justify-center gap-1">
        {majorScaleNotes.map((note, index) => (
          <Button
            key={index}
            onClick={() => playNote(note)}
            className="flex flex-col rounded-full gap-0"
            size="icon"
          >
            <span className="text-lg">{index + 1}</span>
            {/* <span className="text-xs opacity-30">{note}</span> */}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ScalePlayer;
