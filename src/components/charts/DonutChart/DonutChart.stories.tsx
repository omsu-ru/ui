import React from "react";
import { DonutChart } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const sales = [
  {
    name: "ФЦТК",
    sales: 980,
  },
  {
    name: "ФФ",
    sales: 456,
  },
  {
    name: "ХФ",
    sales: 390,
  },
  {
    name: "ФПМиК",
    sales: 240,
  },
  {
    name: "ЮФ",
    sales: 190,
  },
  {
    name: "ФКИ",
    sales: 139,
  },
];

const meta: Meta<typeof DonutChart> = {
  component: DonutChart,
  decorators: [(story) => <div className="w-[600px]">{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
  args: { category: "sales", index: "name", data: sales, variant: "donut" },
};
