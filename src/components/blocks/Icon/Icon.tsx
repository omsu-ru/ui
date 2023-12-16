import { cn } from "@/utils";
import { HTMLAttributes, ReactNode, forwardRef } from "react";
import React from "react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<{ className?: string }>;
  text?: string;
}

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-background-content group-data-[state=open]:bg-background-content",
        className
      )}
    >
      {props.icon && <props.icon className="text-muted-foreground h-6 w-6 " />}
      {props.text && <span className="text-sm">{props.text}</span>}
    </div>
  )
);

Icon.displayName = "Icon";

export { Icon };
