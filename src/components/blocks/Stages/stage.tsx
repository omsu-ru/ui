import * as React from "react";
import { HorizontalStage } from "./horizontal-stage";
import type { StageProps } from "./types";
import { useStages } from "./use-stages";
import { VerticalStage } from "./vertical-stage";

// Props which shouldn't be passed to to the Stage component from the user
interface StageInternalConfig {
  index: number;
  isCompletedStage?: boolean;
  isCurrentStage?: boolean;
  isLastStage?: boolean;
}

interface FullStageProps extends StageProps, StageInternalConfig {}

const Stage = React.forwardRef<HTMLLIElement, StageProps>(
  (props, ref: React.Ref<any>) => {
    const {
      children,
      description,
      icon,
      state,
      checkIcon,
      errorIcon,
      index,
      isCompletedStage,
      isCurrentStage,
      isLastStage,
      isKeepError,
      label,
      onClickStage,
    } = props as FullStageProps;

    const { isVertical, isError, isLoading, clickable } = useStages();

    const hasVisited = isCurrentStage || isCompletedStage;

    const sharedProps = {
      isLastStage,
      isCompletedStage,
      isCurrentStage,
      index,
      isError,
      isLoading,
      clickable,
      label,
      description,
      hasVisited,
      icon,
      isKeepError,
      checkIcon,
      state,
      errorIcon,
      onClickStage,
    };

    const renderStage = () => {
      switch (isVertical) {
        case true:
          return (
            <VerticalStage ref={ref} {...sharedProps}>
              {children}
            </VerticalStage>
          );
        default:
          return <HorizontalStage ref={ref} {...sharedProps} />;
      }
    };

    return renderStage();
  }
);

export { Stage };
