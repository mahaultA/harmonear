import { useState } from "react";
import ControlPanel from "@/src/ControlPanel";
import NoteDisplay from "@/src/NoteDisplay";
import useRandomNoteScrolling from "./useRandomNoteScrolling";

const RandomNoteChallenge = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const currentNote = useRandomNoteScrolling(isPlaying, speed);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <ControlPanel
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={isPlaying}
        togglePlaying={togglePlaying}
      />
      <NoteDisplay currentNote={currentNote} />
    </div>
  );
};

export default RandomNoteChallenge;
