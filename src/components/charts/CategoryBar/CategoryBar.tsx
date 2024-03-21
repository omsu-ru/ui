"use client";
import React from "react";
import { sumNumericArray } from "../common/utils";
import { cn, getColorClassNames } from "@/utils";
import { Tooltip, useTooltip } from "../elements/Tooltip";
import { Color } from "@/types";
import { colorPalette, themeColorRange } from "@/shared/theme";

const getMarkerBgColor = (
  markerValue: number | undefined,
  values: number[],
  colors: Color[]
): string => {
  if (markerValue === undefined) return "";

  let prefixSum = 0;
  for (let i = 0; i < values.length; i++) {
    const currentWidthPercentage = values[i];
    const currentBgColor = getColorClassNames(
      colors[i],
      colorPalette.background
    ).bgColor;

    prefixSum += currentWidthPercentage;
    if (prefixSum >= markerValue) return currentBgColor;
  }

  return "";
};

const BarLabels = ({ values }: { values: number[] }) => {
  const sumValues = sumNumericArray(values);
  let prefixSum = 0;
  let sumConsecutveHiddenLabels = 0;
  return (
    <div
      className={cn(
        // common
        "relative flex w-full text-tremor-default h-5 mb-2",
        // light
        "text-tremor-content",
        // dark
        "dark:text-dark-tremor-content"
      )}
    >
      {values.slice(0, values.length).map((widthPercentage, idx) => {
        prefixSum += widthPercentage;
        const showLabel =
          (widthPercentage >= 0.1 * sumValues ||
            sumConsecutveHiddenLabels >= 0.09 * sumValues) &&
          sumValues - prefixSum >= 0.15 * sumValues &&
          prefixSum >= 0.1 * sumValues;
        sumConsecutveHiddenLabels = showLabel
          ? 0
          : (sumConsecutveHiddenLabels += widthPercentage);

        return (
          <div
            key={`item-${idx}`}
            className="flex items-center justify-end"
            style={{ width: `${widthPercentage}%` }}
          >
            <span
              className={cn(
                showLabel ? "block" : "hidden",
                "left-1/2 translate-x-1/2"
              )}
            >
              {prefixSum}
            </span>
          </div>
        );
      })}
      <div className={cn("absolute bottom-0 flex items-center left-0")}>0</div>
      <div className={cn("absolute bottom-0 flex items-center right-0")}>
        {sumValues}
      </div>
    </div>
  );
};

export interface CategoryBarProps extends React.HTMLAttributes<HTMLDivElement> {
  values: number[];
  colors?: Color[];
  markerValue?: number;
  showLabels?: boolean;
  tooltip?: string;
  showAnimation?: boolean;
}

const CategoryBar = React.forwardRef<HTMLDivElement, CategoryBarProps>(
  (props, ref) => {
    const {
      values = [],
      colors = themeColorRange,
      markerValue,
      showLabels = true,
      tooltip,
      showAnimation = false,
      className,
      ...other
    } = props;

    const markerBgColor = getMarkerBgColor(markerValue, values, colors);

    const { tooltipProps, getReferenceProps } = useTooltip();

    return (
      <>
        <Tooltip text={tooltip} {...tooltipProps} />
        <div ref={ref} className={cn(className)} {...other}>
          {showLabels ? <BarLabels values={values} /> : null}
          <div className={cn("relative w-full flex items-center h-2")}>
            <div
              className={cn(
                // common
                "flex-1 flex items-center h-full overflow-hidden rounded-tremor-full"
              )}
            >
              {values.map((value, idx) => {
                const baseColor = colors[idx] ?? "gray";
                return (
                  <div
                    key={`item-${idx}`}
                    className={cn(
                      "h-full",
                      getColorClassNames(baseColor, colorPalette.background)
                        .bgColor
                    )}
                    style={{ width: `${value}%` }}
                  />
                );
              })}
            </div>
            {markerValue !== undefined ? (
              <div
                ref={tooltipProps.refs.setReference}
                className={cn("absolute right-1/2 -translate-x-1/2 w-5")}
                style={{
                  left: `${markerValue}%`,
                  transition: showAnimation ? "all 1s" : "",
                }}
                {...getReferenceProps}
              >
                <div
                  className={cn(
                    // common
                    "ring-2 mx-auto rounded-tremor-full h-4 w-1",
                    // light
                    "ring-tremor-brand-inverted",
                    // dark
                    "dark:ring-dark-tremor-brand-inverted",
                    markerBgColor
                  )}
                />
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
);

CategoryBar.displayName = "CategoryBar";

export { CategoryBar };
