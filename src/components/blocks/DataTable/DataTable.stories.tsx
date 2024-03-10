import React from "react";
import { DataTable, columns } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { departments, faculties, fetchData } from "./data";
import {
  GroupContent,
  GroupDescription,
  GroupHeader,
  GroupRoot,
  GroupTitle,
} from "../Group";
import { Logo } from "@/components/Logo";
import { IdLogo } from "@/icons";
import { ColumnDef } from "@tanstack/react-table";

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <GroupRoot>
        <GroupHeader>
          <Logo text="ИПП" />
          <GroupTitle>Панель управления</GroupTitle>

          <GroupDescription>
            формами индивидуального планирования
          </GroupDescription>
        </GroupHeader>
        <GroupContent className="max-h-none">
          <DataTable
            columns={columns}
            fetchFn={fetchData}
            filters={{
              search: {
                columnID: "name",
                placeholder: "Поиск преподавателя...",
              },
              select: [
                {
                  columnID: "faculty",
                  options: faculties,
                  title: "Факультеты",
                },
                {
                  columnID: "department",
                  options: departments,
                  title: "Кафедра",
                },
              ],
            }}
          />
        </GroupContent>
      </GroupRoot>
    );
  },
};
