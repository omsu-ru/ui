import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Label } from "@/components/form";

import { Input } from ".";
import { useState } from "react";
import { Group } from "@/components";

const meta: Meta<typeof Input> = {
  component: Input,

  decorators: [
    (Story) => (
      <Group className="container w-[500px]">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Group>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
    placeholder: "Логин или email",
  },
};

export const WithLabel: Story = {
  decorators: [
    (Story) => (
      <>
        <Label htmlFor="story">Логин</Label>
        <Story args={{ id: "story" }} />
      </>
    ),
  ],
  args: {
    //👇 The args you need here will depend on your component
  },
};

export const WithRightContent: Story = {
  args: {
    rightContent: "часов",
    //👇 The args you need here will depend on your component
  },
};
