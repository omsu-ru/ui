import React from "react";
import { AreaChart } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AreaChart> = {
  component: AreaChart,
  decorators: [(story) => <div className="w-[600px]">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

const data = [
  { ФЦТК: 50, ЮФ: 40, ХФ: 43, ФФ: 65, year: "2022" },
  { ФЦТК: 20, ЮФ: 90, ХФ: 73, ФФ: 55, year: "2023" },
  { ФЦТК: 70, ЮФ: 110, ХФ: 63, ФФ: 45, year: "2024" },
];

export const Default: Story = {
  args: {
    categories: ["ФЦТК", "ЮФ", "ХФ", "ФФ"],
    index: "year",
    data,
    className: "h-72",
  },
};
