import React from "react";
import { Slider } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Slider> = {
  component: Slider,
  decorators: [(story) => <div className="w-[400px]">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    max: 50,
    min: 24,
    step: 0.1,
  },
};
