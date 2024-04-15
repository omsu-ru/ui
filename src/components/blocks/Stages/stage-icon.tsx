import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { CheckIcon, Loader2, X } from "lucide-react";
import * as React from "react";
import type { IconType } from "./types";
import { useStages } from "./use-stages";

interface StageIconProps {
  isCompletedStage?: boolean;
  isCurrentStage?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isKeepError?: boolean;
  icon?: IconType;
  index?: number;
  checkIcon?: IconType;
  errorIcon?: IconType;
}

const iconVariants = cva("", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-4",
      lg: "size-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const StageIcon = React.forwardRef<HTMLDivElement, StageIconProps>(
  (props, ref) => {
    const { size } = useStages();

    const {
      isCompletedStage,
      isCurrentStage,
      isError,
      isLoading,
      isKeepError,
      icon: CustomIcon,
      index,
      checkIcon: CustomCheckIcon,
      errorIcon: CustomErrorIcon,
    } = props;

    const Icon = React.useMemo(
      () => (CustomIcon ? CustomIcon : null),
      [CustomIcon]
    );

    const ErrorIcon = React.useMemo(
      () => (CustomErrorIcon ? CustomErrorIcon : null),
      [CustomErrorIcon]
    );

    const Check = React.useMemo(
      () => (CustomCheckIcon ? CustomCheckIcon : CheckIcon),
      [CustomCheckIcon]
    );

    return React.useMemo(() => {
      if (isCompletedStage) {
        if (isError && isKeepError) {
          return (
            <div key="icon">
              <X className={cn(iconVariants({ size }))} />
            </div>
          );
        }
        return (
          <div key="check-icon">
            <Check className={cn(iconVariants({ size }))} />
          </div>
        );
      }
      if (isCurrentStage) {
        if (isError && ErrorIcon) {
          return (
            <div key="error-icon">
              <ErrorIcon className={cn(iconVariants({ size }))} />
            </div>
          );
        }
        if (isError) {
          return (
            <div key="icon">
              <X className={cn(iconVariants({ size }))} />
            </div>
          );
        }
        if (isLoading) {
          return (
            <Loader2 className={cn(iconVariants({ size }), "animate-spin")} />
          );
        }
      }
      if (Icon) {
        return (
          <div key="stage-icon">
            <Icon className={cn(iconVariants({ size }))} />
          </div>
        );
      }
      return (
        <span
          ref={ref}
          key="label"
          className={cn("font-medium text-center text-md")}
        >
          {(index || 0) + 1}
        </span>
      );
    }, [
      isCompletedStage,
      isCurrentStage,
      isError,
      isLoading,
      Icon,
      index,
      Check,
      ErrorIcon,
      isKeepError,
      ref,
      size,
    ]);
  }
);

export { StageIcon };
