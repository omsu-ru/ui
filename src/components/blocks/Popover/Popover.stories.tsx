import React from "react";
import { Popover } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, GroupContent } from "..";

const meta: Meta<typeof Popover> = {
  component: Popover,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button>Открыть</Button>,
    children: <GroupContent></GroupContent>,
  },
};
