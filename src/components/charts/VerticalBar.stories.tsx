import React from "react";
import { VerticalBar } from "./ui/VerticalBar";
import type { Meta, StoryObj } from "@storybook/react";

type WorkloadResponse = {
  xValue: string;
  yValue: number;
};

const workload_mock_data: WorkloadResponse[] = [
  { xValue: "2023-01-01", yValue: 4 },
  { xValue: "2023-02-01", yValue: 8 },
  { xValue: "2023-03-01", yValue: 6 },
  { xValue: "2023-04-01", yValue: 9 },
  { xValue: "2023-05-01", yValue: 7 },
];

const evaluation_chart_accessors = {
  xAccessor: (d: WorkloadResponse) => d.xValue,
  yAccessor: (d: WorkloadResponse) => d.yValue,
};

const meta: Meta<typeof VerticalBar> = {
  component: VerticalBar,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof VerticalBar>;

export const Default: Story = {
  args: {
    data: workload_mock_data,
    xAccessor: evaluation_chart_accessors.xAccessor,
    yAccessor: evaluation_chart_accessors.yAccessor,
    barWidth: 10,
    chartHeight: 200,
  },
};
