"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/utils";
import { Label } from "..";

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  defaultValue?: string;
  options: {
    label: string;
    id: string;
  }[];
}

const RadioRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioRoot.displayName = "RadioRoot";

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-6 w-6 data-[state=checked]:bg-primary-900 bg-muted rounded-full  text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:hover:bg-primary-300",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center ">
        <Circle className="h-3 w-3 fill-white text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, defaultValue, options, ...props }, ref) => {
  return (
    <RadioRoot defaultValue={defaultValue} {...props} ref={ref}>
      {options.map((option) => (
        <div className="flex items-center space-x-2">
          <RadioGroupItem key={option.id} id={option.id} value={option.id} />
          <Label htmlFor={option.id} className="mb-0 font-normal">
            {option.label}
          </Label>
        </div>
      ))}
    </RadioRoot>
  );
});

RadioGroup.displayName = "RadioGroup";

export { RadioGroup, RadioGroupItem, RadioRoot };
