import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, RotateCcw } from "lucide-react";

const REFRESH_FREQ = 10; // Rafraîchir toutes les 10 millisecondes

const useTimer = () => {
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

const formatTime = (time) => {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor(time % 1000);
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
    .toString()
    .padStart(3, "0")}`;
};

const Timer = () => {
  const { elapsedTime, isRunning, startTimer, stopTimer, resetTimer } =
    useTimer();

  const toggleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className="flex mx-auto items-center text-center my-8 flex-col gap-1">
      <h2 className="font-bold">Track your practice time</h2>
      <span className="text-sm">Timer</span>
      <p className="flex mx-auto items-center text-center font-sans">
        {formatTime(elapsedTime)}
      </p>
      <div className="flex gap-1">
        <Button
          className={cn("rounded-full")}
          size="icon"
          onClick={toggleTimer}
        >
          {isRunning ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button className={cn("rounded-full")} size="icon" onClick={resetTimer}>
          <RotateCcw />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
