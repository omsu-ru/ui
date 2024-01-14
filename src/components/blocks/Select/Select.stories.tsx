import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  component: Select,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Select>;

const steps = [
  {
    title: "1-ый этап",
    text: "Пустая форма",
    value: "1",
  },
  {
    title: "2-ой этап",
    text: "Заполнение плана преподавателем",
    value: "2",
  },
  {
    title: "3-ий этап",
    text: "Рассмотрение заведующим кафедрой",
    value: "3",
  },
  {
    title: "4-ый этап",
    text: "Рассмотрение деканом",
    value: "4",
  },
  {
    title: "Последний этап",
    text: "Проставление фактических значений",
    value: "5",
  },
];

export const Default: Story = {
  args: {},
  render: () => (
    <Select>
      <SelectTrigger className="min-w-[280px] w-max">
        <SelectValue placeholder="Выберите этап" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {steps.map((step) => (
            <SelectItem value={step.value}>
              <div className="grid  justify-items-start">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
