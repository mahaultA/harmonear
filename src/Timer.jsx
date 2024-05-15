import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PauseIcon, PlayIcon, RotateCcw } from "lucide-react";

const REFRESH_FREQ = 50;

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

const useTimer = () => {
  const watchDogRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState({
    timerValue: 0,
    lastTime: Date.now(),
  });

  const refreshTimer = () => {
    const now = Date.now();
    setTimer((ps) => ({
      timerValue: ps.timerValue + (now - ps.lastTime),
      lastTime: now,
    }));
  };

  const resetTimer = () => {
    setTimer(() => ({
      timerValue: 0,
      lastTime: Date.now(),
    }));
  };

  useEffect(() => {
    // Starting timer for the first time.
    if (!watchDogRef.current && !paused) {
      watchDogRef.current = setInterval(refreshTimer, REFRESH_FREQ);
    }

    /***************** Important Note *****************
     * The following is commented since the returned function from the effect is implemented
     * when the strict mode is enabled in development.
     * You can keep it commented or use (npm run build && serve -s build) command
     * in order for the code to run as expected on production environment.
     *
     * To install serve use the command (npm install -g serve).
     *****************/

    // Clearing the watchDogRef interval upon unmount if it is already set.
    // return () => {
    //     if (watchDogRef.current)
    //         clearInterval(watchDogRef.current);
    // }

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    // paused turned true, so we clear the interval.
    if (paused) {
      // Clearing the interval.
      clearInterval(watchDogRef.current);
      // Clearing the reference to the interval.
      watchDogRef.current = 0;
      // Updating the timer with remaining of the second when the value is set to pause as the timer will not be updated.
      refreshTimer();
    }

    // paused turned false, so we resume the timer
    else if (!watchDogRef.current) {
      // Setting last time to now() since we need to calculate the time from the moment timer was resumed.
      setTimer((ps) => ({ ...ps, lastTime: Date.now() }));
      // Creating creating the watchdog interval.
      watchDogRef.current = setInterval(refreshTimer, REFRESH_FREQ);
    }
  }, [paused]);

  return {
    timerValue: timer.timerValue,
    paused,
    setPaused,
    resetTimer,
  };
};

const Timer = () => {
  const { timerValue, paused, setPaused, resetTimer } = useTimer();

  const togglePaused = () => setPaused(!paused);

  return (
    <div className="flex mx-auto items-center text-center my-4 flex-col gap-1">
      <h2 className="font-bold">Track your practice time</h2>
      <span className="text-sm">Timer</span>
      <p className="flex mx-auto items-center text-center font-sans">
        {formatTime(timerValue)}
      </p>
      <div className="flex gap-1">
        <Button
          className={cn("rounded-full")}
          size="icon"
          onClick={togglePaused}
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
        </Button>
        <Button className={cn("rounded-full")} size="icon" onClick={resetTimer}>
          <RotateCcw />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
