import React from "react";
import { SignUpForm } from "./SignUpForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignUpForm> = {
  component: SignUpForm,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {
  args: {},
};
