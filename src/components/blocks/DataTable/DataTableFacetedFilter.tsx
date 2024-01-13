"use client";
import * as React from "react";
import { CheckIcon, PlusCircle } from "lucide-react";
import { Column } from "@tanstack/react-table";

import { cn } from "@/utils";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  PopoverRoot,
  PopoverContent,
  PopoverTrigger,
  CommandSeparator,
  Badge,
  Separator,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components";

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  noResultsMessage?: string;
  options: {
    label: string;
    value: string;
    abbr?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
  noResultsMessage = "Ничего не найдено",
}: DataTableFacetedFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 h-4 w-4" />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="default"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="default"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} выбрано
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.label))
                    .map((option) => (
                      <Badge
                        variant="default"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.abbr ? option.abbr : option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>{noResultsMessage}</CommandEmpty>
            <TooltipProvider>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValues.has(option.value);
                  return (
                    <TooltipRoot key={option.value}>
                      <TooltipTrigger>
                        {" "}
                        <CommandItem
                          onSelect={() => {
                            if (isSelected) {
                              selectedValues.delete(option.value);
                            } else {
                              selectedValues.add(option.value);
                            }
                            const filterValues = Array.from(selectedValues);
                            column?.setFilterValue(
                              filterValues.length ? filterValues : undefined
                            );
                          }}
                        >
                          <div
                            className={cn(
                              "mr-2 flex h-4 w-4 items-center  rounded-sm border border-primary",
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible"
                            )}
                          >
                            <CheckIcon className={cn("h-4 w-4")} />
                          </div>
                          {option.icon && (
                            <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                          )}
                          <span>
                            {option.abbr ? option.abbr : option.label}
                          </span>
                          {/* {facets?.get(option.label) && (
                            <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                              {facets.get(option.label)}
                            </span>
                          )} */}
                        </CommandItem>
                      </TooltipTrigger>
                      <TooltipContent>{option.label}</TooltipContent>
                    </TooltipRoot>
                  );
                })}
              </CommandGroup>
            </TooltipProvider>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    className="justify-center text-center"
                  >
                    Очистить фильтры
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </PopoverRoot>
  );
}
