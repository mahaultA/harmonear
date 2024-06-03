import { useState } from "react";
import ControlPanel from "@/src/ControlPanel";
import NoteDisplay from "@/src/NoteDisplay";
import useRandomNoteScrolling from "./useRandomNoteScrolling";

const RandomNoteChallenge = () => {
  const TWO_SECOND_SPEED = 2;

  const [speed, setSpeed] = useState(TWO_SECOND_SPEED);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentNote = useRandomNoteScrolling(isPlaying, speed);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mx-auto px-4 sm:max-w-lg">
      <p className="mx-auto mx-10 mb-5 text-center font-bold">
        C&apos;est maintenant le moment de te challenger
      </p>
      <p className="mx-auto mx-10 mb-10 text-center">
        Règle la vitesse de défilement des notes et essaye de les chanter aussi
        vite qu&quot; elles apparaissent
      </p>
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
