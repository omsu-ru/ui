import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Building, Star, User } from "lucide-react";
import { Step, Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  decorators: [(story) => <>{story()}</>],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Step 1", icon: User },
  { label: "Step 2", icon: Building },
  { label: "Step 3", icon: Star },
];

export const Default: Story = {
  args: {},
  render: () => (
    <Stepper initialStep={1} steps={steps}>
      {steps.map((stepProps, index) => {
        return <Step key={stepProps.label} {...stepProps}></Step>;
      })}
    </Stepper>
  ),
};

export const Vertical: Story = {
  args: {},
  render: () => (
    <Stepper initialStep={1} steps={steps} orientation="vertical">
      {steps.map((stepProps, index) => {
        return <Step key={stepProps.label} {...stepProps}></Step>;
      })}
    </Stepper>
  ),
};

export const Line: Story = {
  args: {},
  render: () => (
    <Stepper initialStep={1} steps={steps} variant="line">
      {steps.map((stepProps, index) => {
        return <Step key={stepProps.label} {...stepProps}></Step>;
      })}
    </Stepper>
  ),
};
