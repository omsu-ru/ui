import React from "react";
import { DataTable, columns } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { departments, faculties, fetchData } from "./data";

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {},
  render: () => (
    <DataTable
      columns={columns}
      fetchFn={fetchData}
      filters={{
        search: { columnID: "name", placeholder: "Поиск преподавателя..." },
        select: [
          {
            columnID: "faculty",
            options: faculties,
            title: "Факультет",
          },
          {
            columnID: "department",
            options: departments,
            title: "Кафедра",
          },
        ],
      }}
    />
  ),
};
