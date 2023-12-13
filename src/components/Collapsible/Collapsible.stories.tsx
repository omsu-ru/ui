import React from "react";
import { Collapsible } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon, ListItem } from "..";
import { Rocket } from "@/icons";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    trigger: ({ open }) => (
      <ListItem
        leftIcon={<Icon icon={Rocket} />}
        title="Раскрыть список"
        righticon={open ? <ChevronsDownUp /> : <ChevronsUpDown />}
      />
    ),
    // trigger: (
    //   <ListItem leftIcon={<Icon icon={Rocket} />} title="Раскрыть список" />
    // ),
    content: (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    ),
  },
};
