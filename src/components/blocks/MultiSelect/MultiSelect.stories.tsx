import React, { useState } from "react";
import { MultiSelect } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { LayoutIcon, TerminalIcon } from "lucide-react";

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
    options: OPTIONS,
    className: "w-[500px]",
    label: (
      <p className="flex items-center gap-2">
        <TerminalIcon className="w-5 h-5" /> Ваши любимые фреймворки:
      </p>
    ),
  },
  render(args) {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <MultiSelect
        {...args}
        selected={selected}
        onChange={setSelected}
        placeholder="Выберите ваши любимые фреймворки"
      />
    );
  },
};
