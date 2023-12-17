import { devtools, persist } from "zustand/middleware";
import { create } from "zustand";
import type {} from "@redux-devtools/extension";
type Profile = "student" | "professor" | "supervisor" | "pupil" | "applicant";

type State = {
  profiles: Profile[];
  step: number;
  setStep: (step: number) => void;
  setProfiles: (profiles: string[]) => void;
  prevStep: VoidFunction;
  nextStep: VoidFunction;
};

// export const useAuthStore = create<State>()(
//   devtools(
//     persist(
//       (set) => ({
//         step: 0,
//         profiles: [],
//         prevStep: () => set((state) => ({ step: state.step - 1 })),
//         nextStep: () => set((state) => ({ step: state.step + 1 })),
//         setStep: (step: number) => set({ step }),
//         setProfiles: (profiles: string[]) => set({ profiles }),
//       }),
//       {
//         name: "auth-storage",
//       }
//     )
//   )
// );

export const useAuthStore = create<State>()(
  devtools((set) => ({
    step: 0,
    profiles: [],
    prevStep: () => set((state) => ({ step: state.step - 1 })),
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    setStep: (step: number) => set({ step }),
    setProfiles: (profiles: Profile[]) => set({ profiles }),
  }))
);
