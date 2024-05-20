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
      <p className="mx-auto md:mx-36 mx-10 mb-5 text-center font-bold">
        Now it&apos;s time to challenge your sight singing!
      </p>
      <p className="mx-auto md:mx-36 mx-10 mb-10 text-center">
        Set the speed at which you want the notes (also called
        &quot;degrees&quot;) to be displayed, and try to sing them as quickly as
        they appear!
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
