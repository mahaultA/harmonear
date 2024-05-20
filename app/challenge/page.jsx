"use client";

import { Button } from "@/components/ui/button";
import RandomNoteChallenge from "@/src/RandomNoteChallenge";
import TimerDialog from "@/src/TimerDialog";

export default function Challenge() {
  return (
    <div>
      <div className="flex justify-end px-8">
        <Button>
          <TimerDialog />
        </Button>
      </div>

      <RandomNoteChallenge />
    </div>
  );
}
