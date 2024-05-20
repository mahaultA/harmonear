"use client";

import RandomNoteChallenge from "@/src/RandomNoteChallenge";
import TimerDialog from "@/src/TimerDialog";

export default function Challenge() {
  return (
    <div>
      <TimerDialog />
      <RandomNoteChallenge />
    </div>
  );
}
