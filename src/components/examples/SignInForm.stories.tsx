import React from "react";
import { SignInForm } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {
  args: {},
};
