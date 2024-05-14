import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, RotateCcw } from "lucide-react";

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      const intervalStartTime = Date.now() - (elapsedTime - pausedTime); // Calculer le temps de départ de l'intervalle
      setStartTime(intervalStartTime);

      intervalId = setInterval(() => {
        const now = Date.now();
        const elapsed = now - intervalStartTime + pausedTime; // Calculer le temps écoulé en tenant compte du temps de pause
        setElapsedTime(elapsed); // Mettre à jour le temps écoulé
      }, 10); // Mettre à jour toutes les 10 millisecondes
    } else {
      clearInterval(intervalId);
      setPausedTime(elapsedTime); // Stocker le temps écoulé lorsque le timer est mis en pause
    }

    return () => clearInterval(intervalId);
  }, [isRunning, elapsedTime, pausedTime]);

  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor(elapsedTime % 1000);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setElapsedTime(0);
    setPausedTime(0);
  };

  return (
    <div className="flex mx-auto items-center text-center my-4 flex-col gap-1">
      <h2 className="font-bold">Track your practice time</h2>
      <span className="text-sm">Timer</span>
      <p className="flex mx-auto items-center text-center font-sans">
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(3, "0")}
      </p>
      <div className="flex gap-1">
        <Button
          className={cn("rounded-full")}
          size="icon"
          onClick={startAndStop}
        >
          {isRunning ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button className={cn("rounded-full")} size="icon" onClick={reset}>
          <RotateCcw />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
