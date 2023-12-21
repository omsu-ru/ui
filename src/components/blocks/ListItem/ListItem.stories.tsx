import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ListItem } from ".";
import { Briefcase } from "../../../icons";
import { Icon } from "../Icon";
import { Group } from "../Group";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Group className="max-w-sm">
        <Story>
          <a></a>
        </Story>
      </Group>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
    leftContent: <Icon icon={Briefcase} />,
    title: "Портфолио",
    description: "Ваши работы",
    info: "Здесь будут собраны ваши работы",
  },
};
