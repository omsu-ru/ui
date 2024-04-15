import * as React from "react";
import { StagesContext } from "./context";

export function useStages() {
  const context = React.useContext(StagesContext);

  if (context === undefined) {
    throw new Error("useStages must be used within a StagesProvider");
  }

  const { children, className, ...rest } = context;

  const isLastStage = context.activeStage === context.stages.length - 1;
  const hasCompletedAllStages = context.activeStage === context.stages.length;

  const currentStage = context.stages[context.activeStage];
  const isOptionalStage = !!currentStage?.optional;

  const isDisabledStage = context.activeStage === 0;

  return {
    ...rest,
    isLastStage,
    hasCompletedAllStages,
    isOptionalStage,
    isDisabledStage,
    currentStage,
  };
}
