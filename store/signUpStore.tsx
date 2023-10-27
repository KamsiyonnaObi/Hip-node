import { create } from "zustand";

interface IUser {
  username: string;
  email: string;
  password: string;
  Stage: string;
  CodingLevel: number | null;
  BusinessInterest: string[];
}

interface Action {
  updateUsername: (username: string) => void;
  updateEmail: (Email: string) => void;
  updatePassword: (Pass: string) => void;
  updateBusinessStage: (businessStage: string) => void;
  updateCodingLevel: (codingLevel: number) => void;
  updateBusinessInterest: (businessInterest: string[]) => void;
}

export const useSignUpStore = create<IUser & Action>((set) => ({
  username: "",
  email: "",
  password: "",
  Stage: "",
  CodingLevel: null,
  BusinessInterest: [],
  updateUsername: (newUsername) => {
    set({ username: newUsername });
  },
  updatePassword: (Pass) => {
    set({ password: Pass });
  },
  updateEmail: (Email) => {
    set({ email: Email });
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
