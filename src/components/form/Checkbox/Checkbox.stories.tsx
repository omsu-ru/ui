import React from "react";
import { Checkbox } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { ControlledCheckbox } from "./ControlledCheckbox";

const meta: Meta<typeof ControlledCheckbox> = {
  component: ControlledCheckbox,
  decorators: [
    (story) => (
      <div className="flex justify-center bg-white items-center self-center">
        {story()}
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ControlledCheckbox>;

export const Single: Story = {
  args: {},
};
