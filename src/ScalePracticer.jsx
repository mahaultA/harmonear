import React, { useState } from "react";
import ScalePlayer from "./ScalePlayer";
import DroneChordPlayer from "./DroneChordPlayer";

const ScalePracticer = () => {
  const [selectedNote, setSelectedNote] = useState("G3");

  const handleNoteChange = (event) => {
    setSelectedNote(event.target.value);
  };

  return (
    <div className="mx-auto px-4 sm:max-w-lg mx-20 items-center justify-center">
      <h1 className="mx-auto mb-5 text-center font-bold">
        Pratique la gamme majeure
      </h1>
      <p className="mx-auto mb-10 text-center">
        Choisis la note de départ (centre tonal) : <br />
        En général E3 pour les hommes et G3 pour les femmes. <br />
        Lance l&apos;accord de fond. <br />
        Entraîne toi à chanter chaque numéro.
      </p>
      <div className="mx-auto mb-4 text-center items-center justify-center">
        <label
          htmlFor="tonalCenterSelect"
          className="block font-bold mb-1 text-sm"
        >
          Choisis ta note de départ
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
