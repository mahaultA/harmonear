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
    <div className="flex my-4 flex-col gap-1">
      <input
        type="number"
        value={speed}
        onChange={handleSpeedChange}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={togglePlaying}
        className="inline-block bg-blue-500 text-white px-2 py-2 rounded-full"
      >
        {isPlaying ? "Stop" : "Start"}
      </button>
    </div>
  );
}
