"use client";
import React, { useMemo } from "react";
import { BarDataResponse, BarProps } from "../types";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { ParentSize } from "@visx/responsive";
import { useTooltip } from "@visx/tooltip";
import { Grid } from "@visx/grid";
import { GroupRoot, GroupContent, GroupHeader, GroupTitle } from "@/components";
import { cn } from "@/utils";
import { timeParse, timeFormat } from "@visx/vendor/d3-time-format";
import { CalendarIcon } from "lucide-react";
import colors from "tailwindcss/colors";

const margin = { top: 0, left: 0, right: 0, bottom: 0 };

const VerticalBar = <T,>({
  className,
  barWidth,
  chartHeight,
  data,
  xAccessor,
  yAccessor,
}: BarProps) => {
  const { tooltipData, showTooltip } = useTooltip<BarDataResponse>();

  const verticalMargin = 30;

  const tick_formatter = Intl.DateTimeFormat("ru", {
    year: "2-digit",
    month: "short",
  });
  const formatTickDate = (date: string) =>
    tick_formatter.format(new Date(date));
  const info_date_formatter = Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
  });
  const formatInfoDate = (date: string) =>
    info_date_formatter.format(new Date(date));
  const info = tooltipData ?? data[0];

  const getProfessorEvaluationBarColor = (value: number) => {
    if (value <= 4) {
      return colors.red[400];
    } else if (value >= 4 && value < 8) {
      return colors.orange[400];
    } else if (value >= 8) {
      return colors.green[400];
    }
  };

  return (
    <GroupRoot className={cn("px-8 py-8", className)}>
      <GroupHeader className="flex justify-between flex-row items-center ">
        <div className="grid gap-4">
          <div className="flex items-center gap-1">
            <CalendarIcon className="text-gray-500 h-7 w-7" />
            <span className="text-gray-500 text-lg">
              {formatInfoDate(info.xValue)}
            </span>
          </div>
          <div>
            <span
              className={cn("text-7xl  font-extrabold mr-2")}
              style={{ color: getProfessorEvaluationBarColor(info.yValue) }}
            >
              {info.yValue}
            </span>
            <span className="text-3xl text-gray-300 font-extrabold">
              из 10 баллов
            </span>
          </div>
        </div>

        <GroupTitle className="ml-auto text-gray-600 text-xl">
          Оценка преподавателей
        </GroupTitle>
      </GroupHeader>
      <GroupContent>
        <ParentSize>
          {({ width }) => {
            // bounds
            const xMax = width - margin.left - margin.right;
            const yMax = chartHeight - verticalMargin;

            // scales, memoize for performance
            const xScale = scaleBand<string>({
              range: [0, xMax],
              round: true,
              domain: data.map(xAccessor),
              padding: 0.3,
            });

            const yScale = scaleLinear<number>({
              range: [yMax, 0],
              round: true,
              domain: [0, Math.max(...data.map(yAccessor))],
            });

            const barOffset = (xScale.padding() * 100) / 2;

            return (
              <>
                <svg width={width} height={chartHeight}>
                  <rect
                    width={width}
                    height={chartHeight}
                    rx={14}
                    className="fill-white"
                  />
                  <Grid
                    top={0}
                    xScale={xScale}
                    yScale={yScale}
                    width={xMax}
                    height={yMax}
                    stroke="black"
                    strokeOpacity={0.08}
                    xOffset={xScale.bandwidth() / 2}
                  />
                  <Group top={0}>
                    {data.map((d) => {
                      const xValue = xAccessor(d);
                      const yValue = yAccessor(d);
                      const barContainerWidth = xScale.bandwidth();
                      const barHeight = yMax - (yScale(yAccessor(d)) ?? 0);
                      const outerBarX = Number(xScale(xValue)) - barOffset;
                      const innerBarX =
                        outerBarX + barContainerWidth / 2 - barWidth / 2;
                      const barY = yMax - barHeight;
                      return (
                        <g
                          key={`bar-${xValue}`}
                          className="cursor-pointer group "
                        >
                          <rect
                            width={barContainerWidth}
                            className="fill-transparent group-hover:fill-gray-200/40 transition-colors duration-200 "
                            height={yMax}
                            x={outerBarX}
                            y={0}
                            ry={35}
                            onMouseOver={() => showTooltip({ tooltipData: d })}
                          />
                          <rect
                            className="fill-gray-200 "
                            width={barWidth}
                            height={yMax - 10}
                            x={innerBarX}
                            y={5}
                            ry={10}
                          />
                          <Bar
                            x={innerBarX - 1.5}
                            y={barY}
                            width={barWidth + 3}
                            height={barHeight - 5}
                            style={{
                              fill: getProfessorEvaluationBarColor(yValue),
                            }}
                            ry={10}
                          />
                        </g>
                      );
                    })}

                    <AxisBottom
                      hideAxisLine
                      hideTicks
                      tickFormat={formatTickDate}
                      top={yMax}
                      scale={xScale}
                      tickStroke="#7adff80"
                      left={-barOffset}
                      tickLabelProps={(tickValue) => ({
                        fontSize: 14,
                        textAnchor: "middle",
                        fill:
                          tickValue === info.xValue
                            ? colors.orange[400]
                            : colors.gray[500],

                        fontWeight: tickValue === info.xValue ? 800 : 400,
                      })}
                    />
                  </Group>
                </svg>
              </>
            );
          }}
        </ParentSize>
      </GroupContent>
    </GroupRoot>
  );
};

export {VerticalBar};
