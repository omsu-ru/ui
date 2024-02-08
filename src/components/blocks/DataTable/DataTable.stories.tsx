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
import { useDataTableFilters } from "./store";
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
    const columnFiltersStore = useDataTableFilters<any>();
    const { columnFilters, setColumnFilters } = columnFiltersStore();

    return (
      <GroupRoot>
        <GroupHeader>
          <Logo icon={IdLogo} />
          <GroupTitle>Панель управления</GroupTitle>
          {JSON.stringify(columnFiltersStore().columnFilters)}
          <GroupDescription>
            формами индивидуального планирования
          </GroupDescription>
        </GroupHeader>
        <GroupContent className="max-h-none">
          <DataTable
            columns={columns}
            onColumnFiltersChange={(columnFilters) =>
              setColumnFilters(columnFilters)
            }
            initialFilters={columnFilters}
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
