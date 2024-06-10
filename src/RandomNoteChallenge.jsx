import { useState, useEffect } from "react";
import ControlPanel from "@/src/ControlPanel";
import NoteDisplay from "@/src/NoteDisplay";
import useRandomNoteScrolling from "./useRandomNoteScrolling";
import { noteFrequencies } from "./noteFrequencies";
import { Button } from "@/components/ui/button";

const patternMajorScale = [2, 2, 1, 2, 2, 2, 1];
const startNote = "G3";

const RandomNoteChallenge = () => {
  const TWO_SECOND_SPEED = 2;

  const [speed, setSpeed] = useState(TWO_SECOND_SPEED);
  const [isPlaying, setIsPlaying] = useState(false);
  const [majorScaleNotes, setMajorScaleNotes] = useState([]);

  const currentNote = useRandomNoteScrolling(isPlaying, speed);

  useEffect(() => {
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
  }, []);

  const createAndPlayOscillator = (frequency) => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

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
        vite qu&apos;elles apparaissent
      </p>
      <ControlPanel
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={isPlaying}
        togglePlaying={togglePlaying}
      />
      <div className="flex flex-col justify-center items-center my-4">
        <Button className="mx-auto my-4" onClick={() => playNote(startNote)}>
          Note de départ G3 🔊
        </Button>
        <NoteDisplay currentNote={currentNote} />
        {currentNote !== null && (
          <Button onClick={() => playNote(majorScaleNotes[currentNote - 1])}>
            Corrigé 🔊
          </Button>
        )}
      </div>
    </div>
  );
};

export default RandomNoteChallenge;
