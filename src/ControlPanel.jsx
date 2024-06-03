import { Button } from "@/components/ui/button";
import React from "react";

export default function ControlPanel({
  speed,
  setSpeed,
  isPlaying,
  togglePlaying,
}) {
  const handleSpeedChange = (e) => {
    if (Number.isNaN(e.target.value)) {
      return;
    }
    setSpeed(e.target.value);
  };

  return (
    <div className="mx-auto my-4 gap-1 text-center">
      <label htmlFor="scrollSpeed" className="block text-gray-600 text-sm">
        Règle la vitesse de défilement (en secondes):
      </label>
      <div className="inline-block">
        <input
          id="scrollSpeed"
          type="number"
          value={speed}
          onChange={handleSpeedChange}
          className="p-2 border border-gray-300 rounded w-40 text-center"
        />
      </div>
      <div className="mt-2">
        <Button
          onClick={togglePlaying}
          className="block text-white px-8 py-2 rounded mx-auto"
        >
          {isPlaying ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  );
}
