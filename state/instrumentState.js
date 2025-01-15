"use client";

import { atom } from "recoil";

export const instrumentDataState = atom({
  key: "instrumentDataState", // Unique ID
  default: [], // Initial state
});

export const previousInstrumentDataState = atom({
  key: "previousInstrumentDataState", // Unique ID
  default: [], // Initial state
});
