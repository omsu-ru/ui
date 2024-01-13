import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  component: Table,
  decorators: [(story) => <section className="bg-white">{story()}</section>],
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#fff" }],
    },
    controls: { expanded: true },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const professors = [
  {
    place: 1,
    name: "Иванов Иван Иванович",
    faculty: "ФЦТК",
    chair: "Кафедра информационных технологий и сетей",
  },
  {
    place: 2,
    name: "Иванов Иван Иванович",
    faculty: "ФЦТК",
    chair: "Кафедра информационных технологий и сетей",
  },
  {
    place: 3,
    name: "Иванов Иван Иванович",
    faculty: "ФЦТК",
    chair: "Кафедра информационных технологий и сетей",
  },
  {
    place: 4,
    name: "Иванов Иван Иванович",
    faculty: "ФЦТК",
    chair: "Кафедра информационных технологий и сетей",
  },
  {
    place: 5,
    name: "Иванов Иван Иванович",
    faculty: "ФЦТК",
    chair: "Кафедра информационных технологий и сетей",
  },
];

export const Default: Story = {
  args: {},
  render: () => (
    <Table>
      <Table>
        <TableCaption>Список лучших преподавателей</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Место</TableHead>
            <TableHead>ФИО</TableHead>
            <TableHead>Факультет</TableHead>
            <TableHead className="text-right">Кафедра</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {professors.map((invoice) => (
            <TableRow key={invoice.place}>
              <TableCell className="font-medium text-center">
                {invoice.place}
              </TableCell>
              <TableCell>{invoice.name}</TableCell>
              <TableCell>{invoice.faculty}</TableCell>
              <TableCell className="text-right">{invoice.chair}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Table>
  ),
};
