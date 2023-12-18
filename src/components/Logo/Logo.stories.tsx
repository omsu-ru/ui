import React from "react";
import { Logo } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  component: Logo,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
  },
};
