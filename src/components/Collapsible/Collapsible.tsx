"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React, { ReactNode, useState } from "react";

const CollapsibleRoot = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

interface TooltipProps
  extends Omit<
    React.ComponentPropsWithoutRef<
      typeof CollapsiblePrimitive.CollapsibleContent
    >,
    "content"
  > {
  trigger: string | React.ReactNode | ((open: { open: boolean }) => ReactNode);
  content: string | React.ReactNode;
}

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  TooltipProps
>(({ className, ...props }, ref) => {
  const [open, setOpen] = useState(false);
  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger>
        {typeof props.trigger === "function"
          ? props.trigger({ open })
          : props.trigger}
      </CollapsibleTrigger>
      <CollapsibleContent>{props.content}</CollapsibleContent>
    </CollapsibleRoot>
  );
});
Collapsible.displayName = "Collapsible";

export { Collapsible, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent };
