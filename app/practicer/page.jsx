"use client";

import React from "react";
import ScalePracticer from "@/src/ScalePracticer";
import TimerDialog from "@/src/TimerDialog";
import { Button } from "@/components/ui/button";

const Practicer = () => {
  return (
    <div className="mt-10">
      <ScalePracticer />;
      <div className="flex justify-center px-8">
        <span className="py-4">
          <TimerDialog />
        </span>
      </div>
    </div>
  );
};

export default Practicer;
