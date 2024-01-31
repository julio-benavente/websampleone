import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./index";

const meta: Meta<typeof HeroSection> = {
  title: "Pages/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
