import { cn } from "@/utils";
import { HTMLAttributes, ReactNode, forwardRef } from "react";
import React from "react";
import { CheckIcon, XIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariant = cva(
  "w-12 h-12  rounded-xl  flex items-center justify-center  relative",
  {
    variants: {
      variant: {
        default:
          "group-hover:bg-background-content text-muted-foreground bg-muted group-data-[state=open]:bg-background-content",
        destructive:
          "group-hover:bg-background-content bg-destructive text-destructive-foreground",
        standalone: "bg-none",
      },
      size: {
        default: "w-12 h-12",
        sm: "h-8 w-8",
        lg: "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface IconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariant> {
  icon?: React.ComponentType<{ className?: string }>;
  text?: string;
  status?: "success" | "error";
}

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(iconVariant({ variant, size, className }))}>
      {props.icon && (
        <props.icon
          className={cn(
            " h-1/2 w-1/2",
            variant === "standalone" && "h-full w-full"
          )}
        />
      )}
      {props.text && <span className="text-sm">{props.text}</span>}
      {props.status && (
        <span
          className={cn(
            "h-1/2 w-1/2 rounded-full absolute bottom-0 right-0  border shadow-sm   bg-background-content grid place-content-center"
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
