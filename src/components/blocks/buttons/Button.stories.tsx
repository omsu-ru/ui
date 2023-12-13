import React from "react";
import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "sdfsdf",
  },
};
