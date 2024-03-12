"use client";
import React, { ReactNode, RefObject } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Drawer, DrawerContent, DrawerTrigger } from "../Drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../DropdownMenu";
import { Drawer as DrawerPrimitive } from "vaul";
import { useBreakpoint } from "@omsu-ru/hooks";

// Define a generic type for the responsive components
type ResponsiveComponentProps<T> = {
  isBelowLg: boolean;
  BelowLgComponent: any;
  AboveLgComponent: any;
};

// Generic Responsive Component
const ResponsiveComponent = <T extends {}>({
  isBelowLg,
  BelowLgComponent,
  AboveLgComponent,
  ...props
}: ResponsiveComponentProps<T>) => {
  return isBelowLg ? (
    <BelowLgComponent {...(props as T)} />
  ) : (
    <AboveLgComponent {...(props as T)} />
  );
};

// Responsive Menu Component
const ResponsiveMenu = (
  props: React.ComponentProps<typeof DrawerPrimitive.Root> &
    React.ComponentProps<typeof DropdownMenuPrimitive.Root>
) => {
  const { isBelowLg } = useBreakpoint("lg");
  return (
    <ResponsiveComponent
      isBelowLg={isBelowLg}
      BelowLgComponent={Drawer}
      AboveLgComponent={DropdownMenu}
      {...props}
    />
  );
};

// Responsive Menu Trigger Component
const ResponsiveMenuTrigger = (
  props: React.ComponentProps<typeof DrawerPrimitive.Trigger> &
    React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>
) => {
  const { isBelowLg } = useBreakpoint("lg");
  return (
    <ResponsiveComponent
      isBelowLg={isBelowLg}
      BelowLgComponent={DrawerTrigger}
      AboveLgComponent={DropdownMenuTrigger}
      {...props}
    />
  );
};

const ResponsiveMenuContent = (
  props: React.ComponentProps<typeof DrawerPrimitive.Content> &
    React.ComponentProps<typeof DropdownMenuPrimitive.Content>
) => {
  const { isBelowLg } = useBreakpoint("lg");
  return (
    <ResponsiveComponent
      isBelowLg={isBelowLg}
      BelowLgComponent={DrawerContent}
      AboveLgComponent={DropdownMenuContent}
      {...props}
    />
  );
};

export { ResponsiveMenu, ResponsiveMenuTrigger, ResponsiveMenuContent };
