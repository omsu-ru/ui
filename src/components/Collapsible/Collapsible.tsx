"use client";

import { cn } from "@/utils";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React, { ReactNode, useState } from "react";

const CollapsibleRoot = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

type ContentType =
  | string
  | React.ReactNode
  | ((state: {
      open: boolean;
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }) => ReactNode);

interface CollapsibleProps
  extends Omit<
    React.ComponentPropsWithoutRef<
      typeof CollapsiblePrimitive.CollapsibleContent
    >,
    "content"
  > {
  trigger: ContentType;
  content: ContentType;
}

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  CollapsibleProps
>(({ className, ...props }, ref) => {
  const [open, setOpen] = useState(false);
  const closeCollapsible = () => setOpen(false);
  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className={cn(className)}>
        {typeof props.trigger === "function"
          ? props.trigger({ open, setOpen })
          : props.trigger}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <>
          {typeof props.content === "function"
            ? props.content({ open, setOpen })
            : props.content}
        </>
      </CollapsibleContent>
    </CollapsibleRoot>
  );
});
Collapsible.displayName = "Collapsible";

export { Collapsible, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent };
