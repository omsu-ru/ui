import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Label } from ".";

import { Group } from "../../blocks";

const meta: Meta<typeof Label> = {
  component: Label,

  decorators: [
    (Story) => (
      <Group>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </Group>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
  args: {
    children: "Label",
    //👇 The args you need here will depend on your component
  },
};
