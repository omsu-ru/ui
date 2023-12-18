import React from "react";
import { Logo as LogoSvg, OmsuThick } from "@/icons";

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
    VariantProps<typeof logoVariants> {}

const Logo = ({ variant, size, className, ...props }: LogoProps) => {
  return (
    <LogoSvg
      {...props}
      className={cn(logoVariants({ variant, size, className }))}
    />
  );
};

export { Logo };
