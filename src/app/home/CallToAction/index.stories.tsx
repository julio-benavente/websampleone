import type { Meta, StoryObj } from "@storybook/react";
import CallToActions from "./index";

const meta: Meta<typeof CallToActions> = {
  title: "Pages/Home/Call To Action",
  component: CallToActions,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CallToActions>;

export const Default: Story = {};
