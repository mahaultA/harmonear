import React, { useState } from "react";
import ScalePlayer from "./ScalePlayer";
import DroneChordPlayer from "./DroneChordPlayer";

const ScalePracticer = () => {
  const [selectedNote, setSelectedNote] = useState("G3");

  const handleNoteChange = (event) => {
    setSelectedNote(event.target.value);
  };

  return (
    <div className="mx-auto mx-20 px-4 items-center justify-center">
      <h1 className="mx-auto md:mx-16 mb-5 text-center font-bold">
        Major Scale Practicer
      </h1>
      <p className="mx-auto md:mx-16 mb-10 text-center">
        Practice singing and hearing each tone of the major scale. Start by
        choosing the tonal center you want to practice, you can choose to
        practice with or without the background drone chord
      </p>
      <div className="mx-auto mb-4 text-center items-center justify-center">
        <label
          htmlFor="tonalCenterSelect"
          className="block font-bold mb-1 text-sm"
        >
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
