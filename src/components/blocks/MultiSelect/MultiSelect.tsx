import * as React from "react";
import { cn } from "@/utils";

import { Check, X, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  PopoverRoot,
  PopoverContent,
  PopoverTrigger,
  Button,
  Badge,
} from "@/components";

export type OptionType = {
  label: string;
  value: string;
};

interface MultiSelectProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  options: OptionType[];
  selected: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
  label: string | React.ReactNode;
  emptyIndicator?: React.ReactNode;
}

function MultiSelect({
  options,
  selected,
  onChange,
  className,
  label,
  emptyIndicator = "Ничего не найдено",
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item));
  };

  const filtered = options.filter(
    (option) =>
      !selected.find((selectedOption) => selectedOption === option.value)
  );

  return (
    <PopoverRoot open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(`w-full justify-between h-max`, className)}
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-4 flex-wrap">
            {label}
            <div className="flex gap-1 flex-wrap">
              {selected.map((item) => (
                <Badge
                  variant="outline"
                  key={item}
                  className="mr-1 mb-1"
                  onClick={(e) => {
                    handleUnselect(item);
                    e.stopPropagation();
                  }}
                >
                  {item}
                  <button
                    className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(item);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(item)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className={className}>
          <CommandInput placeholder={props.placeholder} />
          <CommandEmpty>{emptyIndicator}</CommandEmpty>
          <CommandGroup className="max-h-64 overflow-auto">
            {filtered.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => {
                  onChange(
                    selected.includes(option.value)
                      ? selected.filter((item) => item !== option.value)
                      : [...selected, option.value]
                  );
                  setOpen(true);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selected.includes(option.value)
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </PopoverRoot>
  );
}

export { MultiSelect };
