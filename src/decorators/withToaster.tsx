import { StoryProps, type Story as StoryType } from "@storybook/blocks";
import { StoryObj } from "@storybook/react";
import { Toaster } from "@/components";

const withToaster = (Story: any, context: any) => (
  <>
    <Story />
    <Toaster />
  </>
);

export { withToaster };
