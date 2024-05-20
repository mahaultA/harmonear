"use client";

import React from "react";
import ScalePracticer from "@/src/ScalePracticer";
import TimerDialog from "@/src/TimerDialog";
import { Button } from "@/components/ui/button";

const Practicer = () => {
  return (
    <div>
      <div className="flex justify-end px-8">
        <Button>
          <TimerDialog />
        </Button>
      </div>
      <ScalePracticer />;
    </div>
  );
};

export default Practicer;
