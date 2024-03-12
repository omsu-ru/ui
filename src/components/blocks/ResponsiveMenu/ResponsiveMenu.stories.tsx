import React from "react";
import {
  ResponsiveMenu,
  ResponsiveMenuContent,
  ResponsiveMenuTrigger,
} from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ResponsiveMenu> = {
  component: ResponsiveMenu,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof ResponsiveMenu>;

export const Default: Story = {
  args: {},
  render: () => (
    <ResponsiveMenu>
      <ResponsiveMenuTrigger>Открыть</ResponsiveMenuTrigger>
      <ResponsiveMenuContent>контент</ResponsiveMenuContent>
    </ResponsiveMenu>
  ),
};
