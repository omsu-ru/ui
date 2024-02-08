"use client";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  VisibilityState,
  getCoreRowModel,
  useReactTable,
  PaginationState,
  Column,
  getFacetedRowModel,
  getFacetedUniqueValues,
  TableOptions,
  FilterFn,
  ColumnFilter,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  DataTablePagination,
  DataTableToolbar,
} from "@/components";
import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { TableFilters } from "./types";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

type CustomColumnFilter<TData> = {
  id: keyof TData;
  value: unknown;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  isLoading?: boolean;
  test?: keyof TData;
  initialFilters?: CustomColumnFilter<TData>[];
  onColumnFiltersChange?: (columnFilters: CustomColumnFilter<TData>[]) => void;
  fetchFn: (
    pageIndex: number,
    pageSize: number,
    filters: ColumnFilter[],
    sorting: SortingState
  ) => void;
  filters: TableFilters<TData>;
  noResults?: string;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

declare type Updater<T> = T | ((old: T) => T);

export function DataTable<TData, TValue>({
  columns,
  // data,
  filters,
  initialFilters = [],
  noResults = "Ничего не найдено",
  isLoading,
  fetchFn,
  ...props
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    initialFilters as ColumnFiltersState
  );

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 5,
    });

  const fetchDataOptions = {
    page: pageIndex,
    count: pageSize,
    columnFilters,
    sorting,
  };

  const searchQuery =
    columnFilters.find((column) => column.id === filters.search.columnID)
      ?.value ?? "";

  const dataQuery = useQuery<any>({
    queryKey: ["data", fetchDataOptions],
    queryFn: () => fetchFn(pageIndex, pageSize, columnFilters, sorting),
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  });

  const defaultData = React.useMemo(() => [], []);

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable<TData>({
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    data: dataQuery.data ?? defaultData,
    columns,
    manualPagination: true,
    manualFiltering: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      pagination,
    },
    pageCount: -1,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: (columnFiltersUpdater) => {
      setColumnFilters(columnFiltersUpdater);

      const newFilters =
        typeof columnFiltersUpdater === "function"
          ? (columnFiltersUpdater(columnFilters) as CustomColumnFilter<TData>[])
          : (columnFiltersUpdater as CustomColumnFilter<TData>[]);
      props.onColumnFiltersChange(newFilters);
    },
    onColumnVisibilityChange: setColumnVisibility,
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onPaginationChange: setPagination,
    // getPaginationRowModel: getPaginationRowModel(),
  });

  console.log(table.getState());

  return (
    <>
      <DataTableToolbar filters={filters} table={table} />
      <div className="rounded-md  relative ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {!isLoading && (
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="group"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    {noResults}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
        {isLoading && (
          <TableRow>
            <div>loading...</div>
          </TableRow>
        )}
        <DataTablePagination table={table} />
      </div>
    </>
  );
}
