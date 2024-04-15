import type { LucideIcon } from "lucide-react";

type IconType = LucideIcon | React.ComponentType<any> | undefined;

type StageItem = {
  id?: string;
  label?: string;
  description?: string;
  icon?: IconType;
  optional?: boolean;
};

interface StageOptions {
  orientation?: "vertical" | "horizontal";
  state?: "loading" | "error";
  responsive?: boolean;
  checkIcon?: IconType;
  errorIcon?: IconType;
  onClickStage?: (stage: number, setStage: (stage: number) => void) => void;
  mobileBreakpoint?: string;
  variant?: "circle" | "circle-alt" | "line";
  expandVerticalStages?: boolean;
  size?: "sm" | "md" | "lg";
  styles?: {
    /** Styles for the main container */
    "main-container"?: string;
    /** Styles for the horizontal stage */
    "horizontal-stage"?: string;
    /** Styles for the horizontal stage container (button and labels) */
    "horizontal-stage-container"?: string;
    /** Styles for the vertical stage */
    "vertical-stage"?: string;
    /** Styles for the vertical stage container (button and labels) */
    "vertical-stage-container"?: string;
    /** Styles for the vertical stage content */
    "vertical-stage-content"?: string;
    /** Styles for the stage button container */
    "stage-button-container"?: string;
    /** Styles for the label and description container */
    "stage-label-container"?: string;
    /** Styles for the stage label */
    "stage-label"?: string;
    /** Styles for the stage description */
    "stage-description"?: string;
  };
  variables?: {
    "--stage-icon-size"?: string;
    "--stage-gap"?: string;
  };
  scrollTracking?: boolean;
}

interface StagesProps extends StageOptions {
  children?: React.ReactNode;
  className?: string;
  initialStage: number;
  currentStage?: number;
  stages: StageItem[];
}

interface StageProps extends React.HTMLAttributes<HTMLLIElement> {
  label?: string | React.ReactNode;
  description?: string;
  icon?: IconType;
  state?: "loading" | "error";
  checkIcon?: IconType;
  errorIcon?: IconType;
  isCompletedStage?: boolean;
  isKeepError?: boolean;
  onClickStage?: (stage: number, setStage: (stage: number) => void) => void;
}

interface StageSharedProps extends StageProps {
  isLastStage?: boolean;
  isCurrentStage?: boolean;
  index?: number;
  hasVisited: boolean | undefined;
  isError?: boolean;
  isLoading?: boolean;
}

export type {
  IconType,
  StageItem,
  StageOptions,
  StagesProps,
  StageProps,
  StageSharedProps,
};
