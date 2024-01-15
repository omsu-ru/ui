import React from "react";
import { BarList } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { GroupContent, GroupHeader, GroupRoot, GroupTitle } from "../../blocks";

const meta: Meta<typeof BarList> = {
  component: BarList,
  decorators: [
    (story) => (
      <GroupRoot className="w-[600px]">
        <GroupHeader>
          <GroupTitle>Баллы фактических показателей</GroupTitle>
        </GroupHeader>
        <GroupContent className="p-6">{story()}</GroupContent>
      </GroupRoot>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BarList>;

const data = [
  {
    name: "Кафедра фундаментальной и прикладной информатики ",
    value: 89,
  },
  {
    name: "Кафедра информатики и вычислительной техники ",
    value: 68,
  },
  {
    name: "Кафедра информационной безопасности",
    value: 43,
  },
  {
    name: "Кафедра фундаментальной и прикладной информатики ",
    value: 33,
  },
];

export const Default: Story = {
  args: {
    data: data,
  },
};
