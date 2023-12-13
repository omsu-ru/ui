import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { List } from ".";
import * as LisItemStories from "../ListItem/ListItem.stories";

import { Group } from "../Group";
import { BriefcaseIcon, ClipboardListIcon, ZapIcon } from "lucide-react";
import { Icon } from "../Icon";

const meta: Meta<typeof List> = {
  component: List,
  decorators: [(story) => <Group className="max-w-lg m-auto">{story()}</Group>],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: [
      {
        leftIcon: <Icon icon={ZapIcon} />,
        title: "Успеваемость",
        description: "Посещаемость и оценки",
      },
      {
        leftIcon: <Icon icon={BriefcaseIcon} />,
        title: "Портфолио",
        description: "Ваши работы и публикации",
      },
      {
        leftIcon: <Icon icon={ClipboardListIcon} />,
        title: "Анкеты",
        description: "Список анкет доступных для заполнения",
      },
    ],
    //👇 The args you need here will depend on your component
  },
};
