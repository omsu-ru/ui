import React from "react";
import { Collapsible } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../Icon/Icon";
import { Rocket } from "@/icons";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    title: "Раскрыть список",
    rightContent: (
      <>
        <ChevronsDownUp className="w-6 h-6 stroke-1 text-muted-foreground hidden group-data-[state=open]:block " />
        <ChevronsUpDown className="w-6 h-6 stroke-1 text-text-secondary hidden group-data-[state=closed]:block" />
      </>
    ),

    children: (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    ),
  },
};
