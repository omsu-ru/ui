"use client";
import React, { ReactNode } from "react";

import { MenuItem, User } from "./types";
import { useBreakpoint } from "@omsu-ru/hooks";

import {
  DesktopMenuTrigger,
  MobileMenuTrigger,
  UserAvatar,
  UserCard,
} from "./parts";

type ProfileMenuTriggerProps = {
  user: User;
  items: MenuItem[];
  header?: ReactNode;
  variant: "dashboard" | "service";
  logout: VoidFunction;
};

const ProfileMenuTrigger = ({
  user,
  items,
  variant,
  logout,
  ...props
}: ProfileMenuTriggerProps) => {
  const [open, setOpen] = React.useState(false);
  const menuProps = { items, open, onOpenChange: setOpen, logout, user };

  const { isAboveMd } = useBreakpoint("md");

  return (
    <React.Fragment>
      {isAboveMd ? (
        <DesktopMenuTrigger {...menuProps}>
          {variant === "dashboard" ? (
            <UserCard user={user} />
          ) : (
            <UserAvatar user={user} />
          )}
        </DesktopMenuTrigger>
      ) : (
        <MobileMenuTrigger {...menuProps}>
          {variant === "dashboard" ? (
            <UserCard user={user} />
          ) : (
            <UserAvatar user={user} />
          )}
        </MobileMenuTrigger>
      )}
    </React.Fragment>
  );
};

export { ProfileMenuTrigger };
