import React from "react";
import { Logo } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  component: Logo,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};
