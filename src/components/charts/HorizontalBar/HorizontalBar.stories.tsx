import React from "react";
import { HorizontalBar } from ".";
import type { Meta, StoryObj } from "@storybook/react";

type WorkloadResponse = {
  xValue: string;
  yValue: number;
};

const workload_mock_data: WorkloadResponse[] = [
  { xValue: "2023-01-01", yValue: 7 },
  { xValue: "2023-02-01", yValue: 8 },
  { xValue: "2023-03-01", yValue: 6 },
  { xValue: "2023-04-01", yValue: 9 },
  { xValue: "2023-05-01", yValue: 7 },
];

const evaluation_chart_accessors = {
  xAccessor: (d: WorkloadResponse) => d.xValue,
  yAccessor: (d: WorkloadResponse) => d.yValue,
};

const meta: Meta<typeof HorizontalBar> = {
  component: HorizontalBar,
  decorators: [(story) => <div>{story()}</div>],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalBar>;

export const Default: Story = {
  args: {
    data: workload_mock_data,
    xAccessor: evaluation_chart_accessors.xAccessor,
    yAccessor: evaluation_chart_accessors.yAccessor,
    barWidth: 10,
    chartHeight: 200,
  },

  render: () => (
    <HorizontalBar
      className="w-[600px]"
      data={workload_mock_data}
      xAccessor={evaluation_chart_accessors.xAccessor}
      yAccessor={evaluation_chart_accessors.yAccessor}
      barWidth={30}
      chartHeight={300}
    />
  ),
};
