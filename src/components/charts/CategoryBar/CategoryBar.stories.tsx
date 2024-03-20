import React from "react";
import { CategoryBar } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CategoryBar> = {
  component: CategoryBar,
  decorators: [(story) => <div className="w-[300px]">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof CategoryBar>;

export const Default: Story = {
  args: {
    values: [40, 30, 20, 10],
    colors: ["emerald", "yellow", "orange", "rose"],
    markerValue: 62,
  },
};
export const WithoutLabels: Story = {
  args: {
    values: [40, 30, 20, 10],
    colors: ["emerald", "yellow", "orange", "rose"],
    markerValue: 62,
    showLabels: false,
  },
};
