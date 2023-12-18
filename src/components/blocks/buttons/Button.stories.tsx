import React from "react";
import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (story) => (
      <div className="grid justify-self-center p-4 bg-white">{story()}</div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "кнопка",
  },
};
