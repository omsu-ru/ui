import React from "react";
import { Toggle } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold" variant={"outline"}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};
export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <Italic className="mr-2 h-4 w-4" />
      Italic
    </Toggle>
  ),
};
export const Disables: Story = {
  render: () => (
    <Toggle aria-label="Toggle underline" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  ),
};
