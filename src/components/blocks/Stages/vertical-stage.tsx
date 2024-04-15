import { Collapsible, CollapsibleContent } from "@/components";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import * as React from "react";
import { StageButtonContainer } from "./stage-button-container";
import { StageIcon } from "./stage-icon";
import { StageLabel } from "./stage-label";
import type { StageSharedProps } from "./types";
import { useStages } from "./use-stages";

type VerticalStageProps = StageSharedProps & {
  children?: React.ReactNode;
};

const verticalStageVariants = cva(
  [
    "flex flex-col relative transition-all duration-200",
    "data-[completed=true]:[&:not(:last-child)]:after:bg-emerald-500",
    "data-[invalid=true]:[&:not(:last-child)]:after:bg-destructive",
  ],
  {
    variants: {
      variant: {
        circle: cn(
          "[&:not(:last-child)]:pb-[var(--stage-gap)] [&:not(:last-child)]:gap-[var(--stage-gap)]",
          "[&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:w-[2px] [&:not(:last-child)]:after:bg-border",
          "[&:not(:last-child)]:after:inset-x-[calc(var(--stage-icon-size)/2)]",
          "[&:not(:last-child)]:after:absolute",
          "[&:not(:last-child)]:after:top-[calc(var(--stage-icon-size)+var(--stage-gap))]",
          "[&:not(:last-child)]:after:bottom-[var(--stage-gap)]",
          "[&:not(:last-child)]:after:transition-all [&:not(:last-child)]:after:duration-200"
        ),
        line: "flex-1 border-t-0 mb-4",
      },
    },
  }
);

const VerticalStage = React.forwardRef<HTMLDivElement, VerticalStageProps>(
  (props, ref) => {
    const {
      children,
      index,
      isCompletedStage,
      isCurrentStage,
      label,
      description,
      icon,
      hasVisited,
      state,
      checkIcon: checkIconProp,
      errorIcon: errorIconProp,
      onClickStage,
    } = props;

    const {
      checkIcon: checkIconContext,
      errorIcon: errorIconContext,
      isError,
      isLoading,
      variant,
      onClickStage: onClickStageGeneral,
      clickable,
      expandVerticalStages,
      styles,
      scrollTracking,
      orientation,
      stages,
      setStage,
      isLastStage: isLastStageCurrentStage,
    } = useStages();

    const opacity = hasVisited ? 1 : 0.8;
    const localIsLoading = isLoading || state === "loading";
    const localIsError = isError || state === "error";

    const isLastStage = index === stages.length - 1;

    const active =
      variant === "line"
        ? isCompletedStage || isCurrentStage
        : isCompletedStage;
    const checkIcon = checkIconProp || checkIconContext;
    const errorIcon = errorIconProp || errorIconContext;

    const renderChildren = () => {
      if (!expandVerticalStages) {
        return <>{children}</>;
      }
      return children;
    };

    return (
      <div
        ref={ref}
        className={cn(
          "stages__vertical-stage",
          verticalStageVariants({
            variant: variant?.includes("circle") ? "circle" : "line",
          }),
          isLastStageCurrentStage && "gap-[var(--stage-gap)]",
          styles?.["vertical-stage"]
        )}
        data-optional={stages[index || 0]?.optional}
        data-completed={isCompletedStage}
        data-active={active}
        data-clickable={clickable || !!onClickStage}
        data-invalid={localIsError}
        onClick={() =>
          onClickStage?.(index || 0, setStage) ||
          onClickStageGeneral?.(index || 0, setStage)
        }
      >
        <div
          data-vertical={true}
          data-active={active}
          className={cn(
            "stages__vertical-stage-container",
            "flex items-center",
            variant === "line" &&
              "border-s-[3px] data-[active=true]:border-primary py-2 ps-3",
            styles?.["vertical-stage-container"]
          )}
        >
          <StageButtonContainer
            {...{ isLoading: localIsLoading, isError: localIsError, ...props }}
          >
            <StageIcon
              {...{
                index,
                isError: localIsError,
                isLoading: localIsLoading,
                isCurrentStage,
                isCompletedStage,
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
        <div
          ref={(node) => {
            if (scrollTracking) {
              node?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }}
          className={cn(
            "stages__vertical-stage-content",
            !isLastStage && "min-h-4",
            variant !== "line" && "ps-[--stage-icon-size]",
            variant === "line" && orientation === "vertical" && "min-h-0",
            styles?.["vertical-stage-content"]
          )}
        >
          {renderChildren()}
        </div>
      </div>
    );
  }
);

export { VerticalStage };
