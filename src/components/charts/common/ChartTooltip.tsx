import { colorPalette } from "@/shared/theme";
import { Color } from "@/types";
import { cn, getColorClassNames } from "@/utils";
import React from "react";
import { ValueFormatter } from "../types";
import { BaseColors } from "@/shared/consts";

export const ChartTooltipFrame = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      // common
      "rounded-md text-foreground border",
      // light
      "bg-card shadow-sm border-border",
      // dark
      ""
    )}
  >
    {children}
  </div>
);

export interface ChartTooltipRowProps {
  value: string;
  name: string;
  color: Color | string;
}

export const ChartTooltipRow = ({
  value,
  name,
  color,
}: ChartTooltipRowProps) => (
  <div className="flex items-center justify-between space-x-8">
    <div className="flex items-center space-x-2">
      <span
        className={cn(
          // common
          "shrink-0 rounded-full border-2 h-3 w-3",
          // light
          "border-border shadow-sm",
          // dark
          "",
          getColorClassNames(color, colorPalette.background).bgColor
        )}
      />
      <p
        className={cn(
          // commmon
          "text-right whitespace-nowrap",
          // light
          "text-foreground",
          // dark
          ""
        )}
      >
        {name}
      </p>
    </div>
    <p
      className={cn(
        // common
        "font-medium tabular-nums text-right whitespace-nowrap",
        // light
        "text-tremor-content-emphasis",
        // dark
        "dark:text-dark-tremor-content-emphasis"
      )}
    >
      {value}
    </p>
  </div>
);

export interface ChartTooltipProps {
  active: boolean | undefined;
  payload: any;
  label: string;
  categoryColors: Map<string, Color | string>;
  valueFormatter: ValueFormatter;
}

const ChartTooltip = ({
  active,
  payload,
  label,
  categoryColors,
  valueFormatter,
}: ChartTooltipProps) => {
  if (active && payload) {
    const filteredPayload = payload.filter((item: any) => item.type !== "none");

    return (
      <ChartTooltipFrame>
        <div
          className={cn(
            // light
            "border-border border-b px-4 py-2",
            // dark
            ""
          )}
        >
          <p
            className={cn(
              // common
              "font-medium",
              // light
              "text-foreground",
              // dark
              ""
            )}
          >
            {label}
          </p>
        </div>

        <div className={cn("px-4 py-2 space-y-1")}>
          {filteredPayload.map(
            ({ value, name }: { value: number; name: string }, idx: number) => (
              <ChartTooltipRow
                key={`id-${idx}`}
                value={valueFormatter(value)}
                name={name}
                color={categoryColors.get(name) ?? BaseColors.Blue}
              />
            )
          )}
        </div>
      </ChartTooltipFrame>
    );
  }
  return null;
};

export default ChartTooltip;
