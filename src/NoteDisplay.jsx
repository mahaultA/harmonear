import React, { useEffect, useRef, useState } from "react";

export default function NoteDisplay({ speed, isPlaying }) {
  const noteDisplayRef = useRef(null);
  const [currentNote, setCurrentNote] = useState(null);

  // Fonction pour générer un nombre aléatoire entre 1 et 7 (inclus)
  const generateRandomNote = () => {
    return Math.floor(Math.random() * 7) + 1;
  };

  useEffect(() => {
    let intervalId;

    if (currentNote === null) {
      setCurrentNote(generateRandomNote());
    }

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentNote(generateRandomNote());
      }, speed * 1000);
    }

    return () => clearInterval(intervalId);
  }, [speed, isPlaying, currentNote]);

  return (
    <div className="my-4" ref={noteDisplayRef}>
      <h2>Current Note: {currentNote}</h2>
    </div>
  );
}
