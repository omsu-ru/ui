import React from "react";
import { Tooltip } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/blocks/buttons";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Ваууууууууууу",
    trigger: <Button>открыть</Button>,
  },
};
