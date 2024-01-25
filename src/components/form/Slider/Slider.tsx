import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/utils";
import { Input } from "../inputs";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  minStepsBetweenThumbs: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

const Slider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      ...props
    }: SliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <React.Fragment>
        <SliderPrimitive.Root
          ref={ref as React.RefObject<HTMLDivElement>}
          min={min}
          max={max}
          step={step}
          value={localValues}
          onValueChange={handleValueChange}
          className={cn(
            "relative flex w-full touch-none select-none mb-6 items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          {localValues.map((value, index) => (
            <SliderPrimitive.Thumb
              key={index}
              className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            />
          ))}
        </SliderPrimitive.Root>
        <div className="flex items-center justify-between">
          {/* <Input
            type="number"
            value={localValues[0]}
            onChange={(e) =>
              setLocalValues([Number(e.target.value), localValues[1]])
            }
          />
          <Input
            type="number"
            value={localValues[1]}
            onChange={(e) =>
              setLocalValues([localValues[0], Number(e.target.value)])
            }
          /> */}
          <label className="flex flex-grow max-w-28 gap-2 p-2 relative items-center flex-row-reverse bg-background rounded-lg border border-border has-[:focus]:border-primary-900 has-[:focus]:border ">
            <input
              min={min}
              max={localValues[1]}
              type="number"
              className=" bg-transparent border-none w-full outline-none caret-primary-900"
              value={localValues[0]}
              onChange={(e) =>
                setLocalValues([Number(e.target.value), localValues[1]])
              }
            />
            <p className="text-muted-foreground">от</p>
          </label>
          <label className="flex flex-grow max-w-28 gap-2 p-2 relative items-center flex-row-reverse bg-background rounded-lg border border-border has-[:focus]:border-primary-900 has-[:focus]:border ">
            <input
              min={localValues[0]}
              max={max}
              type="number"
              className=" bg-transparent border-none w-full outline-none caret-primary-900"
              value={localValues[1]}
              onChange={(e) =>
                setLocalValues([localValues[0], Number(e.target.value)])
              }
            />
            <p className="text-muted-foreground">до</p>
          </label>
        </div>
      </React.Fragment>
    );
  }
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
