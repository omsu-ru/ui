import { cn } from "@/utils";
import { HTMLAttributes, ReactNode, forwardRef } from "react";
import React from "react";
import { CheckIcon, XIcon } from "lucide-react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<{ className?: string }>;
  text?: string;
  status?: "success" | "error";
}

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-12 h-12 min-w-[55px] min-h-[55px] rounded-xl bg-muted flex items-center justify-center group-hover:bg-background-content group-data-[state=open]:bg-background-content relative",
        className
      )}
    >
      {props.icon && <props.icon className="text-muted-foreground h-6 w-6 " />}
      {props.text && <span className="text-sm">{props.text}</span>}
      {props.status && (
        <span
          className={cn(
            "w-6 h-6 = rounded-full absolute bottom-0 right-0  border shadow-sm   bg-background-content grid place-content-center"
          )}
        >
          {props.status === "success" && (
            <CheckIcon className="h-4 w-4 stroke-1" />
          )}
          {props.status === "error" && <XIcon className="h-4 w-4 stroke-1" />}
        </span>
      )}
    </div>
  )
);

Icon.displayName = "Icon";

export { Icon };
