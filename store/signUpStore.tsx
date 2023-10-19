import { create } from "zustand";

interface IUser {
  username: string;
  BusinessStage: string;
  CodingLevel: number;
  BusinessInterest: string[];
  updateUsername: (username: string) => void;
  updateBusinessStage: (businessStage: string) => void;
  updateCodingLevel: (codingLevel: number) => void;
  updateBusinessInterest: (businessInterest: string[]) => void;
}

export const useSignUpStore = create<IUser>((set) => ({
  username: "",
  BusinessStage: "",
  CodingLevel: 0,
  BusinessInterest: [],
  updateUsername: (newUsername) => {
    set({ username: newUsername });
  },
  updateBusinessStage: (businessStage) => {
    set({ BusinessStage: businessStage });
  },
  updateCodingLevel: (level) => {
    set({ CodingLevel: level });
  },
  updateBusinessInterest: (interests) => {
    set({ BusinessInterest: interests });
  },
}));
