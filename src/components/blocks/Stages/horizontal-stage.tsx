import { cn } from "@/utils";
import * as React from "react";
import { StageButtonContainer } from "./stage-button-container";
import { StageIcon } from "./stage-icon";
import { StageLabel } from "./stage-label";
import type { StageSharedProps } from "./types";
import { useStages } from "./use-stages";

const HorizontalStage = React.forwardRef<HTMLDivElement, StageSharedProps>(
  (props, ref) => {
    const {
      isError,
      isLoading,
      onClickStage,
      variant,
      clickable,
      checkIcon: checkIconContext,
      errorIcon: errorIconContext,
      styles,
      stages,
      setStage,
    } = useStages();

    const {
      index,
      isCompletedStage,
      isCurrentStage,
      hasVisited,
      icon,
      label,
      description,
      isKeepError,
      state,
      checkIcon: checkIconProp,
      errorIcon: errorIconProp,
    } = props;

    const localIsLoading = isLoading || state === "loading";
    const localIsError = isError || state === "error";

    const opacity = hasVisited ? 1 : 0.8;

    const active =
      variant === "line"
        ? isCompletedStage || isCurrentStage
        : isCompletedStage;

    const checkIcon = checkIconProp || checkIconContext;
    const errorIcon = errorIconProp || errorIconContext;

    return (
      <div
        aria-disabled={!hasVisited}
        className={cn(
          "stages__horizontal-stage",
          "flex items-center relative transition-all duration-200",
          "[&:not(:last-child)]:flex-1",
          "[&:not(:last-child)]:after:transition-all [&:not(:last-child)]:after:duration-200",
          "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:h-[2px] [&:not(:last-child)]:after:bg-border",
          "data-[completed=true]:[&:not(:last-child)]:after:bg-primary",
          "data-[invalid=true]:[&:not(:last-child)]:after:bg-destructive",
          variant === "circle-alt" &&
            "justify-start flex-col flex-1 [&:not(:last-child)]:after:relative [&:not(:last-child)]:after:order-[-1] [&:not(:last-child)]:after:start-[50%] [&:not(:last-child)]:after:end-[50%] [&:not(:last-child)]:after:top-[calc(var(--stage-icon-size)/2)] [&:not(:last-child)]:after:w-[calc((100%-var(--stage-icon-size))-(var(--stage-gap)))]",
          variant === "circle" &&
            "[&:not(:last-child)]:after:flex-1 [&:not(:last-child)]:after:ms-[var(--stage-gap)] [&:not(:last-child)]:after:me-[var(--stage-gap)]",
          variant === "line" &&
            "flex-col flex-1 border-t-[3px] data-[active=true]:border-primary",
          styles?.["horizontal-stage"]
        )}
        data-optional={stages[index || 0]?.optional}
        data-completed={isCompletedStage}
        data-active={active}
        data-invalid={localIsError}
        data-clickable={clickable}
        onClick={() => onClickStage?.(index || 0, setStage)}
        ref={ref}
      >
        <div
          className={cn(
            "stages__horizontal-stage-container",
            "flex items-center",
            variant === "circle-alt" && "flex-col justify-center gap-1",
            variant === "line" && "w-full",
            styles?.["horizontal-stage-container"]
          )}
        >
          <StageButtonContainer
            {...{ ...props, isError: localIsError, isLoading: localIsLoading }}
          >
            <StageIcon
              {...{
                index,
                isCompletedStage,
                isCurrentStage,
                isError: localIsError,
                isKeepError,
                isLoading: localIsLoading,
              }}
              icon={icon}
              checkIcon={checkIcon}
              errorIcon={errorIcon}
            />
          </StageButtonContainer>
          <StageLabel
            label={label}
            description={description}
            {...{ isCurrentStage, opacity }}
          />
        </div>
      </div>
    );
  }
);

export { HorizontalStage };
