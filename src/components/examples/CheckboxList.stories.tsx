import React from "react";
import { ControlledCheckboxList } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ControlledCheckboxList> = {
  component: ControlledCheckboxList,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof ControlledCheckboxList>;

export const Default: Story = {
  args: {},
};
