"use client";

import { cn } from "@/utils";
import * as React from "react";
import { StagesProvider } from "./context";
import { Stage } from "./stage";
import type { StageItem, StageProps, StagesProps } from "./types";
import { useMediaQuery } from "./use-media-query";
import { useStages } from "./use-stages";

const VARIABLE_SIZES = {
  sm: "36px",
  md: "40px",
  lg: "44px",
};

const Stages = React.forwardRef<HTMLDivElement, StagesProps>(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const {
      className,
      children,
      orientation: orientationProp,
      state,
      responsive,
      checkIcon,
      errorIcon,
      onClickStage,
      mobileBreakpoint,
      expandVerticalStages = false,
      initialStage = 0,
      size,
      stages,
      variant,
      styles,
      variables,
      scrollTracking = false,
      currentStage = 0,
      ...rest
    } = props;

    const childArr = React.Children.toArray(children);

    const items = [] as React.ReactElement[];

    const footer = childArr.map((child, _index) => {
      if (!React.isValidElement(child)) {
        throw new Error("Stages children must be valid React elements.");
      }
      if (child.type === Stage) {
        items.push(child);
        return null;
      }

      return child;
    });

    const stageCount = items.length;

    const isMobile = useMediaQuery(
      `(max-width: ${mobileBreakpoint || "768px"})`
    );

    const clickable = !!onClickStage;

    const orientation = isMobile && responsive ? "vertical" : orientationProp;

    const isVertical = orientation === "vertical";

    return (
      <StagesProvider
        value={{
          initialStage,
          orientation,
          state,
          size,
          responsive,
          checkIcon,
          errorIcon,
          onClickStage,
          clickable,
          stageCount,
          isVertical,
          variant: variant || "circle",
          expandVerticalStages,
          stages,
          scrollTracking,
          styles,
        }}
      >
        <div
          ref={ref}
          className={cn(
            "stages__main-container",
            "flex w-full flex-wrap",
            stageCount === 1 ? "justify-end" : "justify-between",
            orientation === "vertical" ? "flex-col" : "flex-row",
            variant === "line" && orientation === "horizontal" && "gap-4",
            className,
            styles?.["main-container"]
          )}
          style={
            {
              "--stage-icon-size":
                variables?.["--stage-icon-size"] ||
                `${VARIABLE_SIZES[size || "lg"]}`,
              "--stage-gap": variables?.["--stage-gap"] || "8px",
            } as React.CSSProperties
          }
          {...rest}
        >
          <VerticalContent>{items}</VerticalContent>
        </div>
        {orientation === "horizontal" && (
          <HorizontalContent>{items}</HorizontalContent>
        )}
        {footer}
      </StagesProvider>
    );
  }
);

Stages.defaultProps = {
  size: "md",
  orientation: "horizontal",
  responsive: true,
};

const VerticalContent = ({ children }: { children: React.ReactNode }) => {
  const { activeStage } = useStages();

  const childArr = React.Children.toArray(children);
  const stageCount = childArr.length;

  return (
    <>
      {React.Children.map(children, (child, i) => {
        const isCompletedStage =
          (React.isValidElement(child) &&
            (child.props as any).isCompletedStage) ??
          i < activeStage;
        const isLastStage = i === stageCount - 1;
        const isCurrentStage = i === activeStage;

        const stageProps = {
          index: i,
          isCompletedStage,
          isCurrentStage,
          isLastStage,
        };

        if (React.isValidElement(child)) {
          return React.cloneElement(child, stageProps);
        }
        return null;
      })}
    </>
  );
};

const HorizontalContent = ({ children }: { children: React.ReactNode }) => {
  const { activeStage } = useStages();
  const childArr = React.Children.toArray(children);

  if (activeStage > childArr.length) {
    return null;
  }

  return (
    <>
      {React.Children.map(childArr[activeStage], (node) => {
        if (!React.isValidElement(node)) {
          return null;
        }
        return React.Children.map(
          node.props.children,
          (childNode) => childNode
        );
      })}
    </>
  );
};

export { Stages, Stage, useStages };
export type { StageProps, StagesProps, StageItem };
