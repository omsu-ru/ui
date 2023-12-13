import React from "react";
import { ProfilesList } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfilesList> = {
  component: ProfilesList,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof ProfilesList>;

export const Default: Story = {
  args: {},
};
