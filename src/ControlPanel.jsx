import React from "react";
import { useState } from "react";

export default function ControlPanel({
  speed,
  setSpeed,
  isPlaying,
  setIsPlaying,
}) {
  // Vitesse de défilement par défaut

  const handleStartStop = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (e) => {
    setSpeed(parseFloat(e.target.value));
  };

  return (
    <div className="my-4">
      <input
        type="number"
        value={speed}
        onChange={handleSpeedChange}
        className="mr-2 p-2 border border-gray-300"
      />
      <button
        onClick={handleStartStop}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isPlaying ? "Stop" : "Start"}
      </button>
    </div>
  );
}
