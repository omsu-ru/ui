import React from "react";
import { BadgeDelta } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BadgeDelta> = {
  component: BadgeDelta,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof BadgeDelta>;

export const Default: Story = {
  args: {
    children: "22.4%    ",
  },
};
