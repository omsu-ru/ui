import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Icon } from ".";
import { ListItem } from "../ListItem";
import { Briefcase } from "@/icons";

const meta: Meta<typeof Icon> = {
  component: Icon,
  decorators: [
    (Story) => <ListItem title="Иконка" leftIcon={<Story />}></ListItem>,
  ],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: Briefcase,
    //👇 The args you need here will depend on your component
  },
};
