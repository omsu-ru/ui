import { Button } from "@/components";
import { cn } from "@/utils";
import type { StageSharedProps } from "./types";
import { useStages } from "./use-stages";

type StageButtonContainerProps = StageSharedProps & {
  children?: React.ReactNode;
};

const StageButtonContainer = ({
  isCurrentStage,
  isCompletedStage,
  children,
  isError,
  isLoading: isLoadingProp,
  onClickStage,
}: StageButtonContainerProps) => {
  const {
    clickable,
    isLoading: isLoadingContext,
    variant,
    styles,
  } = useStages();

  const currentStageClickable = clickable || !!onClickStage;

  const isLoading = isLoadingProp || isLoadingContext;

  if (variant === "line") {
    return null;
  }

  return (
    <Button
      variant="ghost"
      className={cn(
        "stages__stage-button-container",
        "rounded-full p-0 pointer-events-none",
        "w-[var(--stage-icon-size)] h-[var(--stage-icon-size)]",
        "border-[3px] flex rounded-full justify-center items-center",
        "data-[clickable=true]:pointer-events-auto",
        "data-[active=true]:bg-emerald-500 data-[active=true]:border-none data-[active=true]:text-primary-foreground",
        "data-[current=true]:border-emerald-500 data-[current=true]:bg-muted",
        "data-[invalid=true]:bg-destructive data-[invalid=true]:border-destructive data-[invalid=true]:text-destructive-foreground",
        styles?.["stage-button-container"]
      )}
      aria-current={isCurrentStage ? "step" : undefined}
      data-current={isCurrentStage}
      data-invalid={isError && (isCurrentStage || isCompletedStage)}
      data-active={isCompletedStage}
      data-clickable={currentStageClickable}
      data-loading={isLoading && (isCurrentStage || isCompletedStage)}
    >
      {children}
    </Button>
  );
};

export { StageButtonContainer };
