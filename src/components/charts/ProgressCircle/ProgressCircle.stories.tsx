import * as React from "react";
import { ProgressCircle } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressCircle> = {
  component: ProgressCircle,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof ProgressCircle>;

export const Default: Story = {
  args: {
    value: 72,
    radius: 25,
    strokeWidth: 6,
  },
};
