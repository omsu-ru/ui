import React from "react";
import { Toast } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  component: Toast,
  decorators: [(Story) => <Story />],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {},
};
