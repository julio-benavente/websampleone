import type { Meta, StoryObj } from "@storybook/react";
import TeamSection from "./index";

const meta: Meta<typeof TeamSection> = {
  title: "Pages/Home/Team Section",
  component: TeamSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof TeamSection>;

export const Default: Story = {};
