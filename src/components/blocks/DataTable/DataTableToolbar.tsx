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
import { ColumnsIcon, SearchIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { TableFilters } from "./types";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters: TableFilters<TData>;
}

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="max-w-[25rem] h-12"
      rightContent={
        <SearchIcon className="w-4 h-4 text-muted-foreground stroke-1" />
      }
    />
  );
}

export function DataTableToolbar<TData>({
  table,
  filters,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <header className="flex items-center py-4 gap-4 justify-between ">
      {filters.search && (
        <DebouncedInput
          placeholder={filters.search.placeholder}
          value={
            (table
              .getColumn(filters.search.columnID as string)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(value) =>
            table
              .getColumn(
                filters.search ? (filters.search.columnID as string) : ""
              )
              ?.setFilterValue(value)
          }
        />
      )}
      <section className=" flex gap-4 items-center">
        {filters.select &&
          filters.select.map(({ columnID, options, title }) => {
            return (
              <DataTableFacetedFilter
                options={options}
                column={table.getColumn(columnID as string)}
                title={title}
                key={columnID as string}
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
      </section>
    </header>
  );
}
