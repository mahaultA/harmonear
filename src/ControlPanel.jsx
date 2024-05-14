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
    <div className="my-4">
      <input
        type="number"
        value={speed}
        onChange={handleSpeedChange}
        className="mr-2 p-2 border border-gray-300"
      />
      <button
        onClick={togglePlaying}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isPlaying ? "Stop" : "Start"}
      </button>
    </div>
  );
}
