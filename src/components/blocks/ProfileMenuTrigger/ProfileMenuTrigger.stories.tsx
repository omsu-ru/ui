import React from "react";
import { ProfileMenuTrigger } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { HeartIcon } from "lucide-react";

const meta: Meta<typeof ProfileMenuTrigger> = {
  component: ProfileMenuTrigger,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof ProfileMenuTrigger>;

export const Default: Story = {
  args: {
    variant: "dashboard",
    items: [{ href: "/", title: "Избранное", icon: HeartIcon }],
    user: { username: "Иванов Иван" },
  },
};
export const Service: Story = {
  args: {
    variant: "service",
    items: [{ href: "/", title: "Избранное", icon: HeartIcon }],
    user: { username: "Иванов Иван" },
  },
};
