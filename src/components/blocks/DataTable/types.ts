export type Professor = {
  name: string;
  department: string;
  faculty: string;

  email: string;
};

export interface ColumnFilter<TValue> {
  id: TValue;
  value: unknown;
}
export type ColumnFiltersState<TValue> = ColumnFilter<TValue>[];

export interface TableFilters<TData> {
  show_attributes?: boolean;

  search?: {
    columnID: keyof TData;
    placeholder: string;
  };
  select?: Array<{
    columnID: keyof TData;
    title: string;
    options: {
      label: string;
      value: string;
      icon?: React.ComponentType<{ className?: string }>;
    }[];
  }>;
}
