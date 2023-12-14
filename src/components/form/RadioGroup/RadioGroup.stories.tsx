import React from "react";
import { RadioGroup } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  decorators: [(story) => <div className="bg-white">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    options: [
      { id: "professor", label: "Преподаватель" },
      { id: "supervisor", label: "Заведующий кафедрой" },
      { id: "dean", label: "Декан" },
    ],
  },
};
