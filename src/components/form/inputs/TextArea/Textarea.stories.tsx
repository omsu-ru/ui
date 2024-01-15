import React from "react";
import { Textarea } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};
