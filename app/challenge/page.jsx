"use client";

import RandomNoteChallenge from "@/src/RandomNoteChallenge";
import TimerDialog from "@/src/TimerDialog";

export default function Challenge() {
  return (
    <div className="mt-10">
      <RandomNoteChallenge />
      <div className="flex justify-center px-8">
        <span className="py-4">
          <TimerDialog />
        </span>
      </div>
    </div>
  );
}
