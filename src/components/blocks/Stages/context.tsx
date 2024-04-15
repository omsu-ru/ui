import * as React from "react";
import type { StagesProps } from "./types";

interface StagesContextValue extends StagesProps {
  clickable?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isVertical?: boolean;
  stageCount?: number;
  expandVerticalStages?: boolean;
  activeStage: number;
  initialStage: number;
}

type StagesContextProviderProps = {
  value: Omit<StagesContextValue, "activeStage">;
  children: React.ReactNode;
};

const StagesContext = React.createContext<
  StagesContextValue & {
    nextStage: () => void;
    prevStage: () => void;
    resetStages: () => void;
    setStage: (stage: number) => void;
  }
>({
  stages: [],
  activeStage: 0,
  initialStage: 0,
  nextStage: () => {},
  prevStage: () => {},
  resetStages: () => {},
  setStage: () => {},
});

const StagesProvider = ({ value, children }: StagesContextProviderProps) => {
  const isError = value.state === "error";
  const isLoading = value.state === "loading";

  const [activeStage, setActiveStage] = React.useState(value.initialStage);

  const nextStage = () => {
    setActiveStage((prev) => prev + 1);
  };

  const prevStage = () => {
    setActiveStage((prev) => prev - 1);
  };

  const resetStages = () => {
    setActiveStage(value.initialStage);
  };

  const setStage = (stage: number) => {
    setActiveStage(stage);
  };

  return (
    <StagesContext.Provider
      value={{
        ...value,
        isError,
        isLoading,
        activeStage,
        nextStage,
        prevStage,
        resetStages,
        setStage,
      }}
    >
      {children}
    </StagesContext.Provider>
  );
};

export { StagesContext, StagesProvider };
