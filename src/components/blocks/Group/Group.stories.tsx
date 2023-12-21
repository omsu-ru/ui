import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  Group,
  GroupContent,
  GroupDescription,
  GroupFooter,
  GroupHeader,
  GroupTitle,
} from ".";
import { useState } from "react";

const meta: Meta<typeof Group> = {
  component: Group,
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="max-w-md w-full">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Group>;

export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
    title: "Заполнение данных",
    description: "Остался последний шаг!",
    children: (
      <>
        <ul>
          <li>Индивидуальный план</li>
          <li>Журнал посещаемости</li>
          <li>Список ведомостей</li>
        </ul>
      </>
    ),
    footer: <></>,
  },
};
