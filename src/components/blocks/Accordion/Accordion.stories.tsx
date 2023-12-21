import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Group, Icon } from "..";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  parameters: {
    controls: { expanded: true },
    layout: "centered",
  },
  decorators: [
    (story) => (
      <Group title="Аккордеон" className="px-2">
        {story()}
      </Group>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Multiple: Story = {
  args: {
    type: "multiple",
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger title="Вопрос №1" leftContent={<Icon text="?" />} />
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger title="Вопрос №2" leftContent={<Icon text="?" />} />
          <AccordionContent>Option 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger title="Вопрос №3" leftContent={<Icon text="?" />} />
          <AccordionContent>Option 3</AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};

export const Single: Story = {
  args: {
    type: "single",
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger title="Вопрос №1" leftContent={<Icon text="?" />} />
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger title="Вопрос №2" leftContent={<Icon text="?" />} />
          <AccordionContent>Option 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger title="Вопрос №3" leftContent={<Icon text="?" />} />
          <AccordionContent>Option 3</AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};
