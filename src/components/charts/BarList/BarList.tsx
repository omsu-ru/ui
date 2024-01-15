import React from "react";
import { cn } from "@/utils";
import { ValueFormatter } from "../types";
import { defaultValueFormatter } from "../common/utils";

type Bar = {
  key?: string;
  value: number;
  name: string;
  icon?: React.JSXElementConstructor<any>;
  href?: string;
  target?: string;
};

const getWidthsFromValues = (dataValues: number[]) => {
  let maxValue = -Infinity;
  dataValues.forEach((value) => {
    maxValue = Math.max(maxValue, value);
  });

  return dataValues.map((value) => {
    if (value === 0) return 0;
    return Math.max((value / maxValue) * 100, 1);
  });
};

export interface BarListProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Bar[];
  valueFormatter?: ValueFormatter;
  //   color?: Color;
  showAnimation?: boolean;
}

const BarList = React.forwardRef<HTMLDivElement, BarListProps>((props, ref) => {
  const {
    data = [],
    color,
    valueFormatter = defaultValueFormatter,
    showAnimation = false,
    className,
    ...other
  } = props;

  const widths = getWidthsFromValues(data.map((item) => item.value));

  const rowHeight = "h-9";

  return (
    <div
      ref={ref}
      className={cn(
        // makeBarListClassName("root"),
        "flex justify-between space-x-6",
        className
      )}
      {...other}
    >
      <div className={cn("relative w-full")}>
        {data.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div className="relative" key={item.key ?? item.name}>
              <div className="w-full bg-muted rounded-sm">
                <div
                  className={cn(
                    // common
                    "flex items-center rounded-sm bg-opacity-30 ",
                    rowHeight,
                    " bg-primary-300  dark:bg-opacity-30 ",
                    idx === data.length - 1 ? "mb-0" : "mb-2"
                  )}
                  style={{
                    width: `${widths[idx]}%`,
                    transition: showAnimation ? "all 1s" : "",
                  }}
                >
                  <div className={cn("absolute max-w-full w-full flex left-2")}>
                    {Icon ? (
                      <Icon
                        className={cn(
                          // common
                          "flex-none h-5 w-5 mr-2",
                          // light
                          "text-foreground",
                          // dark
                          ""
                        )}
                      />
                    ) : null}
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.target ?? "_blank"}
                        rel="noreferrer"
                        className={cn(
                          // common
                          "whitespace-nowrap hover:underline truncate ",
                          // light
                          "text-foreground",
                          // dark
                          ""
                        )}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <p
                        className={cn(
                          // common
                          "whitespace-nowrap truncate text-foreground",
                          // light
                          "text-foreground",
                          // dark
                          ""
                        )}
                      >
                        {item.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={"text-right min-w-min"}>
        {data.map((item, idx) => (
          <div
            key={item.key ?? item.name}
            className={cn(
              "flex justify-end items-center",
              rowHeight,
              idx === data.length - 1 ? "mb-0" : "mb-2"
            )}
          >
            <p
              className={cn(
                // common
                "whitespace-nowrap truncate text-foreground",
                // light
                "text-foreground",
                // dark
                ""
              )}
            >
              {valueFormatter(item.value)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

BarList.displayName = "BarList";

export { BarList };
