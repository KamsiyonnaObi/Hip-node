import { create } from "zustand";

interface IUser {
  username: string;
  Stage: string;
  CodingLevel: number;
  BusinessInterest: string[];
}

interface Action {
  updateUsername: (username: string) => void;
  updateBusinessStage: (businessStage: string) => void;
  updateCodingLevel: (codingLevel: number) => void;
  updateBusinessInterest: (businessInterest: string[]) => void;
}

export const useSignUpStore = create<IUser & Action>((set) => ({
  username: "",
  Stage: "",
  CodingLevel: null,
  BusinessInterest: [],
  updateUsername: (newUsername) => {
    set({ username: newUsername });
  },
  updateBusinessStage: (businessStage) => {
    set({ Stage: businessStage });
  },
  updateCodingLevel: (level) => {
    set({ CodingLevel: level });
  },
  updateBusinessInterest: (interests) => {
    set({ BusinessInterest: interests });
  },
}));
