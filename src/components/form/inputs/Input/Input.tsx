"use client";
import { cn } from "@utils/index";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  staticText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftContent, rightContent, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    return (
      <label
        attr-static={props.staticText}
        className={cn(
          "flex flex-grow  gap-2 pr-4 relative items-center  rounded-lg border border-border has-[:focus]:border-primary-900 has-[:focus]:border bg-input has-[:focus]:bg-background-content",
          className
        )}
      >
        {leftContent && (
          <div className="text-muted-foreground ">{leftContent}</div>
        )}
        <input
          type={isPasswordVisible ? "text" : type}
          ref={ref}
          {...props}
          className={cn(
            "bg-transparent border-none   caret-primary-900 h-14 w-full px-3  rounded-lg text-text text-base       file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 "
          )}
        />
        {type === "password" && (
          <div
            className="cursor-pointer hover:text-ring text-slate-300 hover:text-slate-400"
            onClick={() => setIsPasswordVisible((v) => !v)}
          >
            {isPasswordVisible ? "скрыть" : "показать"}
          </div>
        )}

        {rightContent && (
          <div className={cn("text-muted-foreground  text-right ml-auto")}>
            {rightContent}
          </div>
        )}
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
