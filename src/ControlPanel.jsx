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
      <label htmlFor="scrollSpeed" className="text-gray-600 text-sm">
        Set the scrolling speed (in seconds)
      </label>
      <input
        id="scrollSpeed"
        type="number"
        value={speed}
        onChange={handleSpeedChange}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={togglePlaying}
        className="inline-block bg-blue-500 text-white px-2 py-2 rounded"
      >
        {isPlaying ? "Stop" : "Start"}
      </button>
    </div>
  );
}
