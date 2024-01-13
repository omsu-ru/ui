"use client";

import { Table } from "@tanstack/react-table";
import {
  Input,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Button,
  DataTableFacetedFilter,
} from "@/components";
import { ColumnsIcon, XIcon } from "lucide-react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters: {
    show_attributes?: boolean;
    search?: {
      columnID: string;
      placeholder: string;
    };
    select?: Array<{
      columnID: string;
      title: string;
      options: {
        label: string;
        value: string;
        icon?: React.ComponentType<{ className?: string }>;
      }[];
    }>;
  };
}

export function DataTableToolbar<TData>({
  table,
  filters,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <header className="flex items-center py-4 gap-4 ">
      {filters.search && (
        <Input
          placeholder={filters.search.placeholder}
          value={
            (table
              .getColumn(filters.search.columnID)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(filters.search ? filters.search.columnID : "")
              ?.setFilterValue(event.target.value)
          }
          className="max-w-md"
        />
      )}
      {filters.select &&
        filters.select.map(({ columnID, options, title }) => {
          return (
            <DataTableFacetedFilter
              options={options}
              column={table.getColumn(columnID)}
              title={title}
              key={columnID}
            />
          );
        })}

      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Сбросить
          <XIcon className="ml-2 h-4 w-4" />
        </Button>
      )}

      {filters.show_attributes && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <ColumnsIcon />
              Атрибуты
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {/* {typeof column.columnDef.header === "string"
                      ? column.columnDef.header
                      : column.columnDef?.meta?.headerName} */}
                    {typeof column.columnDef.header === "string" &&
                      column.columnDef.header}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  );
}
