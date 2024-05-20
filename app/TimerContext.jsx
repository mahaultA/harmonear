// TimerContext.jsx

"use client";
import React, { createContext, useContext } from "react";
import { useTimer } from "./useTimer";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const timer = useTimer();

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  return useContext(TimerContext);
};
