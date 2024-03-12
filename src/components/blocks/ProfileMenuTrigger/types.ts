import { Dispatch } from "react";

export type User = {
  username: string;
  avatar?: string;
};

export type MenuItem = {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  href: string;
  action?: VoidFunction;
  description?: string;
};

export type MenuTriggerProps = {
  children: React.ReactNode;
  items: MenuItem[];
  logout: VoidFunction;
  user: User;
  open: boolean;
  onOpenChange: Dispatch<boolean>;
};
