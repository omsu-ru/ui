import React from "react";
import { Logo } from ".";
import { IdLogo as IdLogoSVG } from "@/icons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  component: Logo,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    text: "Аналитика",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    size: "default",
    className: "h-16",
    text: "Аналитика",
  },
};
