import React, { useState, useEffect } from "react";

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      const intervalStartTime = Date.now(); // Stocker le timestamp initial
      setStartTime(intervalStartTime);

      intervalId = setInterval(() => {
        const now = Date.now();
        const elapsed = now - intervalStartTime; // Calculer le temps écoulé depuis le début de l'intervalle
        setElapsedTime(elapsed); // Mettre à jour le temps écoulé
      }, 10); // Mettre à jour toutes les 10 millisecondes
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor(elapsedTime % 1000);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setElapsedTime(0);
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
        <button
          className="w-20 bg-blue-500 text-white px-2 py-2 rounded"
          onClick={startAndStop}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="w-20 bg-blue-500 text-white px-2 py-2 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
