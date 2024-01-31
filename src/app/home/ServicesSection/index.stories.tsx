import type { Meta, StoryObj } from "@storybook/react";
import ServicesSection from "./index";

const meta: Meta<typeof ServicesSection> = {
  title: "Pages/Home/Services Section",
  component: ServicesSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ServicesSection>;

export const Default: Story = {};
