import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { useStages } from "./use-stages";

interface StageLabelProps {
  isCurrentStage?: boolean;
  opacity: number;
  label?: string | React.ReactNode;
  description?: string | null;
}

const labelVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const descriptionVariants = cva("", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const StageLabel = ({
  isCurrentStage,
  opacity,
  label,
  description,
}: StageLabelProps) => {
  const { variant, styles, size, orientation } = useStages();
  const shouldRender = !!label || !!description;

  return shouldRender ? (
    <div
      aria-current={isCurrentStage ? "step" : undefined}
      className={cn(
        "stages__stage-label-container",
        "flex-col flex",
        variant !== "line" ? "ms-2" : orientation === "horizontal" && "my-2",
        variant === "circle-alt" && "text-center",
        variant === "circle-alt" && orientation === "horizontal" && "ms-0",
        variant === "circle-alt" && orientation === "vertical" && "text-start",
        styles?.["stage-label-container"]
      )}
      style={{
        opacity,
      }}
    >
      {!!label && (
        <span
          className={cn(
            "stages__stage-label",
            labelVariants({ size }),
            styles?.["stage-label"]
          )}
        >
          {label}
        </span>
      )}
      {!!description && (
        <span
          className={cn(
            "stages__stage-description",
            "text-muted-foreground",
            descriptionVariants({ size }),
            styles?.["stage-description"]
          )}
        >
          {description}
        </span>
      )}
    </div>
  ) : null;
};

export { StageLabel };
