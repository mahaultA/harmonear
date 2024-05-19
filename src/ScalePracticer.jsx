import React, { useState } from "react";
import ScalePlayer from "./ScalePlayer";
import DroneChordPlayer from "./DroneChordPlayer";

const ScalePracticer = () => {
  const [selectedNote, setSelectedNote] = useState("G3");

  const handleNoteChange = (event) => {
    setSelectedNote(event.target.value);
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-4 text-center">
        <label htmlFor="tonalCenterSelect" className="block font-bold mb-1">
          Choose your tonal center:
        </label>
        <select
          id="tonalCenterSelect"
          className="border border-gray-300 rounded-md p-2"
          value={selectedNote}
          onChange={handleNoteChange}
        >
          <option value="E3">E3</option>
          <option value="F3">F3</option>
          <option value="G3">G3</option>
          <option value="A3">A3</option>
          <option value="A#3">A#3</option>
          <option value="C4">C4</option>
        </select>
      </div>
      <ScalePlayer startNote={selectedNote} />
      <DroneChordPlayer note={selectedNote} />
    </div>
  );
};

export default ScalePracticer;
