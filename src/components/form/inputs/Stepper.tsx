"use client";
import React, { InputHTMLAttributes, forwardRef, useRef } from "react";
import { Button } from "@/components/blocks/buttons";
import { ChevronDown, ChevronUp, PlusIcon, MinusIcon } from "lucide-react";
import { useQuantityDeclension } from "@/hooks";
export interface StepperProps extends InputHTMLAttributes<HTMLInputElement> {
  increase: (name: string) => void;
  decrease: (name: string) => void;
  name: string;
  value: number;
  unit?: string[] | string;
}

const Stepper = forwardRef<HTMLInputElement, StepperProps>(
  ({ className, type, ...props }, ref) => {
    const increase_interval_ref = useRef<NodeJS.Timeout>();
    const decrease_interval_ref = useRef<NodeJS.Timeout>();
    const long_press_activate_time = 220;

    const declension_unit = useQuantityDeclension(
      props.value,
      props.unit || []
    );
    return (
      <section className="relative flex gap-[2px] [&>*]:transition-all [&>*]:duration-300 [&>*]:dark:bg-[#0C0A09] [&>*]:dark:text-white">
        <Button
          className="bg-gray-200 h-full  rounded-none rounded-s-md hover:bg-gray-200 text-gray-800  ring-ring  dark:hover:ring-1"
          type="button"
          onClick={() => props.decrease(props.name)}
          onMouseDown={(e) => {
            if (e.button !== 0) return null;
            decrease_interval_ref.current = setInterval(
              () => props.decrease(props.name),
              long_press_activate_time
            );
          }}
          onMouseLeave={() => clearInterval(decrease_interval_ref.current)}
          onMouseUp={() => clearInterval(decrease_interval_ref.current)}
          variant={"ghost"}
        >
          <MinusIcon />
        </Button>
        <label className="bg-gray-200 relative flex flex-1 items-center justify-center hover:bg-gray-200 cursor-pointer ring-ring  dark:hover:ring-1">
          <div className="absolute flex items-center gap-1 w-full">
            <input
              min={0}
              {...props}
              className="focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none  [&::-webkit-inner-spin-button]:appearance-none  bg-transparent  rounded-sm py-2 text-right   w-3/6 text-foreground text-lg"
              ref={ref}
              type="number"
            />
            <p className="text-gray-500 dark:text-gray-300 text-sm text-ellipsis sm:flex hidden">
              {typeof props.unit === "string" ? props.unit : declension_unit}
            </p>
          </div>
        </label>
        <Button
          className="bg-gray-200 h-full rounded-none rounded-e-md hover:bg-gray-200 text-gray-800  ring-ring  dark:hover:ring-1  "
          type="button"
          variant={"ghost"}
          disabled={props.disabled}
          onClick={() => props.increase(props.name)}
          onMouseDown={(e) => {
            if (e.button !== 0) return null;
            increase_interval_ref.current = setInterval(
              () => props.increase(props.name),
              long_press_activate_time
            );
          }}
          onMouseLeave={() => clearInterval(increase_interval_ref.current)}
          onMouseUp={() => {
            return clearInterval(increase_interval_ref.current);
          }}
        >
          <PlusIcon />
        </Button>
      </section>
    );
  }
);

Stepper.displayName = "Stepper";

export { Stepper };
