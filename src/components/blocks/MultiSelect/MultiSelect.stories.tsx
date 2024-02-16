import React from "react";
import { MultiSelect } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const OPTIONS = [
  { label: "nextjs", value: "Nextjs" },
  { label: "React", value: "react" },
  { label: "Remix", value: "remix" },
  { label: "Vite", value: "vite" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
  { label: "Ember", value: "ember", disable: true },
  { label: "Gatsby", value: "gatsby", disable: true },
  { label: "Astro", value: "astro" },
];

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  args: {
    selectFirstItem: false,
    defaultOptions: OPTIONS,
    hidePlaceholderWhenSelected: true,
    placeholder: "Выберите любимые фреймворки",
    emptyIndicator: (
      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
        Ничего не найдено
      </p>
    ),
  },
};
