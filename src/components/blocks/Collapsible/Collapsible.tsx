"use client";

import { cn } from "@/utils";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React, { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import { ListItem } from "../..";

const CollapsibleRoot = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

type ContentType =
  | string
  | React.ReactNode
  | ((state: { open: boolean }) => ReactNode);

type CollapsibleProps = Omit<
  React.ComponentPropsWithoutRef<
    typeof CollapsiblePrimitive.CollapsibleContent
  >,
  "content"
> &
  Omit<ComponentPropsWithoutRef<typeof ListItem>, "content"> & {
    children: ContentType;
  };

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  CollapsibleProps
>(({ className, children, ...props }, ref) => {
  const [open, setOpen] = useState(false);
  return (
    <CollapsibleRoot open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className={cn(className, "group")} asChild>
        <ListItem {...props} />
      </CollapsibleTrigger>
      <CollapsibleContent ref={ref}>{children}</CollapsibleContent>
    </CollapsibleRoot>
  );
});
Collapsible.displayName = "Collapsible";

export { Collapsible, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent };
