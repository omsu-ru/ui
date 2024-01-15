"use client";
import React, { useMemo } from "react";
import { BarDataResponse, BarProps } from "../types";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { AxisLeft } from "@visx/axis";
import { ParentSize } from "@visx/responsive";
import { useTooltip } from "@visx/tooltip";
import { GridColumns } from "@visx/grid";
import { GroupRoot, GroupContent, GroupHeader, GroupTitle } from "@/components";
import { cn } from "@/utils";
import colors from "tailwindcss/colors";

const margin = { top: 0, left: 0, right: 0, bottom: 0 };

const HorizontalBar = ({
  className,
  barWidth,
  chartHeight,
  data,
  xAccessor,
  yAccessor,
}: BarProps) => {
  const { tooltipData, showTooltip } = useTooltip<BarDataResponse>();

  const horizontalMargin = 90;

  const tick_formatter = Intl.DateTimeFormat("ru", {
    month: "long",
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
    <GroupRoot className={cn("px-8 py-8 min-w-[1px] w-full", className)}>
      <GroupHeader className="grid  ">
        <GroupTitle className=" text-gray-400 text-2xl">
          Оценка преподавателей
        </GroupTitle>
        <div className="grid gap-4">
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
      </GroupHeader>
      <GroupContent>
        <ParentSize>
          {({ width, height }) => {
            // bounds
            const yMax = chartHeight - margin.left - margin.right;
            const xMax = width - horizontalMargin;

            // scales, memoize for performance
            const yScale = scaleBand<string>({
              range: [0, yMax],
              round: true,
              domain: data.map(xAccessor),
              padding: 0.3,
            });

            const xScale = scaleLinear<number>({
              range: [xMax, 0],
              round: true,
              domain: [0, Math.max(...data.map(yAccessor))],
            });

            const barOffset = (yScale.padding() * 100) / 2;

            return (
              <>
                <svg width={xMax + horizontalMargin} height={chartHeight}>
                  <rect
                    width={width}
                    height={chartHeight}
                    rx={14}
                    className="fill-white"
                  />
                  <GridColumns
                    top={0}
                    left={120}
                    scale={xScale}
                    width={xMax}
                    height={yMax}
                    stroke="black"
                    strokeOpacity={0.08}
                  />
                  <Group left={horizontalMargin}>
                    {data.map((d) => {
                      const xValue = xAccessor(d);
                      const yValue = yAccessor(d);

                      const barContainerWidth = yScale.bandwidth();
                      const barProgress = xMax - (xScale(yAccessor(d)) ?? 0);
                      const barInnerPadding = 15;
                      const outerBarYPos = Number(yScale(xValue));
                      const innerBarYPos =
                        outerBarYPos + barContainerWidth / 2 - barWidth / 2;
                      return (
                        <>
                          <g
                            key={`bar-${xValue}`}
                            className="cursor-pointer group "
                          >
                            <rect
                              className="fill-gray-200 "
                              width={xMax - barInnerPadding * 2}
                              height={barWidth}
                              x={barInnerPadding}
                              y={innerBarYPos}
                              ry={10}
                            />
                            <Bar
                              x={barInnerPadding}
                              y={innerBarYPos - 1.5}
                              width={barProgress - barInnerPadding * 2}
                              height={barWidth + 3}
                              style={{
                                fill: getProfessorEvaluationBarColor(yValue),
                              }}
                              ry={10}
                            />
                            <rect
                              width={xMax}
                              className="fill-transparent group-hover:fill-gray-200/40 transition-colors duration-200 "
                              height={barWidth + 20}
                              x={0}
                              y={outerBarYPos - 10}
                              ry={35}
                              onMouseOver={() =>
                                showTooltip({ tooltipData: d })
                              }
                            />
                          </g>
                          <text>{d.xValue}</text>
                        </>
                      );
                    })}

                    <AxisLeft
                      hideAxisLine
                      hideTicks
                      tickFormat={formatTickDate}
                      top={2.5}
                      scale={yScale}
                      left={-barOffset}
                      tickLabelProps={(tickValue) => ({
                        fontSize: 14,
                        textAnchor: "end",

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

export { HorizontalBar };
