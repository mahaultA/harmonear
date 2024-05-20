// useTimer.jsx
import { useState, useEffect, useRef } from "react";

const REFRESH_FREQ = 10; // Rafraîchir toutes les 10 millisecondes

export const useTimer = () => {
  const watchDogRef = useRef(null);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setStartTime(Date.now() - elapsedTime);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setElapsedTime(0);
  };

  useEffect(() => {
    if (isRunning) {
      watchDogRef.current = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;
        setElapsedTime(elapsed);
      }, REFRESH_FREQ);
    } else {
      clearInterval(watchDogRef.current);
    }

    return () => clearInterval(watchDogRef.current);
  }, [isRunning, startTime]);

  return {
    elapsedTime,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
