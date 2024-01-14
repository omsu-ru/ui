import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarFallback>AЩ</AvatarFallback>
    </Avatar>
  ),
};

export const Image: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/tr43om.png" alt="@tr43om" />
      <AvatarFallback>AЩ</AvatarFallback>
    </Avatar>
  ),
};

export const ProfileFallback: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarFallback variant={"profile"}>AЩ</AvatarFallback>
    </Avatar>
  ),
};
