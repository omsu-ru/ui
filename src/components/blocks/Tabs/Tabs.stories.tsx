import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Group, GroupHeader, GroupRoot, GroupTitle } from "../Group";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  decorators: [(story) => <>{story()}</>],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
  render: () => (
    <Tabs className="w-[400px]" defaultValue="1">
      <TabsList className="w-full">
        <TabsTrigger value="1">Основное</TabsTrigger>
        <TabsTrigger value="2">Совместительство</TabsTrigger>
      </TabsList>
      <TabsContent value="1">
        <GroupRoot>
          <GroupHeader>
            <GroupTitle>Основное</GroupTitle>
          </GroupHeader>
        </GroupRoot>
      </TabsContent>
      <TabsContent value="2">
        {" "}
        <GroupRoot>
          <GroupHeader>
            <GroupTitle>Совместительство</GroupTitle>
          </GroupHeader>
        </GroupRoot>
      </TabsContent>
    </Tabs>
  ),
};
