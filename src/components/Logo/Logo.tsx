import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const logoVariants = cva("", {
  variants: {
    variant: {
      default: "text-black [&_path]:fill-white",
      muted: "text-muted [&_path]:fill-text-muted-foreground",
    },
    size: {
      default: "w-16 h-16",
      sm: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface LogoProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof logoVariants> {
  icon: React.ComponentType<{ className?: string }>;
}

const Logo = ({ variant, size, className, ...props }: LogoProps) => {
  return (
    <props.icon
      {...props}
      className={cn(logoVariants({ variant, size, className }))}
    />
  );
};

export { Logo };
