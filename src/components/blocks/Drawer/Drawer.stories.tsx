import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../buttons";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {},
  render: () => (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent onOverlayClick={() => console.log("overlay click")}>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
