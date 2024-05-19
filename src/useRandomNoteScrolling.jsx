import { useEffect, useRef, useState } from "react";

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

export default useRandomNoteScrolling;
