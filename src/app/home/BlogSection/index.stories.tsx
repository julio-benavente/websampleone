import type { Meta, StoryObj } from "@storybook/react";
import BlogSection from "./index";

const meta: Meta<typeof BlogSection> = {
  title: "Pages/Home/Blog Section",
  component: BlogSection,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof BlogSection>;

export const Default: Story = {};
