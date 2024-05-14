import React from "react";

export default function NoteDisplay({ currentNote }) {
  return (
    <div className="my-4">
      <h2>Current Note: {currentNote}</h2>
    </div>
  );
}
