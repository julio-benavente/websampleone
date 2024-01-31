import type { Meta, StoryObj } from "@storybook/react";
import InfiniteLooper from "./index";

const meta: Meta<typeof InfiniteLooper> = {
  title: "Components/Infinite Looper",
  component: InfiniteLooper,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof InfiniteLooper>;

export const Default: Story = {
  render: (args) => {
    console.log(args);
    return <InfiniteLooper {...args} />;
  },
};

export const DropLoop: Story = {};
DropLoop.args = {
  variant: "drop",
};

DropLoop.decorators = [
  (Story) => {
    return (
      <div className="w-20 min-h-96">
        <Story />
      </div>
    );
  },
];
