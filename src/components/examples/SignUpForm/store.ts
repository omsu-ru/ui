import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";
import type {} from "@redux-devtools/extension";
import { Profiles } from "@/types";

type State = {
  profiles: Profiles[];
  step: number;
  setStep: (step: number) => void;
  setProfiles: (profiles: Profiles[]) => void;
  prevStep: VoidFunction;
  nextStep: VoidFunction;
};

export const useAuthStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        step: 0,
        profiles: [],
        prevStep: () => set((state) => ({ step: state.step - 1 })),
        nextStep: () => set((state) => ({ step: state.step + 1 })),
        setStep: (step: number) => set({ step }),
        setProfiles: (profiles: Profiles[]) => set({ profiles }),
      }),
      {
        name: "auth-storage",
      }
    )
  )
);
