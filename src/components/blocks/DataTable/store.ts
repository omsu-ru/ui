import { StoreApi, UseBoundStore, create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Draft } from "immer";

type CustomColumnFilter<TData> = {
  id: keyof TData;
  value: unknown;
};

type State<TData> = {
  columnFilters: CustomColumnFilter<TData>[];
};

type Action = {
  setColumnFilters: (filters: CustomColumnFilter<any>[]) => void;
};

type BaseStore<TData> = Action & State<TData>;

// Define the base store with a generic placeholder
const useDataTableFiltersBase = create<BaseStore<any>>()(
  immer((set) => ({
    columnFilters: [],
    setColumnFilters: (filters) =>
      set((state) => {
        state.columnFilters = filters;
      }),
  }))
) as UseBoundStore<Draft<StoreApi<State<any> & Action>>>;

// Export a function that allows passing the generic type
export const useDataTableFilters = <TData>() => {
  return useDataTableFiltersBase as {
    <TData>(): BaseStore<TData>;
    <TData, U>(selector: (s: BaseStore<TData>) => U): U;
  };
};
