// Timer.jsx
import React from "react";
import { useTimerContext } from "./TimerContext";

import { PauseIcon, PlayIcon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    useTimerContext();

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
        <Button size="icon" onClick={toggleTimer}>
          {isRunning ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button size="icon" onClick={resetTimer}>
          <RotateCcw />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
