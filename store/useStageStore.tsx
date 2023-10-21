import { create } from "zustand";

type CurrentStage = {
  currentStage: "signUp" | "businessStage" | "codingLevel" | "businessType";
  setCurrentStage: (
    currentStage: "signUp" | "businessStage" | "codingLevel" | "businessType"
  ) => void;
};

export const useStageStore = create<CurrentStage>((set) => ({
  currentStage: "signUp",
  setCurrentStage: (stage) => set({ currentStage: stage }),
}));
