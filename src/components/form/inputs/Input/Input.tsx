import { cn } from "@utils/index";
import React from "react";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  staticText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftContent, rightContent, ...props }, ref) => {
    return (
      <label
        attr-static={props.staticText}
        className="relative after:content-[attr(attr-static)] after:text-gray-400 dark:after:text-gray-400 after:text-sm after:absolute after:top-0 after:right-4 after:block"
      >
        <input
          type={type}
          ref={ref}
          {...props}
          className={cn(
            "h-14 w-full px-3 py-5 rounded-lg text-text text-base   bg-input    file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:bg-background-content focus-visible:border focus-visible:border-border disabled:cursor-not-allowed disabled:opacity-50 ",
            className
          )}
        />
        {leftContent && (
          <div className="grid w-fit absolute top-1/2 transform -translate-y-1/2 left-4">
            {leftContent}
          </div>
        )}
        {rightContent && (
          <div
            className={cn(
              "grid w-fit absolute top-1/2 transform -translate-y-1/2 right-4"
            )}
          >
            {rightContent}
          </div>
        )}
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
