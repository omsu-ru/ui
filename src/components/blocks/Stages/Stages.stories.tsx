import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Building, Star, User } from "lucide-react";
import { Stage, Stages } from "./Stages";

const meta: Meta<typeof Stages> = {
  component: Stages,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Stages>;

const stages = [
  { label: "Stage 1", icon: User },
  { label: "Stage 2", icon: Building },
  { label: "Stage 3", icon: Star },
];

export const Default: Story = {
  args: {},
  render: () => (
    <Stages initialStage={1} stages={stages}>
      {stages.map((stageProps, index) => {
        return <Stage key={stageProps.label} {...stageProps}></Stage>;
      })}
    </Stages>
  ),
};

export const Vertical: Story = {
  args: {},
  render: () => (
    <Stages initialStage={1} stages={stages} orientation="vertical">
      {stages.map((stageProps, index) => {
        return <Stage key={stageProps.label} {...stageProps}></Stage>;
      })}
    </Stages>
  ),
};

export const Line: Story = {
  args: {},
  render: () => (
    <Stages initialStage={1} stages={stages} variant="line">
      {stages.map((stageProps, index) => {
        return <Stage key={stageProps.label} {...stageProps}></Stage>;
      })}
    </Stages>
  ),
};
